import React from 'react'
import Navbar from '../components/Navbar'
import HeroSlides from '../section/HeroSlides'
import CarSearch from '../components/CarSearch'
import OfferSection from '../section/OfferSection'
import CarSection from '../section/CarSection'
import Footer from '../section/Footer'
import Topnav from '../components/Topnav'
const Cars = () => {
  return (
    <div>
      {/* <Navbar/> */}
      <Topnav/>
      <HeroSlides/>
      <CarSearch/>
      <OfferSection/>
      <CarSection/>
      <Footer/>
    </div>
  )
}

export default Cars
