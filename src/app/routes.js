import React from 'react'
import { Route, IndexRedirect } from 'react-router'
import Main from './components/main.js'
import NotFoundContainer from './components/not-found/not-found.js'
import Foo from './components/foo/foo.tsx'

export default (
  <Route
    path='/'
    component={Main}
  >
    <IndexRedirect to='foo' />
    <Route path='foo' component={Foo} />
    <Route path='*' component={NotFoundContainer} />
  </Route>
)
