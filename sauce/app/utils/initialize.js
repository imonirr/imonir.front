import Router from 'next/router';
import {
  setToken,
} from 'redux/modules/auth';
import {
  getCookie,
} from 'utils/cookie';

// checks if the page is being loaded on the server, and if so, get auth token from the cookie:
const initialize = (ctx) => {
  if (ctx.isServer) {
    if (ctx.req.headers.cookie) {
      ctx.store.dispatch(setToken(getCookie('mj-token', ctx.req)));
    }
  } else {
    const token = ctx.store.getState().auth.token;

    if (token && (ctx.pathname === '/signin' || ctx.pathname === '/signup')) {
      setTimeout(() => {
        Router.push('/');
      }, 0);
    }
  }
};

export default initialize;
