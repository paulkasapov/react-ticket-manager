import React from 'react'
import moment from "moment";
import styles from './Ticket.module.css'
import {Status} from "../Status/Status";

const Ticket = (props) => {
    const {ticket, selectedTicket, setSelected} = props;
    return (
        <>
            <div onClick={() => setSelected(ticket)}
                 className={selectedTicket.ticketId === ticket.ticketId ? styles.wrapperSelected : styles.wrapper}>
                <div className={styles.owner}>
                    <img src={ticket.owner.avatar} className={styles.ownerImg} alt={'avatar'}/>
                </div>
                <div className={styles.reported}>{moment(ticket.reportedTime).format('DD/MM/YY hh:mm')}</div>
                <div className={styles.asset}>{ticket.asset.name}</div>
                <div className={styles.status}><Status status={ticket.status}/></div>
            </div>
        </>
    )
};

export {Ticket};