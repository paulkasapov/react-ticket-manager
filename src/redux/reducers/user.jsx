import {LOG_IN} from "../actions/type";

const userReducer = (state = {}, action) => {
    switch (action.type) {

        case LOG_IN:
            return action.userData
        default:
            return state;
    }
};

export default userReducer