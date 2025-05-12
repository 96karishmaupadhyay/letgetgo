import React from 'react'
import hotel from '../assets/hotel.png'
import HotelSearch from '../components/HotelSearch'
import Navbar from '../components/Navbar'
import HotelFilter from '../components/HotelFilter'
import SearchedHotelList from '../components/SearchedHotelList'
const HotelSearchPage = () => {
  return (
    <>
    <div>
        <Navbar/>
    </div>
    <div className='shadow-2xl h-[400px]'>
      <img src={hotel} alt="" className=' w-full rounded-2xl p-2 h-full'/>
      <HotelSearch/>
    </div>
    <div className='flex gap-4 p-4 mt-10 justify-between'>
      <div className='flex-1/3' >
      <HotelFilter/>
      </div>
   <div className='flex-2/3'>
   <SearchedHotelList/>
   </div>
    </div>
    </>
  )
}

export default HotelSearchPage
