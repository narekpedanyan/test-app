import {combineReducers} from 'redux';
import authData from './authData';
import tasksData from './data';
import app from './app';

export default combineReducers({
    authData,
    tasksData,
    app
});