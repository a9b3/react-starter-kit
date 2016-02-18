// app entry point
// styles
import '!style-loader!css-loader!normalize.css';
import 'font-awesome/scss/font-awesome.scss';
import '!style-loader!css-loader!animate.css/animate.css';
import '!style-loader!css-loader!highlight.js/styles/github.css';
// custom
import 'root/styles/index.scss';

// Global polyfill Promise
global.Promise = require('rsvp').Promise;

import config from 'config';

if (!config.DEBUG && navigator.serviceWorker) {
  navigator.serviceWorker.register('/service-worker.js');
}

// deps
import createStore from './store.js';
import { browserHistory } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { render } from 'react-dom';
import React from 'react';
import Root from './containers/root.js';

import './initialize.js';

const store = createStore();
const history = syncHistoryWithStore(browserHistory, store);

render(
  <Root store={store} history={history} />,
  document.getElementById('mount')
);
