const mongoose = require('mongoose');

const modalClicksSchema = mongoose.Schema({
  id: Number,
  type: String,
  created: { type: Date, default: Date.now }
});

const ModalClicks = mongoose.model('ModalClicks', modalClicksSchema);

module.exports = ModalClicks;