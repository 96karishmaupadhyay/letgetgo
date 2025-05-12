import React, { useState } from 'react';
import parisTrain from "../assets/paris.png";
import newyorkTrain from "../assets/newyork.png";
import train1 from "../assets/train1.jpeg";
import train2 from "../assets/train2.jpeg";
import train3 from "../assets/train3.jpeg";
import train4 from "../assets/train4.jpeg";


const TrainSection = () => {
  const [activeTab, setActiveTab] = useState(1);

  const tabs = [
    { id: 1, label: "Paris" },
    { id: 2, label: "New York" },
    { id: 3, label: "Tokyo" },
    { id: 4, label: "Dubai" }
  ];

  const tabContent = {
    1: [
      { image: train1, name: "TGV Duplex", price: "$60" },
      { image:train2, name: "Eurostar", price: "$75" },
      { image: train3, name: "Thalys", price: "$70" },
      { image: train4, name: "Ouigo", price: "$50" }
    ],
    2: [
      { image: train1, name: "Amtrak Acela", price: "$120" },
      { image: train3, name: "Metro-North", price: "$40" },
      { image: train1, name: "Amtrak Empire Service", price: "$100" }
    ],
    3: [
      { image: train2, name: "Shinkansen N700", price: "$110" },
      { image: train3, name: "JR East E5", price: "$95" },
      { image: train4, name: "Tokaido Line", price: "$85" },
      { image: train1, name: "Tokaido Line", price: "$85" }
    ],
    4: [
      { image: train1, name: "Dubai Metro Red Line", price: "$10" },
      { image: train3, name: "Dubai Metro Green Line", price: "$8" },
      { image: train4, name: "Dubai Tram", price: "$6" }
    ]
  };

  return (
    <div className='m-4 bg-blue-50 p-4 rounded-2xl mb-10'>
      <h1 className='text-4xl text-primary font-semibold p-4'>Explore Train Options</h1>
      <div className='flex gap-4 pl-6'>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`p-2 text-sm rounded-sm border-1 border-blue-200 w-20 text-primary hover:text-white hover:border-0 hover:bg-primary
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

export default TrainSection;
