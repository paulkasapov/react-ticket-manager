export const validateRegistrationForm = (form) => {

    let errors = {}

    if ((form.login.length < 3) || (form.login.length > 20)) {
        errors.login = 'Length should be 3-20 letters'
    }
    if ((form.password.length < 5) || (form.password.length > 20)) {
        errors.password = 'Length should be 5-20 letters'
    }
    if (form.password !== form.confirmPassword) {
        errors.confirmPassword = 'Passwords should match'
    }
    if ((form.firstName.length < 3) || (form.firstName.length > 20)) {
        errors.firstName = 'Length should be 3-20 letters'
    }
    if ((form.lastName.length < 3) || (form.lastName.length > 20)) {
        errors.lastName = 'Length should be 3-20 letters'
    }
    if (form.specialities.length === 0) {
        errors.specialities = 'You should type your speciality'
    }
    form.specialities.some((item) => {
        if ((item.length < 3) || (item.length > 20)) {
            errors.specialities = 'Length should be 3-20 letters'
            return true
        }
        return false
    })
    return errors
};

export const validateAddTicketForm = (form) => {

    let errors = {}

    if ((form.name.length < 3) || (form.name.length > 20)) {
        errors.name = 'Ticket name length should be 3-20 letters'
    }
    if ((form.description.length < 3) || (form.description.length > 200)) {
        errors.description = 'Description length should be 3-200 letters'
    }
    if (!form.geoCode) {
        errors.geoCode = 'You should set GeoCode'
    }
    if (!form.kmFrom) {
        errors.kmFrom = 'You should set Kilometers From'
    }
    if (!form.kmTo) {
        errors.kmTo = 'You should set Kilometers To'
    }
    if ((form.kmTo) && (form.kmFrom > form.kmTo)) {
        errors.kmTo = 'Kilometers To cannot be less than Kilometers From'
    }

    return errors
};