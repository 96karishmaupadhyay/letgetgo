import React, { useState } from "react";
import { FaArrowDownLong } from "react-icons/fa6";
import { ImCross } from "react-icons/im";
import { Link } from "react-router-dom";
const FlightSearch = () => {
  const [tripType, setTripType] = useState("oneway");
  const [adultCount,setAdultCount]=useState(1)
  const [childCount,setChildCount]=useState(0)
  const [open,setOpen]=useState(false)

  return (
    <div className="flex justify-center flex-wrap ">
      <div className="absolute top-[23%] bg-white p-8 rounded-2xl ">
        <div className="flex gap-2 text-sm pb-4 ">
          <input
            type="radio"
            name="oneway"
            id="oneway"
            value="oneway"
            checked={tripType === "oneway"}
            onChange={(e) => setTripType(e.target.value)}
          />
          <label htmlFor="oneway">One Way</label>
          <input
            type="radio"
            name="multipleway"
            id="multipleway"
            value="multipleway"
            checked={tripType === "multipleway"}
            onChange={(e) => setTripType(e.target.value)}
          />
          <label htmlFor="multipleway">Multiple way </label>
        </div>
        <div>
          {tripType === "oneway" && (
            <div className="flex flex-col gap-4">
              <div className="flex gap-4 flex-wrap">
                <input
                  type="text"
                  placeholder="from"
                  className="border-2 border-gray-200 p-2 rounded-2xl "
                />
                <input
                  type="text"
                  placeholder="to"
                  className="border-2 border-gray-200 p-2 rounded-2xl "
                />
                <input
                  type="date"
                  name=""
                  id=""
                  className="border-2 border-gray-200 p-2 rounded-2xl"
                />
                <p className="flex gap-2 border-2 border-gray-200 p-2 rounded-2xl  items-center w-40 justify-between">
                  adult {adultCount},child {childCount} <FaArrowDownLong  onClick={()=>setOpen(true)}/>
                </p>
             <Link to="/flight-search">   <button className=" p-4 search rounded-full w-40" >
              
                  Search
                </button>
                </Link>
              </div>
            </div>
          )}
          {tripType === "multipleway" && (
            <div className="flex flex-col gap-4">
              <div className="flex gap-4 flex-wrap ">
                <input
                  type="text"
                  placeholder="from"
                  className="border-2 border-gray-200 p-2 rounded-2xl "
                />
                <input
                  type="text"
                  placeholder="to"
                  className="border-2 border-gray-200 p-2 rounded-2xl "
                />
                <input
                  type="date"
                  name=""
                  id=""
                  className="border-2 border-gray-200 p-2 rounded-2xl"
                />
              </div>
              <div className="flex gap-4  flex-wrap ">
                <input
                  type="text"
                  placeholder="to"
                  className="border-2 border-gray-200 p-2 rounded-2xl"
                />
                <input
                  type="text"
                  placeholder="from"
                  className="border-2 border-gray-200 p-2 rounded-2xl "
                />
                <input
                  type="date"
                  name=""
                  id=""
                  className="border-2 border-gray-200 p-2 rounded-2xl"
                />
                 <p className="flex gap-2 border-2 border-gray-200 p-2 h-[44px] rounded-2xl  items-center justify-between">
                  adult {adultCount},child {childCount} <FaArrowDownLong  onClick={()=>setOpen(true)}/>
                </p>
                <Link to="/flight-search">   <button className=" p-2 search rounded-full w-20" >
              
              Search
            </button>
            </Link>
              </div>
            
            </div>
          )}
         {open && (
  <div className="absolute top-30 bg-white p-4 rounded-xl shadow-md">
    <ImCross onClick={()=>setOpen(false)}/>
    <div className="flex items-center gap-4 mb-2">
      <span>Adults:</span>
      <button onClick={() => setAdultCount(Math.max(1, adultCount - 1))}>-</button>
      <span>{adultCount}</span>
      <button onClick={() => setAdultCount(adultCount + 1)}>+</button>
    </div>
    <div className="flex items-center gap-4">
      <span>Child:</span>
      <button onClick={() => setChildCount(Math.max(0, childCount - 1))}>-</button>
      <span>{childCount}</span>
      <button onClick={() => setChildCount(childCount + 1)}>+</button>
    </div>
  </div>
)}

        </div>
      </div>
    </div>
  );
};

export default FlightSearch;

