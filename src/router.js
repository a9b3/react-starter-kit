'use strict';

import { Provider } from 'react-redux';
import { syncReduxAndRouter } from 'redux-simple-router';
import { Router, Route, Link, IndexRedirect } from 'react-router';
import { createHistory } from 'history';
import store from './store.js';

// containers
import App from './containers/App.js';

const history = createHistory();

syncReduxAndRouter(history, store);

const router = (
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App} />
        </Router>
    </Provider>
);

module.exports = router;
