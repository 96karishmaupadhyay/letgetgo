import React from 'react';
import { FaRupeeSign, FaHotel, FaCheckCircle, FaFilter, FaPlane } from 'react-icons/fa';

const FlightHotelFilter = ({ filterType }) => {
  const isHotel = filterType === 'hotel';
  const isFlight = filterType === 'flight';

  return (
    <div className='bg-white shadow-lg rounded-2xl p-6 w-full max-w-xs'>
      <h2 className='text-2xl font-bold mb-6 flex items-center gap-2 text-secondary'>
        <FaFilter /> Filter {isHotel ? 'Hotels' : 'Flights'}
      </h2>

      {/* Price Range */}
      <div className='mb-6'>
        <h3 className='text-lg font-semibold mb-2 flex items-center gap-2'>
          <FaRupeeSign className='text-primary' /> Price Range
        </h3>
        <input
          type='range'
          min='1000'
          max={isHotel ? '80000' : '20000'}
          className='w-full accent-blue-500'
        />
        <div className='text-sm text-gray-600 mt-1 flex justify-between'>
          <span>₹1,000</span>
          <span>₹{isHotel ? '80,000' : '20,000'}</span>
        </div>
      </div>

      {/* Common Filters */}
      <div className='mb-6'>
        <h3 className='text-lg font-semibold mb-2 flex items-center gap-2'>
          <FaCheckCircle className='text-primary' /> {isHotel ? 'Popular Filters' : 'Flight Preferences'}
        </h3>
        <div className='space-y-2 text-sm text-gray-700'>
          {isHotel ? (
            <>
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
            </>
          ) : (
            <>
              <label className='flex items-center gap-2'>
                <input type='checkbox' className='accent-blue-500' /> Non-Stop Flights
              </label>
              <label className='flex items-center gap-2'>
                <input type='checkbox' className='accent-blue-500' /> Early Morning Departures
              </label>
              <label className='flex items-center gap-2'>
                <input type='checkbox' className='accent-blue-500' /> Refundable Tickets
              </label>
              <label className='flex items-center gap-2'>
                <input type='checkbox' className='accent-blue-500' /> Meals Included
              </label>
            </>
          )}
        </div>
      </div>

      {/* Hotel Property Type or Airline Filter */}
      <div>
        <h3 className='text-lg font-semibold mb-2 flex items-center gap-2'>
          {isHotel ? (
            <>
              <FaHotel className='text-primary' /> Property Type
            </>
          ) : (
            <>
              <FaPlane className='text-primary' /> Airlines
            </>
          )}
        </h3>
        <div className='space-y-2 text-sm text-gray-700'>
          {isHotel ? (
            <>
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
            </>
          ) : (
            <>
              <label className='flex items-center gap-2'>
                <input type='checkbox' className='accent-blue-500' /> IndiGo
              </label>
              <label className='flex items-center gap-2'>
                <input type='checkbox' className='accent-blue-500' /> Air India
              </label>
              <label className='flex items-center gap-2'>
                <input type='checkbox' className='accent-blue-500' /> SpiceJet
              </label>
              <label className='flex items-center gap-2'>
                <input type='checkbox' className='accent-blue-500' /> Vistara
              </label>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default FlightHotelFilter;
