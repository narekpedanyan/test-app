import {TOGGLE_POPUP, UPDATE_TASKS} from "../action-types";

const initialState = {
    openPopup: false,
    filterTasks: false,
    tasksInfo: null
};

const tasksData = (state = {...initialState}, action) => {
    switch (action.type) {
        case TOGGLE_POPUP: {
            return {
                ...state,
                openPopup: action.payload
            }
        }
        case UPDATE_TASKS:
            return {
                ...state,
                tasksInfo: action.payload
            };
        default:
            return state;
    }
};

export default tasksData;