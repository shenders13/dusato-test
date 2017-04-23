import fetch from 'isomorphic-fetch';

const postSubmission = function(submission, callback) {
  console.log('submission about to POST: ', submission)
  fetch('/submission', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: submission.email,
      type: submission.type
    })
  })
  .then(response => {
    console.log('responseone: ', response)
  })
  .then(response => {
    console.log('responsetwo: ', response)
  })
  .catch( e => {
    console.log('error: ', e)
  })
}

const test = function(submission, callback) {
  fetch('/test', {
  })
  .then(response => {
    debugger;
    console.log('response: ', response.body)
  })
  .catch( e => {
    console.log('error: ', e)
  })
}


export { postSubmission, test };
