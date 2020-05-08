import {LOG_IN, LOG_OUT} from "../actions/type";

const userReducer = (state = {}, action) => {
    switch (action.type) {
        case LOG_IN:
            return action.userData
        case LOG_OUT:
            return {}
        default:
            return state;
    }
};

export default userReducer