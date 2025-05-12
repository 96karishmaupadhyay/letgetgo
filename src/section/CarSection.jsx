import React, { useState } from 'react';
import paris from "../assets/paris.png";
import newyork from "../assets/newyork.png";
import car1 from "../assets/car1.jpeg"
import car2 from "../assets/car2.jpeg"
import car3 from "../assets/car3.jpeg"
import car4 from "../assets/car4.jpeg"
const CarSection = () => {
  const [activeTab, setActiveTab] = useState(1);

  const tabs = [
    { id: 1, label: "Rental" },
    { id: 2, label: "Hourly" },
    { id: 3, label: "Trip Booking" },
    
  ];

  const tabContent = {
    1: [ 
      { image: car1, carName: "Toyota Fortuner", type: "SUV", price: "$80/day", seats: 7, fuelType: "Diesel" },
      { image: car2, carName: "Hyundai Verna", type: "Sedan", price: "$55/day", seats: 5, fuelType: "Petrol" },
      { image: car3, carName: "Maruti Swift", type: "Hatchback", price: "$40/day", seats: 5, fuelType: "Petrol" },
      { image: car1, carName: "Mahindra Thar", type: "SUV", price: "$20/hour", seats: 4, fuelType: "Diesel" }
    ],
    2: [ 
      { image: car4, carName: "Honda City", type: "Sedan", price: "$12/hour", seats: 5, fuelType: "Petrol" },
      { image: car3, carName: "Renault Triber", type: "MPV", price: "$15/hour", seats: 7, fuelType: "Petrol" },
      { image: car2, carName: "Tata Nexon", type: "Compact SUV", price: "$14/hour", seats: 5, fuelType: "Petrol" },
      { image: car1, carName: "Mahindra Thar", type: "SUV", price: "$20/hour", seats: 4, fuelType: "Diesel" }
    ],
    3: [ 
      { image: car3, carName: "Innova Crysta", type: "MPV", price: "$150/trip", seats: 7, fuelType: "Diesel" },
      { image: car2, carName: "Dzire Tour", type: "Sedan", price: "$110/trip", seats: 4, fuelType: "Petrol" },
      { image: car4, carName: "Ertiga", type: "MPV", price: "$130/trip", seats: 6, fuelType: "Petrol" },
      { image: car1, carName: "Mahindra Thar", type: "SUV", price: "$20/hour", seats: 4, fuelType: "Diesel" }
    ]
  };
  

  return (
    <div className='m-4 bg-blue-50 p-4 rounded-2xl mb-10'>
        <h1 className='text-4xl text-primary font-semibold p-4'>Check Your Car Services</h1>
        <div className='flex gap-4 pl-6'>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`p-2 text-sm rounded-sm border-1 border-blue-200  text-primary hover:text-white hover:bg-primary hover:border-0
            ${activeTab === tab.id ? "bg-tertiary text-white font-semi-bold" : "white text-tertiary"}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-2 pl-6 pt-4'>
        {tabContent[activeTab].map((item, index) => (
          <div key={index} className="text-left shadow-xl rounded-2xl bg-white">
            <img
              src={item.image}
              alt={item.carName}
              className="w-full h-40 object-cover rounded-t-2xl p-2"
            />
            <div className="p-4">
              <p className="text-xl font-semibold">{item.carName}</p>
              <p className="text-sm text-gray-600 mb-1">
                {item.type} → {item.seats}
              </p>
              <div className="flex justify-between items-center">
                <p className="text-sm font-medium">{item.fuelType}</p>
                <p className="text-lg font-bold text-[#d32027]">{item.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarSection;
