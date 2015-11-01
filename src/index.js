// app entry point
// styles
require('normalize.css');
require('font-awesome/scss/font-awesome.scss');
require('./styles/index.scss');

// deps
const ReactDOM = require('react-dom');
const React = require('react');

// app
const App = require('./app/App.js');

ReactDOM.render(
    <App />,
    document.getElementById('mount')
);
