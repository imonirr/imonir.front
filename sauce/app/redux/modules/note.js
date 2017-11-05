import { API_REQUEST } from 'redux/middleware/http';
import { createSelector } from 'reselect';
import moment from 'moment';

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

// SELECTORS
const notes = state => state.note.list;
const noteIds = state => state.note.ids;

export const noteById = (state, noteId) => {
  console.warn(`noteById: ${noteId}`);
  return state.note.contentById[noteId];
}
export const noteList = createSelector(
  [noteIds, notes],
  (ids, list) => ids.map(id =>
    ({
      key: list[id].key,
      link: {
        to: `/note/${list[id].path}/`,
        title: list[id].title,
      },
      date: moment(list[id].date).calendar(),
    }),
  ),
);


const initialState = {
  loading: false,
  list: {},
  contentById: {},

  ids: [],
};

const ACTION_HANDLERS = {
  [FETCH_LIST]: state =>
    ({
      ...state,
      loading: false,
    }),
  [FETCH_NOTE]: state =>
    ({
      ...state,
      loading: false,
    }),
  [FETCH_LIST_SUCCESS]: (state, { payload }) => {
    const list = { ...state.list };
    const ids = state.ids.slice(0);

    payload.notes.forEach((n) => {
      list[n.path] = n;
      ids.push(n.path);
    });

    return ({
      ...state,
      loading: false,
      list,
      ids,
    });
  },
  [FETCH_NOTE_SUCCESS]: (state, { payload }) => {
    const contentById = { ...state.contentById };
    contentById[payload.key] = payload.content;

    return ({
      ...state,
      loading: false,
      contentById,
    });
  },
  [FETCH_LIST_ERROR]: state =>
    ({
      ...state,
      loading: false,
    }),
  [FETCH_NOTE_ERROR]: state =>
    ({
      ...state,
      loading: false,
    }),
};


export default function reducer(state = initialState, action = {}) {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}
