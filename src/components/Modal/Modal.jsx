import React from 'react'
import styles from './Modal.module.css'
import {useDispatch} from "react-redux";
import {closeModal} from "../../redux/actions";

const Modal = (props) => {

    const {children} = props;
    const dispatch = useDispatch();

    const handlerClose = (e) => {
        if (e.target.id === 'modal') {
            dispatch(closeModal())
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

export default Modal