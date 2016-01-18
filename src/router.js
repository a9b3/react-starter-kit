'use strict';

import React from 'react';
import { Provider } from 'react-redux';
import { syncReduxAndRouter } from 'redux-simple-router';
import { Router, Route, Link, IndexRedirect } from 'react-router';
import { createHistory } from 'history';
import store from 'root/store.js';

// react
import App from 'containers/app.container.js';

const history = createHistory();

syncReduxAndRouter(history, store);

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App} />
    </Router>
  </Provider>
);

export default router;
