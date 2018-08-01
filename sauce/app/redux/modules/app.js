// SELECTORS
export const isHuman = state => state.app.humanActive;

const initialState = {
  humanActive: false,
};

// ACTION CONSTANTS
const HUMAN_ACTIVITY = 'app/human_activity';

// ACTION CREATORS
export const humanInteraction = accessToken =>
  ({
    type: HUMAN_ACTIVITY,
  });


// ACTION HANDLERS
const ACTION_HANDLERS = {
  [HUMAN_ACTIVITY]: prevState =>
    ({
      ...prevState,
      humanActive: true,
    }),
};


// REDUCER
export default function reducer(state = initialState, action = {}) {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}
