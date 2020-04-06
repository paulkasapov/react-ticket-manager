import React from 'react'
import styles from './Modal.module.css'
// import cx from 'classnames'

const Modal = (props) => {

    // const className = cx(styles.customBox, {
    //     [styles.tiny]:size === 'sm',
    //     [styles.medium]:size === 'md',
    // })

    const {handleCloseModal, children} = props;

    const handlerClose = (e) => {
        if (e.target.id === 'modal') {
            handleCloseModal()
        }
    };

    return (
        <div id={'modal'} onClick={handlerClose} className={styles.modal}>
            <div className={styles.modalContent}>
                {children}
            </div>
        </div>
    )
};

export {Modal};