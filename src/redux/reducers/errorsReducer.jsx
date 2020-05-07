import {ERROR_LOGIN_EXISTS, ERROR_INVALID_SIGN_IN, LOGIN_IS_UNIQUE, LOG_IN} from "../actions/type";

const initialState = {isSignInError: false, isLoginExists: false};

const errorsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ERROR_LOGIN_EXISTS:
            return {
                ...state,
                isLoginExists: true
            };

        case ERROR_INVALID_SIGN_IN:
            return {
                ...state,
                isSignInError: true
            };

        case LOGIN_IS_UNIQUE:
            return {
                ...state,
                isLoginExists: false
            };

        case LOG_IN:
            return {
                ...state,
                isSignInError: false
            };

        default:
            return state;
    }
};

export default errorsReducer


