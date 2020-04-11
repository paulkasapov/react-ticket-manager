import { TICKETS_IS_LOADING, TICKETS_FETCH_DATA_SUCCESS, TICKETS_HAS_ERRORED, DELETE_TICKET, CHANGE_SELECTED_TICKET_ID, ADD_TICKET } from "../actions/type";

const initialState = {items: [], isLoading: false, hasErrored: false, selectedTicketId: -1};

const ticketsReducer = (state = initialState, action) => {
    switch (action.type) {
        case TICKETS_IS_LOADING:
            return {
                ...state,
                isLoading: action.isLoading
            };

        case TICKETS_FETCH_DATA_SUCCESS:
            return {
                ...state,
                items: action.tickets
            };

        case TICKETS_HAS_ERRORED:
            return {
                ...state,
                hasErrored: action.hasErrored
            };

        case DELETE_TICKET:
            return {
                ...state,
                items: state.items.filter(item => item.ticketId !== action.id)
            };

        case CHANGE_SELECTED_TICKET_ID:
            return {
                ...state,
                selectedTicketId: action.id
            };

        case ADD_TICKET:
            console.log(action.newTicket)
            return {
                ...state,
                items: [...state.items, action.newTicket]
            }

        default:
            return state;
    }
};

export default ticketsReducer


