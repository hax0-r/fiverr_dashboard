import React from 'react'
import { Card, CardContent } from '../ui/card'
import { Label } from '../ui/label'
import { FaArrowRightLong } from 'react-icons/fa6'
import { Button } from '../ui/button'
import { PiStackSimple } from 'react-icons/pi'
import { LuBedDouble } from "react-icons/lu";

const RoomDetails = ({ booking, isEdit }) => {
    return (
        <>
            <div className="animate-myFadeIn">
                <Card className="mt-6 pb-3 px-3">
                    <div className="flex items-center justify-between mt-3">
                        <h2 className='p-3 font-bold '>Room Details</h2>
                        {
                            isEdit && (
                                <div className="flex items-center gap-2">
                                    <Button className=" border-2 border-red-600 hover:bg-red-600 hover:text-white bg-transparent text-red-600">Remove</Button>
                                    <Button className="border-2 border-blue bg-blue text-white hover:bg-transparent hover:text-blue ">transfer</Button>
                                </div>
                            )
                        }
                    </div>
                    <CardContent className="p-4 flex justify-between items-center gap-4">
                        <div>
                            <Label className="text-[12px] text-gray-500 ">Property</Label>
                            <p className="text-gray-800 font-semibold pt-1 ">{booking.building}</p>
                        </div>
                        <div className="border-gray-200 border h-7 w-[1px]"></div>
                        <div>
                            <Label className="text-[12px] text-gray-500 ">Room Type</Label>
                            <p className="text-gray-800 font-semibold pt-1 ">{booking.type}</p>
                        </div>
                        <div className="border-gray-200 border h-7 w-[1px]"></div>
                        <div>
                            <Label className="text-[12px] text-gray-500 ">Floor</Label>
                            <div className="flex items-center gap-1">
                                <PiStackSimple className='text-xl' />
                                <p className="text-gray-800 font-semibold pt-1 ">{booking.Floor}</p>
                            </div>
                        </div>
                        <div className="border-gray-200 border h-7 w-[1px]"></div>
                        <div>
                            <Label className="text-[12px] text-gray-500 ">Block</Label>
                            <div className="flex items-center gap-1">
                                <PiStackSimple className='text-xl' />
                                <p className="text-gray-800 font-semibold pt-1 ">H1</p>
                            </div>
                        </div>
                        <div className="border-gray-200 border h-7 w-[1px]"></div>
                        <div>
                            <Label className="text-[12px] text-gray-500 ">Room</Label>
                            <div className="flex items-center gap-1">
                                <LuBedDouble className='text-xl' />
                                <p className="text-gray-800 font-semibold pt-1 ">{booking.room}</p>
                            </div>
                        </div>
                    </CardContent>
                    <div className="flex justify-between items-center gap-2 p-3">
                        <div className="">
                            <Label className="text-[12px] text-gray-500 ">Check-In</Label>
                            <p className="text-gray-800 font-semibold pt-1 ">Monday, 11 July 2024</p>
                        </div>
                        <FaArrowRightLong />
                        <div className="">
                            <Label className="text-[12px] text-gray-500 ">Check-Out</Label>
                            <p className="text-gray-800 font-semibold py-1 ">Sunday, 09 January 2025</p>
                            <span className='text-[#F86B1C] text-center font-semibold text-[12px] bg-[#fff3ec] p-[6px] px-3 rounded-sm'>6 months (180 Days)</span>
                        </div>
                    </div>
                </Card>
            </div>
        </>
    )
}

export default RoomDetails