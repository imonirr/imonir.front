import { combineReducers } from 'redux';

import app from './modules/app';
import note from './modules/note';
import auth from './modules/auth';
import commit from './modules/commit';

export default combineReducers({
  app,
  auth,
  note,
  commit,
});

