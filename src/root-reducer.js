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

import { reducer as exampleState } from 'services/example-state.js';
reducers[exampleState.key] = exampleState.reducer;

const rootReducer = combineReducers(Object.assign(reducers, {
  routing: routeReducer,
}));

export default rootReducer;
