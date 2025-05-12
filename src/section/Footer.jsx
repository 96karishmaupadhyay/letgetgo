import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookF } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import logo from "../assets/logo.png"
import flight from "../assets/flight.jpg"
const Footer = () => {
  return (

<div >
<div className='email-footer p-8 grid col-span-2 '>
           
            <img src={logo} alt="" className='bg-white rounded-2xl h-12 mb-4 p-2'/>
            <p className='pb-4'>Experience of many to many of its customer.The Experience of Booking your flight</p>
            <div className='flex  gap-4 h-16 border-2 border-white rounded-full justify-between w-[400px] p-'>
            <input type="email" name="" id="" placeholder='Write your email' className='pl-4 '/>
            <button className='bg-red-700 rounded-full w-24 font-bold h-15 p-4 border-2 border-white'>Submit</button>
                </div>
               
              
</div>

    <div className='flex flex-wrap justify-between gap-4  footer p-6'>

      <div>
        <h1 className='footer-head'>Product Offering</h1>
        <ul>
            <li><Link to="/">Privacy Policy</Link></li>
            <li><Link to="/">International Hotels</Link></li>
            <li><Link to="/">Domestic Flights</Link></li>
            <li><Link to="/">International Flights</Link></li>
            <li><Link to="/">Bus Booking</Link></li>
            <li><Link to="/">Cab Booking</Link></li>
            <li><Link to="/">Train Ticket Booking</Link></li>
            <li><Link to="/">Route Planner</Link></li>
            <li><Link to="/">Destination Planner</Link></li>
        </ul>
      </div>
      <div>
      <h1 className='footer-head'>Company</h1>

      <ul>
            <li><Link to="/">Privacy Policy</Link></li>
            <li><Link to="/">About us</Link></li>
            <li><Link to="/">User Agreement</Link></li>
            <li><Link to="/">Career</Link></li>
        
        </ul>
      </div>
      <div>
        <h1 className='footer-head'>Travel Resources</h1>
      <ul>
      <li><Link to="/">   Privacy Policy</Link></li>
            <li><Link to="/">International Hotels</Link></li>
            <li><Link to="/">Domestic Flights</Link></li>
            <li><Link to="/">International Flights</Link></li>
            <li><Link to="/">Bus Booking</Link></li>
            <li><Link to="/">Cab Booking</Link></li>
            <li><Link to="/">Train Ticket Booking</Link></li>
            <li><Link to="/">Route Planner</Link></li>
            <li><Link to="/">Destination Planner</Link></li>
        </ul>
      </div>
      <div >
        <h1 className='footer-head'>More Links</h1>
      <ul>
      <li><Link to="/">   Privacy Policy</Link></li>
            <li><Link to="/">International Hotels</Link></li>
            <li><Link to="/">Domestic Flights</Link></li>
            <li><Link to="/">International Flights</Link></li>
            
        </ul>
      </div>
      <div>
        <h1 className='footer-head'>Our Products</h1>
      <ul>
      <li><Link to="/">   Privacy Policy</Link></li>
            <li><Link to="/">International Hotels</Link></li>
            <li><Link to="/">Domestic Flights</Link></li>
            <li><Link to="/">International Flights</Link></li>
            <li><Link to="/">Bus Booking</Link></li>
            <li><Link to="/">Cab Booking</Link></li>
            <li><Link to="/">Train Ticket Booking</Link></li>
            <li><Link to="/">Route Planner</Link></li>
            <li><Link to="/">Destination Planner</Link></li>
        </ul>
      </div>
    </div>
    <div className='p-6 flex flex-wrap justify-between gap-8 '>
        <ul className='flex gap-4 font-bold text-left flex-wrap'>
            <li>About</li>
            <li>Popular Destination</li>
            <li>Top Flights</li>
            <li>Popular Bus</li>
            <li>Tranks</li>
            <li>Info</li>
        </ul>
        <ul className='flex gap-4 items-center'>
            <li className='rounded-full border-2 border-red-700 p-2'><Link to="/"><FaFacebookF/></Link></li>
            <li className='rounded-full border-2 border-red-700 p-2'><Link to="/"><FaSquareInstagram/></Link></li>
            <li className='rounded-full border-2 border-red-700 p-2'><Link to="/"><BsTwitterX/></Link></li>
            <li className='rounded-full border-2 border-red-700 p-2'><Link to="/"><FaLinkedinIn/></Link></li>
        </ul>
    </div>
    </div>
  )
}

export default Footer
