import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import { reducer as mixer } from './services/mixer.js';
import { reducer as transport } from './services/transport.js';

const rootReducer = combineReducers({
  mixer,
  transport,
  routing,
});

export default rootReducer;
