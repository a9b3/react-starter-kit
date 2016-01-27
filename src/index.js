'use strict';

import config from 'config';

if (!config.DEBUG && navigator.serviceWorker) {
  navigator.serviceWorker.register('/service-worker.js');
}

// app entry point
// styles
import '!style-loader!css-loader!normalize.css';
import 'font-awesome/scss/font-awesome.scss';
import '!style-loader!css-loader!animate.css/animate.css';
import '!style-loader!css-loader!highlight.js/styles/github.css';

// custom
import 'root/styles/index.scss';

// deps
import ReactDOM from 'react-dom';
import React from 'react';
import router from 'root/router.js';

function init() {
  ReactDOM.render(
    router,
    document.getElementById('mount'),
  );
}

/***********************************************
 *		    Immediately Envoked				   *
 ***********************************************/
import './initialize.js';
init();
