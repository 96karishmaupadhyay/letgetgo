import React from 'react'
import HotelCard from './HotelCard'

const SearchedHotelList = () => {
  return (
    <div className='flex justify-center flex-col gap-4'>
      <HotelCard/>
      <HotelCard/>
      <HotelCard/>
      <HotelCard/>
    </div>
  )
}

export default SearchedHotelList
