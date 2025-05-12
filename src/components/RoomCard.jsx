import React from "react";
import hotel from "../assets/hotel.png";
import { BsFillPeopleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
const RoomCard = () => {
  return (
    <div className="flex justify-center">
      <div className="mt-10 mb-10 w-[90%] bg-blue-50 rounded-2xl p-4" >
        <h2 className="text-2xl font-bold">Hotel Duplex Double</h2>
        <div className="grid grid-cols-6 grid-rows-2 gap-4 p-4 pl-0">
          <div className="col-span-1 row-span-2">
            <img src={hotel} alt="" className="rounded-t-2xl h-[150px]" />
            <p className="font-bold text-xl pt-4">1 King Bed</p>
            <p>Non-Smoking</p>
            <p>35㎡ | Floor: 7-30</p>
            <p>Free Wi-Fi</p>
            <p>Bathtub</p>
            <p>Air conditioning</p>
            <p>
              <a href="/room-details" className="text-blue-800">
                Room Details
              </a>
            </p>
          </div>
          <div className="col-span-5 row-span-2 border-2 border-gray-200 rounded-2xl p-4 bg-white">
            <table className="table-auto w-full text-left">
              <thead className="h-10 w-full">
                <tr className="text-xl font-bold">
                  <th>Your Choices</th>
                  <th>Sleep</th>
                  <th className="text-right">Pricing</th>
                </tr>
              </thead>
              <tbody className="border-spacing-y-2">
                <tr className="pb-10 h-40">
                    <td>
                  <p>Includes 1 great breakfast</p>
                  <p> Non-refundable</p>
                  <p> Instant Confirmation</p>
                  <p> Pay at hotel</p>
                  </td>
                  <td>
                    <BsFillPeopleFill />
                  </td>
                  <td className="text-right ">
                  
                  <span className="font-bold text-xl"> ₹ 17,031</span>
                  <p>Total price: ₹ 20,420</p>
                  <p>Incl. taxes & fees</p>
                  <p>Earn ₹ 1,021.23 in Trip Coins</p>
               <Link to="/hotel-book" ><button className="book-btn">Book Now</button></Link>
              </td>
                </tr>
                <tr className="h-40 border-t-2 border-gray-200">
                    <td>
                  <p>Includes 1 great breakfast</p>
                  <p> Non-refundable</p>
                  <p> Instant Confirmation</p>
                  <p> Pay at hotel</p>
                  </td>
                  <td>
                    <BsFillPeopleFill />
                  </td>
                  <td className="text-right ">
                  
                  <span className="font-bold text-xl"> ₹ 17,031</span>
                  <p>Total price: ₹ 20,420</p>
                  <p>Incl. taxes & fees</p>
                  <p>Earn ₹ 1,021.23 in Trip Coins</p>
               <Link to="/hotel-book" ><button className="book-btn">Book Now</button></Link>
              </td>
                </tr>
               
              </tbody>
            </table>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
