'use strict';

import config from 'config';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from 'root/root-reducer.js';

const loggerMiddleware = createLogger();

const middlewares = [
  thunkMiddleware,
  config.DEBUG && loggerMiddleware,
].filter(a => a);

const createStoreWithMiddleware = applyMiddleware(
  ...middlewares,
)(createStore);

// do local storage stuff here
const defaultState = {

};

const store = createStoreWithMiddleware(rootReducer, defaultState);

export default store;
