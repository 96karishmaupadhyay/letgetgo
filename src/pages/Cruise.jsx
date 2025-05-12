import React from 'react'
import Topnav from '../components/Topnav'
import HeroSlides from '../section/HeroSlides'
import CruiseSearch from '../components/CruiseSearch'
import Footer from '../section/Footer'
import CruiseCard from '../components/CruiseCard'
import CruiseSection from '../section/CruiseSection'
const Cruise = () => {
  return (
    <div>
      <Topnav/>
      <HeroSlides/>
      <CruiseSearch/>
      {/* <CruiseCard/> */}
      <CruiseSection/>
      <Footer/>
    </div>
  )
}

export default Cruise
