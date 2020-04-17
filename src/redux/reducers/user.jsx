import { ADD_USER } from "../actions/type";

const userReducer = (state = {}, action) => {
    switch (action.type) {
        case ADD_USER:
            return {
                ...state,
                currentUser: action.newUser
            };
        default:
            return state;
    }
};

export default userReducer