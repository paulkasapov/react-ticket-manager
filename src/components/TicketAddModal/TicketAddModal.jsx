import React from 'react'
import './TicketAddModal.css'

const TicketAddModal = props => {

    const showModalPopUp = (isModalOpen) => {
        if (isModalOpen) {
            return (
                <div id={'modal'} onClick={handlerClose} className={'modal'}>
                    <div className={'modal-content'}>
                        <form>
                            <div className={'form-field name-field'}>
                                <p>Ticket name</p>
                                <input type={'text'}/>
                            </div>
                            <div className={'form-field description-field'}>
                                <p>Ticket description</p>
                                <textarea type={'text'}/>
                            </div>
                            <div className={'form-field status-field'}>
                                <p>Status</p>
                                <select>
                                    <option className={'assigned-select'}>ASD</option>
                                    <option className={'unassigned-select'}>UNA</option>
                                    <option className={'completed-select'}>COM</option>
                                </select>
                            </div>
                            <div className={'form-field geocode-field'}>
                                <p>GeoCode</p>
                                <input type={'text'}/>
                            </div>
                            <div className={'form-field kilometers-field'}>
                                <p>Kilometers</p>
                                <input type={'text'} placeholder={'From'}/><input type={'text'} placeholder={'To'}/>
                            </div>
                            <div className={'submit-btn'}>
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
        if (e.target.id == 'modal') {
            props.handleCloseModal()
        }
    }

    return (
        showModalPopUp(props.isModalOpen)
    )
}

export {TicketAddModal};