'use strict';

import { combineReducers } from 'redux';
import { routeReducer } from 'redux-simple-router';

const reducers = {};

reducers.sessionToken = (state = {}, action) => {
    switch(action.type) {
        default:
            return state;
    }
};

reducers.test = (state = {}, action) => {
    switch(action.type) {
        case 'TEST':
            return {
                ...state,
                test: 'testing',
            };
        default:
            return state;
    }
};

const combinedReducers = Object.keys(reducers).reduce((obj, key) => {
    if (obj[key]) return obj;
    obj[key] = reducers[key];
    return obj;
}, {
    routing: routeReducer,
});

const rootReducer = combineReducers(combinedReducers);

export default rootReducer;
