const express = require('express');
const router = express.Router();
const { Exercise, ExerciseStep, sequelize } = require('../models');

// Tüm egzersizleri getir
router.get('/', async (req, res) => {
    try {
        const exercises = await Exercise.findAll({
            include: [{ model: ExerciseStep, as: 'exerciseSteps' }],
        });
        res.json(exercises);
    } catch (error) {
        res.status(500).json({ error: 'Egzersizler getirilemedi' });
    }
});

// Belirli bir egzersizi getir
router.get('/:id', async (req, res) => {
    try {
        const exercise = await Exercise.findByPk(req.params.id, {
            include: [{ model: ExerciseStep, as: 'exerciseSteps' }],
        });
        if (exercise) {
            res.json(exercise);
        } else {
            res.status(404).json({ error: 'Egzersiz bulunamadı' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Egzersiz getirilemedi' });
    }
});

// Yeni bir egzersiz oluştur
router.post('/', async (req, res) => {
    const transaction = await sequelize.transaction();
    try {
        // Create the exercise
        const { name, description, cardImageUrl, imageUrl, steps } = req.body;
        const exercise = await Exercise.create({
            name,
            description,
            cardImageUrl,
            imageUrl
        }, { transaction });

        // Create associated steps
        if (steps && steps.length > 0) {
            const stepsWithExerciseId = steps.map(step => ({
                ...step,
                exerciseId: exercise.id
            }));
            await ExerciseStep.bulkCreate(stepsWithExerciseId, { transaction });
        }

        await transaction.commit();
        res.status(201).json(exercise);
    } catch (error) {
        await transaction.rollback();
        res.status(400).json({ error: 'Egzersiz ve adımlar oluşturulamadı' });
    }
});

// Bir egzersizi güncelle
router.put('/:id', async (req, res) => {
    try {
        const exercise = await Exercise.findByPk(req.params.id);
        if (exercise) {
            await exercise.update(req.body);
            res.json(exercise);
        } else {
            res.status(404).json({ error: 'Egzersiz bulunamadı' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Egzersiz güncellenemedi' });
    }
});

// Bir egzersizi sil
router.delete('/:id', async (req, res) => {
    try {
        const exercise = await Exercise.findByPk(req.params.id);
        if (exercise) {
            await exercise.destroy();
            res.json({ message: 'Egzersiz silindi' });
        } else {
            res.status(404).json({ error: 'Egzersiz bulunamadı' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Egzersiz silinemedi' });
    }
});

module.exports = router;
