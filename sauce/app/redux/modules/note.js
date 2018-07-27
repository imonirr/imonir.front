import { createSelector } from 'reselect';
import Api from 'helpers/api';
import Router from 'next/router';
import { API_REQUEST } from 'redux/middleware/http';

import {
  toggleLoading,
} from 'redux/helpers';
import {
  getToken,
} from 'redux/modules/auth';


// INITIALSTATE
const initialState = {
  loading: false,
  byId: {},
  ids: [],

  slugToId: {},
};

// SELECTORS
export const sampleNote = () => '';
export const noteLoading = state => state.note.loading;
const getNotes = state => state.note.byId;
const noteIds = state => state.note.ids;

export const getNote = (state, params) =>
  (params.id === 'new' ?
    '' : state.note.byId[params.id]);
const noteSlugToId = (state, props) =>
  state.note.slugToId[props.slug];

// export const getNote = createSelector(
//   [notebyid, getNotes],
//   (note, notes) => {
//     if (!note) {
//       return null;
//     }

//     return {
//       ...note,
//       content: contents[note.slug],
//     };
//   },
// );
const getNoteBySlug = createSelector(
  [noteSlugToId, getNotes],
  (id, noteObjects) => noteObjects[id],
);
export const noteContentBySlug = createSelector(
  [getNoteBySlug],
  note => (note ? note.content : ''),
);

export const noteList = createSelector(
  [noteIds, getNotes],
  (ids, list) => ids.map(id =>
    ({
      id,
      key: id,
      link: {
        href: `/note/?slug=${list[id].slug}`,
        as: `/note/${list[id].slug}`,
        title: list[id].title,
      },
      published: list[id].isPublished === 1,
      date: list[id].date,
    }),
  ).sort((note1, note2) => {
    const note1Date = new Date(note1.date);
    const note2Date = new Date(note2.date);
    if (note1Date > note2Date) {
      return -1;
    } else if (note1Date < note2Date) {
      return 1;
    }

    return 0;
  }),
);


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

const DELETE_NOTE = 'note/DELETE';
const DELETE_NOTE_SUCCESS = 'note/DELETE_SUCCESS';
const DELETE_NOTE_ERROR = 'note/DELETE_ERROR';


// ACTION CREATOR
export const fetchNote = slug =>
  (dispatch, getState) => {
    dispatch({ type: GET_NOTE });
    const state = getState();
    const token = getToken(state);

    const req = {
      [API_REQUEST]: {
        url: process.browser ? `${API}v1/notes/${slug}` : `${API_BACK}v1/notes/${slug}`,
        config: {
          method: 'GET',
        },
        meta: {
          token,
        },
      },
    };

    return Api.fetch(req, dispatch)
      .then(
        response =>
          dispatch({
            type: GET_NOTE_SUCCESS,
            payload: response,
          }),
        err =>
          dispatch({
            type: GET_NOTE_ERROR,
            payload: err,
          }),
      );
  };
export const fetchNoteList = () =>
  (dispatch, getState) => {
    dispatch({ type: GET_LIST });
    const state = getState();
    const token = getToken(state);

    const req = {
      [API_REQUEST]: {
        url: process.browser ? `${API}v1/notes/list` : `${API_BACK}v1/notes/list`,
        config: {
          method: 'GET',
        },
        meta: {
          token,
        },
      },
    };

    return Api.fetch(req, dispatch)
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
  (dispatch) => {
    dispatch({ type: POST_NOTE });
    const req = ({
      [API_REQUEST]: {
        url: `${API}v1/notes`,
        config: {
          method: 'POST',
          body: {
            note: {
              title: note.title,
              content: note.content,
              date: note.date,
            },
          },
        },
      },
    });

    Api.fetch(req).then(
      (response) => {
        dispatch({ type: POST_NOTE_SUCCESS, paylaod: response });
        Router.push('/writer');
      },
      err => dispatch({ type: POST_NOTE_ERROR, payload: err }),
    );
  };
export const patchNote = (id, note) =>
  ({
    [API_REQUEST]: {
      types: [
        PATCH_NOTE,
        PATCH_NOTE_SUCCESS,
        PATCH_NOTE_ERROR,
      ],
      url: `${API}v1/notes/${id}`,
      config: {
        method: 'PATCH',
        body: { note },
      },
      meta: {
        id,
      },
    },
  });
export const deleteNote = (id, title) =>
  ({
    [API_REQUEST]: {
      types: [
        DELETE_NOTE,
        DELETE_NOTE_SUCCESS,
        DELETE_NOTE_ERROR,
      ],
      url: `${API}v1/notes/${id}`,
      config: {
        method: 'DELETE',
        body: {
          id,
          title,
        },
      },
    },
  });


// REDUCERS
const ACTION_HANDLERS = {
  [GET_LIST]: state => toggleLoading(state),
  [GET_NOTE]: state => toggleLoading(state),
  [POST_NOTE]: state => toggleLoading(state),
  [PATCH_NOTE]: state => toggleLoading(state),
  [DELETE_NOTE]: state => toggleLoading(state),

  [GET_LIST_SUCCESS]: (prevState, { payload }) => {
    const state = toggleLoading(prevState);

    if (!payload || !payload.notes) {
      return state;
    }

    const byId = { ...state.byId };
    const ids = state.ids.slice(0);
    const slugToId = { ...state.slugToId };


    console.log(payload);
    payload.notes.forEach((n) => {
      if (!byId[n.id]) {
        byId[n.id] = n;
        // byId[n.id].date = byId[n.id].date.substr(0, 10);
      }
      slugToId[n.slug] = n.id;

      ids.push(n.id);
    });

    state.byId = byId;
    state.ids = ids;
    state.slugToId = slugToId;

    return state;
  },
  [GET_NOTE_SUCCESS]: (prevState, { payload }) => {
    const { note, content } = payload;
    const state = { ...prevState };

    state.slugToId = {
      ...state.slugToId,
      [note.slug]: note.id,
    };
    state.byId = {
      ...state.byId,
      [note.id]: {
        ...note,
        content,
      },
    };

    return state;
  },
  [PATCH_NOTE_SUCCESS]: (prevState, { payload }) => {
    const state = { ...prevState };
    const { note } = payload;

    state.byId = {
      ...state.byId,
      [note.id]: {
        ...prevState.byId[note.id],
        ...note,
      },
    };

    return state;
  },
  [DELETE_NOTE_SUCCESS]: (prevState, { data }) => {
    const byId = { ...prevState.byId };

    const ids = prevState.ids.filter(id => id !== data.id);
    delete byId[data.id];

    return {
      ...prevState,
      byId,
      ids,
    };
  },

  [GET_LIST_ERROR]: state => toggleLoading(state),
  [GET_NOTE_ERROR]: state => toggleLoading(state),
  [POST_NOTE_ERROR]: state => toggleLoading(state),
  [PATCH_NOTE_ERROR]: state => toggleLoading(state),
  [DELETE_NOTE_ERROR]: state => toggleLoading(state),
};


export default function reducer(state = initialState, action = {}) {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}
