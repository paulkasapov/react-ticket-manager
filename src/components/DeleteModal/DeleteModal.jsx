import React from 'react'
import styles from './DeleteModal.module.css'
import {NavLink} from "react-router-dom";

const DeleteModal = (props) => {
    const {deleteTicket, closeModal} = props;
    return (
        <>
            <div className={styles.text}>Are you sure to delete this ticket?</div>
            <div className={styles.btnWrapper}>
                <NavLink to={'/'} className={styles.noLinkStyles}>
                    <button className={styles.btn} onClick={deleteTicket}>Delete</button>
                </NavLink>
                <button className={styles.btn} onClick={closeModal}>Cancel</button>
            </div>
        </>
    )
};

export {DeleteModal};