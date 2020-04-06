import React from 'react'
import styles from './AddTicketForm.module.css'

class AddTicketForm extends React.Component {

    state = {
        name: '',
        description: '',
        status: 'unassigned',
        geoCode: '',
        kmFrom: '',
        kmTo: '',
    }

    handleInput = event => {
        const { value, name } = event.currentTarget;
        this.setState(() => ({[name]: value,}));
    };

    handleSubmit = (e) => {
        e.preventDefault()
        const now = JSON.parse(JSON.stringify({now: new Date()})).now;
        const ticket = {
            ticketId: this.props.lastTicketId + 1,
            number: `PU-OV-${this.props.lastTicketId + 1}`,
            lastUpdatedTime: now,
            owner: this.props.currentUser,
            reporterTime: now,
            status: this.state.status,
            description: this.state.description,
            asset: {
                assetId: this.props.lastTicketId + 1,
                name: this.state.name,
                geoCode: this.state.geoCode,
                kmFrom: this.state.kmFrom,
                kmTo: this.state.kmTo,
            }
        }
        this.props.handleAddTicket(ticket)
    }

    render() {
        console.log('Рендер формы')
        return (
            <form>
                <div className={styles.formField}>
                    <p className={styles.label}>Ticket name</p>
                    <input className={styles.nameInput} type={'text'} name='name' onChange={this.handleInput}/>
                </div>
                <div className={styles.formField}>
                    <p className={styles.label}>Ticket description</p>
                    <textarea className={styles.descriptionInput} name='description' onChange={this.handleInput}/>
                </div>
                <div className={styles.formFieldSmall}>
                    <p className={styles.label}>Status</p>
                    <select className={styles.select} name='status' onChange={this.handleInput}>
                        <option className={styles.optionUnassigned} value={'unassigned'}>UNA</option>
                        <option className={styles.optionAssigned} value={'assigned'}>ASD</option>
                        <option className={styles.optionCompleted} value={'complete'}>COM</option>
                    </select>
                </div>
                <div className={`${styles.formFieldSmall} ${styles.autoWidth}`}>
                    <p className={styles.label}>GeoCode</p>
                    <input className={styles.smallInput} type={'text'} name='geoCode' onChange={this.handleInput}/>
                </div>
                <div className={`${styles.formFieldSmall} ${styles.autoWidth}`}>
                    <p className={styles.label}>Kilometers</p>
                    <input className={styles.smallInput} type={'text'} placeholder={'From'} name='kmFrom' onChange={this.handleInput}/>
                    <input className={styles.smallInput} type={'text'} placeholder={'To'} name='kmTo' onChange={this.handleInput}/>
                </div>
                <div className={styles.submitWrapper}>
                    <button className={styles.submitBtn} onClick={this.handleSubmit}>Submit</button>
                </div>
            </form>
        )
    }
}

export {AddTicketForm};