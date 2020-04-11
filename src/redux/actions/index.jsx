import { TICKETS_HAS_ERRORED, TICKETS_IS_LOADING, TICKETS_FETCH_DATA_SUCCESS, OPEN_MODAL, CLOSE_MODAL, CHANGE_SELECTED_TICKET_ID, DELETE_TICKET, ADD_TICKET } from "./type";

export const ticketsHasErrored = (bool) => {
    return {
        type: TICKETS_HAS_ERRORED,
        hasErrored: bool
    };
};

export const ticketsIsLoading = (bool) => {
    return {
        type: TICKETS_IS_LOADING,
        isLoading: bool
    };
};

export const ticketsFetchDataSuccess = (tickets) => {
    return {
        type: TICKETS_FETCH_DATA_SUCCESS,
        tickets
    };
};

export const ticketsFetchData = (url) => {
    return (dispatch) => {
        dispatch(ticketsIsLoading(true));

        fetch(url)
            .then((res) => {
                if (res.err) {
                    throw res.err;
                }
                dispatch(ticketsIsLoading(false));
                return res;
            })
            .then((res) => res.json())
            .then((tickets) => dispatch(ticketsFetchDataSuccess(tickets)))
            .catch((err) => {
                dispatch(ticketsHasErrored(true));
                console.log(err)
            });
    };
};

export const openModal = () => {
    return {
        type: OPEN_MODAL
    }
};

export const closeModal = () => {
    return {
        type: CLOSE_MODAL
    }
};

export const changeSelectedTicketId = (id) => {
    return {
        type: CHANGE_SELECTED_TICKET_ID,
        id
    }
};

export const deleteTicket = (id) => {
    return{
        type: DELETE_TICKET,
        id
    }
};

export const addTicket = (newTicket) => {
    return{
        type: ADD_TICKET,
        newTicket
    }
};