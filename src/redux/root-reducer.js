/*
 * Entry point for reducers. Import reducers from services here and combine them
 * here. Services that wish to expose a reducer should export reducer.
 */
'use strict';

import { combineReducers } from 'redux';
import { routeReducer } from 'redux-simple-router';

function initReducer() {
  const reducers = {};

  const rootReducer = combineReducers(Object.assign(reducers, {
    routing: routeReducer,
  }));

  return rootReducer;
}

const rootReducer = initReducer();
export default rootReducer;
