import { combineReducers } from 'redux';
import eventsReducer from './eventsReducer.js';

const reducers = combineReducers({
    events: eventsReducer,
});

export default reducers;