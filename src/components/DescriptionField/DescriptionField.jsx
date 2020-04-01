import React from 'react';
import './DescriptionField.css'

const DescriptionField = props => {
    return (
        <div style={{backgroundColor: '#323232', padding: '7px'}}>
            <div style={{color: '#626262'}}>{props.title}</div>
            {props.renderContent()}
        </div>
    )
}

export {DescriptionField};