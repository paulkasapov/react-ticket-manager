import React, {useState} from 'react'
import Searchbar from '../SearchBar/Searchbar'
import TicketList from '../TicketList/TicketList'
import styles from './Sidebar.module.css'

const Sidebar = (props) => {

    const [state, setState] = useState({
        searchTerm: ''
    });

    const handleSearchTermChange = (value) => {
        setState((prevState) => ({...prevState, searchTerm: value}))
    };

    return (
        <div className={styles.sidebar}>
            <Searchbar handleSearchTermChange={handleSearchTermChange}/>
            <TicketList searchTerm={state.searchTerm}/>
        </div>
    )

};

export default Sidebar