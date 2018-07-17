import Api from 'helpers/api';

require('es6-promise').polyfill();
require('isomorphic-fetch');


export const API_REQUEST = Symbol('JITSI_REQUEST');

const http = store => next => (action) => { // eslint-disable-line no-unused-vars
  if (!action[API_REQUEST]) return next(action);

  const { types, config } = action[API_REQUEST];
  const [requestType, successType, errorType] = types;

  next({ type: requestType });

  // console.log(`#################REQUESTING ${url}#################`);
  // fetch(url, request)
  Api.fetch(action, next)
    .then((response) =>
      // if (response.status >= 400) {
      //   next({ type: errorType, payload: 'Bad response' });
      //   throw new Error('Bad response from server');
      // }
      // if (response.status === 401) {
      //   next(authExpired());
      // }

      response.json())
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
