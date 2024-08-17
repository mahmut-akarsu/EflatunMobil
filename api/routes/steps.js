const express = require('express');
const { Step } = require('../models');
const router = express.Router();

// Create a new step
router.post('/', async (req, res) => {
    try {
        const step = await Step.create(req.body);
        res.status(201).json(step);
    } catch (error) {
        res.status(400).json({ error: 'Failed to create step' });
    }
});

// Get all steps
router.get('/', async (req, res) => {
    try {
        const steps = await Step.findAll();
        res.json(steps);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve steps' });
    }
});

// Get a step by ID
router.get('/:id', async (req, res) => {
    try {
        const step = await Step.findByPk(req.params.id);
        if (step) {
            res.json(step);
        } else {
            res.status(404).json({ error: 'Step not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve step' });
    }
});

// Update a step by ID
router.put('/:id', async (req, res) => {
    try {
        const [updated] = await Step.update(req.body, {
            where: { id: req.params.id }
        });
        if (updated) {
            const updatedStep = await Step.findByPk(req.params.id);
            res.json(updatedStep);
        } else {
            res.status(404).json({ error: 'Step not found' });
        }
    } catch (error) {
        res.status(400).json({ error: 'Failed to update step' });
    }
});

// Delete a step by ID
router.delete('/:id', async (req, res) => {
    try {
        const deleted = await Step.destroy({
            where: { id: req.params.id }
        });
        if (deleted) {
            res.status(204).end();
        } else {
            res.status(404).json({ error: 'Step not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete step' });
    }
});

module.exports = router;
