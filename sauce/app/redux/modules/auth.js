import {
  API_REQUEST,
} from 'redux/middleware/http';
import Api from 'helpers/api';
import {
  setCookie,
  getCookie,
} from 'utils/cookie';

export const isAuthenticated = state => Boolean(state.auth.token);
export const isAuthorized = state => Boolean(state.auth.token);
export const getToken = state => state.auth.token;

const initialState = {
  loading: false,
  token: null,
};

if (process.browser) {
  const savedToken = getCookie('mj-token');
  if (savedToken) {
    initialState.token = savedToken;
  }
}


// action types
const AUTHORIZE = 'auth/authorize';
const SET_TOKEN = 'auth/setToken';
const LOGIN = 'auth/login';
const LOGIN_SUCCESS = 'auth/login/success';
const LOGIN_FAIL = 'auth/login/fail';


export const login = (accessToken, Router) =>
  (dispatch) => {
    dispatch({ type: LOGIN });
    const req = {
      [API_REQUEST]: {
        url: `${API}auth/facebook`,
        config: {
          method: 'post',
          data: {
            access_token: accessToken,
          },
        },
      },
    };

    return Api.fetch(req).then(
      (response) => {
        // const expires = new Date();
        // expires.setHours(expires.getHours() + 1);
        // document.cookie =
        // `mj-token=${response.token}; expires=${expires.toUTCString()}; domain=.imonir.com`;

        setCookie('mj-token', response.token);
        Router.push('/writer');
        // expires=Thu, 18 Dec 2020 12:00:00 UTC`
        return dispatch({ type: LOGIN_SUCCESS, payload: response });
      },
      err =>
        dispatch({ type: LOGIN_SUCCESS, payload: err }),
    );
  };
export const setToken = accessToken =>
  ({
    type: SET_TOKEN,
    payload: {
      accessToken,
    },
  });
// action handlers
const ACTION_HANDLERS = {
  [SET_TOKEN]: (prevState, { payload }) =>
    ({
      ...prevState,
      token: payload.accessToken,
    }),
  [AUTHORIZE]: state =>
    ({
      ...state,
      loading: false,
    }),
  [LOGIN]: state =>
    ({
      ...state,
      loading: true,
    }),
  [LOGIN_SUCCESS]: (state, { payload }) => {
    const { token } = payload;
    // if (process.browser) {
    //   sessionStorage.setItem('mj-token', token);
    // }

    return ({
      ...state,
      loading: false,
      token,
    });
  },
  [LOGIN_FAIL]: state =>
    ({
      ...state,
      loading: false,
    }),
};


export default function reducer(state = initialState, action = {}) {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}
