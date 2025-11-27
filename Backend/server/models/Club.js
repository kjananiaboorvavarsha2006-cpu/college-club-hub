const mongoose = require('mongoose');

const ClubSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  president: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  membersCount: { type: Number, default: 0 },
}, { timestamps: true });

module.exports = mongoose.model('Club', ClubSchema);

