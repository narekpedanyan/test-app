import {
    GUEST_ENTER_NAME,
    LOGIN_SUCCESS,
    LOGOUT_SUCCESS,
    GUEST_SUCCESS,
    GUEST_LOGOUT,
    SET_USER,
    TOGGLE_POPUP,
    UPDATE_TASKS
} from '../action-types';

export const logIn = () => ({
    type: LOGIN_SUCCESS
});

export const logOut = () => ({
    type: LOGOUT_SUCCESS
});

export const enterGuest = (payload) => ({
    type: GUEST_ENTER_NAME,
    payload
});

export const guestLogIn = () => ({
    type: GUEST_SUCCESS
});

export const guestLogOut = () => ({
    type: GUEST_LOGOUT
});

export const setUser = (payload) => ({
    type: SET_USER,
    payload
});

export const togglePopUp = (payload) => ({
    type: TOGGLE_POPUP,
    payload
});

export const updateTasks = (payload) => ({
    type: UPDATE_TASKS,
    payload
});