import React from "react";
import { IoStar } from "react-icons/io5";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import hotel1 from "../assets/2.png";
import hotel2 from "../assets/1.png";
import hotel3 from "../assets/1.png";
import hotel4 from "../assets/1.png";
import hotel5 from "../assets/1.png";
import hotel6 from "../assets/1.png";
import hotel7 from "../assets/1.png";
import { CiParking1 } from "react-icons/ci";
import { IoHomeOutline } from "react-icons/io5";
import { CiCloudSun } from "react-icons/ci";
import { MdOutlineFreeBreakfast } from "react-icons/md";
const HotelAvailabilityCard = () => {
  return (
    <div className="w-[90%] mx-auto">
      <div className="flex justify-between p-8 rounded-2xl">
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <h2 className="text-2xl">Grand Avenue 13 </h2>
            <div className="flex">
              <IoStar className="text-orange-400" />
              <IoStar className="text-orange-400" />
              <IoStar className="text-orange-400" />
              <IoStar className="text-orange-400" />
              <IoStar className="text-orange-400" />
            </div>
            <p className="bg-blue-100 pl-2 pr-2 rounded-2xl flex gap-2 items-center">
              <AiOutlineSafetyCertificate /> Certified
            </p>
          </div>
          <div className="flex items-center gap-2">
            <CiLocationOn />
            <p className="text-gray-500"> 12 Avenue govind Puram Ghaziabad</p>
            <a href="#hotel-map">Show Map</a>
          </div>
        </div>

        <div>
          <button className="select-btn rounded-2xl">Select Room</button>
        </div>
      </div>
      <div className="grid grid-cols-4 grid-rows-2 gap-2 rounded-2xl bg-red-50 p-4">
        <img
          src={hotel1}
          alt=""
          className="col-span-1 row-span-2 h-full rounded-l-2xl"
        />
        <img src={hotel2} alt="" className="col-span-1 row-span-1" />
        <img src={hotel3} alt="" className="col-span-1 row-span-1" />
        <img
          src={hotel4}
          alt=""
          className="col-span-1 row-span-1 rounded-tr-2xl"
        />
        <img src={hotel5} alt="" className="col-span-1 row-span-1" />
        <img src={hotel6} alt="" className="col-span-1 row-span-1" />
        <img
          src={hotel7}
          alt=""
          className="col-span-1 row-span-1 rounded-br-2xl"
        />
      </div>
      <div className="grid grid-cols-3 pt-4 pb-4">
        <div className="flex flex-col p-4 col-span-2 row-span-2 w-full">
          <div>
            <h2 className="text-xl font-bold text-red-400">Highlights</h2>
            <div className="flex justify-around p-4 bg-blue-50 rounded-2xl mt-4">
              <div>
                <CiParking1 className="text-6xl" />
                <p>Parking</p>
              </div>
              <div>
                <IoHomeOutline className="text-6xl" />
                <p>Rooms</p>
              </div>
              <div>
                <CiCloudSun className="text-6xl" />
                <p>Supers Views</p>
              </div>
              <div>
                <MdOutlineFreeBreakfast className="text-6xl" />
                <p>BreakFast</p>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <h2 className="text-xl font-bold text-red-400">Amenties</h2>
            <div className="flex  p-4 bg-blue-50 rounded-2xl mt-4 flex-wrap gap-8">
              <div className="flex gap-2 items-center">
                <CiParking1 className="text-2xl" />
                <p>Parking</p>
              </div>
              <div className="flex gap-2 items-center">
                <IoHomeOutline className="text-2xl" />
                <p>Rooms</p>
              </div>
              <div className="flex gap-2 items-center">
                <CiCloudSun className="text-2xl" />
                <p>Supers Views</p>
              </div>
              <div className="flex gap-2 items-center">
                <MdOutlineFreeBreakfast className="text-2xl" />
                <p>BreakFast</p>
              </div>
              <div className="flex gap-2 items-center">
                <IoHomeOutline className="text-2xl" />
                <p>Rooms</p>
              </div>
              <div className="flex gap-2 items-center">
                <CiCloudSun className="text-2xl" />
                <p>Supers Views</p>
              </div>
              <div className="flex gap-2 items-center">
                <MdOutlineFreeBreakfast className="text-2xl" />
                <p>BreakFast</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold text-red-400 mt-4">
              Property Description
            </h2>
            <div className="mt-4">
              <p>
                Situated at just 22 kilometres (12 miles) away from Changi
                International Airport, the 30-storey Grand Copthorne
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 border-l-2 border-gray-500 row-span-2 p-4 ">
          <div>
            <div className="p-2">
              <span className="bg-tertiary p-2 rounded-tr-2xl rounded-bl-2xl text-white">
                8.7/<span>10</span>
              </span>
              <span className="pl-2 ">Very Good</span>
            </div>
            <div>
              <p>
                Great service Very clean suite for Premier Waterfront. Love the
                amenities as well.
              </p>
              <a href="/hero">All Reviews</a>
            </div>
            <div>
              <h2 className="text-xl font-bold text-red-400">Surroundings</h2>
              <div>
                <p>Metro: Havelock (390m)</p>
                <p>Metro: Outram Park (1.4 km)</p>
                <p>Airport: Singapore Changi Airport (21.8 km)</p>

                <p>Train: Woodlands Train Checkpoint (21.4 km)</p>
                <p>Landmarks: Singapore River Cruise by Water B (1.0 km)</p>
                <a href="">View on Map</a>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelAvailabilityCard;
