import React from 'react';
import hotel from "../assets/hotel.png";

const RecommendedHotelCard = ({ name, price, image }) => {
  return (
    <div className='p-4 rounded-xl h-[240px] z-40 shadow-sm'>
      <img src={image} alt={name} className='w-full h-40 object-cover rounded-md mb-2' />
      <div className='flex justify-between items-center'>
        <p className='font-semibold text-tertiary'>{name}</p>
        <p className='text-red-500 font-bold'>${price}</p>
      </div>
    </div>
  );
};

export default RecommendedHotelCard;
