
const mongoose = require('mongoose');

const submissionSchema = mongoose.Schema({
  id: Number,
  email: String,
  type: String,
  created: { type: Date, default: Date.now }
});

const Submission = mongoose.model('Submission', submissionSchema);

module.exports = Submission;