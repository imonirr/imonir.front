import {
  API_REQUEST,
} from 'redux/middleware/http';

export const isAuthenticated = state => Boolean(state.auth.token);
export const isAuthorized = state => Boolean(state.auth.token);

const initialState = {
  loading: false,
  token: null,
};

if (process.browser) {
  const savedToken = sessionStorage.getItem('mj-token');
  if (sessionStorage) {
    initialState.token = savedToken;
  }
}


// action types
const AUTHORIZE = 'auth/authorize';
const SET_TOKEN = 'auth/setToken';
const LOGIN = 'auth/login';
const LOGIN_SUCCESS = 'auth/login/success';
const LOGIN_FAIL = 'auth/login/fail';


export const login = accessToken =>
  ({
    [API_REQUEST]: {
      types: [LOGIN, LOGIN_SUCCESS, LOGIN_FAIL],
      url: `${API}auth/facebook`,
      config: {
        method: 'post',
        body: JSON.stringify({
          access_token: accessToken,
        }),
      },
    },
  });
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
    if (process.browser) {
      sessionStorage.setItem('mj-token', token);
    }

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
