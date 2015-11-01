import { combineReducers } from 'redux';

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
    test,
});

export default rootReducer;
