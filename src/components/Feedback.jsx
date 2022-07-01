import React from 'react'

const Feedback = () => {
  return (
    <div name='feedback' className='w-full h-screen bg-[#0A192F] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/fc741145-277e-440a-8d16-37318fb7a25a" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#24ABE2] text-gray-300'>Feedback</p>
                <p className='text-gray-300 py-4'>// Here is the form that you can use to leave some feedback</p>
            </div>

            <input className='p-2 bg-[#CCD6F6]' type="text" placeholder='Name' name='name'/>
            <input className='p-2 my-4 bg-[#CCD6F6]' type="email" placeholder='Email' name='email'/>
            <textarea className='p-2 bg-[#CCD6F6]' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-[#24ABE2] hover:border-black hover:text-black px-4 py-2 my-4 mx-auto flex items-center'>Submit</button>
        </form>
    </div>
  )
}

export default Feedback