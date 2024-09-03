import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { FaBed, FaMotorcycle, FaCar, FaWifi, FaShower, FaTv, FaCat } from "react-icons/fa";
import { MdOutlineKitchen, MdSecurity } from "react-icons/md";
import { PiBathtub, PiDesk } from "react-icons/pi";
import { FaArrowLeftLong } from "react-icons/fa6";
import { SlLocationPin } from "react-icons/sl";
import { useParams } from "react-router-dom";

const subCardData = [
  {
    id: 1,
    title: "Single Room Premium",
    check: "allOk",
    gender: "Male",
    img: "/Assets/Home/Places/place1.png"
  },
  {
    id: 2,
    title: "Single Room Premium",
    check: "allOk",
    gender: "Female",
    img: "/Assets/Home/Places/place1.png"
  },
  {
    id: 2,
    title: "Single Room Premium",
    check: "allOk",
    gender: "Female",
    img: "/Assets/Home/Places/place1.png"
  },
  {
    id: 2,
    title: "Single Room Premium",
    check: "allOk",
    gender: "Female",
    img: "/Assets/Home/Places/place1.png"
  },
  // Add more subcards as needed
];

const SubPlaceDetails = () => {
  const { placeName, subCardId } = useParams();

  let filterData = subCardData.filter((item, index) => (
    item.id === parseInt(subCardId)
  ))

  const [room] = filterData

  return (
    <div>
      <div className="bg-[#eff6ff]">
        <div className="max-w-[960px] mx-auto sm:px-4">
          <Card className=" overflow-hidden rounded-none ">
            <div className="relative">
              <img
                src="https://via.placeholder.com/400x200"
                alt="Room"
                className="w-full h-[350px] object-cover"
              />
              <Link className="absolute top-2 left-4" to="/home">
                <Button variant="ghost" className="p-2 rounded-full bg-white px-[10px] hover:bg-zinc-50">
                  <FaArrowLeftLong className="text-xl text-gray-700 " />
                </Button>
              </Link>
              <p className="absolute bottom-2 right-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded-md text-sm">1/8</p>
            </div>

            <CardContent className="p-4 sm:px-6">
              <p className={`${room.gender === "Male" ? "text-blue bg-[#EFF6FF]" : "text-[#F14242] bg-[#fee2e2]"} mb-2 inline-block  px-4 py-[6px] rounded-lg`}>{room.gender}</p>
              <CardTitle className="text-xl font-semibold">
                Single Room (Premium)
              </CardTitle>
              <CardDescription className="text-gray-500 mt-2">
                <div className="flex sm:items-center gap-1">
                  <SlLocationPin className="sm:text-lg text-2xl" />
                  No. 15, Jalan Gaya, 88000 Kota Kinabalu, Sabah, Malaysia
                </div>
              </CardDescription>
            </CardContent>

            <div className="w-full h-[1.5px] bg-zinc-100"></div>

            <div className="">
              <div className="max-w-4xl mx-auto p-4  grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Description Section */}
                <div className="">
                  <div>
                    <h2 className="text-lg font-semibold">Description</h2>
                    <p className="text-[#6E6E6E] mt-2">
                      Lorem ipsum dolor sit amet consectetur. Congue mauris non semper tortor libero pellentesque adipiscing sit tincidunt. Commodo elit ut mi justo curabitur malesuada. Diam diam maecenas etiam ut faucibus ullamcorper elit la...
                    </p>
                    <Button variant="link" className="text-darkBlue font-medium p-0">Show More</Button>
                  </div>

                  {/* General Information Section */}
                  <div className="pt-3">
                    <h2 className="text-lg font-semibold">General Information</h2>
                    <ul className="flex items-center gap-4 mt-2 text-[#6E6E6E]">
                      <li className="flex items-center gap-1">
                        <FaBed /> 100 m2
                      </li>
                      <li className="flex items-center gap-2">
                        <FaBed /> 2 Bed
                      </li>
                      <li className="flex items-center gap-2">
                        <FaBed /> 2 Person/Room
                      </li>
                    </ul>
                  </div>


                  {/* Room Facilities Section */}
                  <div className="mt-6">
                    <h2 className="text-lg font-semibold">Room Facilities</h2>
                    <ul className="grid grid-cols-2 sm:gap-3 gap-2 mt-3 text-[#6E6E6E]">
                      <li className="flex items-center gap-2">
                        <FaBed /> Air Conditions
                      </li>
                      <li className="flex items-center gap-2">
                        <PiBathtub /> Inside Bathroom
                      </li>
                      <li className="flex items-center gap-2">
                        <FaShower /> Shower
                      </li>
                      <li className="flex items-center gap-2">
                        <FaTv /> TV
                      </li>
                      <li className="flex items-center gap-2">
                        <FaBed /> Double Bed
                      </li>
                      <li className="flex items-center gap-2">
                        <PiDesk /> Desk
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="">
                  {/* Shared Facilities Section */}
                  <div>
                    <h2 className="text-lg font-semibold">Shared Facilities</h2>
                    <ul className="grid grid-cols-2 sm:gap-3 gap-2 mt-3 text-[#6E6E6E]">
                      <li className="flex items-center gap-2">
                        <FaMotorcycle /> Parking Motorbike
                      </li>
                      <li className="flex items-center gap-2">
                        <FaCar /> Parking Car
                      </li>
                      <li className="flex items-center gap-2">
                        <FaWifi /> WIFI
                      </li>
                      <li className="flex items-center gap-2">
                        <MdOutlineKitchen /> Kitchen
                      </li>
                      <li className="flex items-center gap-2">
                        <MdSecurity /> Security
                      </li>
                      <li className="flex items-center gap-2">
                        <FaCat /> Refrigerator
                      </li>
                    </ul>
                  </div>
                  <div className="mt-6">
                    <h2 className="text-lg font-semibold">Rules</h2>
                    <ul className="list-disc pl-5 space-y-2 mt-3 text-[#6E6E6E]">
                      <li>24h Access</li>
                      <li>Max 1 Person/room</li>
                      <li>Cat Allowed</li>
                      <li>Kids Not Allowed</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
        <div className="py-12"></div>
        <div className="bg-white w-full p-5 fixed z-50 bottom-0 mx-auto border-t-2 border-zinc-200">
          <div className="max-w-[960px] mx-auto sm:px-4 flex justify-end items-center sm:gap-4 gap-3">
            <h2 className="text-[#FA5501] sm:text-xl font-bold text-nowrap">RM 1200/6 month</h2>
            <Link to={"select-date"}>
              <Button className="bg-darkBlue hover:bg-blue text-white rounded-full sm:px-16 px-4 py-7 text-[1rem]">Set Duration Rent</Button>
            </Link>
          </div>
        </div>
      </div>

    </div >
  );
};

export default SubPlaceDetails;
