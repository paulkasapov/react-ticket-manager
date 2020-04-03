import React from 'react'
import {Searchbar} from '../SearchBar/Searchbar'
import {TicketList} from '../TicketList/TicketList'
import styles from './Sidebar.module.css'

class Sidebar extends React.Component {

    state = {
        currentFilter: ''
    }

    handleFilter = () => {
        const data = this.props.data
        let filteredData = data;
        if (this.state.currentFilter) {
            console.log(data)
            filteredData = data.filter(ticket => ticket.asset.name.toLowerCase().includes(this.state.currentFilter.toLowerCase().trim()));
        }
        return filteredData;
    }

    handleFilterChange = (e) => {
        //
        this.setState({currentFilter: e.target.value})
    }

    render() {
        return (
            <div className={styles.sidebar}>
                <Searchbar handleFilterChange={this.handleFilterChange}/>
                <TicketList data={this.handleFilter()}
                            selectedTicket={this.props.selectedTicket}
                            setSelected={this.props.setSelected}
                            renderStatus={this.props.renderStatus}/>
            </div>
        )
    }
}

export {Sidebar};