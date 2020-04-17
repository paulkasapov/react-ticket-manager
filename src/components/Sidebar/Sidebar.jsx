import React, {useState} from 'react'
import Searchbar from '../SearchBar/Searchbar'
import TicketList from '../TicketList/TicketList'
import styles from './Sidebar.module.css'
import {useSelector} from "react-redux";
import LoginForm from "../LoginForm/LoginForm";

const Sidebar = (props) => {

    const {handleOpenModal} = props;

    const [state, setState] = useState({
        searchTerm: ''
    });

    const isLoggedIn = useSelector(state => state.isLoggedIn)

    const handleSearchTermChange = (value) => {
        setState((prevState) => ({...prevState, searchTerm: value}))
    };

    return (
        <>
            {isLoggedIn ? (
                <div className={styles.sidebar}>
                    <Searchbar handleSearchTermChange={handleSearchTermChange}/>
                    <TicketList searchTerm={state.searchTerm}/>
                </div>
            ) : (
                <div className={styles.sidebar}>
                    <LoginForm handleOpenModal={handleOpenModal}/>
                </div>
                )}
        </>
    )

};

export default Sidebar