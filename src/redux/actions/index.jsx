import axios from 'axios';
import {
    TICKETS_HAS_ERRORED,
    TICKETS_IS_LOADING,
    TICKETS_FETCH_DATA_SUCCESS,
    OPEN_MODAL,
    CLOSE_MODAL,
    CHANGE_SELECTED_TICKET_ID,
    DELETE_TICKET,
    ADD_TICKET,
    LOG_IN,
    LOG_OUT,
    ADD_USER
} from "./type";

export const ticketsHasErrored = (bool) => {
    return {
        type: TICKETS_HAS_ERRORED,
        hasErrored: bool
    };
};

export const ticketsAreLoading = (bool) => {
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
        dispatch(ticketsAreLoading(true));

        fetch(url)
            .then((res) => {
                if (res.err) {
                    throw res.err;
                }
                dispatch(ticketsAreLoading(false));
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
    axios.post(`http://localhost:3030/api/tickets/add`, { ...newTicket })
        .then(res => {
            console.log(res);
            console.log(res.data);
        })
        .catch(error => console.log(error));
    return{
        type: ADD_TICKET,
        newTicket
    }
};

export const addUser = (newUser) => {
    axios.post(`http://localhost:3030/api/users/register`, { ...newUser })
        .then(res => {
            console.log(res);
            console.log(res.data);
        })
        .catch(error => console.log(error));
    return{
        type: ADD_USER,
        newUser
    }
};

export const logIn = () => {
    return{
        type: LOG_IN,
    }
};

export const logOut = () => {
    return{
        type: LOG_OUT,
    }
};