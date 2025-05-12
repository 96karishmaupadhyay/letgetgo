import { div } from 'motion/react-client'
import React from 'react'
import { useState } from 'react'
import { FaArrowDownLong } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
const FlightHotelSearch = () => {
    const [adultCount,setAdultCount]=useState(1)
    const [childCount,setChildCount]=useState(0)
     const [open,setOpen]=useState(false)
  return (
    <div className='flex justify-center '>
     <div className="flex flex-col gap-4 absolute top-[23%] bg-white p-8 rounded-2xl flex-wrap ">
                  <div className="flex gap-4 flex-wrap">
                    <input
                      type="text"
                      placeholder="from"
                      className="border-2 border-gray-200 p-2 rounded-2xl min-w-[300px]"
                    />
                    <input
                      type="text"
                      placeholder="to"
                      className="border-2 border-gray-200 p-2 rounded-2xl min-w-[300px]"
                    />
                    <input
                      type="date"
                      name=""
                      id=""
                      className="border-2 border-gray-200 p-2 rounded-2xl"
                    />
                  </div>
                  <div className="flex gap-4 flex-wrap">
                  
                    <input
                      type="text"
                      placeholder="Destination"
                      className="border-2 border-gray-200 p-2 rounded-2xl "
                    />
                    <input
                      type="date"
                      name=""
                      id=""
                      className="border-2 border-gray-200 p-2 rounded-2xl"
                    />
                     <p className="flex gap-2 border-2 border-gray-200 p-2 rounded-2xl items-center w-40 justify-between">
                      adult {adultCount},child {childCount} <FaArrowDownLong  onClick={()=>setOpen(true)}/>
                    </p>
                    <Link to="/flight-hotel-search">   <button className=" p-2 search rounded-full w-40" >
                  
                  Search
                </button>
                </Link>
                  </div>
                
                </div>
                </div>
  )
}

export default FlightHotelSearch
