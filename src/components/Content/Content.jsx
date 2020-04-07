import React from 'react'
import {TicketDescription} from '../TicketDescription/TicketDescription'
import moment from "moment";
import Cross from '../../assets/cross.png'
import Trash from '../../assets/trash.png'
import styles from './Content.module.css'

const Content = (props) => {

    const {selectedTicket, openDeleteModal} = props;

    // const deleteTicket = () => {
    //
    // }

    const showDescription = (ticket) => {
        if (ticket) {
            return (
                <div className={styles.wrapper}>
                    <div className={styles.ticketHeader}>
                        <div>
                            <div className={styles.ticketNoLabel}>TICKET NO.</div>
                            <div className={styles.ticketNo}>{selectedTicket.number}</div>

                        </div>
                        <div className={styles.lastUpdated}>
                            LAST UPDATED: {moment(selectedTicket.lastUpdatedTime).format('DD/MM/YY hh:mm')}

                        </div>
                        <button className={styles.trash} onClick={openDeleteModal}>
                            <img className={styles.trashImg} src={Trash} alt={'trash'}/>
                        </button>
                    </div>

                    <TicketDescription selectedTicket={selectedTicket}/>
                </div>)
        }
        return <div className={styles.wrapperNotSelected}>
            <div className={styles.notSelected}>
                <img src={Cross} alt={'cross'} className={styles.cross}/>
                <div>No ticket selected</div>
            </div>
        </div>
    };

    return (
        showDescription(selectedTicket)
    )

};

export {Content};