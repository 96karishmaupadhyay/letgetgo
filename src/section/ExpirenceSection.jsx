import React from 'react'
import flight from "../assets/flight.jpg"
const ExpirenceSection = () => {
  return (
    <div className='flex items-center flex-wrap bg-white rounded-2xl shadow-xl mb-10 m-4 text-left justify-between ' >
        <div className=''>
        <img src={flight} alt="" className='rounded-r-full object-contain h-[300px] rounded-l-2xl'/>
        </div>
    <div className='flex-1/2 pl-[8%]'>
        <h1 className='pt-4 text-4xl font-bold pr-4'>Experience 
            <br/><span className='text-[#042859]'>Flight's and Hotel Booking</span>
            <br/> with <span className='text-[#d32027]'>LetgetGo</span></h1>
        <button className='h-12 w-40 m-4 bg-[#d32027] p-2 rounded-full text-white font-bold'>Get More Info</button>
    </div>
    </div>
  )
}

export default ExpirenceSection
