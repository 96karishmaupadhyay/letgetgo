import React, { useState } from 'react';
import parisTrain from "../assets/paris.png";
import newyorkTrain from "../assets/newyork.png";
import tokyo1 from "../assets/tokyo1.jpeg";
import tokyo2 from "../assets/tokyo2.jpeg";
import tokyo3 from "../assets/tokyo3.jpeg";
import dubai1 from "../assets/dubai1.jpeg";
import dubai2 from "../assets/dubai2.jpeg";
import dubai3 from "../assets/dubai3.jpeg";
import dubai4 from "../assets/dubai4.jpeg";
import paris1 from "../assets/paris1.jpeg"
import paris2 from "../assets/paris2.jpeg"
import paris3 from "../assets/paris3.jpeg"
import paris4 from "../assets/paris4.jpeg"
import newyork1 from "../assets/newyork1.jpeg"
import newyork2 from "../assets/newyork2.jpeg"
import newyork3 from "../assets/newyork3.jpeg"
import newyork4 from "../assets/newyork4.jpeg"

const TopPackageSection = () => {
  const [activeTab, setActiveTab] = useState(1);

  const tabs = [
    { id: 1, label: "Paris" },
    { id: 2, label: "New York" },
    { id: 3, label: "Tokyo" },
    { id: 4, label: "Dubai" }
  ];

  const tabContent = {
    1: [
      { image: paris1, name: "Romantic Paris Getaway", price: "$299" },
      { image: paris2, name: "Luxury Eurostar Package", price: "$349" },
      { image: paris3, name: "Thalys Scenic Tour", price: "$329" },
      { image: paris4, name: "Budget Paris Weekend", price: "$199" }
    ],
    2: [
      { image: newyork1, name: "NYC Express Experience", price: "$450" },
      { image: newyork2, name: "Historic Rail Journey", price: "$320" },
      { image: newyork3, name: "Hudson River Explorer", price: "$180" },
      { image: newyork4, name: "Empire Deluxe Ride", price: "$390" }
    ],
    3: [
      { image: tokyo1, name: "Shinkansen Premium Pass", price: "$410" },
      { image: tokyo2, name: "Bullet Train Adventure", price: "$370" },
      { image: tokyo3, name: "Cultural Tokyo Day Trip", price: "$290" }
    ],
    4: [
      { image: dubai1, name: "Modern Dubai Rail Tour", price: "$60" },
      { image: dubai2, name: "Green Line City Explorer", price: "$50" },
      { image: dubai3, name: "Desert Rail Journey", price: "$120" },
      { image: dubai4, name: "Dubai Tram & Beach Combo", price: "$40" },
      { image: dubai1, name: "Downtown Dubai Special", price: "$55" }
    ]
  };
  

  return (
    <div className='m-4 bg-blue-50 p-4 rounded-2xl mb-10'>
      <h1 className='text-4xl text-primary font-semibold p-4'>Explore Our Top Packages</h1>
      <div className='flex gap-4 pl-6'>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`p-2 text-sm rounded-sm border-1 border-blue-200  text-primary hover:text-white hover:border-0 hover:bg-primary
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

export default TopPackageSection;
