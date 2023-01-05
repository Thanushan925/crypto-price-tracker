import React from 'react'
import './Feedback.css'

const Feedback = () => {
  return (
    <div name='feedback' className='feedback-container'>
        <form method='POST' action="https://getform.io/f/fc741145-277e-440a-8d16-37318fb7a25a" className='form'>
            <div className='title-spacing'>
                <p className='form-title'>Feedback</p>
                <p className='form-subtitle'>Here is the form that you can use to leave some feedback</p>
            </div>

            <input className='form-single-line' type="text" placeholder='Name' name='name'/>
            <input className='form-single-line' type="email" placeholder='Email' name='email'/>
            <textarea className='form-single-line' name="message" rows="10" placeholder='Message'></textarea>
            <button className='form-button'>Submit</button>
        </form>
    </div>
  )
}

export default Feedback