import React from 'react';
import styles from './DescrtiptionCard.module.css'

const DescriptionCard = props => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>{props.title}</div>
            <div className={styles.content}>{props.children}</div>
        </div>
    )
}

export {DescriptionCard};