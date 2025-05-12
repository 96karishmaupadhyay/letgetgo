import React from 'react'
import HeroSlides from '../section/HeroSlides'
import TrainSearch from '../components/TrainSearch'
import OfferSection from '../section/OfferSection'
import TrainSection from '../section/TrainSection'
import Footer from '../section/Footer'
import Topnav from '../components/Topnav'

const Trains = () => {
  return (
    <div>
      <Topnav/>
      <HeroSlides/>
      <TrainSearch/>
      <OfferSection/>
      <TrainSection/>
      <Footer/>
    </div>
  )
}

export default Trains
