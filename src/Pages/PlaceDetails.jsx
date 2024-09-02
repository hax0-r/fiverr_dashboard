import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";
import { FaArrowLeftLong } from "react-icons/fa6";
import { PiBathtub, PiFan, PiShower } from "react-icons/pi";
import { Button } from "@/components/ui/button";
import { PLACES } from "@/assets/Home/Places";

const PlaceDetails = () => {
  const { placeName } = useParams();

  const filterData = [
    { title: "All" },
    { title: "Male" },
    { title: "Female" },
  ];

  // State to keep track of the selected filter
  const [selectedFilter, setSelectedFilter] = useState("All");

  // Function to handle filter selection
  const handleFilterClick = (filter) => {
    if (filter !== selectedFilter) {
      setSelectedFilter(filter);
    }
  };

  // Filter the places based on the selected gender filter
  const filteredPlaces = PLACES.filter((item) => {
    if (selectedFilter === "All") return true; // Show all items
    return item.gender === selectedFilter; // Filter by gender
  });

  return (
    <div className="">
      <div className="bg-blue p-5 pt-10">
        <div className="container flex items-center gap-4">
          <Link to={"/home"}>
            <FaArrowLeftLong className="bg-[#5082ef] p-3 text-5xl rounded-full text-white" />
          </Link>
          <h1 className="text-2xl font-medium text-white">{placeName}</h1>
        </div>
      </div>

      <div className="max-w-[59.4rem] px-5 mx-auto flex items-end mt-10 gap-2">
        {filterData.map(({ title }, index) => (
          <p
            key={index}
            onClick={() => handleFilterClick(title)}
            className={`select-none border-[1.5px] transition-all rounded-full px-4 py-[2.3px] font-medium inline-block cursor-pointer ${
              selectedFilter === title
                ? "bg-blue text-white"
                : "text-blue border-blue"
            }`}
          >
            {title}
          </p>
        ))}
      </div>

      <div className="container">
        <div className="mt-6 mb-20 flex items-center flex-wrap justify-center gap-4">
          {filteredPlaces.map((item) => (
            <div className="max-w-md transition-all animate-myFadeIn" key={item.id}>
              <div className="border-[1.33px] border-[#cfd1d4] p-3 rounded-xl flex gap-4 flex-col">
                <div className="relative overflow-hidden rounded-lg">
                  <img src={item.img} className="h-[9rem] rounded-xl" alt="house" />
                  <p className="bg-blue text-white font-medium p-2 rounded-tr-lg px-3 text-sm absolute bottom-0 left-0"> 27 slots left</p>
                </div>
                <div>
                  <div className="flex justify-between items-center">
                    <h2 className="text-[#1D1D1D] font-bold text-[1.2rem]">{item.title}</h2>
                    <p
                      className={`${
                        item.gender === "Male"
                          ? "text-blue bg-[#EFF6FF]"
                          : "text-[#F14242] bg-[#fee2e2]"
                      } inline-block px-3 py-[6px] rounded-lg`}
                    >
                      {item.gender}
                    </p>
                  </div>
                  <div className="mt-3 flex flex-wrap items-center gap-5 gap-y-1">
                    <p className="flex items-center gap-1 text-[#696969]">
                      <PiFan className="text-xl text-[#737373]" />
                      AC
                    </p>
                    <p className="flex items-center gap-1 text-[#696969]">
                      <PiBathtub className="text-xl text-[#737373]" />
                      Bathroom
                    </p>
                    <p className="flex items-center gap-1 text-[#696969]">
                      <PiShower className="text-xl text-[#737373]" />
                      Shower
                    </p>
                    <p className="text-[#696969]">+2 more</p>
                  </div>
                </div>
                <div className="flex justify-between pb-2 px-1 items-center">
                  <p className="text-[#FA5501] text-xl font-bold">RM 1200/6 months</p>
                  <Link to={`/home/${placeName}/${item.id}`}>
                    <Button className="bg-[#2463EB] hover:bg-darkBlue font-semibold tracking-wider text-white flex items-center gap-2 px-6 py-6 rounded-lg">
                      Rent
                      <GoArrowRight className="text-lg" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlaceDetails;
