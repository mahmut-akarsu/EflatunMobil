const express = require('express');
const { Therapy, Section, Step } = require('../models'); // Therapy, Section, and Step modellerini içe aktar
const router = express.Router();

// Create a new therapy
router.post('/', async (req, res) => {
    try {
        const therapy = await Therapy.create(req.body, {
            include: [{
                model: Section,
                as: 'sections',
                include: [{
                    model: Step,
                    as: 'steps'
                }]
            }]
        });
        res.status(201).json(therapy);
    } catch (error) {
        res.status(400).json({ error: 'Failed to create therapy' });
    }
});

// Get all therapies with sections and steps
router.get('/', async (req, res) => {
    try {
        const therapies = await Therapy.findAll({
            include: {
                model: Section,
                as: 'sections',
                include: {
                    model: Step,
                    as: 'steps'
                }
            }
        });
        res.json(therapies);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve therapies' });
    }
});

// Get a therapy by ID with related sections and steps
router.get('/:id', async (req, res) => {
    try {
        const therapy = await Therapy.findByPk(req.params.id, {
            include: {
                model: Section,
                as: 'sections',
                include: {
                    model: Step,
                    as: 'steps'
                }
            }
        });
        if (therapy) {
            res.json(therapy);
        } else {
            res.status(404).json({ error: 'Therapy not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve therapy' });
    }
});

// Update a therapy by ID
router.put('/:id', async (req, res) => {
    try {
        const [updated] = await Therapy.update(req.body, {
            where: { id: req.params.id }
        });
        if (updated) {
            const updatedTherapy = await Therapy.findByPk(req.params.id, {
                include: {
                    model: Section,
                    as: 'sections',
                    include: {
                        model: Step,
                        as: 'steps'
                    }
                }
            });
            res.json(updatedTherapy);
        } else {
            res.status(404).json({ error: 'Therapy not found' });
        }
    } catch (error) {
        res.status(400).json({ error: 'Failed to update therapy' });
    }
});

// Delete a therapy by ID
router.delete('/:id', async (req, res) => {
    try {
        const deleted = await Therapy.destroy({
            where: { id: req.params.id }
        });
        if (deleted) {
            res.status(204).end();
        } else {
            res.status(404).json({ error: 'Therapy not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete therapy' });
    }
});

module.exports = router;