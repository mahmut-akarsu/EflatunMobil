const express = require('express');
const { Section } = require('../models');
const router = express.Router();

// Create a new section
router.post('/', async (req, res) => {
    try {
        const section = await Section.create(req.body);
        res.status(201).json(section);
    } catch (error) {
        res.status(400).json({ error: 'Failed to create section' });
    }
});

// Get all sections
router.get('/', async (req, res) => {
    try {
        const sections = await Section.findAll();
        res.json(sections);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve sections' });
    }
});

// Get a section by ID
router.get('/:id', async (req, res) => {
    try {
        const section = await Section.findByPk(req.params.id);
        if (section) {
            res.json(section);
        } else {
            res.status(404).json({ error: 'Section not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve section' });
    }
});

// Update a section by ID
router.put('/:id', async (req, res) => {
    try {
        const [updated] = await Section.update(req.body, {
            where: { id: req.params.id }
        });
        if (updated) {
            const updatedSection = await Section.findByPk(req.params.id);
            res.json(updatedSection);
        } else {
            res.status(404).json({ error: 'Section not found' });
        }
    } catch (error) {
        res.status(400).json({ error: 'Failed to update section' });
    }
});

// Delete a section by ID
router.delete('/:id', async (req, res) => {
    try {
        const deleted = await Section.destroy({
            where: { id: req.params.id }
        });
        if (deleted) {
            res.status(204).end();
        } else {
            res.status(404).json({ error: 'Section not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete section' });
    }
});

module.exports = router;
