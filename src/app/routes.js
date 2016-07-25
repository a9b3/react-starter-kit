import React from 'react'
import { Route, IndexRedirect } from 'react-router'
import NotFoundContainer from './containers/not-found/not-found.js'
import HelloWorld from './containers/hello-world/hello-world.js'
import Styleguide from './containers/styleguide/styleguide.js'

export default (
  <Route path='/'>
    <IndexRedirect to='styleguide' />
    <Route path='styleguide' component={Styleguide} />
    <Route path='hello' component={HelloWorld} />
    <Route path='*' component={NotFoundContainer} />
  </Route>
)
