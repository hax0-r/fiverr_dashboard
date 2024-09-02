import React, { useState } from 'react';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link, useParams } from 'react-router-dom';
import PhotoGrid from '@/components/Property/PhotoGrid';
import FacilitySelector from '@/components/Property/FacilitySelector';
import { AiOutlineMinusCircle } from "react-icons/ai";
import {
    FaMotorcycle, FaCar,
    FaUtensils, FaShieldAlt, FaCoffee, FaUsers, FaBook, FaMosque,
    FaDumbbell, FaHospital, FaCopy, FaMicrophone, FaStore,
} from "react-icons/fa";
import { CiCirclePlus } from "react-icons/ci";
import { FiPlus } from "react-icons/fi";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input'; // Import shadcn Input component
import { Select, SelectTrigger, SelectContent, SelectItem } from '@/components/ui/select'; // Import shadcn Select components
import { Textarea } from '@/components/ui/textarea'; // Import shadcn Textarea component
import { Label } from '@/components/ui/label';
import { CirclePlus, Trash2 } from 'lucide-react';
import { GoPlusCircle } from 'react-icons/go';
import { PROPERTY_DATA } from '@/assets/Property/PropertyData';

const facilities = [
    { name: "Parking Motorbike", icon: FaMotorcycle },
    { name: "Parking Car", icon: FaCar },
    { name: "Kitchen", icon: FaUtensils },
    { name: "Security", icon: FaShieldAlt },
    { name: "Cafeteria", icon: FaCoffee },
    { name: "Discussion Room", icon: FaUsers },
    { name: "Library", icon: FaBook },
    { name: "Surau", icon: FaMosque },
    { name: "Sports Facilities", icon: FaDumbbell },
    { name: "Treatment Room", icon: FaHospital },
    { name: "Photostat Shop", icon: FaCopy },
    { name: "Seminar Room", icon: FaMicrophone },
    { name: "Convenience Store", icon: FaStore },
];

const RoomperFloor = [
    {
        id: 1,
        name: "2nd Floor",
    },
    {
        id: 2,
        name: "3rd Floor",
    },
    {
        id: 3,
        name: "4th Floor",
    }, {
        id: 4,
        name: "5th Floor",
    }
]

