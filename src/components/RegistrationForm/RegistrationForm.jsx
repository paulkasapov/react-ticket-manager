import React, {useState} from 'react'
import styles from './RegistrationForm.module.css'
import {useDispatch, useSelector} from "react-redux";
import {addUser, checkUniqueLogin, closeModal} from "../../redux/actions";
import {validateRegistrationForm} from '../../FormValidation'

const RegistrationForm = () => {

    const [state, setState] = useState({
        form: {
            login: '',
            password: '',
            confirmPassword: '',
            firstName: '',
            lastName: '',
            specialities: []
        },
        errors: {},
    });

    const dispatch = useDispatch();
    const errorNotUnique = useSelector(state => state.errors.isLoginExists)

    const handleInput = (e) => {
        const {value, name} = e.currentTarget;
        if (name === 'specialities') {
            const specialities = value.split(',')
                .map((item) => {
                    item = item.trim();
                    return item.charAt(0).toUpperCase() + item.slice(1);
                })
                .filter((item) => (item !== ''))
            setState((prevState) => ({...prevState, form: {...prevState.form, [name]: specialities}}));
            return
        }
        setState((prevState) => ({...prevState, form: {...prevState.form, [name]: value}}));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = validateRegistrationForm(state.form)
        setState((prevState) => ({...prevState, errors: errors}))
        if ((Object.keys(errors).length === 0) && (!errorNotUnique)) {
            const user = {
                userName: state.form.login,
                password: state.form.password,
                firstName: state.form.firstName.charAt(0).toUpperCase() + state.form.firstName.slice(1),
                lastName: state.form.lastName.charAt(0).toUpperCase() + state.form.lastName.slice(1),
                avatar:'/default-avatar.png',
                specialities: state.form.specialities
            };
            dispatch(addUser(user));
            dispatch(closeModal())
        }
    };

    return (
        <form className={styles.wrapper} autoComplete={'off'} noValidate>
            <div className={styles.closeBtnWrapper}>
                <button type={'button'} onClick={() => dispatch(closeModal())} className={styles.closeBtn}>x</button>
            </div>
            <div className={styles.formField}>
                <div className={styles.labelWrapper}>
                    <p className={styles.label}>Login</p>
                    <p className={styles.errorMessage}>
                        {errorNotUnique ? ('Such login is already exists'):(state.errors.login)}
                    </p>
                </div>
                <input onBlur={() => dispatch(checkUniqueLogin(state.form.login))}
                       className={styles.nameInput} type={'text'} name='login' required onChange={handleInput}/>
            </div>
            <div className={styles.formField}>
                <div className={styles.labelWrapper}>
                    <p className={styles.label}>Password</p>
                    <p className={styles.errorMessage}>{state.errors.password}</p>
                </div>
                <input
                       className={styles.nameInput} type={'password'} name='password' required onChange={handleInput}/>
            </div>
            <div className={styles.formField}>
                <div className={styles.labelWrapper}>
                    <p className={styles.label}>Confirm Password</p>
                    <p className={styles.errorMessage}>{state.errors.confirmPassword}</p>
                </div>
                <input className={styles.nameInput} type={'password'} name='confirmPassword' required onChange={handleInput}/>
            </div>
            <div className={styles.formField}>
                <div className={styles.labelWrapper}>
                    <p className={styles.label}>First Name</p>
                    <p className={styles.errorMessage}>{state.errors.firstName}</p>
                </div>
                <input
                       className={styles.nameInput} type={'text'} name='firstName' required onChange={handleInput}/>
            </div>
            <div className={styles.formField}>
                <div className={styles.labelWrapper}>
                    <p className={styles.label}>Last Name</p>
                    <p className={styles.errorMessage}>{state.errors.lastName}</p>
                </div>
                <input
                       className={styles.nameInput} type={'text'} name='lastName' required onChange={handleInput}/>
            </div>
            <div className={styles.formField}>
                <div className={styles.labelWrapper}>
                    <p className={styles.label}>Specialities (separate by ',')</p>
                    <p className={styles.errorMessage}>{state.errors.specialities}</p>
                </div>
                <input
                       className={styles.nameInput} type={'text'} name='specialities' required onChange={handleInput}/>
            </div>
            <div className={styles.submitWrapper}>
                <button className={styles.submitBtn} type={'submit'} onClick={(e) => handleSubmit(e)}>Register</button>
            </div>
        </form>
    )
};

export default RegistrationForm