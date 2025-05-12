import React, { useState } from 'react';
import { LuBaggageClaim } from "react-icons/lu";
import { MdDoNotDisturbAlt } from "react-icons/md";
const BookingPage = () => {
  const [flightDetails, setFlightDetails] = useState({
    airline: 'IndiGo',
    from: 'Mumbai',
    to: 'Delhi',
    price: 4500,
    departure: '2025-06-15 08:00',
    person:{
        adult:2,
        child:1
    }
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

 

  return (
    <div className="flex gap-6 m-4 ">
      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md ">
        <h2 className="text-2xl font-semibold text-center mb-4 text-tertiary">Flight Booking</h2>

        <div className="mb-4">
          <h3 className="text-lg font-semibold text-gray-700">Flight Details</h3>
          <div className="flex justify-between text-gray-600">
            <p>{flightDetails.from} → {flightDetails.to}</p>
            <p>{new Date(flightDetails.departure).toLocaleString()}</p>
          </div>
          <div className="flex justify-between text-gray-600 mt-2">
            <p>Airline</p>
            <p>{flightDetails.airline}</p>
          </div>
          <div className="flex justify-between text-gray-600 mt-2">
            <p>Price</p>
            <p>₹{flightDetails.price}</p>
          </div>
          <div className="flex justify-between text-gray-600 mt-2">
            <p>Persons</p>
            <p>Adult {flightDetails.person.adult} Child {flightDetails.person.child}</p>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-700">Passenger Details</h3>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Full Name"
            className="w-full p-2 border border-gray-300 rounded-md mt-2"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email Address"
            className="w-full p-2 border border-gray-300 rounded-md mt-2"
            required
          />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="Phone Number"
            className="w-full p-2 border border-gray-300 rounded-md mt-2"
            required
          />
        </div>

        <button
          
          className="w-full search text-white p-2 rounded-md hover:bg-blue-700"
        >
          Proceed to Payment
        </button>
      </div>
      <div className='flex-col flex gap-4 p-6 border-2 border-blue-300'>
      <h2 className='text-primary font-semibold text-2xl'>Economy</h2>
      <hr className='border-2 border-blue-300 opacity-55 mb-4'/>
          <h3 className='text-xl text-secondary'>Baggage Rules</h3>
              <p className='flex gap-4'> <LuBaggageClaim className='text-blue-300'/>Carry on Baggage</p>
              <p className='flex gap-4'><LuBaggageClaim  className='text-blue-300'/>Checked Baggage</p>
              <h3 className='text-xl text-secondary'>Fare Rules</h3>
              <p  className='flex gap-4'><MdDoNotDisturbAlt className='text-blue-300'/>Non-Refundable</p>
              <p  className='flex gap-4'><MdDoNotDisturbAlt className='text-blue-300'/>Changes not permitted</p>
              <p  >Ticketing:Within 12 hours after Payment</p>
            

      </div>
      <div className='flex-col flex gap-4 p-6 border-2 border-blue-300'>
        <h2 className='text-primary font-semibold text-2xl'>Buisness</h2>
              <hr className='border-2 border-blue-300 opacity-55 mb-4'/>
                  <h3 className='text-xl text-secondary'>Baggage Rules</h3>
              <p className='flex gap-4'> <LuBaggageClaim className='text-blue-300'/>Carry on Baggage</p>
              <p className='flex gap-4'><LuBaggageClaim  className='text-blue-300'/>Checked Baggage</p>
              <h3 className='text-xl text-secondary'>Fare Rules</h3>
              <p  className='flex gap-4'><MdDoNotDisturbAlt className='text-blue-300'/>Non-Refundable</p>
              <p  className='flex gap-4'><MdDoNotDisturbAlt className='text-blue-300'/>Changes not permitted</p>
              <p >Ticketing:Within 12 hours after Payment</p>
            
      </div>
      <div className='flex-col flex gap-4 p-6 border-2 border-blue-300'>
        <h2 className='text-primary font-semibold text-2xl '>Standard</h2>
              <hr className='border-2 border-blue-300 opacity-55 mb-4'/>
              <h3 className='text-xl text-secondary'>Baggage Rules</h3>
              <p className='flex gap-4'> <LuBaggageClaim className='text-blue-300'/>Carry on Baggage</p>
              <p className='flex gap-4'><LuBaggageClaim  className='text-blue-300'/>Checked Baggage</p>
              <h3 className='text-xl text-secondary'>Fare Rules</h3>
              <p  className='flex gap-4'><MdDoNotDisturbAlt className='text-blue-300'/>Non-Refundable</p>
              <p  className='flex gap-4'><MdDoNotDisturbAlt className='text-blue-300'/>Changes not permitted</p>
              <p >Ticketing:Within 12 hours after Payment</p>
             
      </div>
    </div>
  );
};

export default BookingPage;
