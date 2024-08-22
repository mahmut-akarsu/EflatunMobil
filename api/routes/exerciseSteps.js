const express = require('express');
const router = express.Router();
const { ExerciseStep } = require('../models');

// Belirli bir Exercise'e ait tüm adımları getir
router.get('/exercise/:exerciseId', async (req, res) => {
    try {
        const steps = await ExerciseStep.findAll({
            where: { exerciseId: req.params.exerciseId }
        });
        res.json(steps);
    } catch (error) {
        res.status(500).json({ error: 'Adımlar getirilemedi' });
    }
});

// Yeni bir adım oluştur
router.post('/', async (req, res) => {
    try {
        const step = await ExerciseStep.create(req.body);
        res.status(201).json(step);
    } catch (error) {
        res.status(500).json({ error: 'Adım oluşturulamadı' });
    }
});

// Bir adımı güncelle
router.put('/:id', async (req, res) => {
    try {
        const step = await ExerciseStep.findByPk(req.params.id);
        if (step) {
            await step.update(req.body);
            res.json(step);
        } else {
            res.status(404).json({ error: 'Adım bulunamadı' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Adım güncellenemedi' });
    }
});

// Bir adımı sil
router.delete('/:id', async (req, res) => {
    try {
        const step = await ExerciseStep.findByPk(req.params.id);
        if (step) {
            await step.destroy();
            res.json({ message: 'Adım silindi' });
        } else {
            res.status(404).json({ error: 'Adım bulunamadı' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Adım silinemedi' });
    }
});

module.exports = router;