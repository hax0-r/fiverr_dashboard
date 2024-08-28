import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Card, CardHeader, CardContent, CardDescription } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { PiBuildings, PiHourglassHighFill } from 'react-icons/pi';
import { Input } from '../ui/input';
import { IoIosCloseCircle } from "react-icons/io";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { FaCircleCheck } from 'react-icons/fa6';
import AlertDialogComp from './AlertDialogComp';

const SlideSheet = ({ booking }) => {
    const [isDeclined, setIsDeclined] = useState(false);
    const [isConfirmed, setIsConfirmed] = useState(false);
    const [isNotificationVisible, setIsNotificationVisible] = useState(false); // New state

    const handleDecline = () => {
        setIsDeclined(true);
        setIsConfirmed(false);
        setIsNotificationVisible(true); // Show notification after decline
    };

    const handleConfirm = () => {
        setIsConfirmed(true);
        setIsDeclined(false);
        setIsNotificationVisible(true); // Show notification after confirm
    };

    const handleFinalConfirm = () => {
        handleConfirm();
        // Perform actions upon final confirmation if needed
        // Auto-fill proof of payment if user confirms
        // ...
    };
    return (
        <>
            <div>
                <Sheet >

                    <SheetTrigger asChild>
                        <a href="#" className="text-blue text-[1rem] hover:underline">Details</a>
                    </SheetTrigger>
                    <SheetContent >
                        <SheetHeader>
                            <SheetTitle>Booking ID <span className='text-blue'>{booking.id}</span></SheetTitle>
                        </SheetHeader>



                        {/* Conditionally Render Payment Status Alerts */}
                        {isDeclined && (
                            <Alert className="mt-3 bg-[#fef2f2]" variant="destructive">
                                <IoIosCloseCircle className="text-xl " />
                                <AlertTitle className="text-black font-bold pb-1">Payment Declined</AlertTitle>
                                <AlertDescription className="text-[#696969]">
                                    {booking.id}
                                </AlertDescription>
                            </Alert>
                        )}

                        {isConfirmed && (
                            <Alert className="mt-3 bg-[#f0ffed] border-[#169D00] border" variant="success">
                                <FaCircleCheck className="text-lg text-[#169D00]" />
                                <AlertTitle className="text-black font-bold pb-1">Payment Confirmed</AlertTitle>
                                <AlertDescription className="text-[#696969]">
                                    {booking.id}
                                </AlertDescription>
                            </Alert>
                        )}



                        <div className="space-y-4 mt-4">
                            {/* Tenant's Profile */}
                            <Card>
                                <CardHeader>
                                    <h3 className="text-lg font-semibold">Tenant's Profile</h3>
                                </CardHeader>
                                <CardContent>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <Label className="font-semibold">{booking.name}</Label>
                                            <p>Rachel Subanto</p>
                                        </div>
                                        <div>
                                            <Label className="font-semibold">Phone Number</Label>
                                            <p>+60145678901</p>
                                        </div>
                                        <div>
                                            <Label className="font-semibold">ID/IC/Passport</Label>
                                            <p>18810076</p>
                                        </div>
                                        <div>
                                            <Label className="font-semibold">Email</Label>
                                            <p>ahmad.farhan@gmail.com</p>
                                        </div>
                                        <div>
                                            <Label className="font-semibold">Date of Birth</Label>
                                            <p>20 July 2000</p>
                                        </div>
                                        <div>
                                            <Label className="font-semibold">Emergency Contact</Label>
                                            <p>+60145678933</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Booked Room */}
                            <Card>
                                <CardHeader>
                                    <h3 className="text-lg font-semibold">Booked Room</h3>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex justify-between items-start gap-4">
                                        <div>
                                            <Label className="text-[#696969] font-medium">Room Type</Label>
                                            <p className='font-medium mt-2 p-2 px-4 rounded-md text-[#B48200] bg-[#fff1cc]'>{booking.type}</p>
                                        </div>
                                        <div>
                                            <Label className="text-[#696969] font-medium">Property</Label>
                                            <p className='flex items-start gap-1 font-semibold pt-2'><PiBuildings className='text-xl' />{booking.building}</p>
                                        </div>
                                        <div>
                                            <Label className="text-[#696969] font-medium">Rental Duration</Label>
                                            <p className='font-semibold pt-2'>6 Months</p>
                                        </div>
                                        <div>
                                            <Label className="text-[#696969] font-medium">Boarding Date</Label>
                                            <p className='font-semibold pt-2'>{booking.date}</p>
                                        </div>
                                    </div>
                                    <div className="w-full border-b  mt-10"></div>
                                </CardContent>


                                <CardHeader className="pt-1">
                                    <h3 className="text-lg font-semibold">Payment</h3>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex justify-between gap-4">
                                        <div>
                                            <Label className="font-medium  text-[#696969]">Payment Type</Label>
                                            <p className='pt-2 font-semibold'>Transfer Bank</p>
                                        </div>
                                        <div>
                                            <Label className="font-medium  text-[#696969]" >Status</Label>
                                            <p className="text-nowrap font-semibold pt-2 flex items-center gap-1"><PiHourglassHighFill className='text-lg text-[#F26522]' /> Waiting Confirmation</p>
                                            <p className='pt-1 text-[#696969]'>11/07/2024</p>
                                        </div>
                                        <div className="">
                                            <Label className="font-medium  text-[#696969]">Amount</Label>
                                            <p className="text-2xl pt-2 font-semibold font-bold text-[#F26522]">{booking.amount}</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            {!isDeclined && (
                                <Card>
                                    <CardHeader className="pb-2">
                                        <h3 className="text-lg font-semibold">Proof of Payment</h3>
                                    </CardHeader>
                                    <CardDescription className="pl-6 pb-2 font-medium text-[#696969]">
                                        Proof of Payment
                                    </CardDescription>
                                    <a href="#" className='text-blue underline pl-6 text-lg  font-semibold'>27387382783713.png</a>
                                    <div className="px-6 pt-4 pb-5 flex justify-between gap-2">
                                        <div className="">
                                            <Label className="font-semibold">Payer Name</Label>
                                            <Input className="mt-1" placeholder="Input Name" />
                                        </div>
                                        <div className="">
                                            <Label className="font-semibold">From Bank</Label>
                                            <Input className="mt-1" placeholder="Input Name" />
                                        </div>
                                        <div className="">
                                            <Label className="font-semibold">To Bank</Label>
                                            <Input className="mt-1" placeholder="Input Name" />
                                        </div>
                                        <div className="">
                                            <Label className="font-semibold">Amount (RM)</Label>
                                            <Input className="mt-1" placeholder={`${booking.amount}`} />
                                        </div>
                                    </div>
                                </Card>
                            )}
                        </div>
                        <div className="flex items-center mt-4 justify-end gap-3">
                            {!isConfirmed && !isDeclined && (
                                <>
                                    <AlertDialogComp dialog="Decline" btn1="Decline" desc="Are you sure you want to decline this payment?"
                                        head="Decline Payment?" onConfirm={handleDecline} />
                                    <AlertDialogComp dialog="Confirm Payment" btn1="Confirm" desc="Are you sure you want to confirm this payment?"
                                        head="Confirm Payment?" onConfirm={handleFinalConfirm} />
                                </>
                            )}

                            {isDeclined && (
                                <>
                                    <SheetClose asChild>
                                        <Button className=" border-2 border-blue hover:bg-blue hover:text-white bg-transparent text-blue px-10">Done</Button>
                                    </SheetClose>
                                </>
                            )}
                            {isConfirmed && (
                                <>
                                    <SheetClose asChild>
                                        <Button className=" border-2 border-blue hover:bg-blue hover:text-white bg-transparent text-blue px-10">Back</Button>
                                    </SheetClose>
                                    <Button className="border-2 border-blue bg-blue text-white hover:bg-transparent hover:text-blue px-10">Assign</Button>
                                </>
                            )}
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </>
    );
};

export default SlideSheet;
