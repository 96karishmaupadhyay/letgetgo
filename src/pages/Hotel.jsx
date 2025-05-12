import React from 'react'
import Navbar from '../components/Navbar'
import HeroSlides from '../section/HeroSlides'
import HotelSearch from '../components/HotelSearch'
import OfferSection from '../section/OfferSection'
import HotelProperties from '../section/HotelProperties'
import Footer from '../section/Footer'
import Topnav from "../components/Topnav"
const Hotel = () => {
  return (
    <div>
      {/* <Navbar/> */}
      <Topnav/>
      <HeroSlides/>
       <div>
              <HotelSearch/>
     </div>
     <OfferSection/>
        <HotelProperties/>
        <Footer/>
    </div>
  )
}

export default Hotel
