import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FaArrowRightLong } from 'react-icons/fa6';
import { useToast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster"
import ProgressNavigation from './ProgressNavigation';
import ToastWithTitle from './ToastWithTitle';
import TenantProfile from '../Tenant/TenantProfile';
import RoomDetails from '../Tenant/RoomDetails';
import AssignRoomTableData from '../Tenant/AssignRoomTableData';
import ChooseProperty from '../Tenant/ChooseProperty';
import RoomSelection from '../Tenant/RoomSelection';
import { ROOM_SELECTED } from '@/assets/RoomSelected';


const AssignRoom = ({ booking, btnName }) => {
    const { toast } = useToast();
    const [currentStep, setCurrentStep] = useState(1);
    const [isSheetOpen, setIsSheetOpen] = useState(false);

    const handleContinueClick = () => {
        if (currentStep < 3) {
            setCurrentStep(currentStep + 1);
        } else {
            // If on the last step, close the sheet and show a notification
            setIsSheetOpen(false);
            toast({
                title: "Success!",
                description: "Room assignment has been confirmed.",
            });
        }
    };

    return (
        <>
            <div>
                <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                    <SheetTrigger asChild>
                        <a href="#" className="text-white transition-all px-6 hover:bg-darkBlue p-[10px] rounded-md bg-blue">
                            {
                                btnName === "Transfer" ? "Transfer" : "Details"
                            }

                        </a>
                    </SheetTrigger>
                    <SheetContent className="px-3">
                        <div className="">
                            <SheetHeader>
                                <SheetTitle>Assign Room</SheetTitle>
                            </SheetHeader>

                            <div className="max-w-2xl mx-auto p-4">
                                {/* Progress Navigation */}
                                <ProgressNavigation currentStep={currentStep} />

                            </div>

                            {/* Information Overview */}

                            {currentStep === 1 && (
                                <div className="">

                                    <div className="px-4">

                                        <AssignRoomTableData booking={booking} />

                                        <ChooseProperty heading={"Room Details"} />
                                    </div>

                                    {/* Room Selection */}
                                    <RoomSelection roomSelected={ROOM_SELECTED} />
                                </div>
                            )}


                        </div>

                        {/* second component */}
                        {currentStep === 2 && (

                            <div className="px-3">
                                <SheetHeader>
                                    <SheetTitle>Rent Time</SheetTitle>
                                </SheetHeader>
                                <div className="font-medium text-sm text-[#0F172A] pt-4">Chek In - Check Out &nbsp;<span className='text-[#F86B1C] bg-[#fff3ec] p-[6px] px-3 rounded-sm'>6 months (180 Days)</span></div>

                                <div className="grid grid-cols-2 border mt-3 gap-4 p-[10px] rounded-md">
                                    <div className="flex justify-between items-center ">
                                        <p>{booking.date}</p>
                                        <FaArrowRightLong />
                                    </div>
                                    <div className="flex w-full  items-center ">
                                        {/* by default selectd this 9 January 2025 */}
                                        <input type="date" className='w-full' />
                                    </div>
                                </div>
                            </div>

                        )}

                        {/* third component progress */}

                        {currentStep === 3 && (

                            <div className="p-2">
                                <TenantProfile booking={booking} />
                                <RoomDetails booking={booking} />
                            </div>

                        )}


                        <div className="flex justify-end items-center gap-3 mt-10">
                            <SheetClose asChild>
                                <Button className=" border-2 border-zinc-300 hover:bg-zinc-100 bg-transparent text-zinc-500 px-10">Cancel</Button>
                            </SheetClose>
                            <Button
                                className="border-2 border-blue bg-blue text-white hover:bg-transparent hover:text-blue px-10"
                                onClick={handleContinueClick}
                            >
                                {currentStep === 3 ? "Confirm" : "Continue"}
                            </Button>
                            <Toaster></Toaster>
                            <ToastWithTitle />

                        </div>
                    </SheetContent>
                </Sheet>


            </div >
        </>
    );
};

export default AssignRoom;
