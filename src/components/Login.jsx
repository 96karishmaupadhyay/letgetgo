import React from 'react'
import signup from '../assets/signup.png'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
const Login = () => {
  return (
    <div className='flex gap-10 h-[100%] sign items-center justify-center flex-col'>
      
      <img src={logo} alt="" className=' h-20 p-2 absolute left-10 top-10' />
      <div className='flex gap-4 flex-col  justify-center w-[400px] p-10  sign-form'>
     

        <input type="email" name="" id="" placeholder='Write your Email' className='border-2 border-blue-200 rounded-2xl p-2 h-15  outline-0'/>
        <input type="text" placeholder='8 Digit password' className='border-2 border-blue-200 rounded-2xl p-2 h-15  outline-0'/>

       <Link to="/" ><button className='rounded-2xl p-2 h-15 search w-full' >Login</button></Link> 
        <p className='text-center'>Not a User ? <span ><Link to="/signup" className='hover:text-tertiary font-semibold'>Sign up here</Link></span></p>
      </div>
    </div>
  )
}

export default Login
