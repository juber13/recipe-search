import React from 'react'
import { useNavigate } from "react-router-dom";

import './search.css'

import { GetMyCtx } from './context/MyContext';
const SearchBar = () => {
    const state = GetMyCtx();
    const navigate = useNavigate();

    const handleInput = (e) => {
        state.setRecipeName(e.target.value || "salad")
        navigate(`/`);
    }

    return (
        <div className='search-bar'>
            <input type="text" placeholder='Search....' onKeyUp={handleInput} />
        </div>
    )
}

export default SearchBar