import React from 'react'
import car from '../assets/car1.jpeg'
import { IoIosArrowRoundForward } from 'react-icons/io'
const CarSearchCard = () => {
  return (
    <div className=' bg-white rounded-2xl shadow-sm p-4 flex items-center gap-4 justify-between m-4 flex-wrap w-fit'>
         <img src={car} alt="" className='h-20 rounded-full w-20 border-2 border-blue-50'/>
         <div className='flex justify-around gap-4 flex-wrap'>
           <div className=''>
               <h3 className='text-lg'>12:10</h3>
               <p>on time</p>
               <p>Delhi 6</p>
           </div>
           <div>
   <IoIosArrowRoundForward className='text-4xl text-blue-200'/>
           </div>
           <div>
           <h3 className='text-lg'>3:52</h3>
               <p>on time</p>
               <p>Noida Sec-63</p>
           </div>
           <div>
               
               <p>3 hours 42 minutes</p>
           </div>
           
           <div>
             <h2 className='text-xl text-tertiary text-right pr-4'>$89</h2>
            <button className='search p-2 rounded-2xl'>Book Now</button>
           </div>
         </div>
       </div>
  )
}

export default CarSearchCard
