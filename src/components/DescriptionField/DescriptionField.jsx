import React from 'react';
import styles from './DescriptionField.module.css'

const DescriptionField = (props) => {

    const {title, renderContent} = props;

    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>{title}</div>
            {renderContent()}
        </div>
    )
};

export default DescriptionField