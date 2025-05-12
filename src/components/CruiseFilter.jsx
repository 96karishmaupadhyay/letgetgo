import React from 'react';
import { FaShip, FaFilter, FaCheck } from 'react-icons/fa';

const CruiseFilter = () => {
  return (
    <div className='m-4 w-full max-w-xs bg-white p-6 rounded-2xl shadow-lg'>
      <h2 className='text-2xl font-bold mb-6 flex items-center gap-2 text-secondary'>
        <FaFilter className='text-primary' /> Cruise Filter
      </h2>

      <div className='mb-6'>
        <h3 className='text-lg font-semibold mb-3 flex items-center gap-2 text-gray-700'>
          <FaCheck className='text-secondary'/> Recommended Filters
        </h3>
        <div className='space-y-2 text-sm text-gray-700'>
          <label className='flex items-center gap-2 hover:text-blue-500 transition'>
            <input type="checkbox" className='accent-blue-500' /> Luxury Cruise
          </label>
          <label className='flex items-center gap-2 hover:text-blue-500 transition'>
            <input type="checkbox" className='accent-blue-500' /> Budget Friendly
          </label>
          <label className='flex items-center gap-2 hover:text-blue-500 transition'>
            <input type="checkbox" className='accent-blue-500' /> Family Cruise
          </label>
        </div>
      </div>

      <div>
        <h3 className='text-lg font-semibold mb-3 flex items-center gap-2 text-gray-700'>
          <FaShip className='text-secondary'/> Recommended Cruises
        </h3>
        <div className='space-y-2 text-sm text-gray-700'>
          {['Royal Caribbean', 'Carnival', 'Norwegian', 'Princess', 'Celebrity'].map((cruise, index) => (
            <label key={index} className='flex items-center gap-2 hover:text-blue-500 transition'>
              <input type="checkbox" className='accent-blue-500' /> {cruise}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CruiseFilter;
