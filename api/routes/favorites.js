const express = require('express');
const router = express.Router();
const { Favorite } = require('../models');
const jwt = require('jsonwebtoken');

// Favorilere Ekle
router.post('/add', async (req, res) => {
    const { token, contentId, contentType } = req.body;

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const userId = decoded.id;

        // Eğer favori zaten varsa, ekleme işlemi yapma
        const [favorite, created] = await Favorite.findOrCreate({
            where: { userId, contentId, contentType },
        });

        if (!created) {
            return res.status(409).json({ message: 'Already in favorites' });
        }

        res.status(201).json({ message: 'Added to favorites' });
    } catch (error) {
        res.status(500).json({ error: 'Error adding to favorites' });
    }
});

// Favorilerden Çıkar
router.post('/remove', async (req, res) => {
    const { token, contentId, contentType } = req.body;

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const userId = decoded.id;

        const rowsDeleted = await Favorite.destroy({
            where: { userId, contentId, contentType },
        });

        if (rowsDeleted === 0) {
            return res.status(404).json({ message: 'Favorite not found' });
        }

        res.status(200).json({ message: 'Removed from favorites' });
    } catch (error) {
        res.status(500).json({ error: 'Error removing from favorites' });
    }
});

// Kullanıcının Favorilerini Getir
router.get('/list', async (req, res) => {
    const { token } = req.query;

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const userId = decoded.id;

        const favorites = await Favorite.findAll({
            where: { userId },
        });

        res.status(200).json({ favorites });
    } catch (error) {
        res.status(500).json({ error: 'Error fetching favorites' });
    }
});

module.exports = router;
