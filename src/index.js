// app entry point
// styles
require('./styles/index.scss');
require('font-awesome/scss/font-awesome.scss');

// deps
const ReactDOM = require('react-dom');
const React = require('react');

// app
const App = require('./app/App.js');

ReactDOM.render(
    <App />,
    document.getElementById('mount')
);
