import {┬ácombineReducers } from 'redux';
import todos from './todos';
import counter from './counter';
import info from './info';

export default combineReducers({
    todos,
    counter,
    info,
});