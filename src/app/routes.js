import React from 'react'
import { Route } from 'react-router'
import Main from './components/main.js'
import NotFoundContainer from './components/not-found/not-found.js'

export default (
  <Route
    path='/'
    component={Main}
  >
    <Route path='*' component={NotFoundContainer} />
  </Route>
)
