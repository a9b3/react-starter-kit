/*
 * Entry point for reducers. Import reducers from services here and combine them
 * here. Services that wish to expose a reducer should export reducer.
 */
'use strict';

import { combineReducers } from 'redux';
import { routeReducer } from 'react-router-redux';

function initReducer() {
  const reducers = {};

  return combineReducers(Object.assign(reducers, {
    routing: routeReducer,
  }));
}

export default initReducer();
