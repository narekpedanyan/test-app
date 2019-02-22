import {LOGIN_SUCCESS} from '../action-types';

const initialState = {
    isLoggedIn: false,
    user: {}
};

const authData = (state = {...initialState}, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoggedIn: action.payload
            };
        default:
            return state;
    }
};

export default authData;