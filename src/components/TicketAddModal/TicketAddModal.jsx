import React from 'react'
import styles from './TicketAddModal.module.css'
// import cx from 'classnames'

const TicketAddModal = props => {
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
                        <form>
                            <div className={`${styles.formField} ${styles.nameField}`}>
                                <p>Ticket name</p>
                                <input type={'text'}/>
                            </div>
                            <div className={`${styles.formField} ${styles.descriptionField}`}>
                                <p>Ticket description</p>
                                <textarea type={'text'}/>
                            </div>
                            <div className={`${styles.formField} ${styles.statusField}`}>
                                <p>Status</p>
                                <select>
                                    <option className={styles.assignedSelect}>ASD</option>
                                    <option className={styles.unassignedSelect}>UNA</option>
                                    <option className={styles.completedSelect}>COM</option>
                                </select>
                            </div>
                            <div className={`${styles.formField} ${styles.geocodeField}`}>
                                <p>GeoCode</p>
                                <input type={'text'}/>
                            </div>
                            <div className={`${styles.formField} ${styles.kilometersField}`}>
                                <p>Kilometers</p>
                                <input type={'text'} placeholder={'From'}/><input type={'text'} placeholder={'To'}/>
                            </div>
                            <div className={styles.submitBtn}>
                                <input type={"submit"} value={'Submit'}/>
                            </div>
                        </form>
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

export {TicketAddModal};