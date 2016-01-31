'use strict';

import React from 'react';
import { Provider } from 'react-redux';
import { syncReduxAndRouter } from 'redux-simple-router';
import { Router, Route, Link, IndexRedirect } from 'react-router';
import { createHistory } from 'history';
import store from 'root/store.js';
import config from 'config';

// react
import App from 'containers/app.container.js';
import StyleGuideContainer from 'containers/style-guide/style-guide.container.js'

const history = createHistory();

syncReduxAndRouter(history, store);

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App} />

      {(() => {
        if (config.DEBUG) {
          return (
            <Route path="/style_guide" component={StyleGuideContainer} />
          );
        }
      })()}
    </Router>
  </Provider>
);

export default router;
