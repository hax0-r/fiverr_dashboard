import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { IoSearchOutline } from "react-icons/io5";
import { Button } from '@/components/ui/button';
import { GoArrowRight } from "react-icons/go";
import { Link } from 'react-router-dom';

const filterItems = [
  { title: "All" },
  { title: "Apartment" },
  { title: "Guest House" },
  { title: "Hostels" },
];

const cardData = [
  {
    id: 1,
    img: "./Assets/Home/card1.png",
    title: "Kolej Ibu Zain (KIZ)",
    place: "Apartment",
    location: "Kinabalu, Malaysia",
    floor: "4 Floors",
    slot: 27,
  },
  {
    id: 2,
    img: "./Assets/Home/card2.png",
    title: "Kolej Dato’Onn",
    place: "Apartment",
    location: "Kinabalu, Malaysia",
    floor: "4 Floors",
    slot: 27,
  },
  {
    id: 3,
    img: "./Assets/Home/card3.png",
    title: "Bangi Gateway Apartement",
    place: "Apartement",
    location: "Kinabalu, Malaysia",
    floor: "4 Floors",
    slot: 27,
  },
  {
    id: 4,
    img: "./Assets/Home/card4.png",
    title: "Kolej Aminuddin Baki",
    place: "Hostels",
    location: "Kinabalu, Malaysia",
    floor: "4 Floors",
    slot: 27,
  },
  {
    id: 5,
    img: "./Assets/Home/card5.png",
    title: "Kolej Burhanuddin Helmi",
    place: "Hostels",
    location: "Kinabalu, Malaysia",
    floor: "4 Floors",
    slot: 27,
  },
  {
    id: 6,
    img: "./Assets/Home/card6.png",
    title: "Kolej Pendeta Za’ba",
    place: "Guest House",
    location: "Kinabalu, Malaysia",
    floor: "4 Floors",
    slot: 27,
  },
];

const Home = () => {
  const [searchValue, setSearchValue] = useState('');
  const [selectedFilter, setSelectedFilter] = useState("All");

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  const filteredCards = cardData.filter((card) => {
    const matchesFilter = selectedFilter === "All" || card.place === selectedFilter;
    const matchesSearch =
      card.title.toLowerCase().includes(searchValue.toLowerCase()) ||
      card.location.toLowerCase().includes(searchValue.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <>
      <div className="">
        <div className="relative">
          <img src="./Assets/Home/heroBg.png" className="w-full h-[300px] absolute -z-10" alt="bg" />
          <div className="z-10 flex justify-center items-center h-[300px] flex-col max-w-lg mx-auto gap-6">
            <img src="./Assets/Global/logo.svg" alt="logo" />
            <div className="relative flex justify-center items-center w-full">
              <Input
                placeholder="Search by location or property name"
                className="rounded-full pl-11 py-5 w-full focus:outline-none focus:ring-0 border border-transparent placeholder:text-[#8E8E8E]"
                value={searchValue}
                onChange={handleInputChange}
              />
              <IoSearchOutline className="absolute left-4 text-[#8E8E8E]" />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[57rem] mx-auto mt-10">
        <div className="flex items-center gap-2">
          {filterItems.map(({ title }, index) => (
            <p
              key={index}
              onClick={() => setSelectedFilter(title)}
              className={`select-none border-[1.5px] transition-all rounded-full px-4 py-[2.3px] font-medium inline-block cursor-pointer ${selectedFilter === title
                ? "bg-blue text-white border-blue"
                : "text-blue border-blue"
                }`}
            >
              {title}
            </p>
          ))}
        </div>

        <div className="mt-6 mb-20 flex justify-center items-center flex-wrap gap-4">
          {filteredCards.map((item) => (
            <div className="max-w-md transition-all animate-myFadeIn" key={item.id}>
              <div className="border-[1.33px] border-[#cfd1d4] p-3 rounded-t-xl flex gap-4">
                <img src={item.img} className="h-[9rem] rounded-xl" alt="house" />
                <div>
                  <h2 className="text-[#1D1D1D] font-semibold text-lg">{item.title}</h2>
                  <p className="text-blue bg-[#EFF6FF] inline-block my-2 px-3 py-[6px] rounded-lg">{item.place}</p>
                  <p className="flex items-center gap-2 text-[#6E6E6E]">
                    <img src="./Assets/Home/location.png" className="h-4 select-none" alt="location" />
                    {item.location}
                  </p>
                  <div className="mt-3 flex flex-wrap items-center gap-5 gap-y-1">
                    <p className="flex items-center gap-2 text-[#696969]">
                      <img src="./Assets/Home/floor.png" className="h-5 select-none" alt="location" />
                      {item.floor}
                    </p>
                    <p className="flex items-center gap-2 text-[#696969]">
                      <img src="./Assets/Home/door.png" className="h-5 select-none" alt="location" />
                      Single
                    </p>
                    <p className="flex items-center gap-2 text-[#696969]">
                      <img src="./Assets/Home/door.png" className="h-5 select-none" alt="location" />
                      Double
                    </p>
                  </div>
                </div>
              </div>
              <div className="border-[1.33px] border-[#cfd1d4] border-t-0 p-3 rounded-b-xl flex justify-between items-center">
                <p className="text-[#565656]">
                  Availability: <span className="text-[#1D1D1D] font-semibold">{item.slot} Slot</span>
                </p>
                <Link to={`/${item.place}`}>
                  <Button className="bg-[#2463EB] hover:bg-darkBlue text-white flex items-center gap-2">
                    View Details
                    <GoArrowRight className="text-lg" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
