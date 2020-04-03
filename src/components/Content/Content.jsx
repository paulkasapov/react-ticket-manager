import React from 'react'
import {TicketDescription} from '../TicketDescription/TicketDescription'
import moment from "moment";
import Cross from '../../assets/cross.png'
import styles from'./Content.module.css'

const Content = props => {

    const showDescription = (ticket) => {
        if (ticket) {
            return (
                <div className={styles.wrapper}>
                    <div className={styles.ticketHeader}>
                        <div>
                            <div className={styles.ticketNoLabel}>TICKET NO.</div>
                            <div className={styles.ticketNo}>{props.selectedTicket.number}</div>
                        </div>
                        <div className={styles.lastUpdated}>LAST UPDATED: {moment(props.selectedTicket.lastUpdatedTime).format('DD/MM/YY hh:mm')}</div>
                    </div>

                    <TicketDescription selectedTicket={props.selectedTicket}
                                       renderStatus={props.renderStatus}/>
                </div>)
        }
        return <div className={styles.wrapperNotSelected}>
            <div className={styles.notSelected}>
                <img src={Cross} className={styles.cross}/>
                <div>No ticket selected</div>
            </div>
        </div>
    }

    return (
        showDescription(props.selectedTicket)
    )

}

export {Content};