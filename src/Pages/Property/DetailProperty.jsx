import { PROPERTY_DATA } from '@/assets/Property/PropertyData'
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb'
import { FaMotorcycle, FaCar, FaVideo, FaWifi, FaShieldAlt } from 'react-icons/fa';
import { GiWashingMachine, GiCookingPot } from 'react-icons/gi'; // Example imports from the Game Icons pack
import React from 'react'
import { PiElevator } from 'react-icons/pi'
import { SlLocationPin } from 'react-icons/sl'
import { Link, useParams } from 'react-router-dom'
import { Button } from '@/components/ui/button';
import { FiPlus } from 'react-icons/fi';

const DetailProperty = () => {

    const { id } = useParams()

    let filterData = PROPERTY_DATA.filter((item) => item.id === parseInt(id))
    const [data] = filterData


    return (
        <>
            <div className="animate-myFadeIn">
                <div className="flex items-center justify-between">

                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <Link to="/property" className='text-muted-foreground'>Property List</Link>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator className="scale-150 mx-1" />
                            <BreadcrumbItem>
                                <Link to="/property/add-property" className='text-blue'>{data.title}</Link>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>

                    <Link to={'room-list'}>
                        <Button className="pl-3 py-5 font-medium flex items-center gap-2 hover:bg-transparent hover:text-blue border-2 border-blue bg-blue text-white text-[1rem]"><FiPlus className='text-2xl' />Add Room Type</Button>
                    </Link>
                </div>

                <div className="">
                    <div className="mt-8 p-4 bg-[#fafafa] rounded-lg  ">
                        <div className="flex flex-col md:flex-row">
                            <div className="">
                                <img
                                    src={data.img1}
                                    alt="Kolej Ibu Zain"
                                    className=" h-[300px] object-cover rounded-md "
                                />
                                <div className="flex items-center gap-3 mt-5">
                                    <img
                                        src={data.img1}
                                        alt="Kolej Ibu Zain"
                                        className=" h-[120px] w-[144px] object-cover rounded-md "
                                    />
                                    <img
                                        src={data.img1}
                                        alt="Kolej Ibu Zain"
                                        className=" h-[120px] w-[144px] object-cover rounded-md "
                                    />
                                </div>
                            </div>
                            <div className="mt-4 md:mt-0 md:ml-6 flex-1">
                                <div className="flex justify-between items-center">
                                    <h2 className="text-2xl font-semibold text-gray-800">Kolej Ibu Zain (KIZ)</h2>
                                    <Button className="bg-transparent border-2 border-blue hover:bg-blue hover:text-white text-blue">Edit</Button>
                                </div>
                                <div className="flex items-center mt-2 gap-2">
                                    <p className="text-blue bg-[#EFF6FF] inline-block my-2 px-3 py-[6px] rounded-lg">Hostels</p>
                                    <p className="text-gray-600">•</p>
                                    <p className="text-gray-600">2008</p>
                                </div>
                                <h2 className='font-semibold my-2'>Address</h2>
                                <div className="flex items-center text-[#6E6E6E]  gap-2">
                                    <SlLocationPin className="text-lg" />
                                    <p className="">No. 15, Jalan Gaya, 88000 Kota Kinabalu, Sabah, Malaysia</p>
                                </div>

                                <h2 className='font-semibold my-2 mt-4'>General Information</h2>
                                <div className="flex items-center gap-2  text-[#6E6E6E]  ">
                                    <PiElevator className='text-2xl' />
                                    <p>5 Floors</p>
                                </div>

                                <h2 className='font-semibold my-2 mt-4'>Shared Facilities</h2>
                                <div className="">
                                    <div className="flex flex-wrap max-w-3xl  mt-2 gap-2 gap-x-5">
                                        <span className="flex items-center text-[#696969]">
                                            <FaMotorcycle className="mr-2 text-lg" /> Parking Motorbike
                                        </span>
                                        <span className="flex items-center text-[#696969]">
                                            <FaCar className="mr-2" /> Parking Car
                                        </span>
                                        <span className="flex items-center text-[#696969]">
                                            <FaVideo className="mr-2" /> CCTV
                                        </span>
                                        <span className="flex items-center text-[#696969]">
                                            <FaWifi className="mr-2" /> WIFI
                                        </span>
                                        <span className="flex items-center text-[#696969]">
                                            <GiWashingMachine className="mr-2" /> Laundry
                                        </span>
                                        <span className="flex items-center text-[#696969]">
                                            <GiCookingPot className="mr-2 text-2xl" /> Kitchen
                                        </span>
                                        <span className="flex items-center text-[#696969]">
                                            <FaShieldAlt className="mr-2" /> Security
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="">
                    <h2 className='text-lg font-bold pt-7 '>Room Type</h2>
                    <div className="flex items-center  gap-10 max-w-[88vw] ml-auto pt-8 ">
                        <div className="w-[2px] h-[150px] bg-zinc-300 relative flex justify-center items-center">
                            <div className="w-3 h-3 rounded-full border-2 bg-white border-zinc-300 absolute"></div>
                        </div>
                        <div className="flex items-center w-full justify-between ">
                            <div className="flex items-center">

                                <img
                                    src="https://via.placeholder.com/100" // Replace with your image URL
                                    alt="Room"
                                    className="h-[108px] rounded-md"
                                />

                                <div className="flex-1 ml-4">
                                    <div className="flex items-center mb-2">
                                        <h3 className="text-lg font-semibold">Single Room Premium</h3>
                                        <span className="ml-2 px-3 py-1 text-sm text-pink-500 bg-pink-100 rounded-md">
                                            Female
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-3 my-3">
                                        <p className='font-semibold'>1 <span className='text-[#6E6E6E] font-normal'>Bed</span></p>
                                        <p className="text-gray-600">•</p>
                                        <p className='font-semibold'>Outside <span className='text-[#6E6E6E] font-normal'>Bath</span></p>
                                        <p className="text-gray-600">•</p>
                                        <p className='font-semibold'>200  <span className='text-[#6E6E6E] font-normal'>m2</span></p>
                                        <p className="text-gray-600">•</p>
                                        <p className='font-semibold'>5   <span className='text-[#6E6E6E] font-normal'>Block</span></p>

                                    </div>
                                    <p className="mt-2 text-gray-800 font-bold">RM2300 <span className="text-sm font-normal">per 6 month</span></p>
                                </div>
                            </div>

                            {/* Buttons and Status */}
                            <div className="flex  justify-between gap-6 flex-col">
                                <div className="flex items-center justify-end gap-1">
                                    <p className="text-lg font-semibold">10 </p>
                                    <p className=""> / 87 Slots</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Link to={"add-room-type"}>
                                        <Button className="px-14 py-5 font-medium bg-transparent text-blue border-2 border-blue hover:bg-blue hover:text-white text-[1rem]">Edit</Button>
                                    </Link>
                                    <Link to={'room-list'}>
                                        <Button className="px-9 py-5 font-medium hover:bg-transparent hover:text-blue border-2 border-blue bg-blue text-white text-[1rem]">Room List</Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-[86vw] ml-auto  border "></div>
                    <div className="flex items-center  gap-10 max-w-[88vw] ml-auto">
                        <div className="w-[2px] h-[150px] bg-zinc-300 relative flex justify-center items-center">
                            <div className="w-3 h-3 rounded-full border-2 bg-white border-zinc-300 absolute"></div>
                        </div>
                        <div className="flex items-center w-full justify-between ">
                            <div className="flex items-center">

                                <img
                                    src="https://via.placeholder.com/100" // Replace with your image URL
                                    alt="Room"
                                    className="h-[108px] rounded-md"
                                />

                                <div className="flex-1 ml-4">
                                    <div className="flex items-center mb-2">
                                        <h3 className="text-lg font-semibold">Double Room</h3>
                                        <span className="ml-2 px-3 py-1 text-sm text-pink-500 bg-pink-100 rounded-md">
                                            Female
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-3 my-3">
                                        <p className='font-semibold'>1 <span className='text-[#6E6E6E] font-normal'>Bed</span></p>
                                        <p className="text-gray-600">•</p>
                                        <p className='font-semibold'>Outside <span className='text-[#6E6E6E] font-normal'>Bath</span></p>
                                        <p className="text-gray-600">•</p>
                                        <p className='font-semibold'>200  <span className='text-[#6E6E6E] font-normal'>m2</span></p>

                                    </div>
                                    <p className="mt-2 text-gray-800 font-bold">RM2300 <span className="text-sm font-normal">per 6 month</span></p>
                                </div>
                            </div>

                            {/* Buttons and Status */}
                            <div className="flex  justify-between gap-6 flex-col">
                                <div className="flex items-center justify-end gap-1">
                                    <p className="text-lg font-semibold">80 </p>
                                    <p className=""> / 87 Slots</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Button className="px-14 py-5 font-medium bg-transparent text-blue border-2 border-blue hover:bg-blue hover:text-white text-[1rem]">Edit</Button>
                                    <Button className="px-9 py-5 font-medium hover:bg-transparent hover:text-blue border-2 border-blue bg-blue text-white text-[1rem]">Room List</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DetailProperty