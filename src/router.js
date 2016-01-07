'use strict';

import { Router, Route, Link, IndexRedirect } from 'react-router';
import { createHistory } from 'history';

// containers
import App from './app/App.react.js';
import Default from './app/Default.react.js';
import Flex from './app/Flex.react.js';
import Test from './app/Test.react.js';

const history = createHistory();

const router = (
    <Router history={history}>
        <Route path="/" component={App}>
            <IndexRedirect to="/main" />
            <Route path="main" component={Default} />
            <Route path="flex" component={Flex} />
            <Route path="test" component={Test} />
        </Route>
    </Router>
);

module.exports = router;
