
export const isAuthenticated = state => true;

const initialState = {
  loading: false,
  token: null,
};


// action types
const AUTHORIZE = 'auth/authorize';

// action handlers
const ACTION_HANDLERS = {
  [AUTHORIZE]: state =>
    ({
      ...state,
      loading: false,
    }),
};


export default function reducer(state = initialState, action = {}) {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}
