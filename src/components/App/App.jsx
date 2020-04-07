import React, {useEffect, useState} from 'react';
import styles from './App.module.css';
import {Sidebar} from '../../components/Sidebar/Sidebar'
import {Content} from '../../components/Content/Content'
import {Modal} from "../../components/Modal/Modal";
import {AddTicketForm} from "../../components/AddTicketForm/AddTicketForm";
import {DeleteModal} from "../DeleteModal/DeleteModal";

const App = () => {

    const [state, setState] = useState({
        data: [],
        selectedTicket: '',
        isModalOpen: false,
        modalContent: '',
        lastTicketId: 0,
        currentUser: {
            userId: 4,
            firstName: 'Pavel',
            lastName: 'Kasapov',
            avatar: '/default-avatar.png',
            specialities: ['Programmer']
        }
    });

    useEffect(() => {
        getData();
    }, []);

    const deleteTicket = () => {
        console.log('deleted');
        const data = [...state.data];
        const index = data.indexOf(state.selectedTicket);
        if (index !== -1) {
            data.splice(index, 1);
            setState((prevState) => ({...prevState, data: data, isModalOpen: false, selectedTicket: ''}))
        }
    };

    const openDeleteModal = () => {
        setState((prevState) => ({
            ...prevState,
            isModalOpen: true,
            modalContent: <DeleteModal deleteTicket={deleteTicket} closeModal={handleCloseModal}/>
        }))
    };

    const setSelected = (selectedTicket) => {
        setState((prevState) => ({...prevState, selectedTicket: selectedTicket}))
    };

    const handleOpenAddTicketModal = (content) => {
        setState((prevState) => ({...prevState, isModalOpen: true, modalContent: content}))
    };

    const handleCloseModal = () => {
        setState((prevState) => ({...prevState, isModalOpen: false}))
    };

    const showModal = () => {
        if (state.isModalOpen) {
            return (
                <Modal handleCloseModal={handleCloseModal} isModalOpen={state.isModalOpen}>
                    {state.modalContent}
                </Modal>
            )
        }
        return true
    };

    const handleAddTicket = (ticket) => {
        setState(prevState => ({
            ...prevState,
            data: [...prevState.data, ticket],
            lastTicketId: prevState.lastTicketId + 1,
            isModalOpen: false,
        }));
    };

    const getData = async () => {
        try {
            const res = await fetch("https://raw.githubusercontent.com/Tapify/public-code-test/master/web-ui-test/tickets.json");
            // const res = await fetch('http://127.0.0.1:3030/api/tickets');
            const data = await res.json();
            setState((prevState) => ({...prevState, data: data, lastTicketId: data[data.length - 1].ticketId}));
        } catch (e) {
            console.error('Error:', e)
        }
    };

    console.log(state.data);
    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <div>Tickets</div>
                <button onClick={() => handleOpenAddTicketModal(<AddTicketForm
                    lastTicketId={state.lastTicketId} currentUser={state.currentUser} closeModal={handleCloseModal}
                    handleAddTicket={handleAddTicket}/>)}
                        className={styles.addBtn}>
                    +
                </button>
            </div>
            <div className={styles.content}>
                <Sidebar data={state.data}
                         selectedTicket={state.selectedTicket}
                         setSelected={setSelected}/>

                <Content selectedTicket={state.selectedTicket} openDeleteModal={openDeleteModal}/>
            </div>
            {showModal()}
        </div>
    )
};

export default App;
