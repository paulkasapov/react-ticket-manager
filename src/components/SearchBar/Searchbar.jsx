import React from 'react'
import Search from '../../assets/search.png'
import './SearchBar.css'

const Searchbar = props => {
    return (
        <div style={{paddingBottom: '10px', position: 'relative'}}>
            <img src={Search} style={{width: '10px', position: 'absolute', left: '10px', top: '10px'}}/>
            <input onChange={props.handleFilterChange}
                   style={{
                       width: '100%',
                       height: '30px',
                       backgroundColor: '#252525',
                       border: '1px solid #3e3e3e',
                       color: '#9b9b98',
                       padding: '5px 5px 5px 25px',
                       boxSizing: 'border-box'
                   }}></input>
        </div>
    )
}

export {Searchbar};