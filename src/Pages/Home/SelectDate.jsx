import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import React, { useState } from 'react';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { Link, useParams } from 'react-router-dom';
import { Calendar } from "@/components/ui/calendar";
import { PLACES } from '@/assets/Home/Places';
import { PROPERTY } from '@/assets/Home/Property';
import HomeRoomDetails from '@/components/Home/HomeRoomDetails';

const SelectDate = () => {
    const [selectedOption, setSelectedOption] = useState('Daily');
    const [checkInDate, setCheckInDate] = useState(new Date());
    const [checkOutDate, setCheckOutDate] = useState(new Date(new Date().setDate(new Date().getDate() + 1))); // Default check-out is next day
    const { placeName, subCardId } = useParams();

    let filterData = PLACES.filter((item) => item.id === parseInt(subCardId));
    let filterData2 = PROPERTY.filter((item) => item.id === parseInt(subCardId));

    const [room] = filterData;
    const [room2] = filterData2;

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        updateCheckOutDate(checkInDate, option);
    };

    const updateCheckOutDate = (checkIn, option) => {
        let newCheckOutDate = new Date(checkIn);

        if (option === 'Daily') {
            newCheckOutDate.setDate(checkIn.getDate() + 1);
        } else if (option === '6 Month') {
            newCheckOutDate.setMonth(checkIn.getMonth() + 6);
        } else if (option === '12 Month') {
            newCheckOutDate.setMonth(checkIn.getMonth() + 12);
        }

        setCheckOutDate(newCheckOutDate);
    };

    const handleDateSelect = (selectedDate) => {
        setCheckInDate(selectedDate);
        updateCheckOutDate(selectedDate, selectedOption);
    };

    const formatDate = (date) => {
        if (!date) return '';
        return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
    };

    return (
        <div>
            <div className="bg-blue p-5 pt-10">
                <div className="container flex items-center gap-4">
                    <Link to={"/home"}>
                        <FaArrowLeftLong className="bg-[#5082ef] p-3 text-5xl rounded-full text-white" />
                    </Link>
                    <h1 className="text-2xl font-medium text-white">Select Date</h1>
                </div>
            </div>

            <div className="bg-[#eff6ff] ">
                <div className="max-w-[960px]  mx-auto p-4 bg-white">
                    <Card className="overflow-hidden relative border-none ">
                        <div className="grid grid-cols-3 p-2 border rounded gap-2">
                            <Button
                                onClick={() => handleOptionClick('Daily')}
                                className={`p-7 text-[1rem] font-semibold text-blue ${selectedOption === 'Daily' ? 'bg-[#dbeafe]' : 'bg-white'}`}
                            >
                                Daily
                            </Button>
                            <Button
                                onClick={() => handleOptionClick('6 Month')}
                                className={`p-7 text-[1rem] font-semibold text-blue ${selectedOption === '6 Month' ? 'bg-[#dbeafe]' : 'bg-white'}`}
                            >
                                6 Month
                            </Button>
                            <Button
                                onClick={() => handleOptionClick('12 Month')}
                                className={`p-7 text-[1rem] font-semibold text-blue ${selectedOption === '12 Month' ? 'bg-[#dbeafe]' : 'bg-white'}`}
                            >
                                12 Month
                            </Button>
                        </div>
                        <div className="mt-3 p-3 flex justify-center items-center border rounded gap-8">
                            <div className="">
                                <p className='text-[#A9A9A9] text-sm'>Check-In</p>
                                <p className='font-bold pt-1 text-[18px]'>{formatDate(checkInDate)}</p>
                            </div>
                            <FaArrowLeftLong className="text-xl rotate-180 text-blue" />
                            <div className="">
                                <p className='text-[#A9A9A9] text-sm'>Check-Out</p>
                                <p className='font-bold pt-1 text-[#A9A9A9] text-[18px]'>{formatDate(checkOutDate)}</p>
                            </div>
                        </div>
                        <div className="mt-3">
                            <Calendar
                                mode="single"
                                selected={checkInDate}
                                onSelect={handleDateSelect}
                                className="rounded-md border w-full"
                            />
                        </div>

                        <HomeRoomDetails
                            checkInDate={checkInDate}
                            checkOutDate={checkOutDate}
                            formatDate={formatDate}
                        />
                        <div className="py-12"></div>

                        <div className="fixed bottom-0 max-w-[944px] mx-auto py-4 pr-4 bg-white  w-full">
                            <Link to={`tenant-information`} >
                                <Button className="bg-[#2463EB] mt-4 w-full justify-center hover:bg-darkBlue text-white flex items-center tracking-wide gap-2 px-4 py-7 rounded-full text-[1rem]">
                                    Continue
                                </Button>
                            </Link>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default SelectDate;
