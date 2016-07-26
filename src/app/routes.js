import React from 'react'
import { Route, IndexRedirect } from 'react-router'
import NotFoundContainer from './containers/not-found/not-found.js'

import StyleguideShell from './containers/styleguide/shell.js'
import General from './containers/styleguide/general/general.js'
import Layout from './containers/styleguide/layout/layout.js'

export default (
  <Route path='/'>

    <IndexRedirect to='styleguide' />

    <Route path='styleguide' component={StyleguideShell}>
      <IndexRedirect to='general' />
      <Route path='general' component={General} />
      <Route path='layout' component={Layout} />
    </Route>

    <Route path='*' component={NotFoundContainer} />
  </Route>
)
