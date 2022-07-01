import React, {useState} from 'react'
import Logo from '../assets/logosmall.png'
import {FaBars, FaTimes} from 'react-icons/fa'
import {Link} from 'react-scroll'

const NavigationBar = () => {
  const [navBar, setNavBar] = useState(false)
  const handleClick = () => setNavBar(!navBar)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0A192F] text-[#24ABE2]'>
      <div>
        <img src={Logo} alt="Krypto Tracker Logo" style={{width: '75px'}}/>
      </div>

      {/* Menu */}
      <ul className='hidden md:flex'>
        <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
        <li><Link to="prices" smooth={true} duration={500}>Prices</Link></li>
        <li><Link to="feedback" smooth={true} duration={500}>Feedback</Link></li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!navBar ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menu */}
      <ul className={!navBar ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0A192F] flex flex-col justify-center items-center'}>
      <li onClick={handleClick} className='py-6 text-4xl'><Link to="home" smooth={true} duration={500}>Home</Link></li>
        <li onClick={handleClick} className='py-6 text-4xl'><Link to="prices" smooth={true} duration={500}>Prices</Link></li>
        <li onClick={handleClick} className='py-6 text-4xl'><Link to="feedback" smooth={true} duration={500}>Feedback</Link></li>
      </ul>
    </div>
  )
}

export default NavigationBar