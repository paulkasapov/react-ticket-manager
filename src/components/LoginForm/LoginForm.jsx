import React, {useState} from 'react'
import styles from './LoginForm.module.css'
import {useDispatch} from "react-redux";
import {closeModal, logIn} from "../../redux/actions";
import RegistrationModal from "../RegistrationModal/RegistrationModal";

const LoginForm = (props) => {

    const [, setState] = useState({
        username: '',
        password: '',
        currentUser: {
            userId: 4,
            firstName: 'Pavel',
            lastName: 'Kasapov',
            avatar: '/default-avatar.png',
            specialities: ['Programmer']
        }
    });

    const {handleOpenModal} = props

    const dispatch = useDispatch();

    const handleInput = (event) => {
        const {value, name} = event.currentTarget;
        setState((prevState) => ({...prevState, [name]: value,}));
        console.log(name, value)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(logIn());
        dispatch(closeModal())
    };

    return (
        <form className={styles.wrapper} autoComplete={'off'}>
            <div className={styles.formField}>
                <p className={styles.label}>Login</p>
                <input className={styles.textInput} type={'text'} name='username' onChange={handleInput}/>
            </div>
            <div className={styles.formField}>
                <p className={styles.label}>Password</p>
                <input className={styles.textInput} type={'password'} name='password' onChange={handleInput}/>
            </div>
            <div className={styles.formField}>
                <p>Not a member? <a className={styles.registrationLink} href={'#'} onClick={() => handleOpenModal(<RegistrationModal/>)}>Create your account</a></p>
            </div>
            <div className={styles.submitWrapper}>
                <button className={styles.submitBtn} onClick={handleSubmit}>Sign In</button>
            </div>
        </form>
    )
};

export default LoginForm