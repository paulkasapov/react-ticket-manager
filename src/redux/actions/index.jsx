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
    LOGIN_IS_UNIQUE,
    ERROR_LOGIN_EXISTS,
    ERROR_INVALID_SIGN_IN
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
        axios.get(`${process.env.REACT_APP_SERVER_URL}/api/tickets/`, {
            headers : {'auth-token': localStorage.authToken}
        } )
            .then((res) => {
                if (res.err) {
                    throw res.err;
                }
                dispatch(ticketsAreLoading(false));
                dispatch(ticketsFetchDataSuccess(res.data))
            })
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
    axios.delete(`${process.env.REACT_APP_SERVER_URL}/api/tickets/delete/${id}`,  {
        headers : {'auth-token': localStorage.authToken}
    } )
        .then(res => {
            console.log(res.data);
        })
        .catch(error => console.log(error.response));
    return{
        type: DELETE_TICKET,
        id
    }
};

export const addTicket = (newTicket) => {
    axios.post(`${process.env.REACT_APP_SERVER_URL}/api/tickets/add`, { ...newTicket }, {
        headers : {'auth-token': localStorage.authToken}
    } )
        .catch(error => console.log(error.response));
    return{
        type: ADD_TICKET,
        newTicket
    }
};

export const addUser = (newUser) => {
    return (dispatch) => {
        axios.post(`${process.env.REACT_APP_SERVER_URL}/api/users/register`, { ...newUser })

            .then(res => {
                console.log(res.data.savedUser)
                localStorage.setItem('authToken', res.data.token)
                dispatch({
                    userData: res.data.savedUser,
                    type: LOG_IN,
                })
            })
            .catch(error => console.log(error));
    }

};

export const logIn = (userName, password) => {
    return (dispatch) => {
        axios.post(`${process.env.REACT_APP_SERVER_URL}/api/users/login`, { userName, password })
            .then(res => {
                localStorage.setItem('authToken', res.data.token)
                dispatch({
                    userData: res.data.userData,
                    type: LOG_IN,
                })
            })
            .catch(() => {
                dispatch({
                    type: ERROR_INVALID_SIGN_IN,
                })
            })
    }
};

export const logOut = () => {
    localStorage.removeItem('authToken')
        return{
            type: LOG_OUT,
        }
};

export const tokenLogIn = () => {

    return (dispatch) => {
        axios.post(`${process.env.REACT_APP_SERVER_URL}/api/users/token_login`, {}, {
            headers : {'auth-token': localStorage.authToken}
        })
            .then((res) => {
                dispatch({
                    type: LOG_IN,
                    userData: res.data
                })
            })
            .catch((error) => console.log(error.response));
    }
};

export const checkUniqueLogin = (userName) => {

    return (dispatch) => {
        axios.post(`${process.env.REACT_APP_SERVER_URL}/api/users/check_unique_login`, {userName})
            .then(() => {
                dispatch({
                    type: LOGIN_IS_UNIQUE,
                })
            })
            .catch(() => {
                dispatch({
                    type: ERROR_LOGIN_EXISTS,
                })
            })
    }
};