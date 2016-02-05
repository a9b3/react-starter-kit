'use strict';

import config from 'config';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { syncHistory, routeReducer } from 'react-router-redux';
import { createHistory } from 'history';
import rootReducer from './root-reducer.js';

function initMiddlewares() {
  const loggerMiddleware = createLogger();
  const reduxRouterMiddleware = syncHistory(history);

  const middlewares = [
    thunkMiddleware,
    reduxRouterMiddleware,
    config.DEBUG && loggerMiddleware,
  ]
  .filter(a => a);
  return middlewares;
}

function initStore() {
  const middlewares = initMiddlewares();

  const createStoreWithMiddleware = applyMiddleware(
    ...middlewares,
  )(createStore);

  // do local storage stuff here
  const defaultState = {

  };

  return createStoreWithMiddleware(rootReducer, defaultState);
}

function initHistory() {
  return createHistory();
}

export const history = initHistory();
export const store = initStore();
