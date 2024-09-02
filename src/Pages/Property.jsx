import { PROPERTY_DATA } from '@/assets/Property/PropertyData';
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React, { useState } from 'react'
import { IoSearchOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom';



const Property = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  const filteredData = PROPERTY_DATA.filter(item =>
    item.title.toLowerCase().includes(searchValue.toLowerCase()) ||
    item.location.toLowerCase().includes(searchValue.toLowerCase()) ||
    item.place.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <>
      <div className="w-full overflow-hidden animate-myFadeIn">
        <div className="w-full flex justify-between items-center">
          <div className="relative flex max-w-md border-b-[1.5px] border-zinc-200 justify-center items-center w-full">
            <Input
              placeholder="Search Property"
              className="rounded-full pl-6 py-5 w-full focus:outline-none focus:ring-0 border border-transparent placeholder:text-[#71717A]"
              value={searchValue}
              onChange={handleInputChange}
            />
            <IoSearchOutline className="absolute left-0 text-[#848485]" />
          </div>
          <div className="flex items-center gap-2">
            <Link to={"/property/add-property"}>
              <Button className="hover:bg-transparent transition-all border-[1.5px] border-blue hover:text-blue bg-blue text-white">
                Add Property
              </Button>
            </Link>
          </div>
        </div>
        <div className="mt-8 mb-10 items-center gap-4 grid sm:grid-cols-1 md:grid-cols-2">
          {filteredData.map((item) => (
            <div className="w-full transition-all animate-myFadeIn" key={item.id}>
              <div className="border-[1.33px] border-[#cfd1d4] p-3 rounded-t-xl flex gap-4">
                <img src={item.img} className="h-[9rem] rounded-xl" alt="house" />
                <div>
                  <h2 className="text-[#1D1D1D] font-semibold text-lg">{item.title}</h2>
                  <p className="text-blue bg-[#EFF6FF] inline-block my-2 px-3 py-[6px] rounded-lg">{item.place}</p>
                  <p className="flex items-center gap-2 text-[#6E6E6E]">
                    {item.location}
                  </p>
                  <div className="mt-3 flex flex-wrap items-center gap-5 gap-y-1">
                    {item.floor && (
                      <p className="flex items-center gap-2 text-[#696969]">
                        <img src="./Assets/Home/floor.png" className="h-5 select-none" alt="location" />
                        {item.floor}
                      </p>
                    )}
                    <p className="flex items-center gap-2 text-[#696969]">
                      <img src="./Assets/Home/door.png" className="h-5 select-none" alt="location" />
                      Single
                    </p>
                    <p className="flex items-center gap-2 text-[#696969]">
                      <img src="./Assets/Home/door.png" className="h-5 select-none" alt="location" />
                      {item.vip ? item.vip : "Double"}
                    </p>
                  </div>
                </div>
              </div>
              <div className="border-[1.33px] border-[#cfd1d4] border-t-0 p-3 rounded-b-xl flex justify-between items-center">
                <p className="text-[#565656]">
                  Availability: <span className="text-[#1D1D1D] font-semibold">{item.bookedSlot}/{item.totalSlot} {item.roomsOrBeds}</span>
                </p>
                <Link to={`/property/${item.id}`}>
                  <Button className="bg-transparent px-6 border-[1.5px] border-blue hover:bg-blue hover:text-white text-blue font-semibold py-[18px] pt-[21px]">
                    View Details
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

export default Property;
