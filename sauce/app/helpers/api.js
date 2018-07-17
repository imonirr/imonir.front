import fetch from 'isomorphic-fetch';
import { API_REQUEST } from 'redux/middleware/http';
// import StoreMan from 'helpers/storeman';
import {
  authExpired,
} from 'redux/modules/auth';
import {
  getCookie,
} from 'utils/cookie';

const addToken = (meta, req) => {
  // add token to meta

  if (meta && meta.token) {
    req.headers['mj-token'] = `${meta.token}`;
  } else if (process.browser) {
    const token = getCookie('mj-token');
    if (token) {
      req.headers['mj-token'] = token;
      // `${meta.token}`;
      // action[API_REQUEST].meta = meta ? { token } : { ...action.meta, token };
    }
  }

  return req;
};

const Api = {
  fetch: (action, dispatch) => {
    const {
      meta,
      url,
      config,
      types,
    } = action[API_REQUEST];

    const options = addToken(meta, {
      credentials: 'include',
      method: config.method,
      body: JSON.stringify(config.data),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });

    return fetch(url, options)
      .then((response) => {
        if (response.ok) {
          return Promise.resolve(response);
        } else if (response.status === 401) {
          return dispatch(authExpired());
        } else if (response.status >= 400) {
          dispatch({ type: types[2], payload: 'Bad response' });
          throw new Error('Bad response from server');
        }

        console.log(response.json());
        // const error = new Error(response.statusText || response.status);
        // error.response = response;
        return Promise.reject(response.json());
      })
      .then(response => response.json());
  },
};

export default Api;
