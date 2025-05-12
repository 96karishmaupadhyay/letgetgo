import React from 'react'
import TrainSearch from '../components/TrainSearch'
import train1 from "../assets/1.png"
import Navbar from '../components/Navbar'
import TrainAvailabilityCard from '../components/TrainAvailabilityCard'
import TrainAvailabilitySection from '../section/TrainAvailabilitySection'
import Footer from "../section/Footer"
const TrainSearchPage = () => {
  return (
    <>
         <div>
        <Navbar/>
    </div>
    <div className='shadow-2xl h-[400px]'>
      <img src={train1} alt="" className=' w-full rounded-2xl p-2 h-full'/>
      <TrainSearch/>
    </div>
    <div className='m-10'>
      <TrainAvailabilitySection/>
    </div>
 <div>
  <Footer/>
 </div>
    </>
  )
}

export default TrainSearchPage
