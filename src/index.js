// app entry point
// styles
require('normalize.css');
require('font-awesome/scss/font-awesome.scss');
require('./styles/index.scss');

// deps
import ReactDOM from 'react-dom';
import React from 'react';
import router from './router.js';

ReactDOM.render(
    router,
    document.getElementById('mount'),
);
