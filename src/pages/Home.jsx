import React from 'react'
import Navbar from '../components/Navbar'
import HeroSlides from '../section/HeroSlides'
import OfferSection from '../section/OfferSection'
import GetInSection from '../section/GetInSection'
import HotelProperties from '../section/HotelProperties'
import FlightSection from '../section/FlightSection'
import ExpirenceSection from '../section/ExpirenceSection'
import TrainSection from '../section/TrainSection'
import Footer from '../section/Footer'
import FlightSearch from '../components/FlightSearch'
import Topnav from '../components/Topnav'
import GridFirst from '../components/GridFirst'
import TopPackageSection from '../section/TopPackageSection'
import GridSecond from '../components/GridSecond'
import CarSection from '../section/CarSection'
import CruiseSection from '../section/CruiseSection'
const Home = () => {
  return (
    <div>
      {/* <Navbar/> */}
      <Topnav/>
      <HeroSlides/>
      <FlightSearch/>
      <OfferSection/>
      <TopPackageSection/>
      <GridFirst/>
      <FlightSection/>
      <GetInSection/>
      <HotelProperties/>
      <ExpirenceSection/>
      <TrainSection/>
      <GridSecond/>
      <CarSection/>
      <CruiseSection/>
      <Footer/>
    </div>
  )
}

export default Home
