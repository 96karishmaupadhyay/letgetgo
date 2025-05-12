import React from 'react'
import grid1 from '../assets/tokyo.png'
import grid2 from '../assets/2.png'
import grid3 from '../assets/1.png'
const GridFirst = () => {
  return (
    <div className='grid grid-cols-3 gap-2 p-4 h-[400px] mb-20'>
      <img src={grid1} alt="" className='col-span-1 row-span-2  object-cover h-[400px] rounded-l-2xl'/>
      <img src={grid2} alt="" className='col-span-2 row-span-1 object-cover w-full h-[196px] rounded-tr-2xl'/>
      <img src={grid3} alt="" className='col-span-2 row-span-1 w-full h-[196px] rounded-br-2xl'/>
    </div>
  )
}

export default GridFirst
