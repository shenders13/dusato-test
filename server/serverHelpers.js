const Submission = require('../db/submissionModel.js');
const ModalClicks = require('../db/modalClicksModel.js');
const PageViews = require('../db/pageViewModel.js');

const createSubmission = function(req, res) {
  const newSubmission = req.body;
  Submission.create(newSubmission, function(err, submission) {
    if (err) {
      res.status(400).send(err)
    } else {
      res.status(200).send(submission)
    }
  })
};

const registerModalClick = function(req, res) {
  const newModalClick = req.body;
  ModalClicks.create(newModalClick, function(err, newClick) {
    if (err) {
      console.log('error: ', err)
      res.status(400).send(err)
    } else {
      console.log('newClick: ', newClick)
      res.status(200).send(newClick)
    }
  })
}

const registerPageView = function(req, res) {
  const newViewRequest = req.body;
  PageViews.create(newViewRequest, function(err, newView) {
    if (err) {
      console.log('error: ', err)
      res.status(400).send(err)
    } else {
      console.log('newClick: ', newView)
      res.status(200).send(newView)
    }
  })
}

module.exports = { createSubmission, registerModalClick, registerPageView };