
import React from 'react';
import { FaPlaneDeparture, FaFilter, FaCar, FaCheck } from 'react-icons/fa';

const CarFilter = () => {
  return (
    <div className='m-4 w-full max-w-xs bg-white p-6 rounded-2xl shadow-lg'>
      <h2 className='text-2xl font-bold mb-6 flex items-center gap-2 text-secondary'>
        <FaFilter className='text-primary' /> Car's Filter
      </h2>

      <div className='mb-6'>
        <h3 className='text-lg font-semibold mb-3 flex items-center gap-2 text-gray-700'>
          <FaCheck className='text-secondary'/> Recommended Filters
        </h3>
        <div className='space-y-2 text-sm text-gray-700'>
          <label className='flex items-center gap-2 hover:text-blue-500 transition'>
            <input type="checkbox" className='accent-blue-500' /> Four Seater
          </label>
          <label className='flex items-center gap-2 hover:text-blue-500 transition'>
            <input type="checkbox" className='accent-blue-500' /> Bike
          </label>
          <label className='flex items-center gap-2 hover:text-blue-500 transition'>
            <input type="checkbox" className='accent-blue-500' /> Mini Ola
          </label>
         
        </div>
      </div>

   
      <div>
        <h3 className='text-lg font-semibold mb-3 flex items-center gap-2 text-gray-700'>
          <FaCar className='text-secondary'/> Recommended Cars
        </h3>
        <div className='space-y-2 text-sm text-gray-700'>
          {['Sedan', 'Fortuner', 'Ertica', 'Toyota', 'Scorpio'].map((car, index) => (
            <label key={index} className='flex items-center gap-2 hover:text-blue-500 transition'>
              <input type="checkbox" className='accent-blue-500' /> {car}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarFilter;
