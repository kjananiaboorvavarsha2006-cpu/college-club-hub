const express = require('express');
const router = express.Router();
const Club = require('../models/Club');
const authMiddleware = require('../middleware/authMiddleware');

// Create a club
router.post('/', authMiddleware, async (req, res) => {
  try {
    const { name, description, president } = req.body;
    const club = new Club({ name, description, president });
    await club.save();
    res.json(club);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

// Get all clubs
router.get('/', async (req, res) => {
  try {
    const clubs = await Club.find().populate('president', 'username email');
    res.json(clubs);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

// Get club by ID
router.get('/:id', async (req, res) => {
  try {
    const club = await Club.findById(req.params.id).populate('president', 'username email');
    if (!club) return res.status(404).json({ message: 'Club not found' });
    res.json(club);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

// Update club
router.put('/:id', authMiddleware, async (req, res) => {
  try {
    const club = await Club.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!club) return res.status(404).json({ message: 'Club not found' });
    res.json(club);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

// Delete club
router.delete('/:id', authMiddleware, async (req, res) => {
  try {
    const club = await Club.findByIdAndDelete(req.params.id);
    if (!club) return res.status(404).json({ message: 'Club not found' });
    res.json({ message: 'Club deleted' });
  } catch (err) {
    res.status(500).send('Server error');
  }
});

module.exports = router;
