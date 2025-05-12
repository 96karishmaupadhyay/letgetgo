import React from 'react'
import Topnav from '../components/Topnav'
import HeroSlides from '../section/HeroSlides'
import FlightHotelSearch from '../components/FlightHotelSearch'
import OfferSection from '../section/OfferSection'
import FlightSection from '../section/FlightSection'
import HotelProperties from '../section/HotelProperties'
import Footer from '../section/Footer'

const FlightHotel = () => {
  return (
    <div>
       <Topnav/>
      <HeroSlides/>
      <FlightHotelSearch/>
      <OfferSection/>
      <FlightSection/>
      <HotelProperties/>
      <Footer/>
    </div>
  )
}

export default FlightHotel
