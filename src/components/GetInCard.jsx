import React from 'react'
import hero2 from "../assets/1.png"
const GetInCard = () => {
  return (
    <div className='h-[100px] p-2 flex gap-4  shadow shadow-blue-50 w-[320px] rounded-2xl items-center bg-white'>
      <img src={hero2} alt=""  className='h-[60px] w-[60px] rounded-full' />
      <div>
        <h1 className='text-2xl font-semibold'>Chennai Flight</h1>
        <p className='text-xm'>Via: Delhi, Mumbai, Coimbatoor, Madurai</p>
      </div>
    </div>
  )
}

export default GetInCard
