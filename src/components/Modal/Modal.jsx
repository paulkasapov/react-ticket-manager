import React from 'react'
import styles from './Modal.module.css'

const Modal = (props) => {

    const {children} = props;

    return (
        <div className={styles.modal}>
            <div className={styles.modalContent}>
                {children}
            </div>
        </div>
    )
};

export default Modal