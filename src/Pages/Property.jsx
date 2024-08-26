import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React, { useState } from 'react'
import { GoArrowRight } from 'react-icons/go';
import { IoSearchOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom';

const cardData = [
  {
    id: 1,
    img: "./Assets/Property/img1.png", 
    title: "Kolej Ibu Zain (KIZ)",
    place: "Hostels",
    location: "No. 15, Jalan Gaya, 88000 Kota Kinabalu, Sabah, Malaysia",
    floor: "4 Floors",
    totalSlot: 73,
    bookedSlot: 27,
    roomsOrBeds: "Beds",
  },
  {
    id: 2,
    img: "./Assets/Property/img2.png", 
    title: "Asrama Kenanga",
    place: "Hostels",
    location: "No. 78, Lorong Pulau Tikus, 10350 George Town, Pulau Pinang, Malaysia",
    floor: "4 Floors",
    vip: "VIP",
    totalSlot: 73,
    bookedSlot: 52,
    roomsOrBeds: "Beds",
  },
  {
    id: 3,
    img: "./Assets/Property/img3.png", 
    title: "Apartement",
    place: "Apartement",
    location: "No. 18, Jalan Hang Lekiu, 75200 Melaka, Melaka, Malaysia",
    // floor: "2 Floors",
    totalSlot: 10,
    bookedSlot: 5,
    roomsOrBeds: "Rooms",
  },
  {
    id: 4,
    img: "./Assets/Property/img4.png", 
    title: "Dahlia Apartement",
    place: "Apartement",
    location: "No. 18, Jalan Hang Lekiu, 75200 Melaka, Melaka, Malaysia",
    // floor: "2 Floors",
    totalSlot: 12,
    bookedSlot: 9,
    roomsOrBeds: "Rooms",
  },
  {
    id: 5,
    img: "./Assets/Property/img5.png", 
    title: "Asrama Cempaka",
    place: "Hostels",
    location: "No. 18, Jalan Hang Lekiu, 75200 Melaka, Melaka, Malaysia",
    floor: "4 Floors",
    totalSlot: 73,
    bookedSlot: 27,
    roomsOrBeds: "Beds",
  },
  {
    id: 6,
    img: "./Assets/Property/img6.png", 
    title: "Asrama Cempaka",
    place: "Hostels",
    location: "No. 18, Jalan Hang Lekiu, 75200 Melaka, Melaka, Malaysia",
    floor: "2 Floors",
    totalSlot: 73,
    bookedSlot: 27,
    roomsOrBeds: "Beds",
  },
];


const Property = () => {

  const [searchValue, setSearchValue] = useState('');

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };
  return (
    <>
      <div className="w-full overflow-hidden animate-myFadeIn">
        <div className="w-full flex justify-between items-center">
          <div className="relative flex max-w-md border-b-[1.5px] border-zinc-200 justify-center items-center w-full">
            <Input
              placeholder="Search Property"
              className="rounded-full  pl-6 py-5 w-full focus:outline-none focus:ring-0 border border-transparent placeholder:text-[#71717A]"
              value={searchValue}
              onChange={handleInputChange}
            />
            <IoSearchOutline className="absolute left-0 text-[#848485]" />
          </div>
          <div className="flex items-center gap-2">
            <Button className="hover:bg-transparent transition-all border-[1.5px] border-blue hover:text-blue bg-blue text-white">
              Add Property
            </Button>
          </div>
        </div>
        <div className="mt-8 mb-10 items-center gap-4 grid sm:grid-cols-1 md:grid-cols-2">
          {cardData.map((item) => (
            <div className="w-full transition-all animate-myFadeIn" key={item.id}>
              <div className="border-[1.33px] border-[#cfd1d4] p-3 rounded-t-xl flex gap-4">
                <img src={item.img} className="h-[9rem] rounded-xl" alt="house" />
                <div>
                  <h2 className="text-[#1D1D1D] font-semibold text-lg">{item.title}</h2>
                  <p className="text-blue bg-[#EFF6FF] inline-block my-2 px-3 py-[6px] rounded-lg">{item.place}</p>
                  <p className="flex items-center gap-2 text-[#6E6E6E]">
                    {/* <img src="./Assets/Home/location.png" className="h-4 select-none" alt="location" /> */}
                    {item.location}
                  </p>
                  <div className="mt-3 flex flex-wrap items-center gap-5 gap-y-1">
                    {
                      item.floor &&
                      <p className="flex items-center gap-2 text-[#696969]">
                        <img src="./Assets/Home/floor.png" className="h-5 select-none" alt="location" />
                        {item.floor}
                      </p>
                    }
                    <p className="flex items-center gap-2 text-[#696969]">
                      <img src="./Assets/Home/door.png" className="h-5 select-none" alt="location" />
                      Single
                    </p>
                    <p className="flex items-center gap-2 text-[#696969]">
                      <img src="./Assets/Home/door.png" className="h-5 select-none" alt="location" />
                      {
                        item.vip ? item.vip : "Double"
                      }
                    </p>
                  </div>
                </div>
              </div>
              <div className="border-[1.33px] border-[#cfd1d4] border-t-0 p-3 rounded-b-xl flex justify-between items-center">
                <p className="text-[#565656]">
                  Availability: <span className="text-[#1D1D1D] font-semibold">{item.bookedSlot}/{item.totalSlot} {item.roomsOrBeds}</span>
                </p>
                <Link to={`/${item.place}`}>
                  <Button className="bg-transparent px-6 border-[1.5px] border-blue hover:bg-blue hover:text-white text-blue font-semibold py-[18px] pt-[21px] ">
                    View Details
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Property