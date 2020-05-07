import {combineReducers} from "redux";
import ticketsReducer from "./tickets";
import modalReducer from "./modalReducer";
import loggedReducer from "./loggedReducer";
import userReducer from "./user";
import errorsReducer from "./errorsReducer"


const allReducer = combineReducers({
    tickets: ticketsReducer,
    isModalOpen: modalReducer,
    isLoggedIn: loggedReducer,
    currentUser: userReducer,
    errors: errorsReducer
});

export default allReducer