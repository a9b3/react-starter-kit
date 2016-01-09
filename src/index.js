'use strict';

import config from 'config';

if (!config.DEBUG && navigator.serviceWorker) {
    navigator.serviceWorker.register('/service-worker.js');
}

// app entry point
// styles
import 'normalize.css';
import 'font-awesome/scss/font-awesome.scss';
import 'animate.css/animate.css';
import 'highlight.js/styles/github.css';

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
init();
