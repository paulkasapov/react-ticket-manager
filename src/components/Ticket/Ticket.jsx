import React from 'react'
import moment from "moment";
import styles from './Ticket.module.css'

const Ticket = props => {
    return (
        <>
            <div onClick={() => props.setSelected(props.ticket)}
                 className={props.selectedTicket.ticketId === props.ticket.ticketId ? styles.wrapperSelected : styles.wrapper}>
                <div className={styles.owner}>
                    <img src={props.ticket.owner.avatar} className={styles.ownerImg}/>
                </div>
                <div className={styles.reported}>{moment(props.ticket.reportedTime).format('DD/MM/YY hh:mm')}</div>
                <div className={styles.asset}>{props.ticket.asset.name}</div>
                <div className={styles.status}>{props.renderStatus(props.ticket.status)}</div>
            </div>
        </>
    )
}

export {Ticket};