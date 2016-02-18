import config from 'config';
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from './root-reducer.js';

export default function (initialState) {
  const middlewares = [
    thunkMiddleware,
    config.DEBUG && createLogger(),
  ]
  .filter(a => a);

  return createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(...middlewares)
    )
  );
}
