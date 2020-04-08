import React from 'react'
import {TicketDescription} from '../TicketDescription/TicketDescription'
import moment from "moment";
import Cross from '../../assets/cross.png'
import Trash from '../../assets/trash.png'
import styles from './Content.module.css'
import {Route, Switch} from "react-router-dom";

const ShowDescription = (props) => {
    const {data, openDeleteModal, match: {params}} = props;
    const selectedTicket = data.find(item => item.ticketId === +params.id);
    if (selectedTicket) {
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
                    <button className={styles.trash} onClick={() => openDeleteModal(+params.id)}>
                        <img className={styles.trashImg} src={Trash} alt={'trash'}/>
                    </button>
                </div>
                <TicketDescription selectedTicket={selectedTicket}/>
            </div>)
    }
    return true
};

const ShowNoDescription = () => {
    return <div className={styles.wrapperNotSelected}>
        <div className={styles.notSelected}>
            <img src={Cross} alt={'cross'} className={styles.cross}/>
            <div>No ticket selected</div>
        </div>
    </div>
};

const Content = (props) => {

    const {data, selectedTicket, openDeleteModal} = props;

    return (
        <Switch>
            <Route
                path={'/id/:id'}
                render={(props) => <ShowDescription {...props} data={data} selectedTicket={selectedTicket}
                                                    openDeleteModal={openDeleteModal}/>}
            />
            <Route path={'/'} component={ShowNoDescription}/>
        </Switch>
    )

};

export {Content};