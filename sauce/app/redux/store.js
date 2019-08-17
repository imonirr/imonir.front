import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension'

import http from './middleware/http';
import reducer from './reducer';


const initializeStore = (initialState) => {
  const middleware = [thunk, http];

  const logger = createLogger({
    collapsed: true,
//    diff: true,
    // predicate: (getState, action) => // false,
    //   (
    //     !/etlms\/vmouse\/SEND_DEBOUNCED_VMOUSE/.test(action.type) &&
    //     !/etlms\/timer\/SESSION_TIMER/.test(action.type)
    //   ),
  });

  if (DEBUG) {
    middleware.push(logger);
  }

  const finalCreateStore = composeWithDevTools(applyMiddleware(...middleware))(createStore);
  const store = finalCreateStore(reducer, initialState);

  // if (DEBUG && module.hot) {
  //   module.hot.accept('./modules/reducer', () => {
  //     store.replaceReducer(require('./modules/reducer'));
  //   });
  // }

  return store;
};

export default initializeStore;

