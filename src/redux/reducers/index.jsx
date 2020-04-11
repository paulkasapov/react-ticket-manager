import {combineReducers} from "redux";
import ticketsReducer from "./tickets";
import modalReducer from "./isModalOpened";

const allReducer = combineReducers({
    tickets: ticketsReducer,
    isModalOpen: modalReducer
});

export default allReducer