const db = require('./submissionModel');
const mongoose = require('mongoose');

const submissionSchema = mongoose.Schema({
  id: Number,
  email: String,
  type: String
});

const Submission = mongoose.model('Submission', submissionSchema);

module.exports = Submission;