import React from 'react'
import { Route, IndexRedirect } from 'react-router'
import NotFoundContainer from './components/not-found/not-found.js'
import HelloWorld from './components/hello-world/hello-world.js'

export default (
  <Route path='/'>
    <IndexRedirect to='hello' />
    <Route path='hello' component={HelloWorld} />
    <Route path='*' component={NotFoundContainer} />
  </Route>
)
