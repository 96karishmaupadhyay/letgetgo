import React from 'react'
import grid1 from '../assets/tokyo.png'
import grid2 from '../assets/2.png'
import grid3 from '../assets/1.png'
const GridSecond = () => {
  return (
    <div className='grid grid-cols-3 row-span-2 gap-2 p-4 h-[400px] mb-20'>
         <img src={grid2} alt="" className='col-span-2 row-span-1 object-cover w-full h-[196px] rounded-tl-2xl'/>
         <img src={grid3} alt="" className='col-span-2 row-span-1 w-full h-[196px] rounded-bl-2xl'/>
    <img src={grid1} alt="" className='row-span-2 row-start-1 col-start-3 rounded-r-2xl'/>
       </div>
  )
}

export default GridSecond
 