const express = require('express');
const { Exercise } = require('../models');
const router = express.Router();

// Create a new exercise
router.post('/', async (req, res) => {
    try {
        const exercise = await Exercise.create(req.body);
        res.status(201).json(exercise);
    } catch (error) {
        res.status(400).json({ error: 'Failed to create exercise' });
    }
});

// Get all exercises
router.get('/', async (req, res) => {
    try {
        const exercises = await Exercise.findAll();
        res.json(exercises);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve exercises' });
    }
});

// Get an exercise by ID
router.get('/:id', async (req, res) => {
    try {
        const exercise = await Exercise.findByPk(req.params.id);
        if (exercise) {
            res.json(exercise);
        } else {
            res.status(404).json({ error: 'Exercise not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve exercise' });
    }
});

// Update an exercise by ID
router.put('/:id', async (req, res) => {
    try {
        const [updated] = await Exercise.update(req.body, {
            where: { id: req.params.id }
        });
        if (updated) {
            const updatedExercise = await Exercise.findByPk(req.params.id);
            res.json(updatedExercise);
        } else {
            res.status(404).json({ error: 'Exercise not found' });
        }
    } catch (error) {
        res.status(400).json({ error: 'Failed to update exercise' });
    }
});

// Delete an exercise by ID
router.delete('/:id', async (req, res) => {
    try {
        const deleted = await Exercise.destroy({
            where: { id: req.params.id }
        });
        if (deleted) {
            res.status(204).end();
        } else {
            res.status(404).json({ error: 'Exercise not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete exercise' });
    }
});

module.exports = router;
