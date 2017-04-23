const Submission = require('../db/submissionModel.js');

const createSubmission = function(req, res) {
  console.log('inside createSubmission')
  const newSubmission = req.body;
  console.log('newSubmission: ', newSubmission)
  Submission.create(newSubmission, function(err, submission) {
    if (err) {
      console.log('success on server. error: ', error)
      res.status(400).send(error)
    } else {
      console.log('success on server. submission: ', submission)
      res.status(200).send(submission)
    }
  })
};

module.exports = { createSubmission };