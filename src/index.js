// app entry point
// styles
require('normalize.css');
require('font-awesome/scss/font-awesome.scss');
require('./styles/index.scss');

// deps
const ReactDOM = require('react-dom');
const React = require('react');
import { Router, Route, Link } from 'react-router';
import routes from './router.js';

ReactDOM.render(
    <Router routes={routes} />,
    document.getElementById('mount')
);
