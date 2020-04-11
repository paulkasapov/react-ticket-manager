import React from 'react';
import styles from './DescrtiptionCard.module.css'

const DescriptionCard = (props) => {

    const {title, children} = props;

    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>{title}</div>
            <div className={styles.content}>{children}</div>
        </div>
    )
};

export default DescriptionCard