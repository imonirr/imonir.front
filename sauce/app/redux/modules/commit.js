import { API_REQUEST } from 'redux/middleware/http';
import { createSelector } from 'reselect';
import moment from 'moment';
import Api from 'helpers/api';

import {
  toggleLoading,
} from 'redux/helpers';

// ACTIONS
const GET_LIST = 'commit/GET_LIST';
const GET_LIST_SUCCESS = 'commit/GET_LIST_SUCCESS';
const GET_LIST_ERROR = 'commit/GET_LIST_ERROR';

// INITIALSTATE
const initialState = {
  loading: false,
  byId: {},

  ids: [],
};

// SELECTORS
const commitIds = state => state.commit.ids;
const commits = state => state.commit.byId;
export const commitList = createSelector(
  [commitIds, commits],
  (ids, list) =>
    ids.map(id => ({
      id,
      repo: list[id].repo.substr(list[id].repo.indexOf('/') + 1, list[id].repo.length),
      message: list[id].message,
      date: moment(list[id].date).calendar(),
    })),
);


// ACTION CREATORS
export const fetchCommits = () =>
  (dispatch) => {
    dispatch({ type: GET_LIST });

    const req = {
      [API_REQUEST]: {
        url: process.browser ? `${API}commit` : `${API_BACK}commit`,
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

const ACTION_HANDLERS = {
  [GET_LIST]: state => toggleLoading(state),
  [GET_LIST_SUCCESS]: (state, { payload }) => {
    console.warn(payload);
    const byId = { ...state.byId };
    const ids = state.ids.slice(0);

    payload.commits.forEach((n) => {
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
  [GET_LIST_ERROR]: state => toggleLoading(state),
};


export default function reducer(state = initialState, action = {}) {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}
