import React, {useState} from 'react'
import {Searchbar} from '../SearchBar/Searchbar'
import {TicketList} from '../TicketList/TicketList'
import styles from './Sidebar.module.css'

const Sidebar = (props) => {

    const [state, setState] = useState({
        currentFilter: ''
    });

    const {data, setSelected} = props;

    const handleFilter = () => {
        let filteredData = data;
        if (state.currentFilter) {
            console.log(data);
            filteredData = data.filter(ticket => ticket.asset.name.toLowerCase().includes(state.currentFilter.toLowerCase().trim()));
        }
        return filteredData;
    };

    const handleFilterChange = (e) => {
        setState((prevState) => ({...prevState, currentFilter: e.target.value}))
    };

    return (
        <div className={styles.sidebar}>
            <Searchbar handleFilterChange={handleFilterChange}/>
            <TicketList data={handleFilter()}
                        setSelected={setSelected}/>
        </div>
    )

};

export {Sidebar};