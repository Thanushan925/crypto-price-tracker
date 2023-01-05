import React from 'react'
import Logo from '../assets/logo.png'
import './Home.css'

const Home = () => {
  return (
    <div name='home' className='container'>
      <div className='title'>
        <img className='title-logo' src={Logo} alt="Krypto Tracker Logo" />
        <p className='subtitle'>Find prices for your favourite Cryptocurrencies!</p>
      </div>
    </div>
  )
}

export default Home