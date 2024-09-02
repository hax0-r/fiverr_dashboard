import React, { useState } from 'react';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link } from 'react-router-dom';
import PhotoGrid from '@/components/Property/PhotoGrid';
import FacilitySelector from '@/components/Property/FacilitySelector';
import {
    FaMotorcycle, FaCar,
    FaUtensils, FaShieldAlt, FaCoffee, FaUsers, FaBook, FaMosque,
    FaDumbbell, FaHospital, FaCopy, FaMicrophone, FaStore
} from "react-icons/fa";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input'; // Import shadcn Input component
import { Select, SelectTrigger, SelectContent, SelectItem } from '@/components/ui/select'; // Import shadcn Select components
import { Textarea } from '@/components/ui/textarea'; // Import shadcn Textarea component
import { Label } from '@/components/ui/label';

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

    const [selected, setSelected] = useState("Hostel");

    const handleToggle = (value) => {
        setSelected(selected === value ? null : value);
    };


    return (
        <>
            <div>
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <Link to="/property" className='text-muted-foreground'>Property List</Link>
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
                                            <SelectTrigger className="py-5 mt-1"  id="genderAllowance ">
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
                                    <Textarea id="description" placeholder="Input descriptions" className="placeholder:text-[#94A3B8] resize-none mt-1"  rows={4} />
                                </div>
                            </form>
                        </div>
                        <div className="h-[1px] w-full bg-[#CFD1D4] mt-5"></div>
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
