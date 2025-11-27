const express = require('express');
const router = express.Router();
const Event = require('../models/Event');
const authMiddleware = require('../middleware/authMiddleware');

// Create event
router.post('/', authMiddleware, async (req, res) => {
  try {
    const event = new Event(req.body);
    await event.save();
    res.json(event);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

// Get events by club
router.get('/club/:clubId', async (req, res) => {
  try {
    const events = await Event.find({ club: req.params.clubId }).populate('createdBy', 'username email');
    res.json(events);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

// Update event
router.put('/:id', authMiddleware, async (req, res) => {
  try {
    const event = await Event.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!event) return res.status(404).json({ message: 'Event not found' });
    res.json(event);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

// Delete event
router.delete('/:id', authMiddleware, async (req, res) => {
  try {
    const event = await Event.findByIdAndDelete(req.params.id);
    if (!event) return res.status(404).json({ message: 'Event not found' });
    res.json({ message: 'Event deleted' });
  } catch (err) {
    res.status(500).send('Server error');
  }
});

module.exports = router;
