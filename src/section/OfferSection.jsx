import React from 'react';
import offer1 from "../assets/offer1.png";
import offer2 from "../assets/offer2.png";
import offer3 from "../assets/offer3.png";
import offer4 from "../assets/offer4.png";
import offer5 from "../assets/offer5.png"
import Slider from "react-slick";
import { useRef } from 'react';
import { CiCircleChevLeft } from "react-icons/ci";
import { CiCircleChevRight } from "react-icons/ci";

const OfferSection = () => {
  const offerImages = [offer1, offer2, offer3, offer4,offer5];
   const sliderRef = useRef(null);
  
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
    autoplaySpeed: 3000,
    cssEase: "linear",  responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            
          }
        }
      ]
  };

  return (
    <div className="p-4 bg-blue-50 rounded-2xl m-4 shadow-2xl mb-10 ">
      <h1 className="text-4xl font-bold mb-4 text-red-500">Check Out Your Offers</h1>
    <div className='relative '>
      <Slider {...settings} ref={sliderRef}>
        {offerImages.map((img, index) => (
          <div key={index} className='px-2'>
            <img src={img} alt={`Offer ${index + 1}`} className=" rounded-md h-[180px] w-[360px]" />
          </div>
        ))}
      </Slider>

      <div className="z-50 flex gap-2">
        <button className="" onClick={handlePrev}>
          <CiCircleChevLeft className='slide-btn left-arrow rounded-full'/>
        </button>
        <button className="" onClick={handleNext}>
          <CiCircleChevRight className='slide-btn right-arrow rounded-full' />
        </button>
      </div>
      </div>
    </div>
  );
};

export default OfferSection;
