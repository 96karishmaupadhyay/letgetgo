import React from 'react'
import { FaArrowDownLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';
const HotelSearch = () => {

  return (
    <div className='flex justify-center '>
      {/* <h2 className='text-2xl top-[4%] z-10 absolute text-red-600'>Search your Hotel</h2> */}
    <div className='absolute top-[23%] flex bg-white h-40 items-center p-4 rounded-2xl gap-4 justify-center flex-wrap'>
   
    <div className='border-2 border-gray-200 h-15 rounded-2xl'>
      <input type="text" placeholder='Destination' className='p-4 outline-0 w-full ' />
    </div>
    <div className='flex items-center border-2 border-gray-200 h-15 gap-4 rounded-2xl' >
        <input type="date" className='p-4 outline-0 '/>
        <p>Time</p>
        <input type="date" className='p-4 outline-0 ' />
    </div>
    <div className='flex gap-2 border-2 border-gray-200 h-15 p-4 rounded-2xl'>
        <p>Adult</p>
        <p>Rooms</p>
        <p>Child</p>
        <p><FaArrowDownLong /></p>
        <div className='hidden'>
          <p>Adult <button>-</button>  <button>+</button></p>
          <p>Child <button>-</button>  <button>+</button></p>
          <p>Rooms <button>-</button>  <button>+</button></p>
        </div>
    </div>
    <div>
  <Link to="/search-page">   <button className=' p-2 search rounded-full w-30'>Search</button>
  </Link> 
    </div>
    </div>
    </div>
  )
}

export default HotelSearch
