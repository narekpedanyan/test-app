import {LOGIN_SUCCESS, LOGOUT_SUCCESS, GUEST_ENTER_NAME, GUEST_SUCCESS, GUEST_LOGOUT, SET_USER} from '../action-types';

const initialState = {
    user: {},
    isLoggedIn: false,
    guest: false,
    guestStage: false
};

const authData = (state = {...initialState}, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoggedIn: true
            };
        case LOGOUT_SUCCESS:
            return {
                ...state,
                isLoggedIn: false
            };
        case GUEST_ENTER_NAME:
            return {
                ...state,
                guestStage: action.payload
            };
        case GUEST_SUCCESS:
            return {
                ...state,
                guest: true
            };
        case GUEST_LOGOUT:
            return {
                ...state,
                guest: false
            };
        case SET_USER:
            return {
                ...state,
                user: action.payload
            };
        default:
            return state;
    }
};

export default authData;