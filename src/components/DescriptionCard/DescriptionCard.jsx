import React from 'react';
import './DecrtiptionCard.css'

const DescriptionCard = props => {
    return (
        <div style={{backgroundColor: '#2c2c2c', margin: '10px 10px 0', padding: '2px'}}>
            <div style={{padding: '5px 10px', fontWeight: '600'}}>{props.title}</div>
            <div style={{backgroundColor: '#323232', padding: '8px'}}>{props.children}</div>
        </div>
    )
}

export {DescriptionCard};