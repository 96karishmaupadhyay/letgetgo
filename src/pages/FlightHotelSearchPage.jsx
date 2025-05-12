import React from "react";
import FlightHotelSearch from "../components/FlightHotelSearch";
import Navbar from "../components/Navbar";
import car from "../assets/flight-hotel.png";
import Footer from "../section/Footer";
import FlightHotelSearchCard from "../components/FlightHotelSearchCard";
import FlightHotelFilter from "../components/FlightHotelFilter";
const FlightHotelSearchPage = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className=" h-[400px]">
        <img src={car} alt="" className=" w-full rounded-2xl p-2 h-full" />

        <FlightHotelSearch />
      </div>
      <div className="flex gap-4 m-4 p-4">
        <div className="w-[30%]">
          <FlightHotelFilter />
        </div>
        <div className=" flex flex-col gap-4 w-[70%] p-4 rounded-2xl m-4 ">
          <h1 className="text-4xl "> Flight and Hotel </h1>
          <div className=" flex flex-col gap-2">
            <div className="">
              <FlightHotelSearchCard />
            </div>
            <div>
              <FlightHotelSearchCard />
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default FlightHotelSearchPage;
