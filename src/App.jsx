import React from 'react'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Hotel from './pages/Hotel'
import Trains from './pages/Trains'
import Cars from './pages/Cars'
import HotelSearchPage from './pages/HotelSearchPage'
import Signup from './components/Signup'
import HotelAvailibiltyPage from './pages/HotelAvailibiltyPage'
import TrainSearchPage from './pages/TrainSearchPage'
import FlightSearchPage from './pages/FlightSearchPage'
import CarSearchPage from './pages/CarSearchPage'
import BookingPage from './pages/BookingPage'
import Login from './components/Login'
import FlightHotelSearchPage from './pages/FlightHotelSearchPage'
import Cruise from './pages/Cruise'
import CruiseSearchPage from './pages/CruiseSearchPage'
import FlightHotel from './pages/FlightHotel'


const App = () => {
  return (
   <>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/hotel' element={<Hotel/>}/>
    <Route path='/trains' element={<Trains/>}/>
    <Route path='/cars' element={<Cars/>}/>
    <Route path='/search-page' element={<HotelSearchPage/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/hotel-availability' element={<HotelAvailibiltyPage/>}/>
    <Route path='/train-search' element={<TrainSearchPage/>}/>
    <Route path='/flight-search' element={<FlightSearchPage/>}/>
    <Route path='/car-search' element={<CarSearchPage/>}/>
    <Route path='/booking-page' element={<BookingPage/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='flight-hotel-search' element={<FlightHotelSearchPage/>}/>
    <Route path='/cruise' element={<Cruise/>}/>
    <Route path='/cruise-search' element={<CruiseSearchPage/>}/>
    <Route path='/flight-hotel' element={<FlightHotel/>}/>
   </Routes>
   </>
  )
}

export default App
