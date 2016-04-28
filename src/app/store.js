import config from 'config'
import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import rootReducer from './root-reducer.js'

export default function (initialState) {
  const middlewares = [
    thunkMiddleware,
    config.DEBUG && createLogger(),
  ]
  .filter(a => a)

  return compose(
    applyMiddleware(...middlewares),
  )(createStore)(rootReducer)
}
