import { applyMiddleware, createStore } from 'redux';

import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise';

import rootReducer from './reducers';

const middleware = applyMiddleware(promiseMiddleware, thunk);
const devtools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export default createStore(
  rootReducer,
  devtools,
  middleware
);
