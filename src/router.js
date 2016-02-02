'use strict';

import React from 'react';
import { Provider } from 'react-redux';
import { syncReduxAndRouter } from 'redux-simple-router';
import { Router, Route, Link, IndexRedirect } from 'react-router';
import { createHistory } from 'history';
import store from 'root/redux/store.js';
import config from 'config';

// react
import StyleGuideContainer from 'containers/style-guide/style-guide.container.js'

const history = createHistory();

syncReduxAndRouter(history, store);

function debugRoutes() {
  if (!config.DEBUG) return;
  return (
    <Route path='/style_guide'
      component={ StyleGuideContainer }
    />
  )
}

const router = (
  <Provider store={store}>
    <Router history={history}>
      { debugRoutes() }
    </Router>
  </Provider>
);

export default router;
