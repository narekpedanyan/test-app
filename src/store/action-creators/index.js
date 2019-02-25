import {LOGIN_SUCCESS, LOGOUT_SUCCESS} from '../action-types';

export const logIn = () => ({
    type: LOGIN_SUCCESS
});

export const logOut = () => ({
   type: LOGOUT_SUCCESS
});