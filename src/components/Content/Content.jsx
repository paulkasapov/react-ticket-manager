import React, { useEffect} from 'react'
import TicketDescription from '../TicketDescription/TicketDescription'
import moment from "moment";
import Cross from '../../assets/cross.png'
import Trash from '../../assets/trash.png'
import styles from './Content.module.css'
import { Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changeSelectedTicketId } from "../../redux/actions";
import DeleteModal from "../DeleteModal/DeleteModal";

const ShowDescription = (props) => {
    const {handleOpenModal, match: {params}} = props;
    const dispatch = useDispatch();
    const data = useSelector(state => state.tickets.items);
    const selectedTicketId = useSelector(state => state.tickets.selectedTicketId);
    const selectedTicket = data.find(item => item.ticketId === selectedTicketId);

    useEffect(() => {
        dispatch(changeSelectedTicketId(+params.id))
    })

    return (
        <>
            {selectedTicket ? (
                    <div className={styles.wrapper}>
                        <div className={styles.ticketHeader}>
                            <div>
                                <div className={styles.ticketNoLabel}>TICKET NO.</div>
                                <div className={styles.ticketNo}>{selectedTicket.number}</div>

                            </div>
                            <div className={styles.lastUpdated}>
                                LAST UPDATED: {moment(selectedTicket.lastUpdatedTime).format('DD/MM/YY HH:mm')}

                            </div>
                            <button className={styles.trash} onClick={() => handleOpenModal(<DeleteModal/>)}>
                                <img className={styles.trashImg} src={Trash} alt={'trash'}/>
                            </button>
                        </div>
                        <TicketDescription selectedTicket={selectedTicket}/>
                    </div>
                ) : (
                    <div className={styles.wrapper}>
                        <p>Loading</p>
                    </div>
                )
            }
        </>
    )
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

    const {selectedTicket, handleOpenModal} = props;
    const isLoggedIn = useSelector(state => state.isLoggedIn);

    return (
        <>
            {isLoggedIn ? (
                <Switch>
                    <Route
                        path={'/id/:id'}
                        render={(props) => <ShowDescription {...props} selectedTicket={selectedTicket}
                                                            handleOpenModal={handleOpenModal}/>}
                    />
                    <Route path={'/'} component={ShowNoDescription}/>
                </Switch>
            ) : (
                <div className={styles.wrapper}>
                    <p>You should be logged in</p>
                </div>
            )
            }
        </>

    )
};

export default Content