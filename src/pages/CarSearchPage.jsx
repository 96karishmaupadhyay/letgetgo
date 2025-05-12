import React from 'react'
import CarSearchCard from '../components/CarSearchCard'
import Navbar from '../components/Navbar'
import car from '../assets/car4.jpeg'
import CarSearch from '../components/CarSearch'
import CarFilter from '../components/CarFilter'
import Footer from '../section/Footer'
const CarSearchPage = () => {
  return (
    <div>
      <div>
        <Navbar/>
    </div>
    <div className='h-[400px]'>
      <img src={car} alt="" className=' w-full rounded-2xl p-2 h-full'/>
     
     <CarSearch/>
    </div>
    <div className=' flex'>
  <div className='w-[30%]'>
        <CarFilter />
      </div>
   
      <div className='flex flex-col gap-4 w-[70%]'>
          <h1 className="text-4xl pl-6 "> Cars </h1>
    <CarSearchCard/>
      <CarSearchCard/>
      <CarSearchCard/>
      </div>
    
       </div>
      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default CarSearchPage
