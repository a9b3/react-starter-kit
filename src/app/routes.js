import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Index from './pages/index/index.js'
import HelloWorld from './pages/hello-world/hello-world.js'
import NotFoundContainer from './pages/not-found/not-found.js'

export default (
  <Route path='/'>

    <IndexRoute component={Index} />

    <Route path='hello-world' component={HelloWorld} />
    <Route path='*' component={NotFoundContainer} />
  </Route>
)
