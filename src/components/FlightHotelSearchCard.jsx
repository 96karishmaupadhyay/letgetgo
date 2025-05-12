import React from 'react'
import FlightAvailabiltyCard from './FlightAvailabiltyCard'
import HotelCard from './HotelCard'
const FlightHotelSearchCard = () => {
  return (
    <div className='flex flex-col w-[100%] gap-2'>
    <FlightAvailabiltyCard/>
    {/* <hr className='border-2 border-blue-100'/> */}
    <HotelCard/>
    </div>
  )
}

export default FlightHotelSearchCard
