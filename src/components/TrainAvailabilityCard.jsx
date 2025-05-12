import React from "react";
import logo from "../assets/logo.png";
import { IoIosArrowRoundForward } from "react-icons/io";
const TrainAvailabilityCard = () => {
  return (
    <div className=" bg-white rounded-2xl shadow-sm p-4 ">

      <div className="flex justify-around flex-wrap">
        <div className="">
          <h3 className="text-lg">12:10</h3>
          <p>on time</p>
          <p>Lundon Eudson</p>
        </div>
        <div>
          <IoIosArrowRoundForward className="text-4xl text-blue-200" />
          <h2 className="text-xl text-tertiary">$89</h2>
        </div>
        <div>
          <h3 className="text-lg">3:52</h3>
          <p>on time</p>
          <p>Manchester Piccadilly</p>
        </div>
        {/* <div>
          <p>platform:5</p>
          <p>3 hours 42 minutes</p>
        </div> */}
        {/* <div className="">
          <p className="bg-blue-400 pl-2 pr-2 rounded-sm text-white mb-2 opacity-60">
            Recommended
          </p>
          <h2 className="text-xl text-tertiary">$89</h2>
        </div> */}
      </div>
    </div>
  );
};

export default TrainAvailabilityCard;