const AddRoomType = () => {
    const photos = [
        '/Assets/Property/AddRoomType/img1.png',
        '/Assets/Property/AddRoomType/img2.png',
        '/Assets/Property/AddRoomType/img3.png',
        '/Assets/Property/AddRoomType/img4.png',
        '/Assets/Property/AddRoomType/img5.png',
        '/Assets/Property/AddRoomType/img6.png',
        '/Assets/Property/AddRoomType/img7.png',
        '/Assets/Property/AddRoomType/img1.png',
        '/Assets/Property/AddRoomType/img2.png',
        '/Assets/Property/AddRoomType/img3.png',
        '/Assets/Property/AddRoomType/img4.png',
    ];

    const { id } = useParams()

    let filterData = PROPERTY_DATA.filter((item) => item.id === parseInt(id))
    const [data] = filterData


    return (
        <>
            <div className='animate-myFadeIn'>
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <Link to="/property" className='text-muted-foreground'>Property List</Link>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator className="scale-150 mx-1" />
                        <BreadcrumbItem>
                            <Link to={`/property/${id}`} className='text-muted-foreground'>{data.title}</Link>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator className="scale-150 mx-1" />
                        <BreadcrumbItem>
                            <Link to="/property/add-property" className='text-blue'>Add Property</Link>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>

                <div className='mt-7 flex gap-4 items-start'>
                    <div className="max-w-md p-3 rounded-xl border-[1.5px] border-[#CFD1D4]">
                        <h2 className='text-xl font-bold pb-3 pt-2'>Property Photos</h2>
                        <PhotoGrid photos={photos} grid={4} />
                        <div className="h-[1px] w-full bg-[#CFD1D4] mt-5"></div>
                        <h2 className='text-xl font-bold pb-3 pt-5'>Shared Facilities</h2>
                        <FacilitySelector facilities={facilities} />
                        <div className="h-[1.5px] w-full bg-[#CFD1D4] mt-5"></div>
                        <h2 className="text-xl font-semibold mt-6 mb-2">Rules</h2>
                        <div className="">
                            <div className="flex justify-center items-center gap-2">
                                <Input className="placeholder:text-[#94A3B8] mt-1" value="Staying guests are charged a fee" placeholder="Enter Rule" />
                                <AiOutlineMinusCircle className='text-2xl text-red-500' />
                            </div>
                            <div className="flex justify-center mt-2 items-center gap-2">
                                <Input className="placeholder:text-[#94A3B8] mt-1" value="Maximum 2 people" placeholder="Enter Rule" />
                                <AiOutlineMinusCircle className='text-2xl text-red-500' />
                            </div>
                            <div className="flex justify-center mt-2 items-center gap-2">
                                <Input className="placeholder:text-[#94A3B8] mt-1" value="Not allowed to bring children" placeholder="Enter Rule" />
                                <AiOutlineMinusCircle className='text-2xl text-red-500' />
                            </div>
                            <Button
                                variant="link"
                                className=" text-blue text-[15px] p-0 mx-auto mt-4 mb-1 underline font-normal flex items-center gap-1"
                            >
                                <GoPlusCircle className="w-5 h-5 text-blue" />
                                Add block
                            </Button>
                        </div>

                    </div>
                    <div className="w-full p-6 rounded-xl border-[1.5px] border-[#CFD1D4]">
                        <div className=" bg-white ">
                            <h2 className="text-xl font-semibold mb-4">General Information</h2>
                            <form className="space-y-4 ">
                                {/* Room Type and Person per Room */}
                                <div className="flex items-center w-full gap-4">
                                    <div className='max-w-[80%] w-full'>
                                        <Label htmlFor="roomType">Name Room Type</Label>
                                        <Input id="roomType" className="placeholder:text-[#94A3B8] mt-1" placeholder="Input name room type" />
                                    </div>
                                    <div>
                                        <Label htmlFor="personPerRoom">Person per Room</Label>
                                        <Input id="personPerRoom" placeholder="Ex: 2" className="placeholder:text-[#94A3B8] mt-1" type="number" />
                                    </div>
                                </div>

                                {/* Beds and Room Size */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <Label htmlFor="beds">Beds</Label>
                                        <div className="relative">
                                            <Input id="beds" className="placeholder:text-[#94A3B8] mt-1" placeholder="Ex: 2" type="number" />
                                        </div>
                                    </div>
                                    <div>
                                        <Label htmlFor="roomSize">Room Size</Label>
                                        <div className="relative flex items-center mt-1 border rounded-lg">
                                            <Input id="roomSize" className="placeholder:text-[#94A3B8] border-none rounded-r-none " placeholder="Ex: 200" type="number" />
                                            <span className="bg-[#f5f7fa] p-[8px] px-5">m2</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Bath Type and Gender Allowance */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <Label htmlFor="bathType">Bath Type</Label>
                                        <Select>
                                            <SelectTrigger id="bathType" className="py-5 mt-1">
                                                <Input placeholder="Choose Type" className="placeholder:text-[#94A3B8]  border-none " readOnly />
                                            </SelectTrigger>
                                            <SelectContent >
                                                <SelectItem value="shower">Shower</SelectItem>
                                                <SelectItem value="bathtub">Bathtub</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div>
                                        <Label htmlFor="genderAllowance">Gender Allowance</Label>
                                        <Select>
                                            <SelectTrigger className="py-5 mt-1" id="genderAllowance ">
                                                <Input placeholder="Select Gender" className="placeholder:text-[#94A3B8]  border-none " readOnly />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="male">Male</SelectItem>
                                                <SelectItem value="female">Female</SelectItem>
                                                <SelectItem value="any">Any</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>

                                {/* Description */}
                                <div>
                                    <Label htmlFor="description">Description</Label>
                                    <Textarea id="description" placeholder="Input descriptions" className="placeholder:text-[#94A3B8] resize-none mt-1" rows={4} />
                                </div>
                            </form>
                        </div>

                        <div className="pt-6">
                            <h2 className="text-xl font-semibold mb-4">Room per Floor</h2>
                            <Label>1st Floor</Label>
                            <div className="mt-3 flex justify-between items-center">
                                <div className='w-full px-5 flex items-center gap-2 max-w-[20rem]'>
                                    <Label htmlFor="roomType">Block</Label>
                                    <Input id="roomType" className="placeholder:text-[#94A3B8] mt-1" placeholder="Input Block Name" />
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="relative flex max-w-[180px] items-center border rounded-lg">
                                        <Input id="roomSize" className="placeholder:text-[#94A3B8] border-none rounded-r-none " placeholder="Ex: 200" type="number" />
                                        <span className="bg-[#f5f7fa] p-[8px] px-3">Room</span>
                                    </div>
                                    <Trash2
                                        className='text-red-500 border-2 border-red-500 rounded-full hover:bg-red-50 transition-all w-9 h-9 p-[8px] cursor-pointer' />
                                </div>
                            </div>
                            <div className="mt-3 mb-6 flex justify-between items-center">
                                <div className='w-full px-5 flex items-center gap-2 max-w-[20rem]'>
                                    <Label htmlFor="roomType">Block</Label>
                                    <Input id="roomType" className="placeholder:text-[#94A3B8] mt-1" placeholder="Input Block Name" />
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="relative flex max-w-[180px] items-center border rounded-lg">
                                        <Input id="roomSize" className="placeholder:text-[#94A3B8] border-none rounded-r-none " placeholder="Ex: 200" type="number" />
                                        <span className="bg-[#f5f7fa] p-[8px] px-3">Room</span>
                                    </div>
                                    <FiPlus
                                        className='text-white bg-blue border-2 border-blue rounded-full hover:bg-red-50 transition-all w-9 h-9 p-[6px] cursor-pointer' />
                                </div>
                            </div>
                            {
                                RoomperFloor.map(({ name }, index) => (
                                    <div key={index} className="mt-3 flex justify-between items-center">
                                        <div className='w-full  flex items-center max-w-[20rem]'>
                                            <Label htmlFor="roomType">{name}</Label>
                                            <Button
                                                variant="link"
                                                className=" text-blue text-[15px] underline font-normal flex items-center gap-1"
                                            >
                                                <GoPlusCircle className="w-5 h-5 text-blue" />
                                                Add block
                                            </Button>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="relative flex max-w-[180px] items-center border rounded-lg">
                                                <Input id="roomSize" className="placeholder:text-[#94A3B8] border-none rounded-r-none " placeholder="Ex: 200" type="number" />
                                                <span className="bg-[#f5f7fa] p-[8px] px-3">Room</span>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                            <div className="flex justify-end items-center gap-3 mt-5">
                                <p className='text-zinc-600'>Total Block: <span className='text-blue'> 1</span></p>
                                <p className='text-zinc-600'>Total Room: <span className='text-blue'> 20</span></p>
                            </div>
                        </div>
                        <div className="h-[1.5px] w-full bg-[#CFD1D4] mt-5"></div>


                        <div className="">
                            <h2 className="text-2xl font-semibold mb-4 mt-6">Prices</h2>
                            <div className="flex justify-between items-center gap-3">
                                <div>
                                    <Label htmlFor="DurationRent">Duration Rent</Label>
                                    <Select>
                                        <SelectTrigger id="DurationRent" className="py-5 mt-1">
                                            <Input placeholder="Select Duration" className="placeholder:text-[#94A3B8]  border-none " readOnly />
                                        </SelectTrigger>
                                        <SelectContent >
                                            <SelectItem value="shower">Rent1</SelectItem>
                                            <SelectItem value="bathtub">Rent2</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="">
                                    <Label htmlFor="genderAllowance">Prices</Label>
                                    <div className="relative flex items-center mt-1 border rounded-lg">
                                        <span className="bg-[#f5f7fa] p-[8px] px-6">RM</span>
                                        <Input id="roomSize" className="placeholder:text-[#94A3B8] border-none rounded-r-none " placeholder="Ex: 200" type="number" />
                                    </div>
                                </div>
                                <div className="">
                                    <Label htmlFor="genderAllowance">Minimum Deposit</Label>
                                    <div className="relative flex items-center mt-1 border rounded-lg">
                                        <span className="bg-[#f5f7fa] p-[8px] px-6">RM</span>
                                        <Input id="roomSize" className="placeholder:text-[#94A3B8] border-none rounded-r-none " placeholder="Ex: 200" type="number" />
                                    </div>
                                </div>
                            </div>
                            <Button
                                variant="link"
                                className=" text-blue text-[15px] underline font-normal p-0 pt-5 flex items-center gap-1"
                            >
                                <GoPlusCircle className="w-5 h-5 text-blue" />
                                Add block
                            </Button>
                        </div>

                        <div className="h-[1.5px] w-full bg-[#CFD1D4] mt-14"></div>
                        <div className="mt-5 flex justify-between items-center">
                            <Button className="bg-transparent text-red-600 border-[1.5px] border-red-600 hover:bg-red-600 hover:text-white">Cancel</Button>
                            <Button className="hover:bg-transparent hover:text-blue border-[1.5px] border-blue bg-blue text-white">Create</Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AddRoomType;
