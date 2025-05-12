import React from 'react'
import flight from "../assets/flight1.jpeg"
import { Link } from 'react-router-dom';
import { IoIosArrowRoundForward } from "react-icons/io";
const FlightAvailabiltyCard = () => {
  return (
    <div className='flex gap-8  bg-white shadow-sm p-4 rounded-2xl items-center justify-between flex-wrap '>
      <div>
        <img src={flight} alt=""  className='rounded-full h-14 w-14 border-4 border-blue-100'/>
      </div>
      <div>
        <h2 className='text-lg font-bold'>11:23</h2>
        <p>CDG T2C</p>
      </div>
      <div>
        <IoIosArrowRoundForward/>
        <p>4 hours 24 minutes</p>
      </div>
      <div>
      <h2 className='text-xl font-bold' >03:57</h2>
      <p>DXB 3</p>
      </div>
      <div>
      <h2 className='text-xl font-bold text-tertiary'>$321.0</h2>
      <Link to="/booking-page">
    <button className='w-full search rounded-2xl p-2 mt-4'>Book Now</button>
    </Link>
      </div>
    </div>
  )
}

export default FlightAvailabiltyCard
