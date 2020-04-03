import React from 'react'
import styles from './AddTicketForm.module.css'

const AddTicketForm = props => {

    return (
        <form>
            <div className={styles.formField}>
                <p className={styles.label}>Ticket name</p>
                <input className={styles.nameInput} type={'text'}/>
            </div>
            <div className={styles.formField}>
                <p className={styles.label}>Ticket description</p>
                <textarea className={styles.descriptionInput} type={'text'}/>
            </div>
            <div className={styles.formFieldSmall}>
                <p className={styles.label}>Status</p>
                <select className={styles.select}>
                    <option className={styles.optionUnassigned}>UNA</option>
                    <option className={styles.optionAssigned}>ASD</option>
                    <option className={styles.optionCompleted}>COM</option>
                </select>
            </div>
            <div className={`${styles.formFieldSmall} ${styles.autoWidth}`}>
                <p className={styles.label}>GeoCode</p>
                <input className={styles.smallInput} type={'text'}/>
            </div>
            <div className={`${styles.formFieldSmall} ${styles.autoWidth}`}>
                <p className={styles.label}>Kilometers</p>
                <input className={styles.smallInput} type={'text'} placeholder={'From'}/><input className={styles.smallInput} type={'text'} placeholder={'To'}/>
            </div>
            <div className={styles.submitWrapper}>
                <button className={styles.submitBtn}>Submit</button>
            </div>
        </form>
    )
}

export {AddTicketForm};