const express = require('express');
const { Podcast } = require('../models');
const router = express.Router();

// Create a new podcast
router.post('/', async (req, res) => {
    try {
        const podcast = await Podcast.create(req.body);
        res.status(201).json(podcast);
    } catch (error) {
        res.status(400).json({ error: 'Failed to create podcast' });
    }
});

// Get all podcasts
router.get('/', async (req, res) => {
    try {
        const podcasts = await Podcast.findAll();
        res.json(podcasts);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve podcasts' });
    }
});

// Get a podcast by ID
router.get('/:id', async (req, res) => {
    try {
        const podcast = await Podcast.findByPk(req.params.id);
        if (podcast) {
            res.json(podcast);
        } else {
            res.status(404).json({ error: 'Podcast not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve podcast' });
    }
});

// Update a podcast by ID
router.put('/:id', async (req, res) => {
    try {
        const [updated] = await Podcast.update(req.body, {
            where: { id: req.params.id }
        });
        if (updated) {
            const updatedPodcast = await Podcast.findByPk(req.params.id);
            res.json(updatedPodcast);
        } else {
            res.status(404).json({ error: 'Podcast not found' });
        }
    } catch (error) {
        res.status(400).json({ error: 'Failed to update podcast' });
    }
});

// Delete a podcast by ID
router.delete('/:id', async (req, res) => {
    try {
        const deleted = await Podcast.destroy({
            where: { id: req.params.id }
        });
        if (deleted) {
            res.status(204).end();
        } else {
            res.status(404).json({ error: 'Podcast not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete podcast' });
    }
});

module.exports = router;
