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
import { Toggle } from '@/components/ui/toggle';
import AddPropertyForm from '@/components/Property/AddPropertyForm';
import { Button } from '@/components/ui/button';

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

const AddProperty = () => {
    const photos = [
        '/Assets/Property/img1.png',
        '/Assets/Property/img2.png',
        '/Assets/Property/img3.png',
        '/Assets/Property/img4.png',
        '/Assets/Property/img5.png',
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
                        <PhotoGrid photos={photos} grid={3} />
                        <div className="h-[1px] w-full bg-[#CFD1D4] mt-5"></div>
                        <h2 className='text-xl font-bold pb-3 pt-5'>Shared Facilities</h2>
                        <FacilitySelector facilities={facilities} popup="addProperty" />
                    </div>
                    <div className="w-full p-3 rounded-xl border-[1.5px] border-[#CFD1D4]">
                        <h2 className='text-xl font-bold pb-3 pt-2'>Property Type</h2>
                        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                            <Toggle
                                variant="outline"
                                size="lg"
                                onClick={() => handleToggle("Hostel")}
                                data-state={selected === "Hostel" ? "on" : "off"}
                            >
                                Hostel
                            </Toggle>
                            <Toggle
                                variant="outline"
                                size="lg"
                                onClick={() => handleToggle("Guest House")}
                                data-state={selected === "Guest House" ? "on" : "off"}
                            >
                                Guest House
                            </Toggle>
                            <Toggle
                                variant="outline"
                                size="lg"
                                onClick={() => handleToggle("Apartment")}
                                data-state={selected === "Apartment" ? "on" : "off"}
                            >
                                Apartment
                            </Toggle>
                        </div>
                        <div className="h-[1px] w-full bg-[#CFD1D4] mt-5"></div>
                        <h2 className='text-xl font-bold pb-3 pt-5'>General Information</h2>
                        <AddPropertyForm />
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

export default AddProperty;
