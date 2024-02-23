import React from 'react'
import './search.css'
const SearchBar = ({ setRecipeName }) => {
    return (
        <div className='search-bar'>
            <input type="text" placeholder='Search-recipe....' onKeyUp={(e) => setRecipeName(e.target.value)} />
            <button className='btn'>Search</button>
        </div>
    )
}

export default SearchBar