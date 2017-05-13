import fetch from 'isomorphic-fetch';

const postSubmission = function(submission, callback) {
  window.fbq('track', 'CompleteRegistration', {
    email: submission.email,
    type: submission.type
  });
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
  })
  .then(response => {
  })
  .catch( e => {
  })
}

const postModalClick = function(type, callback) {
  window.fbq('track', 'ViewContent', {
    type: type.type,
  });

  fetch('/modal_click', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      type: type.type
    })
  })
  .then(response => {
  })
  .then(response => {
  })
  .catch( e => {
  })
}

const registerPageView = userInfo => {
  fetch('/register_view', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userInfo)
  })
  .then(response => {
  })
  .then(response => {
  })
  .catch( e => {
  })
}


export { postSubmission, postModalClick, registerPageView };
