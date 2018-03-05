require('es6-promise').polyfill();
require('isomorphic-fetch');

export const API_REQUEST = Symbol('JITSI_REQUEST');


const http = store => next => (action) => { // eslint-disable-line no-unused-vars
  if (!action[API_REQUEST]) return next(action);

  const { url, types, config } = action[API_REQUEST];
  const [requestType, successType, errorType] = types;

  next({ type: requestType });

  const request = {
    ...config,
    headers: {
      // Accept: 'application/x-www-form-urlencoded; charset=utf-8',
      Accept: 'application/json; charset=utf-8',
      'Content-Type': 'application/json',
    },
  };

  // const token = sessionStorage.getItem('mj-token');
  // if (token) {
    // request.headers['mj-token'] = token;
  // }

  fetch(url, request)
    .then((response) => {
      if (response.status >= 400) {
        next({ type: errorType, payload: 'Bad response' });
        throw new Error('Bad response from server');
      }

      return response.json();
    })
    .then((result) => {
      const { body, params } = config;
      next({ type: successType, payload: result, data: body, params });
    })
    .catch((err) => {
      next({ type: errorType, payload: err });
    });

  return true;
};

export default http;
