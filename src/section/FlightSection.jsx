import React, { useState } from 'react';
import paris from "../assets/paris.png";
import newyork from "../assets/newyork.png";
import tokyo from "../assets/tokyo.png";
import dubai from "../assets/4.png";
import flight1 from "../assets/flight1.jpeg"
import flight2 from "../assets/flight2.jpeg"
import flight3 from "../assets/flight3.jpeg"
import flight4 from "../assets/flight4.jpeg"
import flight5 from "../assets/flight5.jpeg"
const FlightSection = () => {
  const [activeTab, setActiveTab] = useState(1);

  const tabs = [
    { id: 1, label: "Paris Flights" },
    { id: 2, label: "New York Flights" },
    { id: 3, label: "Tokyo Flights" },
    { id: 4, label: "Dubai Flights" }
  ];

  const tabContent = {
    1: [
      { image: flight1, airline: "Air France", price: "$550", time: "8h 45m", from: "Delhi", to: "Paris" },
      { image: flight5, airline: "Emirates", price: "$620", time: "9h 10m", from: "Mumbai", to: "Paris" },
      { image: flight3, airline: "Lufthansa", price: "$590", time: "8h 30m", from: "Bangalore", to: "Paris" }
    ],
    2: [
      { image: flight4, airline: "Delta Airlines", price: "$780", time: "15h 20m", from: "Delhi", to: "New York" },
      { image: flight3, airline: "Air India", price: "$720", time: "14h 50m", from: "Mumbai", to: "New York" },
      { image: flight1, airline: "United Airlines", price: "$790", time: "15h 10m", from: "Hyderabad", to: "New York" }
    ],
    3: [
      { image: flight2, airline: "Japan Airlines", price: "$620", time: "7h 55m", from: "Delhi", to: "Tokyo" },
      { image: flight3, airline: "ANA", price: "$640", time: "8h 10m", from: "Bangalore", to: "Tokyo" },
      { image: flight5, airline: "Singapore Airlines", price: "$680", time: "9h", from: "Chennai", to: "Tokyo" }
    ],
    4: [
      { image: flight5, airline: "Emirates", price: "$400", time: "3h 30m", from: "Delhi", to: "Dubai" },
      { image: flight3, airline: "IndiGo", price: "$320", time: "3h 45m", from: "Mumbai", to: "Dubai" },
      { image: flight2, airline: "Air India Express", price: "$350", time: "4h", from: "Kochi", to: "Dubai" }
    ]
  };

  return (
    <div className='m-4 bg-blue-50 p-4 rounded-2xl mb-10'>
        <h1 className='text-4xl text-primary font-semibold p-4'>Check Your Flights</h1>
        <div className='flex gap-4 pl-6'>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`p-2 text-sm rounded-sm border-1 border-blue-200  text-primary hover:text-white  hover:bg-primary hover:border-0
            ${activeTab === tab.id ? "bg-tertiary text-white font-bold" : "white text-tertiary"}`}
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
              alt={item.airline}
              className="w-full h-40 object-cover rounded-t-2xl"
            />
            <div className="p-4">
              <p className="text-xl font-semibold">{item.airline}</p>
              <p className="text-sm text-gray-600 mb-1">
                {item.from} → {item.to}
              </p>
              <div className="flex justify-between items-center">
                <p className="text-sm font-medium">{item.time}</p>
                <p className="text-lg font-bold text-[#d32027]">{item.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlightSection;
