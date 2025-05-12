import React from 'react'
import FlightAvailabiltyCard from '../components/FlightAvailabiltyCard'
import FlightFilter from '../components/FlightFilter'
import FlightSearch from '../components/FlightSearch'
import Navbar from '../components/Navbar'
import flight from '../assets/flight3.jpeg'
import Footer from '../section/Footer'
const FlightSearchPage = () => {
  return (
    <div>
         <div>
        <Navbar/>
    </div>
    <div className='h-[400px]'>
      <img src={flight} alt="" className=' w-full rounded-2xl p-2 h-full'/>
      <FlightSearch/>
    </div>
    <div className='flex  gap-6'>
      <div className='mt-10'>
        <FlightFilter/>
      </div>
      <div className='flex gap-4 flex-col w-[70%] mt-10'>
        <h1 className='text-primary font-bold text-4xl pl-10'>Flights</h1>
        <FlightAvailabiltyCard/>
        <FlightAvailabiltyCard/>
        <FlightAvailabiltyCard/>
        <FlightAvailabiltyCard/>
        <FlightAvailabiltyCard/>
      </div>
    
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default FlightSearchPage
