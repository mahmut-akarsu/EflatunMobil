require('dotenv').config({ path: 'C:/Users/Mahmut/Desktop/Eflatun Uygulaması/api/.env' });

const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const { User } = require('../models');
const Response = require('../lib/Response');
const Enum = require('../lib/Enum');
const CustomError = require('../lib/CustomError');

// Kullanıcı Kaydı
router.post('/register', async (req, res) => {
    const { email, password } = req.body;
    try {
        const hasUser = await User.findOne({ where: { email } });

        if (hasUser) {
            return res.status(Enum.HTTP_CODES.CONFLICT).json({ error: "A user with this email address already exists." });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({ email, password: hashedPassword, isEnabled: false });

        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'E-posta Doğrulama',
            text: `Doğrulama için tıklayın: ${process.env.BASE_URL}/auth/verify-email?token=${token}`,
        };

        await transporter.sendMail(mailOptions);

        res.status(Enum.HTTP_CODES.CREATED).json({ message: "Registration successful, please verify your email." });
    } catch (err) {
        res.status(Enum.HTTP_CODES.INTERNAL_SERVER_ERROR).json({ error: "Internal Server Error" });
    }
});

// Giriş
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ where: { email } });

        if (!user) {
            throw new CustomError(Enum.HTTP_CODES.BAD_REQUEST, "Login error", "Incorrect email or password.");
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            throw new CustomError(Enum.HTTP_CODES.BAD_REQUEST, "Login error", "Incorrect email or password.");
        }

        if (!user.isEnabled) {
            throw new CustomError(Enum.HTTP_CODES.BAD_REQUEST, "Verification error", "Please verify your account.");
        }

        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.json(Response.successResponse({ token }));
    } catch (err) {
        let errorResponse = Response.errorResponse(err);
        res.status(errorResponse.code).json(errorResponse);
    }
});

// E-posta Doğrulama
router.get('/verify-email', async (req, res) => {
    const { token } = req.query;

    if (!token) {
        return res.status(Enum.HTTP_CODES.BAD_REQUEST).json({ error: "Invalid or missing verification token." });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const userId = decoded.id;

        const user = await User.findOne({ where: { id: userId } });

        if (!user) {
            throw new CustomError(Enum.HTTP_CODES.NOT_FOUND, "Verification error", "User not found.");
        }

        if (user.isEnabled) {
            return res.status(Enum.HTTP_CODES.OK).json(Response.successResponse({ message: "Your account is already verified." }));
        }

        user.isEnabled = true;
        await user.save();

        res.status(Enum.HTTP_CODES.OK).json(Response.successResponse({ message: "Your account has been successfully verified." }));
    } catch (err) {
        let errorResponse = Response.errorResponse(err);
        res.status(errorResponse.code).json(errorResponse);
    }
});

module.exports = router;
