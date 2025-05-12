import React from "react";
import hotel from "../assets/hotelimage.png";
// import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const HotelCard = () => {
  // const navigate = useNavigate();
  return (
    <div className="flex shadow rounded-2xl  text-blue-950 gap-6 items-center flex-wrap p-2">
      <div>
        <img src={hotel} alt="" className="h-[160px] w-[240px] rounded-2xl" />
      </div>
      <div className="flex gap-4 justify-between">
  <div className="pl-2 ">
        <div>
          <h2 className="text-2xl">Hotel Raddison</h2>
          <p>Near Metro plaza</p>
        </div>

        <h3 className="text-xl">Duplex room</h3>
        <p>Breakfast Included</p>
        <p className="text-gray-400">Last Booked 6 hour before</p>
      </div>
       <div>
        <h3 className="text-xl font-bold pl-4">$495</h3>
        <p className="text-wrap pl-4 text-gray-400">
          Total price is $503 included
          <br /> all types of service charges
        </p>
        <button className=' search p-2 m-2 rounded-full'>
              <Link to='/hotel-availability'>Availability</Link></button>
        {/* <button
          onClick={() => navigate("/hotel-availability")}
          className="search p-4 rounded-full ml-4 mt-2"
        >
          Check Availability
        </button> */}
      </div>
      </div>
    
     
    </div>
  );
};

export default HotelCard;
