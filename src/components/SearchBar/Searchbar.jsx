import React from 'react'
import Search from '../../assets/search.png'
import styles from './SearchBar.module.css'

const Searchbar = (props) => {

    const {handleFilterChange} = props;

    return (
        <div className={styles.wrapper}>
            <img src={Search} alt={'Search icon'} className={styles.searchImg}/>
            <input onChange={handleFilterChange} className={styles.searchInput}/>
        </div>
    )
};

export {Searchbar};