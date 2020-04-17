import React, {useState} from 'react'
import styles from './AddTicketModal.module.css'
import {useDispatch, useSelector} from "react-redux";
import {addTicket, changeSelectedTicketId, closeModal} from "../../redux/actions";

const AddTicketModal = () => {

    const [state, setState] = useState({
        name: '',
        description: '',
        status: 'unassigned',
        geoCode: '',
        kmFrom: '',
        kmTo: '',
        currentUser: {
            userId: 4,
            firstName: 'Pavel',
            lastName: 'Kasapov',
            avatar: '/default-avatar.png',
            specialities: ['Programmer']
        }
    });

    const dispatch = useDispatch();
    const data = useSelector(state => state.tickets.items);
    let lastTicketId = 0;
    if (data.length) {lastTicketId = data[data.length - 1].ticketId;}

    const handleInput = (event) => {
        const {value, name} = event.currentTarget;
        setState((prevState) => ({...prevState, [name]: value,}));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const now = JSON.parse(JSON.stringify({now: new Date()})).now;
        const ticket = {
            ticketId: lastTicketId + 1,
            number: `PU-OV-${lastTicketId + 1}`,
            lastUpdatedTime: now,
            owner: state.currentUser,
            reportedTime: now,
            status: state.status,
            description: state.description,
            asset: {
                assetId: lastTicketId + 1,
                name: state.name,
                geoCode: state.geoCode,
                kmFrom: +state.kmFrom,
                kmTo: +state.kmTo,
            }
        };
        dispatch(addTicket(ticket));
        dispatch(changeSelectedTicketId(lastTicketId + 1));
        dispatch(closeModal())
    };

    return (
        <form className={styles.wrapper} autoComplete={'off'}>
            <div className={styles.closeBtnWrapper}>
                <button onClick={() => dispatch(closeModal())} className={styles.closeBtn}>x</button>
            </div>
            <div className={styles.formField}>
                <p className={styles.label}>Ticket name</p>
                <input className={styles.nameInput} type={'text'} name='name' onChange={handleInput}/>
            </div>
            <div className={styles.formField}>
                <p className={styles.label}>Ticket description</p>
                <textarea className={styles.descriptionInput} name='description' onChange={handleInput}/>
            </div>
            <div className={styles.formFieldSmall}>
                <p className={styles.label}>Status</p>
                <select className={styles.select} name='status' onChange={handleInput}>
                    <option className={styles.optionUnassigned} value={'unassigned'}>UNA</option>
                    <option className={styles.optionAssigned} value={'assigned'}>ASD</option>
                    <option className={styles.optionCompleted} value={'completed'}>COM</option>
                </select>
            </div>
            <div className={`${styles.formFieldSmall} ${styles.autoWidth}`}>
                <p className={styles.label}>GeoCode</p>
                <input className={styles.smallInput} type={'text'} name='geoCode' onChange={handleInput}/>
            </div>
            <div className={`${styles.formFieldSmall} ${styles.autoWidth}`}>
                <p className={styles.label}>Kilometers</p>
                <input className={styles.smallInput} type={'text'} placeholder={'From'} name='kmFrom'
                       onChange={handleInput}/>
                <input className={styles.smallInput} type={'text'} placeholder={'To'} name='kmTo'
                       onChange={handleInput}/>
            </div>
            <div className={styles.submitWrapper}>
                <button className={styles.submitBtn} onClick={handleSubmit}>Submit</button>
            </div>
        </form>
    )
};

export default AddTicketModal