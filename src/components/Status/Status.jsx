import React from 'react';
import styles from './Status.module.css'

const shortedStatus = {
    assigned: {
        text: 'ASD',
        color: '#ffc11a'
    },
    unassigned: {
        text: 'UNA',
        color: '#707070'
    },
    completed: {
        text: 'COM',
        color: '#0bb141'
    }
};

const Status = (props) => {

    const {status} = props;

    return <div className={styles.status}
                style={{color: shortedStatus[status].color}}>{shortedStatus[status].text}</div>
};

export default Status