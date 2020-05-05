import React, {useEffect} from 'react'
import Ticket from '../Ticket/Ticket'
import styles from './TicketList.module.css'
import {useDispatch, useSelector} from "react-redux";
import {ticketsFetchData} from "../../redux/actions";

const TicketList = props => {

    const {searchTerm} = props;
    const data = useSelector(state => state.tickets.items);

    const dispatch = useDispatch();



    const renderTickets = () => {
        return (
            data.filter(ticket => ticket.asset.name.toLowerCase().includes(searchTerm.toLowerCase().trim()))
                .map((item) => <Ticket key={item.ticketId} ticket={item}/>)
        )
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <div className={styles.headerOwner}>OWNER</div>
                <div className={styles.headerReported}>REPORTED</div>
                <div className={styles.headerAsset}>ASSET</div>
                <div className={styles.headerStatus}>STATUS</div>
            </div>
            <div className={styles.list}>
                {renderTickets()}
            </div>
        </div>
    )
};

export default TicketList