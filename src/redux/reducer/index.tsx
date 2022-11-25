import {combineReducers} from 'redux';
import counterReducer from './countReducers';

const rootReducer = combineReducers({
  counterReducer,
});

export default rootReducer;
