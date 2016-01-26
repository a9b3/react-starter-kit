/*
 * Entry point for reducers. Import reducers from services here and combine them
 * here. Services that wish to expose a reducer should export reducer.
 */
'use strict';

import { combineReducers } from 'redux';
import { routeReducer } from 'redux-simple-router';

const reducers = {};

/*
 * import exported reducers from services here
 * ex:
 * import { reducer as fooReducer } from 'services/foo.js';
 * reducers.foo = fooReducer;
 */

import { reducer as exampleStateReducer } from 'services/example-state.js';
reducers.exampleState = exampleStateReducer;

const combinedReducers = Object.keys(reducers).reduce((obj, key) => {
  if (obj[key]) return obj;
  obj[key] = reducers[key];
  return obj;
}, {
  routing: routeReducer,
});

const rootReducer = combineReducers(combinedReducers);

export default rootReducer;
