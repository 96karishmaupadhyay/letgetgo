import React from 'react'
import cruise from '../assets/cruise1.png'
const CruiseCard = () => {
  return (
    <div className='flex gap-4 items-center  p-2  rounded-2xl border-2 border-blue-50 justify-between flex-wrap'>
      <img src={cruise} alt="" className='rounded-2xl h-[160px]' />
      <div>
      <p>Cruise Name</p>
      <p>Price: 4500</p>
      <p>Northen side Maharastra</p>
      </div>
      <div>
      <p>North</p>
      <p>South</p>
      </div>
      <button className='search rounded-2xl p-2'>Book Now</button>
    </div>
  )
}

export default CruiseCard
