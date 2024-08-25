import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const OccupancyCard = () => {
    const totalRooms = 174;
    const occupiedRooms = 41;
    const bookedRooms = 50;
    const availableRooms = 120;
    const occupiedPercentage = Math.round((occupiedRooms / totalRooms) * 100);
    const bookedPercentage = Math.round((bookedRooms / totalRooms) * 100);
    const availablePercentage = Math.round((availableRooms / totalRooms) * 100);

    return (
        <Card className=" max-w-[400px] ">
            <CardHeader className="pb-3 pt-2 px-4">
                <div className="flex  justify-between items-center">
                    <div>
                        <p className="text-[13px] text-muted-foreground ">{totalRooms} Total</p>
                        <CardTitle className="text-md ">Kolej Ibu Zain (KIZ)</CardTitle>
                    </div>
                    <div className="flex flex-col items-center ">
                        <div className="relative flex items-center justify-center mr-5 mt-5">
                            <svg className="w-12 h-12 scale-[1.8]">
                                <circle
                                    className="text-[#ededed]"
                                    strokeWidth="4"
                                    stroke="currentColor"
                                    fill="transparent"
                                    r="18"
                                    cx="24"
                                    cy="24"
                                />
                                <circle
                                    className="text-blue"
                                    strokeWidth="4"
                                    strokeDasharray="113"
                                    strokeDashoffset={`${113 - (113 * occupiedPercentage) / 100}`}
                                    strokeLinecap="round"
                                    stroke="currentColor"
                                    fill="transparent"
                                    r="18"
                                    cx="24"
                                    cy="24"
                                />
                            </svg>
                            <div className="absolute flex items-center justify-center">
                                <p className="text-md text-[#262626] font-bold">{occupiedPercentage}%</p>
                            </div>
                        </div>
                    </div>
                </div>
            </CardHeader>
            <CardContent className=" flex items-center flex-wrap gap-x-10 gap-y-4 mt-3 py-3 px-4">


                <div className="space-y-1 w-[150px]">

                    <div className='rounded-full relative h-[0.4rem] bg-[#e7f0fe]'>
                        <div
                            style={{
                                width: `${occupiedPercentage}%`
                            }}
                            className={`rounded-full bg-blue h-full absolute top-0 left-0 transition-all`}
                        />
                    </div>
                    <div className="flex items-center rounded-full ">
                        <span className="text-sm font-medium">{occupiedRooms}</span>
                        <span className="pl-2 text-sm">Occupied</span>
                    </div>
                </div>

                <div className="space-y-1 w-[150px] overflow-hidden">
                    <div className='rounded-full relative h-[0.4rem] bg-[#ffedd5]'>
                        <div
                            style={{
                                width: `${bookedPercentage}%`
                            }}
                            className={`rounded-full bg-[#ea580c] h-full absolute top-0 left-0 transition-all`}
                        />
                    </div>
                    <div className="flex items-center">
                        <span className="text-sm font-medium">{bookedRooms}</span>
                        <span className="pl-2 text-sm">Booked</span>
                    </div>
                </div>

                <div className="space-y-1 w-[150px]">


                    <div className='rounded-full relative h-[0.4rem] bg-[#e7fef4]'>
                        <div
                            style={{
                                width: `${availablePercentage}%`
                            }}
                            className={`rounded-full bg-[#169d00] h-full absolute top-0 left-0 transition-all`}
                        />
                    </div>
                    <div className="flex items-center ">
                        <span className="text-sm font-medium">{availableRooms}</span>
                        <span className="pl-2 text-sm">Available</span>
                    </div>
                </div>

            </CardContent>
        </Card>
    );
};

export default OccupancyCard;
