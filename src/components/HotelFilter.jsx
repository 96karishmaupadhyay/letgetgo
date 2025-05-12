import React from 'react';
import { FaRupeeSign, FaHotel, FaCheckCircle, FaFilter } from 'react-icons/fa';

const HotelFilter = () => {
  return (
    <div className='bg-white shadow-lg rounded-2xl p-6 w-full max-w-xs'>
      <h2 className='text-2xl font-bold mb-6 flex items-center gap-2 text-secondary'>
        <FaFilter /> Filter Hotels
      </h2>

      {/* Price Range */}
      <div className='mb-6'>
        <h3 className='text-lg font-semibold mb-2 flex items-center gap-2'>
          <FaRupeeSign className='text-primary' /> Price Range
        </h3>
        <input
          type='range'
          min='4000'
          max='80000'
          className='w-full accent-blue-500'
        />
        <div className='text-sm text-gray-600 mt-1 flex justify-between'>
          <span>₹4,000</span>
          <span>₹80,000</span>
        </div>
      </div>

      {/* Popular Filters */}
      <div className='mb-6'>
        <h3 className='text-lg font-semibold mb-2 flex items-center gap-2'>
          <FaCheckCircle className='text-primary'/> Popular Filters
        </h3>
        <div className='space-y-2 text-sm text-gray-700'>
          <label className='flex items-center gap-2'>
            <input type='checkbox' className='accent-blue-500' /> Near By
          </label>
          <label className='flex items-center gap-2'>
            <input type='checkbox' className='accent-blue-500' /> Breakfast Included
          </label>
          <label className='flex items-center gap-2'>
            <input type='checkbox' className='accent-blue-500' /> Free Cancellation
          </label>
          <label className='flex items-center gap-2'>
            <input type='checkbox' className='accent-blue-500' /> One Double Bed
          </label>
          <label className='flex items-center gap-2'>
            <input type='checkbox' className='accent-blue-500' /> Instant Confirmation
          </label>
        </div>
      </div>

    
      <div>
        <h3 className='text-lg font-semibold mb-2 flex items-center gap-2'>
          <FaHotel className='text-primary'/> Property Type
        </h3>
        <div className='space-y-2 text-sm text-gray-700'>
          <label className='flex items-center gap-2'>
            <input type='checkbox' className='accent-blue-500' /> Hotel
          </label>
          <label className='flex items-center gap-2'>
            <input type='checkbox' className='accent-blue-500' /> Villas
          </label>
          <label className='flex items-center gap-2'>
            <input type='checkbox' className='accent-blue-500' /> Rented Room
          </label>
          <label className='flex items-center gap-2'>
            <input type='checkbox' className='accent-blue-500' /> Resort
          </label>
        </div>
      </div>
    </div>
  );
};

export default HotelFilter;
