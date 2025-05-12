import React, { useState } from 'react';
import paris from "../assets/paris.png";
import newyork from "../assets/newyork.png";
import cruise1 from "../assets/cruise.png"
import cruise2 from "../assets/cruise1.png"
import cruise3 from "../assets/cruise2.png"
import cruise4 from "../assets/cruise.png"
const CruiseSection = () => {
  const [activeTab, setActiveTab] = useState(1);
const tabs = [
  { id: 1, label: "Luxury Cruises" },
  { id: 2, label: "Day Cruises" },
  { id: 3, label: "Adventure Cruises" },
];

const tabContent = {
  1: [
    { image: cruise1, cruiseName: "Royal Caribbean", type: "Ocean Cruise", price: "$1200/week", capacity: 3000, amenities: "Pool, Spa, Casino" },
    { image: cruise2, cruiseName: "Celebrity Eclipse", type: "Ocean Cruise", price: "$1100/week", capacity: 2800, amenities: "Fine Dining, Theatre" },
    { image: cruise3, cruiseName: "MSC Seaside", type: "Luxury Cruise", price: "$1250/week", capacity: 3200, amenities: "Water Park, Gym" },
    { image: cruise1, cruiseName: "Norwegian Bliss", type: "Ocean Cruise", price: "$1300/week", capacity: 3100, amenities: "Spa, Casino, Lounge" },
  ],
  2: [
    { image: cruise4, cruiseName: "Goa Day Cruise", type: "Day Cruise", price: "$70/day", capacity: 150, amenities: "Live Music, Food" },
    { image: cruise3, cruiseName: "Kochi Backwater Cruise", type: "Day Cruise", price: "$65/day", capacity: 120, amenities: "Lunch, Guide" },
    { image: cruise2, cruiseName: "Mumbai Sunset Cruise", type: "Evening Cruise", price: "$80/day", capacity: 100, amenities: "Snacks, DJ" },
    { image: cruise1, cruiseName: "Mandovi River Cruise", type: "River Cruise", price: "$60/day", capacity: 140, amenities: "Dance Show, Drinks" },
  ],
  3: [
    { image: cruise3, cruiseName: "Alaskan Adventure", type: "Expedition Cruise", price: "$1600/trip", capacity: 500, amenities: "Glacier View, Excursions" },
    { image: cruise2, cruiseName: "Andaman Explorer", type: "Island Cruise", price: "$1400/trip", capacity: 600, amenities: "Scuba Diving, Sightseeing" },
    { image: cruise4, cruiseName: "Lakshadweep Voyage", type: "Ocean Cruise", price: "$1500/trip", capacity: 550, amenities: "Snorkeling, Onboard Activities" },
    { image: cruise1, cruiseName: "Norwegian Bliss", type: "Adventure Cruise", price: "$1300/trip", capacity: 3100, amenities: "Hiking Tours, Night Shows" },
  ]
};

  return (
    <div className='m-4 bg-blue-50 p-4 rounded-2xl mb-10'>
        <h1 className='text-4xl text-primary font-semibold p-4'>Check Your Cruise Services</h1>
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
              <p className="text-xl font-semibold">{item.cruiseName}</p>
              <p className="text-sm text-gray-600 mb-1">
                {item.type} → {item.seats}
              </p>
              <div className="flex justify-between items-center">
                <p className="text-sm font-medium">{item.cruiseType}</p>
                <p className="text-lg font-bold text-[#d32027]">{item.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CruiseSection;
