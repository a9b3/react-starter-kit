import React from 'react';
import { Router, Route, Link } from 'react-router';
import { createHistory } from 'history';
import App from './app/App.react.js';
import Test from './app/Test.react.js';
import Default from './app/Default.react.js';
import Flex from './app/Flex.react.js';

const routes = [
    {
        path: '/',
        component: App,
        childRoutes: [
            {
                path: '/main',
                name: 'main',
                component: Default,
            },
            {
                path: '/about',
                name: 'about',
                component: Test,
            },
            {
                path: '/flex',
                name: 'flex',
                component: Flex,
            },
        ],
    },
];

const history = createHistory();

const router = (
    <Router history={history}
        routes={routes} />
);

module.exports = router;
