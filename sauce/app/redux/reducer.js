import { combineReducers } from 'redux';

import note from './modules/note';
import auth from './modules/auth';

export default combineReducers({
  auth,
  note,
});

