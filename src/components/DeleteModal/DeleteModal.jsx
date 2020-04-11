import React from 'react'
import styles from './DeleteModal.module.css'
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {deleteTicket, closeModal} from "../../redux/actions";

const DeleteModal = () => {

    const dispatch = useDispatch();
    const selectedTicketId = useSelector(store => store.tickets.selectedTicketId)

    return (
        <>
            <div className={styles.text}>Are you sure to delete this ticket?</div>
            <div className={styles.btnWrapper}>
                <NavLink to={'/'} className={styles.noLinkStyles}>
                    <button className={styles.btn}
                            onClick={() => {
                                dispatch(deleteTicket(selectedTicketId))
                                dispatch(closeModal())}
                            }>
                        Delete
                    </button>
                </NavLink>
                <button className={styles.btn} onClick={() => dispatch(closeModal())}>Cancel</button>
            </div>
        </>
    )
};

export default DeleteModal