import React from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineFlight } from "react-icons/md"
import { FaTrainSubway } from "react-icons/fa6"
import { IoCarSport } from "react-icons/io5"
import { MdLocalHotel } from "react-icons/md"
import flight_hotel_icon from "../assets/combine.jpeg"
import { SiMentorcruise } from "react-icons/si"
const HeroNav = () => {
  return (
    <div className='flex justify-center '>
       <ul  className=' absolute top-[10%] text-[16px] bg-black text-white p-4 z-10  flex justify-between gap-4 rounded-full heronav'>
            <li className='flex gap-2 items-center li-st'><MdOutlineFlight/><Link to="/" >Flights</Link></li>
            <li className='flex gap-2 items-center li-st'><FaTrainSubway/><Link to="/trains" >Trains</Link></li>
            <li className='flex gap-2 items-center li-st'><MdLocalHotel/><Link to="/hotel" >Hotels</Link></li>
            <li className='flex gap-2 items-center li-st'><IoCarSport/><Link to="/cars" >Cars</Link></li>
            <li className='flex gap-2 items-center li-st'><img src={flight_hotel_icon} alt="" className='h-4'/><Link to="/flight-hotel" >Flight + Hotel</Link></li>
             <li className='flex gap-2 items-center li-st'><SiMentorcruise/><Link to="/cruise" >Cruise</Link></li>
        </ul>
    </div>
  )
}

export default HeroNav
