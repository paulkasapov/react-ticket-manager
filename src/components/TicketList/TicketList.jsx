import React from 'react'
import {Ticket} from '../Ticket/Ticket'
import styles from './TicketList.module.css'

const TicketList = props => {

    const renderTickets = () => {
        return (
            props.data.map((item) => <Ticket key={item.ticketId}
                                                  ticket={item}
                                                  selectedTicket={props.selectedTicket}
                                                  setSelected={props.setSelected}
                                                  renderStatus={props.renderStatus}/>)
        )
    }

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
}

export {TicketList};