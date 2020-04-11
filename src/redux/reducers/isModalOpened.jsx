import { OPEN_MODAL, CLOSE_MODAL } from "../actions/type";

const modalReducer = (state = false, action) => {
    switch (action.type) {
        case OPEN_MODAL:
            return true;
        case CLOSE_MODAL :
            return false;
        default:
            return state;
    }
};

export default  modalReducer;