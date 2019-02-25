import {LOGIN_SUCCESS, LOGOUT_SUCCESS} from '../action-types';

const initialState = {
    user: {
        userName: null
    },
    isLoggedIn: false,
    guest: false
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
        default:
            return state;
    }
};

export default authData;