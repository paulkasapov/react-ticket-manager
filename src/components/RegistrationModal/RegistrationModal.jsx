import React, {useState} from 'react'
import styles from './RegistrationModal.module.css'
import {useDispatch} from "react-redux";
import {addUser, closeModal} from "../../redux/actions";

const RegistrationModal = () => {

    const [state, setState] = useState({
        form: {
            login: '',
            password: '',
            confirmPassword: '',
            firstName: '',
            lastName: '',
            specialities: []
        },
        errors: {
            login: '',
            password: '',
            confirmPassword: '',
            firstName: '',
            lastName: '',
            specialities: ''
        },
        currentUser: {
            userId: 4,
            firstName: 'Pavel',
            lastName: 'Kasapov',
            avatar: '/default-avatar.png',
            specialities: ['Programmer']
        }
    });

    const dispatch = useDispatch();

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

    const validateForm = () => {
        return (
            validateTextField('login', state.form.login) ||
            validateTextField('password', state.form.password) ||
            validateTextField('firstName', state.form.firstName) ||
            validateTextField('lastName', state.form.lastName) ||
            validateConfirmPassword() ||
            validateSpecialities()
        )
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const hasError = validateForm();
        console.log(hasError);
        if (!hasError) {
            const user = {
                userName: state.form.login,
                password: state.form.password,
                firstName: state.form.firstName.charAt(0).toUpperCase() + state.form.firstName.slice(1),
                lastName: state.form.lastName.charAt(0).toUpperCase() + state.form.lastName.slice(1),
                avatar:'/default-avatar.png',
                specialities: state.form.specialities
            };
            console.log(user);
            dispatch(addUser(user));
            dispatch(closeModal())
        }
    };

    const validateTextField = (name, value) => {
        if ((value.length < 3) || (value.length > 20)) {
            setState((prevState) => ({...prevState, errors: {...prevState.errors, [name]: 'Length should be 3-20 letters'} }));
            return true
        }
        setState((prevState) => ({...prevState, errors: {...prevState.errors, [name]: ''} }));
        return false
    };

    const validateSpecialities = () => {
        const specialities = state.form.specialities;
        let hasValidationError = false;
        if (specialities.length === 0) {
            setState((prevState) => ({...prevState, errors: {...prevState.errors, specialities: 'Length should be 3-20 letters'} }));
            return true
        }
        specialities.some((item) => {
            if ((item.length < 3) || (item.length > 20)) {
                setState((prevState) => ({...prevState, errors: {...prevState.errors, specialities: 'Length should be 3-20 letters'} }));
                hasValidationError = true;
                return true
            }
            return false
        });
        if (!hasValidationError) {
            setState((prevState) => ({...prevState, errors: {...prevState.errors, specialities: ''} }));
        }
        return hasValidationError
    };

    const validateConfirmPassword = () => {
        if (state.password !== state.confirmPassword) {
            setState((prevState) => ({...prevState, errors: {...prevState.errors, confirmPassword: 'Passwords should match'} }));
            return true
        }
        return false
    };

    return (
        <form className={styles.wrapper} autoComplete={'off'} noValidate>
            <div className={styles.closeBtnWrapper}>
                <button onClick={() => dispatch(closeModal())} className={styles.closeBtn}>x</button>
            </div>
            <div className={styles.formField}>
                <div className={styles.labelWrapper}>
                    <p className={styles.label}>Login</p>
                    <p className={styles.errorMessage}>{state.errors.login}</p>
                </div>
                <input onBlur={(e) => validateTextField(e.currentTarget.name, e.currentTarget.value)}
                       className={styles.nameInput} type={'text'} name='login' required onChange={handleInput}/>
            </div>
            <div className={styles.formField}>
                <div className={styles.labelWrapper}>
                    <p className={styles.label}>Password</p>
                    <p className={styles.errorMessage}>{state.errors.password}</p>
                </div>
                <input onBlur={(e) => validateTextField(e.currentTarget.name, e.currentTarget.value)}
                       className={styles.nameInput} type={'password'} name='password' required onChange={handleInput}/>
            </div>
            <div className={styles.formField}>
                <div className={styles.labelWrapper}>
                    <p className={styles.label}>Confirm Password</p>
                    <p className={styles.errorMessage}>{state.errors.confirmPassword}</p>
                </div>
                <input onBlur={(e) => validateConfirmPassword()} className={styles.nameInput} type={'password'} name='confirmPassword' required onChange={handleInput}/>
            </div>
            <div className={styles.formField}>
                <div className={styles.labelWrapper}>
                    <p className={styles.label}>First Name</p>
                    <p className={styles.errorMessage}>{state.errors.firstName}</p>
                </div>
                <input onBlur={(e) => validateTextField(e.currentTarget.name, e.currentTarget.value)}
                       className={styles.nameInput} type={'text'} name='firstName' required onChange={handleInput}/>
            </div>
            <div className={styles.formField}>
                <div className={styles.labelWrapper}>
                    <p className={styles.label}>Last Name</p>
                    <p className={styles.errorMessage}>{state.errors.lastName}</p>
                </div>
                <input onBlur={(e) => validateTextField(e.currentTarget.name, e.currentTarget.value)}
                       className={styles.nameInput} type={'text'} name='lastName' required onChange={handleInput}/>
            </div>
            <div className={styles.formField}>
                <div className={styles.labelWrapper}>
                    <p className={styles.label}>Specialities (separate by ',')</p>
                    <p className={styles.errorMessage}>{state.errors.specialities}</p>
                </div>
                <input onBlur={(e) => validateSpecialities(e.currentTarget.name, e.currentTarget.value)}
                       className={styles.nameInput} type={'text'} name='specialities' required onChange={handleInput}/>
            </div>
            <div className={styles.submitWrapper}>
                <button className={styles.submitBtn} onClick={(e) => handleSubmit(e)}>Register</button>
            </div>
        </form>
    )
};

export default RegistrationModal