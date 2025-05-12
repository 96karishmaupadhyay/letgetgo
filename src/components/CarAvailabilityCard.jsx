import React from 'react'
import car from '../assets/car1.png'
const CarAvailabilityCard = () => {
  return (
    <div>
     <img src={car} alt="car" className='rounded-2xl' />
     <div>
      <p>Car Name</p>
      <p>Price</p>
      </div> 
      <button className='search'>Book Now</button>
    </div>
  )
}

export default CarAvailabilityCard
