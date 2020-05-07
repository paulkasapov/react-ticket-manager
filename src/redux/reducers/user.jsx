import {ADD_USER, LOG_IN} from "../actions/type";

const userReducer = (state = {}, action) => {
    switch (action.type) {
        case ADD_USER:
            return action.newUser
        case LOG_IN:
            console.log(action)
            return action.userData
        default:
            return state;
    }
};

export default userReducer