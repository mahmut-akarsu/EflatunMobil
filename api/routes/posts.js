const express = require('express');
const { Post } = require('../models');
const router = express.Router();

// Create a new post
router.post('/', async (req, res) => {
    try {
        const post = await Post.create(req.body);
        res.status(201).json(post);
    } catch (error) {
        res.status(400).json({ error: 'Failed to create post' });
    }
});

// Get all posts
router.get('/', async (req, res) => {
    try {
        const posts = await Post.findAll();
        res.json(posts);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve posts' });
    }
});

// Get a post by ID
router.get('/:id', async (req, res) => {
    try {
        const post = await Post.findByPk(req.params.id);
        if (post) {
            res.json(post);
        } else {
            res.status(404).json({ error: 'Post not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve post' });
    }
});

// Update a post by ID
router.put('/:id', async (req, res) => {
    try {
        const [updated] = await Post.update(req.body, {
            where: { id: req.params.id }
        });
        if (updated) {
            const updatedPost = await Post.findByPk(req.params.id);
            res.json(updatedPost);
        } else {
            res.status(404).json({ error: 'Post not found' });
        }
    } catch (error) {
        res.status(400).json({ error: 'Failed to update post' });
    }
});

// Delete a post by ID
router.delete('/:id', async (req, res) => {
    try {
        const deleted = await Post.destroy({
            where: { id: req.params.id }
        });
        if (deleted) {
            res.status(204).end();
        } else {
            res.status(404).json({ error: 'Post not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete post' });
    }
});

module.exports = router;
