import React from 'react'
import Logo from '../assets/logo.png'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0A192F] border-b-2 border-[#24ABE2]'>
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center items-center h-full'>
        <img src={Logo} alt="Krypto Tracker Logo" style={{width: '500px'}}/>
        <p className='text-white text-2xl sm:text-4xl font-bold'>Find prices for your favourite Cryptocurrencies!</p>
      </div>
    </div>
  )
}

export default Home