import React from 'react'
import TrainAvailabilityCard from '../components/TrainAvailabilityCard'
import train from "../assets/train1.jpeg"
import { IoMdPerson } from "react-icons/io";
const TrainAvailabilitySection = () => {
  return (
    <div className='flex gap-4'>
      <div className='flex flex-col gap-4 w-[100%]'>
        <TrainAvailabilityCard/>
        <TrainAvailabilityCard/>
        <TrainAvailabilityCard/>
        <TrainAvailabilityCard/>
        <TrainAvailabilityCard/>
        <TrainAvailabilityCard/>
      </div>
      <div className='w-[30%] p-2 shadow-xl rounded-2xl pt-6'>
        <img src={train} alt="" />
        <div className='flex justify-between'>
            <div>
                <h2 className='text-xl font-bold'>Total</h2>
                <p>Ticket fare</p>
                <p>Booking fare</p>
            </div>
            <div className='text-right '>
                <h2 className='text-xl font-bold text-tertiary'>$321.0</h2>
                <p>$321.0</p>
                <p>$0.00</p>
            </div>
            
        </div>
        <div>
            <button className='w-full search rounded-2xl p-2 mt-4'>Book Now</button>
        </div>
        <div className='flex gap-2 items-center mt-4 text-blue-400'>
        <IoMdPerson/> 
        <span>1 Adult</span>
        </div>
      </div>
    </div>
  )
}

export default TrainAvailabilitySection
