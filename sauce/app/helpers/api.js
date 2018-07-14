import fetch from 'isomorphic-fetch';
import { API_REQUEST } from 'redux/middleware/http';
// import StoreMan from 'helpers/storeman';

const addToken = (meta, req) => {
  if (meta && meta.token) {
    req.headers['mj-token'] = `${meta.token}`;
  }

  return req;
};

const Api = {
  fetch: (action) => {
    const {
      meta,
      url,
      config,
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
