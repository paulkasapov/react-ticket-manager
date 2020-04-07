import React from 'react'
import styles from './DeleteModal.module.css'

const DeleteModal  = (props) => {
    const {deleteTicket, closeModal} = props
    return (
        <>
            <div className={styles.text}>Are you sure to delete this ticket?</div>
            <div className={styles.btnWrapper}>
                <button className={styles.btn} onClick={deleteTicket}>Delete</button>
                <button className={styles.btn} onClick={closeModal}>Cancel</button>
            </div>
        </>
    )
}

export {DeleteModal};