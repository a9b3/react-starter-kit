'use strict';

import { combineReducers } from 'redux';
import { routeReducer } from 'redux-simple-router';

function test(state = {}, action) {
    switch(action.type) {
        case 'TEST':
            return {
                test: 'testing',
            };
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    routing: routeReducer,
    test,
});

export default rootReducer;
