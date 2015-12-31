// app entry point
// styles
require('normalize.css');
require('font-awesome/scss/font-awesome.scss');
require('animate.css/animate.css');
require('highlight.js/styles/github.css');
// custom
require('./styles/index.scss');

// deps
import ReactDOM from 'react-dom';
import React from 'react';
import router from './router.js';

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
