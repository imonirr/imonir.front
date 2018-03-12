import { createSelector } from 'reselect';
import moment from 'moment';
import Api from 'helpers/api';
import { API_REQUEST } from 'redux/middleware/http';

import {
  toggleLoading,
} from 'redux/helpers';

// ACTIONS
const GET_LIST = 'note/GET_LIST';
const GET_LIST_SUCCESS = 'note/GET_LIST_SUCCESS';
const GET_LIST_ERROR = 'note/GET_LIST_ERROR';

const GET_NOTE = 'note/GET';
const GET_NOTE_SUCCESS = 'note/GET_SUCCESS';
const GET_NOTE_ERROR = 'note/GET_ERROR';

const POST_NOTE = 'note/POST';
const POST_NOTE_SUCCESS = 'note/POST_SUCCESS';
const POST_NOTE_ERROR = 'note/POST_ERROR';

const PATCH_NOTE = 'note/PATCH';
const PATCH_NOTE_SUCCESS = 'note/PATCH_SUCCESS';
const PATCH_NOTE_ERROR = 'note/PATCH_ERROR';

// INITIALSTATE
const initialState = {
  loading: false,
  byId: {},
  contentById: {},

  ids: [],
};

// SELECTORS
export const sampleNote = () => '';

export const noteLoading = state => state.note.loading;
const notes = state => state.note.byId;
const noteIds = state => state.note.ids;
const getContents = state => state.note.contentById;
export const noteById = (state, params) =>
  (params.id === 'new' ?
    '' : state.note.byId[params.id]);

export const noteBySlug = (state, noteslug) => {
  console.warn(`noteBySlug: ${noteslug}`);
  return state.note.contentById[noteslug];
};

export const getNote = createSelector(
  [noteById, getContents],
  (note, contents) => {
    if (!note) {
      return null;
    }

    return {
      ...note,
      content: contents[note.slug],
    };
  },
);


export const noteList = createSelector(
  [noteIds, notes],
  (ids, list) => ids.map(id =>
    ({
      id,
      key: id,
      link: {
        to: `/note/${list[id].slug}/`,
        title: list[id].title,
      },
      published: list[id].isPublished === 1,
      date: list[id].date,
    }),
  ),
);


// ACTION CREATORSLL
export const fetchNoteList = () =>
  (dispatch) => {
    dispatch({ type: GET_LIST });

    const req = {
      [API_REQUEST]: {
        url: process.browser ? `${API}note` : 'http://backend:8000/note',
        config: {
          method: 'GET',
        },
      },
    };

    return Api.fetch(req)
      .then(
        response =>
          dispatch({
            type: GET_LIST_SUCCESS,
            payload: response,
          }),
        err =>
          dispatch({
            type: GET_LIST_ERROR,
            payload: err,
          }),
      );
  };


export const postNote = note =>
  ({
    [API_REQUEST]: {
      types: [
        POST_NOTE,
        POST_NOTE_SUCCESS,
        POST_NOTE_ERROR,
      ],
      url: `${API}note`,
      config: {
        method: 'POST',
        body: JSON.stringify({
          note: {
            title: note.title,
            content: note.content,
            date: moment.utc(Date.now()).format(),
          },
        }),
      },
    },
  });

export const patchNote = (id, note) =>
  ({
    [API_REQUEST]: {
      types: [
        PATCH_NOTE,
        PATCH_NOTE_SUCCESS,
        PATCH_NOTE_ERROR,
      ],
      url: `${API}note/${id}`,
      config: {
        method: 'PATCH',
        body: JSON.stringify({ note }),
        // params: { id },
      },
    },
  });
export const fetchNote = note =>
  ({
    [API_REQUEST]: {
      types: [
        GET_NOTE,
        GET_NOTE_SUCCESS,
        GET_NOTE_ERROR,
      ],
      url: `${API}note/${note}`,
      config: {
        method: 'GET',
      },
    },
  });


const ACTION_HANDLERS = {
  [GET_LIST]: state => toggleLoading(state),
  [GET_NOTE]: state => toggleLoading(state),
  [POST_NOTE]: state => toggleLoading(state),
  [PATCH_NOTE]: state => toggleLoading(state),

  [GET_LIST_SUCCESS]: (state, { payload }) => {
    const byId = { ...state.byId };
    const ids = state.ids.slice(0);

    payload.notes.forEach((n) => {
      if (!byId[n.id]) {
        byId[n.id] = n;
        ids.push(n.id);
      }
    });

    return ({
      ...state,
      loading: false,
      byId,
      ids,
    });
  },
  [GET_NOTE_SUCCESS]: (state, { payload }) => {
    const { note, content } = payload;
    const contentById = { ...state.contentById };
    const byId = { ...state.byId };

    contentById[note.slug] = content;
    byId[note.id] = note;

    return ({
      ...state,
      loading: false,
      contentById,
      byId,
    });
  },
  [PATCH_NOTE_SUCCESS]: (state, { params, data }) => {
    const byId = { ...state.byId };
    const updated = JSON.parse(data);

    byId[params.id] = { ...state.byId[params.id], ...updated.note };

    return {
      ...state,
      byId,
    };
  },

  [GET_LIST_ERROR]: state => toggleLoading(state),
  [GET_NOTE_ERROR]: state => toggleLoading(state),
  [POST_NOTE_ERROR]: state => toggleLoading(state),
  [PATCH_NOTE_ERROR]: state => toggleLoading(state),
};


export default function reducer(state = initialState, action = {}) {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}
