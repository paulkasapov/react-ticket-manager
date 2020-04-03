import React from 'react'
import Search from '../../assets/search.png'
import styles from './SearchBar.module.css'

const Searchbar = props => {
    return (
        <div className={styles.wrapper}>
            <img src={Search} className={styles.searchImg}/>
            <input onChange={props.handleFilterChange} className={styles.searchInput}/>
        </div>
    )
}

export {Searchbar};