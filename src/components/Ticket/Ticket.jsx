import React from 'react'
import moment from "moment";
import styles from './Ticket.module.css'
import Status from "../Status/Status";
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import {changeSelectedTicketId} from "../../redux/actions";

const Ticket = (props) => {
    const {ticket} = props;
    const dispatch = useDispatch()

    return (
        <NavLink to={'/id/' + ticket.ticketId}
                 className={styles.wrapper}
                 onClick={() => dispatch(changeSelectedTicketId(ticket.ticketId))}
                 activeClassName={styles.wrapperSelected}>
            <div className={styles.owner}>
                <img src={ticket.owner.avatar} className={styles.ownerImg} alt={'avatar'}/>
            </div>
            <div className={styles.reported}>{moment(ticket.reportedTime).format('DD/MM/YY HH:mm')}</div>
            <div className={styles.asset}>{ticket.asset.name}</div>
            <div className={styles.status}><Status status={ticket.status}/></div>
        </NavLink>
    )
};

export default Ticket