import React from 'react';
import styles from './DescriptionField.module.css'

const DescriptionField = props => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>{props.title}</div>
            {props.renderContent()}
        </div>
    )
}

export {DescriptionField};