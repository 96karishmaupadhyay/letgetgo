import React from 'react'
import signup from '../assets/signup.png'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
const Signup = () => {
  return (
    <div className='flex gap-10 h-[100%] sign items-center justify-center flex-col'>
      
      <img src={logo} alt="" className='h-20 p-2 absolute left-10 top-10' />
      <div className='flex gap-4 flex-col  justify-center w-[400px] p-10  sign-form'>
     
        <input type="text" placeholder='Your name' className='border-2 border-blue-200 rounded-2xl p-2 h-15 outline-0'/>
        <input type="email" name="" id="" placeholder='Write your Email' className='border-2 border-blue-200 rounded-2xl p-2 h-15  outline-0'/>
        <input type="text" placeholder='8 Digit password' className='border-2 border-blue-200 rounded-2xl p-2 h-15  outline-0'/>
        <input type="text" placeholder='Confirm password' className='border-2 border-blue-200 rounded-2xl p-2 h-15  outline-0'/>
        <button className='rounded-2xl p-2 h-15 search'>SignUp</button>
        <p className='text-center'>Already a User ? <span ><Link to="/login" className='hover:text-tertiary font-semibold'>Login here</Link></span></p>
      </div>
    </div>
  )
}

export default Signup
