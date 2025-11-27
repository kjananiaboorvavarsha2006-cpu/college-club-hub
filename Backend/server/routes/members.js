const express = require('express');
const router = express.Router();
const Member = require('../models/Member');
const authMiddleware = require('../middleware/authMiddleware');

// Add member to club
router.post('/', authMiddleware, async (req, res) => {
  try {
    const { user, club, role } = req.body;
    const member = new Member({ user, club, role });
    await member.save();
    res.json(member);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

// List members of a club
router.get('/club/:clubId', async (req, res) => {
  try {
    const members = await Member.find({ club: req.params.clubId }).populate('user', 'username email');
    res.json(members);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

// Remove member
router.delete('/:id', authMiddleware, async (req, res) => {
  try {
    const member = await Member.findByIdAndDelete(req.params.id);
    if (!member) return res.status(404).json({ message: 'Member not found' });
    res.json({ message: 'Member removed' });
  } catch (err) {
    res.status(500).send('Server error');
  }
});

module.exports = router;
