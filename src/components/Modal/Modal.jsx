import React from 'react'
import styles from './Modal.module.css'
// import cx from 'classnames'

const Modal = props => {
    // const {size} = props; //деструктуризация
    //
    // const className = cx(styles.customBox, {
    //     [styles.tiny]:size === 'sm',
    //     [styles.medium]:size === 'md',
    // })

    const showModalPopUp = (isModalOpen) => {
        if (isModalOpen) {
            return (
                <div id={'modal'} onClick={handlerClose} className={styles.modal}>
                    <div className={styles.modalContent}>
                        {props.children}
                    </div>
                </div>
            )
        }
        return true
    }

    const handlerClose = (e) => {
        if (e.target.id === 'modal') {
            props.handleCloseModal()
        }
    }

    return (
        showModalPopUp(props.isModalOpen)
    )
}

export {Modal};