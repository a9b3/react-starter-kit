import React from 'react';
import { Router, Route, Link } from 'react-router';
import { createHistory } from 'history';
import App from './app/App.react.js';
import Default from './app/Default.react.js';
import Flex from './app/Flex.react.js';
import Test from './app/Test.react.js';

const history = createHistory();

const router = (
    <Router history={history}>
        <Route path="/" component={App}>
            <Route path="main" component={Default} />
            <Route path="flex" component={Flex} />
            <Route path="test" component={Test} />
        </Route>
    </Router>
);

module.exports = router;
