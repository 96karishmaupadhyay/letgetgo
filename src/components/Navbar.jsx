import React, { useState } from 'react';
import logo from "../assets/logo.png";
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { MdOutlineFlight } from "react-icons/md";
import { FaTrainSubway } from "react-icons/fa6";
import { IoCarSport } from "react-icons/io5";
import { MdLocalHotel } from "react-icons/md";
import flight_hotel_icon from "../assets/combine.jpeg"
import { SiMentorcruise } from "react-icons/si";
const Navbar = () => {
    const [isOpen,setOpen]=useState(false)
  return (
    <div className='h-16 flex items-center gap-16 shadow justify-between p-2 md:justify-between mb-10'>
      <div>
        <Link to="/" >
        <img src={logo} alt="" className='h-10 ' />
        </Link>
     
      </div>
      <div className='md:hidden text-4xl '>
{isOpen?<ImCross onClick={()=>setOpen(false)} className='text-primary'/>:<GiHamburgerMenu onClick={()=>setOpen(true)} className='text-primary'/>}
      </div>

        <ul className='hidden md:flex gap-6 items-center pr-30'>
            <li className='flex gap-2 items-center'><MdOutlineFlight/><Link to="/" >Flights</Link></li>
            <li className='flex gap-2 items-center'><FaTrainSubway/><Link to="/trains" >Trains</Link></li>
            <li className='flex gap-2 items-center'><MdLocalHotel/><Link to="/hotel" >Hotels</Link></li>
            <li className='flex gap-2 items-center'><IoCarSport/><Link to="/cars" >Cars</Link></li>
            <li className='flex gap-2 items-center'><img src={flight_hotel_icon} alt="" className='h-4'/><Link to="/flight-hotel" >Flight + Hotel</Link></li>
                 <li className='flex gap-2 items-center'><SiMentorcruise/><Link to="/cruise" >Cruise</Link></li>
        </ul>
        
        <ul  className={`md:hidden ${isOpen ? 'block' : 'hidden'} absolute top-16 right-4 bg-white p-4 z-10`}>
            <li className='flex gap-2 items-center'><MdOutlineFlight/><Link to="/" >Flights</Link></li>
            <li className='flex gap-2 items-center'><FaTrainSubway/><Link to="/trains" >Trains</Link></li>
            <li className='flex gap-2 items-center'><MdLocalHotel/><Link to="/hotel" >Hotels</Link></li>
            <li className='flex gap-2 items-center'><IoCarSport/><Link to="/cars" >Cars</Link></li>
            <li className='flex gap-2 items-center'><img src={flight_hotel_icon} alt="" className='h-4'/><Link to="/flight-hotel" >Flight + Hotel</Link></li>
              <li className='flex gap-2 items-center'><SiMentorcruise/><Link to="/cars" >Cruise</Link></li>
        </ul>
        <div className='hidden md:flex gap-4 items-center'>
        <li className='nav-links text-xl'>Us</li>
        <li  className='nav-links text-xl'>EN</li>
        <li  className='nav-links sign-btn '><Link to="/signup"><button>Sign up</button></Link></li>
        <li  className='nav-links login-btn'><Link to="/login"><button>Login</button></Link></li>
        
      </div>
    </div>
  )
}

export default Navbar
