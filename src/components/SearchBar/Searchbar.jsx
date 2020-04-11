import React from 'react'
import Search from '../../assets/search.png'
import styles from './SearchBar.module.css'

const Searchbar = (props) => {

    const {handleSearchTermChange} = props;

    return (
        <div className={styles.wrapper}>
            <img src={Search} alt={'Search icon'} className={styles.searchImg}/>
            <input onChange={(e) => handleSearchTermChange(e.target.value)} className={styles.searchInput}/>
        </div>
    )
};

export default Searchbar