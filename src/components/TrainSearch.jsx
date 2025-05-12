import React from 'react'
import { FaArrowDownLong } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
const TrainSearch = () => {
   const navigate =useNavigate()
  return (
    <div className='flex justify-center'>
    <div className='flex top-[23%] absolute items-center bg-white gap-4 p-4 rounded-2xl h-40 flex-wrap'>
     <div>
        <input type="text" placeholder='Start Destination ' className=' border-gray-200 h-15 p-4 border-2 rounded-2xl' />
     </div>
     <div> 
        <input type="text" placeholder='End Destination' className=' border-gray-200 h-15 p-4 border-2 rounded-2xl'/>
     </div>
     <div>
        <input type="date" name="" id="" className=' border-gray-200 h-15 p-4 border-2 rounded-2xl'/>
     </div>
     <div className='flex gap-2 border-2 border-gray-200 h-15 p-4 rounded-2xl'>
            <p>Adult</p>
            <p>Child</p>
            <p><FaArrowDownLong /></p>
            <div className='hidden'>
              <p>Adult <button>-</button>  <button>+</button></p>
              <p>Child <button>-</button>  <button>+</button></p>
            </div>
        </div>
     <div>
     <button className=' p-2 search rounded-full w-30 ' onClick={()=>navigate("/train-search")}>Search</button>
    </div> 
   
    </div>
    </div>
  )
}

export default TrainSearch
