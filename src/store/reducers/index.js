import {combineReducers} from 'redux';
import authData from './authData';
import app from './app';

export default combineReducers({
    authData,
    app
});