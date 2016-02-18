import React from 'react';
import { Route } from 'react-router';
import NotFoundContainer from './containers/not-found/not-found.container.js';

export default (
  <Route path="/">
    <Route path="*" component={NotFoundContainer} />
  </Route>
);
