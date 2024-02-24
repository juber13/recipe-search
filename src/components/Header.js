import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className='header'>
            <ul style={{ display: "flex", gap: "10px", listStyle: "none"}}>
                <li><Link style={{ textDecorationColor: "none" }} to={"/"}>Home</Link></li>
                <li><Link style={{ textDecorationColor: "none" }} to={"/favourite"}>Favourites</Link></li>
            </ul>
        </div>
    )
}

export default Header