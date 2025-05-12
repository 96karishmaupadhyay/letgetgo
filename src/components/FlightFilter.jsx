// import React from 'react'

// const FlightFilter = () => {
//   return (
//     <div className='m-4 w-full'>
       
//       <div className='flex flex-col bg-white p-4 rounded-2xl mb-10 shadow-sm gap-2'>
//       <h3 className='text-xl text-tertiary'>Recommended Filter</h3>
//        <div className='flex gap-2'> <input type="checkbox" name="" id="" /> <label htmlFor="">Direct Flight</label></div>
//        <div className='flex gap-2'> <input type="checkbox" name="" id="" /> <label htmlFor="">Checked Baggage included</label></div>
//        <div className='flex gap-2'> <input type="checkbox" name="" id="" /> <label htmlFor="">High Budget Airline</label></div>
//        <div className='flex gap-2'> <input type="checkbox" name="" id="" /> <label htmlFor="">Carry on Baggage included</label></div>
//       </div>

//       <div  className='flex flex-col bg-white rounded-2xl mb-10 p-4 shadow-sm gap-2'>
//       <h3 className='text-xl text-tertiary'>Recommended Airline</h3>
//       <div className='flex gap-2'><input type="checkbox" name="" id="" /> <label htmlFor="">Direct Flight</label></div>
//       <div className='flex gap-2'><input type="checkbox" name="" id="" /> <label htmlFor="">Direct Flight</label></div>
//       <div className='flex gap-2'><input type="checkbox" name="" id="" /> <label htmlFor="">Direct Flight</label></div>
//       <div className='flex gap-2'><input type="checkbox" name="" id="" /> <label htmlFor="">Direct Flight</label></div>
//       <div className='flex gap-2'><input type="checkbox" name="" id="" /> <label htmlFor="">Direct Flight</label></div>
//       </div>
//     </div>
//   )
// }

// export default FlightFilter


import React from 'react';
import { FaPlaneDeparture, FaFilter, FaSuitcase, FaCheck } from 'react-icons/fa';

const FlightFilter = () => {
  return (
    <div className='m-4 w-full max-w-xs bg-white p-6 rounded-2xl shadow-lg'>
      <h2 className='text-2xl font-bold mb-6 flex items-center gap-2 text-secondary'>
        <FaFilter className='text-primary' /> Filter Flights
      </h2>

      <div className='mb-6'>
        <h3 className='text-lg font-semibold mb-3 flex items-center gap-2 text-gray-700'>
          <FaCheck className='text-secondary'/> Recommended Filters
        </h3>
        <div className='space-y-2 text-sm text-gray-700'>
          <label className='flex items-center gap-2 hover:text-blue-500 transition'>
            <input type="checkbox" className='accent-primary' /> Direct Flight
          </label>
          <label className='flex items-center gap-2 hover:text-blue-500 transition'>
            <input type="checkbox" className='accent-blue-500' /> Checked Baggage Included
          </label>
          <label className='flex items-center gap-2 hover:text-blue-500 transition'>
            <input type="checkbox" className='accent-blue-500' /> High Budget Airline
          </label>
          <label className='flex items-center gap-2 hover:text-blue-500 transition'>
            <input type="checkbox" className='accent-blue-500' /> Carry-on Baggage Included
          </label>
        </div>
      </div>

   
      <div>
        <h3 className='text-lg font-semibold mb-3 flex items-center gap-2 text-gray-700'>
          <FaPlaneDeparture className='text-secondary'/> Recommended Airlines
        </h3>
        <div className='space-y-2 text-sm text-gray-700'>
          {['IndiGo', 'Air India', 'SpiceJet', 'Vistara', 'Go First'].map((airline, index) => (
            <label key={index} className='flex items-center gap-2 hover:text-blue-500 transition'>
              <input type="checkbox" className='accent-blue-500' /> {airline}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FlightFilter;
