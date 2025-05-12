import React, { useState } from 'react';
import paris from "../assets/paris.png";
import newyork from "../assets/newyork.png";
import tokyo from "../assets/tokyo.png";
import dubai from "../assets/4.png";
import room1 from "../assets/room1.jpeg"
import room2 from "../assets/room2.jpeg"
import room3 from "../assets/room3.jpeg"
import room4 from "../assets/room4.jpeg"
import room5 from "../assets/room5.jpeg"
const HotelProperties = () => {
  const [activeTab, setActiveTab] = useState(1);

  const tabs = [
    { id: 1, label: "Paris" },
    { id: 2, label: "New York" },
    { id: 3, label: "Tokyo" },
    { id: 4, label: "Dubai" }
  ];

  const tabContent = {
    1: [
      { image: room5, name: "Hotel Le Meurice", price: "$250/night" },
      { image: room1, name: "Hôtel Lutetia", price: "$300/night" },
      { image: room2, name: "Ritz Paris", price: "$400/night" },
      { image: room3, name: "Hotel Plaza Athénée", price: "$350/night" },
      { image: room4, name: "Hotel Le Meurice", price: "$250/night" },
      { image: room5, name: "Hôtel Lutetia", price: "$300/night" },
      { image: newyork, name: "Ritz Paris", price: "$400/night" },
     
    ],
    2: [
      { image: room1, name: "The Plaza", price: "$450/night" },
      { image: room2, name: "The Peninsula", price: "$500/night" },
      { image: room3, name: "Four Seasons NYC", price: "$600/night" },
      { image: room4, name: "Mandarin Oriental", price: "$550/night" }
    ],
    3: [
      { image: newyork, name: "Park Hyatt Tokyo", price: "$300/night" },
      { image: room3, name: "The Ritz-Carlton Tokyo", price: "$350/night" },
      { image: room2, name: "Aman Tokyo", price: "$400/night" }
    ],
    4: [
      { image: room2, name: "Burj Al Arab", price: "$1000/night" },
      { image: room1, name: "Atlantis The Palm", price: "$800/night" },
      { image: room4, name: "Jumeirah Beach Hotel", price: "$600/night" },
      { image: room5, name: "The Ritz-Carlton Dubai", price: "$700/night" }
    ]
  };

  return (
    <div className='m-4 bg-blue-50 p-4 rounded-2xl mb-10'>
        <h1 className='text-4xl text-primary font-semibold p-4'>Check Your Hotels</h1>
        <div className='flex gap-4 pl-6'>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`p-2 text-sm rounded-sm border-1 border-blue-200  text-primary hover:text-white hover:bg-primary
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
            <img src={item.image} alt={item.name} className="w-full h-48 object-cover rounded-xl  p-2" />
            <div className='flex items-center justify-between p-2'>
              <p className="mt-2 text-lg font-semibold">{item.name}</p>
              <p className="text-lg text-gray-600">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotelProperties;
