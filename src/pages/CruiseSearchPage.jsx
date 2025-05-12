import React from "react";
import Navbar from "../components/Navbar";
import CruiseSearch from "../components/CruiseSearch";
import cruise from "../assets/1.png";
import CruiseCard from "../components/CruiseCard";
import CruiseFilter from "../components/CruiseFilter";
import Footer from "../section/Footer";
const CruiseSearchPage = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="h-[400px]">
        <img src={cruise} alt="" className=" w-full rounded-2xl p-2 h-full" />
        <CruiseSearch />
      </div>
      <div className="flex  gap-4 justify-between p-2">
        <div>
          <CruiseFilter />
        </div>
        <div className="flex flex-col w-[70%]">
            <h1 className="text-4xl "> Cruise </h1>
          <CruiseCard />
          <CruiseCard />
          <CruiseCard />
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default CruiseSearchPage;
