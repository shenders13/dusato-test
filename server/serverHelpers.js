const Submission = require('../db/submissionModel.js');

const createSubmission = function(req, res) {
  console.log('inside createSubmission')
  const newSubmission = req.body;
  console.log('newSubmission: ', newSubmission)
  Submission.create(newSubmission, function(err, submission) {
    if (err) {
      console.log('failed to create submission: ', error)
      res.status(400).send(error)
    } else {
      console.log('made submission. submission: ', submission)
      res.status(200).send(submission)
    }
  })
};

module.exports = { createSubmission };