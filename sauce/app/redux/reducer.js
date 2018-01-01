import { combineReducers } from 'redux';

import note from './modules/note';
import auth from './modules/auth';
import commit from './modules/commit';

export default combineReducers({
  auth,
  note,
  commit,
});

