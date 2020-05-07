import React, {useState} from 'react'
import styles from './LoginForm.module.css'
import {useDispatch} from "react-redux";
import {logIn} from "../../redux/actions";
import RegistrationForm from "../RegistrationForm/RegistrationForm";

const LoginForm = (props) => {

    const [state, setState] = useState({
        form: {
            userName: '',
            password: '',
        }
    });

    const {handleOpenModal} = props

    const dispatch = useDispatch();

    const handleInput = (event) => {
        const {value, name} = event.currentTarget;
        setState((prevState) => ({...prevState, form: {...prevState.form, [name]: value,}}));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(logIn(state.form.userName, state.form.password));
    };

    return (
        <form className={styles.wrapper} autoComplete={'off'} onSubmit={handleSubmit}>
            <div className={styles.formField}>
                <p className={styles.label}>Login</p>
                <input className={styles.textInput} type={'text'} name='userName' onChange={handleInput}/>
            </div>
            <div className={styles.formField}>
                <p className={styles.label}>Password</p>
                <input className={styles.textInput} type={'password'} name='password' onChange={handleInput}/>
            </div>
            <div className={styles.formField}>
                <p>Not a member? <button type={'button'} className={styles.registrationLink} onClick={() => handleOpenModal(<RegistrationForm/>)}>Create your account</button></p>
            </div>
            <div className={styles.submitWrapper}>
                <button type={'submit'} className={styles.submitBtn} onClick={handleSubmit}>Sign In</button>
            </div>
        </form>
    )
};

export default LoginForm