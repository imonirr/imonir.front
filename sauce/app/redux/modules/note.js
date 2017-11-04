import { API_REQUEST } from 'redux/middleware/http';

// ACTIONS
const FETCH_LIST = 'notes/FETCH_LIST';
const FETCH_LIST_SUCCESS = 'notes/FETCH_LIST_SUCCESS';
const FETCH_LIST_ERROR = 'notes/FETCH_LIST_ERROR';

const FETCH_LIST_TYPES = [
  FETCH_LIST,
  FETCH_LIST_SUCCESS,
  FETCH_LIST_ERROR,
];

const FETCH_NOTE = 'note/FETCH';
const FETCH_NOTE_SUCCESS = 'note/FETCH_SUCCESS';
const FETCH_NOTE_ERROR = 'note/FETCH_ERROR';

const FETCH_NOTE_TYPES = [
  FETCH_NOTE,
  FETCH_NOTE_SUCCESS,
  FETCH_NOTE_ERROR,
];

// ACTION CREATORS
export const fetchNoteList = () =>
  ({
    [API_REQUEST]: {
      types: FETCH_LIST_TYPES,
      url: `${API}note`,
      config: {
        method: 'GET',
      },
    },
  });

export const fetchNote = note =>
  ({
    [API_REQUEST]: {
      types: FETCH_NOTE_TYPES,
      url: `${API}note/${note}`,
      config: {
        method: 'GET',
      },
    },
  });

// selectors
// export const userId = state => (state.auth.user ? state.auth.user.role_id : null);
export const noteList = state => state.note.list;

const initialState = {
  loading: false,
  list: {},
  ids: [],
};

const ACTION_HANDLERS = {
  [FETCH_LIST]: state =>
    ({
      ...state,
      loading: false,
    }),
  [FETCH_LIST_SUCCESS]: (state, { payload }) =>
    ({
      loading: false,
      list: payload,
      ...state,
    }),
  [FETCH_LIST_ERROR]: state =>
    ({
      ...state,
      loading: false,
    }),
};


export default function reducer(state = initialState, action = {}) {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}
