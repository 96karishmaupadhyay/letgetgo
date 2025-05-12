import React from 'react'
import logo from "../assets/logo.png"
import { Link } from 'react-router-dom'
const Topnav = () => {
  return (
    <div className='flex gap-2 h-16 justify-between  pl-4 pr-4 shadow-2xl items-center'>
      <div>
        <img src={logo} alt="" className='h-10'/>
      </div>
      <div className='flex gap-4 items-center'>
        <li className='nav-links text-xl'>Us</li>
        <li  className='nav-links text-xl'>EN</li>
        <li  className='nav-links sign-btn'><Link to="/signup"><button>Sign up</button></Link></li>
        <li  className='nav-links login-btn'><Link to="/login"><button>Login</button></Link></li>  
      </div>
    </div>
  )
}

export default Topnav
