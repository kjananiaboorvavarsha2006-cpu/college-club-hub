const mongoose = require('mongoose');

const MemberSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  club: { type: mongoose.Schema.Types.ObjectId, ref: 'Club', required: true },
  joinedAt: { type: Date, default: Date.now },
  role: { type: String, enum: ['member', 'secretary', 'treasurer'], default: 'member' },
});

module.exports = mongoose.model('Member', MemberSchema);
