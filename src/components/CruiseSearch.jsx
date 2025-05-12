import React from 'react'
import { Link } from 'react-router-dom'
const CruiseSearch = () => {
  return (
   <div className='flex justify-center'>
       <div className='flex top-[23%] absolute items-center bg-white gap-4 p-10 rounded-2xl  flex-wrap'>
        <div>
           <input type="text" placeholder='Pick-up-place ' className=' border-gray-200  p-4 border-2 rounded-2xl' />
        </div>
        <div> 
           <input type="text" placeholder='Drop-off-place' className=' border-gray-200  p-4 border-2 rounded-2xl'/>
        </div>
        <div>
          <input type="date" name="" id=""  className=' border-gray-200  p-4 border-2 rounded-2xl '/>
        </div>
        
        <div>
      <Link to="/cruise-search"> <button className=' p-2 search rounded-full pl-8 pr-8'>Search</button></Link> 
       </div> 
     
       </div>
       </div>
  )
}

export default CruiseSearch
