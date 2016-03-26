import React from 'react'
import { Route } from 'react-router'

/*
 * Components
 */
import Main from './containers/main.js'
import NotFoundContainer from './containers/not-found/not-found.container.js'

export default (
  <Route
    path="/"
    component={Main}
  >
    <Route path="*" component={NotFoundContainer} />
  </Route>
)
