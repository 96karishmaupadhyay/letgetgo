import React from 'react'
import HotelAvailabilityCard from '../components/HotelAvailabilityCard'
import RoomCard from '../components/RoomCard'
import Navbar from '../components/Navbar'
import Footer from '../section/Footer'
import RecommendedHotel from '../section/RecommendedHotel'
import ReviewSection from '../section/ReviewSection'

const HotelAvailibiltyPage = () => {
  return (
    <div>
      <Navbar/>
      <HotelAvailabilityCard/>
      <RoomCard/>
      <RecommendedHotel/>
      <ReviewSection/>
      <Footer/>
    </div>
  )
}

export default HotelAvailibiltyPage
