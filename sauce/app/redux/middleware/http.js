require('es6-promise').polyfill();
require('isomorphic-fetch');

export const API_REQUEST = Symbol('JITSI_REQUEST');


const http = store => next => (action) => { // eslint-disable-line no-unused-vars
  if (!action[API_REQUEST]) return next(action);

  const { url, types, config } = action[API_REQUEST];
  const [requestType, successType, errorType] = types;

  next({ type: requestType });

  fetch(url, config)
    .then((response) => {
      if (response.status >= 400) {
        next({ type: errorType, payload: 'Bad response' });
        throw new Error('Bad response from server');
      }
      return response.json();
    })
    .then((result) => {
      next({ type: successType, payload: result });
    })
    .catch((err) => {
      next({ type: errorType, payload: err });
    });

  return true;
};

export default http;
