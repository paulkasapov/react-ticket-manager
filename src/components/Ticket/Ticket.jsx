import React from 'react'
import moment from "moment";
import styles from './Ticket.module.css'
import {Status} from "../Status/Status";
import {NavLink} from "react-router-dom";

const Ticket = (props) => {
    const {ticket, setSelected} = props;
    return (
        <NavLink to={'/id/' + ticket.ticketId} onClick={() => setSelected(ticket)}
                 className={styles.wrapper} activeClassName={styles.wrapperSelected}>
            <div className={styles.owner}>
                <img src={ticket.owner.avatar} className={styles.ownerImg} alt={'avatar'}/>
            </div>
            <div className={styles.reported}>{moment(ticket.reportedTime).format('DD/MM/YY hh:mm')}</div>
            <div className={styles.asset}>{ticket.asset.name}</div>
            <div className={styles.status}><Status status={ticket.status}/></div>
        </NavLink>
    )
};

export {Ticket};