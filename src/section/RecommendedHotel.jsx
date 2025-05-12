import React, { useRef } from 'react';
import Slider from "react-slick";
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";
import RecommendedHotelCard from '../components/RecommendedHotelCard';
import hotel1 from "../assets/hotel.png";
import hotel2 from "../assets/hotelimage.png"
const RecommendedHotel = () => {
  const sliderRef = useRef(null);

  const hotels = [
    { name: "Hotel Grand", price: 52, image: hotel1 },
    { name: "Ocean View", price: 75, image: hotel2 },
    { name: "Skyline Inn", price: 60, image: hotel1 },
    { name: "Hilltop Resort", price: 80, image: hotel2 },
    { name: "City Central", price: 65, image: hotel1 }
  ];

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 5000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  return (
    <div className='flex justify-center'>
    <div className="p-4  rounded-2xl m-4 shadow-2xl mb-10 w-[90%]">
      <h1 className="text-4xl font-bold mb-6 text-red-500">Check Our Reccommendation for you</h1>

      <div className="relative p-4 h-[300px] bg-white">
        <Slider {...settings} ref={sliderRef}>
          {hotels.map((hotel, index) => (
            <div key={index} className='p-2'>
              <RecommendedHotelCard
                name={hotel.name}
                price={hotel.price}
                image={hotel.image}
              />
            </div>
          ))}
        </Slider>

        <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-4 z-10">
          <button onClick={handlePrev}>
            <CiCircleChevLeft className="text-4xl text-gray-700 bg-white rounded-full shadow-lg hover:text-red-500" />
          </button>
          <button onClick={handleNext}>
            <CiCircleChevRight className="text-4xl text-gray-700 bg-white rounded-full shadow-lg hover:text-red-500" />
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default RecommendedHotel;
