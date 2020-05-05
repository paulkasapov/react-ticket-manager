import React, {useEffect, useState} from 'react';
import styles from './App.module.css';
import Sidebar from '../../components/Sidebar/Sidebar'
import Content from '../../components/Content/Content'
import Modal from "../../components/Modal/Modal";
import AddTicketModal from "../AddTicketModal/AddTicketModal";
import { BrowserRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { openModal, ticketsFetchData } from "../../redux/actions";
require('dotenv').config();

const App = () => {

    const [state, setState] = useState({
        modalContent: '',
        currentUser: {
            userId: 4,
            firstName: 'Pavel',
            lastName: 'Kasapov',
            avatar: '/default-avatar.png',
            specialities: ['Programmer']
        }
    });

    const dispatch = useDispatch();
    const isModalOpen = useSelector(state => state.isModalOpen);
    const isLoggedIn = useSelector(state => state.isLoggedIn);

    useEffect(() => {
        dispatch(ticketsFetchData(`${process.env.REACT_APP_SERVER_URL}/api/tickets`));
        // dispatch(ticketsFetchData("https://nodejs-ticket-manager.herokuapp.com/api/tickets"));
    }, []);

    const handleOpenModal = (content) => {
        dispatch(openModal());
        setState((prevState) => ({...prevState, modalContent: content}))
    };

    const showModal = () => {
        if (isModalOpen) {
            return (
                <Modal>
                    {state.modalContent}
                </Modal>
            )
        }
        return true
    };

    return (
        <BrowserRouter>
            <div className={styles.wrapper}>
                <div className={styles.header}>
                    <div>Tickets</div>
                    {isLoggedIn ? (
                        <button onClick={() => handleOpenModal(<AddTicketModal/>)}
                                className={styles.addBtn}>
                            +
                        </button>
                    ):(
                        <></>
                    )}
                </div>
                <div className={styles.content}>
                    <Sidebar handleOpenModal={handleOpenModal}/>
                    <Content handleOpenModal={handleOpenModal}/>
                </div>
                {showModal()}
            </div>
        </BrowserRouter>
    )
};

export default App;
