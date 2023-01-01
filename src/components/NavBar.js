import React from 'react'
import {FaCoins} from 'react-icons/fa'
import './NavBar.css'

const NavBar = () => {
    return (
        <div className='navbar'>
            <FaCoins className='icon' />
            <h1><span className='cyan'>Krypto</span> Tracker</h1>
        </div>
    )
}

export default NavBar