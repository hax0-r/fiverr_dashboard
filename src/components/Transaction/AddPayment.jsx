import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { IoSearchOutline } from 'react-icons/io5';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { FiCalendar } from 'react-icons/fi';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Card, CardDescription, CardHeader } from '../ui/card';
import TenantProfile from '../Tenant/TenantProfile';
import { BOOKING } from '@/assets/Transactionlist';


const AddPayment = () => {

    const [method, setmethod] = useState("Transfer");
    const [continues, setContinues] = useState(false);

    return (
        <>
            <div className=''>
                <Sheet >
                    <SheetTrigger asChild>
                        <Button className="flex items-center gap-2 bg-blue border-[1.5px] py-5 border-blue hover:text-blue text-white   hover:bg-transparent ">Add Payment</Button>
                    </SheetTrigger>
                    <SheetContent >
                        <SheetHeader>
                            <SheetTitle>Add Payment</SheetTitle>
                        </SheetHeader>

                        {
                            !continues && (
                                <div className=" mt-5">
                                    <Label>Tenant</Label>
                                    <div className="relative border rounded-lg mt-1 flex justify-center items-center w-full">
                                        <IoSearchOutline className="absolute right-4 text-[#8E8E8E]" />
                                        <Input
                                            placeholder="Search Tenant/IDs"
                                            className="rounded-full pr-11 py-5 w-full focus:outline-none focus:ring-0 border border-transparent placeholder:text-[#8E8E8E]"
                                        />
                                    </div>
                                </div>
                            )
                        }

                        {
                            continues && (
                                <div className="mt-5 animate-myFadeIn">
                                    <TenantProfile booking={BOOKING} />
                                </div>
                            )
                        }

                        <div className="border rounded-lg mt-5 p-4">
                            <h2 className='text-xl mb-4 font-semibold'>Choose Property</h2>

                            <div className="grid grid-cols-2 gap-2 items-center gap-y-4">
                                <div>
                                    <Label className="font-medium" htmlFor="property">Property</Label>
                                    <Select >
                                        <SelectTrigger className="mt-1" id="property">
                                            <SelectValue placeholder="Kolej Ibu Zein" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="Kolej Ibu Zein">Kolej Ibu Zein</SelectItem>
                                            {/* Add more options here */}
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div>
                                    <Label className="font-medium" htmlFor="room">Room Type</Label>
                                    <Select >
                                        <SelectTrigger className="mt-1" id="room">
                                            <SelectValue placeholder="Room" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="Single">Single</SelectItem>
                                            <SelectItem value="Double">Double</SelectItem>
                                            {/* Add more options here */}
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div>
                                    <Label className="font-medium" htmlFor="duration">Duration</Label>
                                    <Select >
                                        <SelectTrigger className="mt-1" id="duration">
                                            <SelectValue placeholder="6 Month" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="6 Month">6 Month</SelectItem>
                                            <SelectItem value="12 Month">12 Month</SelectItem>
                                            {/* Add more options here */}
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="flex mt-2 flex-col relative w-full" >
                                    <Label className="font-medium">Date of Birth</Label>
                                    <input type="date" className="border w-full px-3 mt-[6px] py-[7px] rounded-md " />
                                </div>
                            </div>
                            {
                                continues && (
                                    <div className="animate-myFadeIn">
                                        <div className="h-[1.5px] mt-3 w-full bg-zinc-200"></div>
                                        <div className="flex items-center justify-between mt-4">
                                            <Label className="font-medium">Total Cost</Label>
                                            <p className='text-lg text-[#F26522] font-semibold'>RM 1,200</p>
                                        </div>
                                    </div>
                                )
                            }
                        </div>

                        <Card className="mt-5">
                            <CardHeader className="p-4 pb-1">
                                <h3 className="text-lg font-semibold">Payment Type</h3>
                            </CardHeader>

                            <div className="grid grid-cols-2 p-1 border-[1.5px] border-[#BFDBFE] rounded-lg m-3 mx-4 gap-2">
                                <Button
                                    className={`p-6 text-[1rem] font-semibold ${method === "Transfer" ? "bg-[#dbeafe]" : "bg-white"}  text-blue hover:bg-[#dbeafe]`}
                                    onClick={() => setmethod("Transfer")}
                                >
                                    Transfer
                                </Button>
                                <Button
                                    className={`p-6 text-[1rem] font-semiboldbg-white text-blue ${method === "Cash" ? "bg-[#dbeafe]" : "bg-white"} hover:bg-[#dbeafe]`}
                                    onClick={() => setmethod("Cash")}
                                >
                                    Cash
                                </Button>
                            </div>

                            {
                                method === "Transfer" &&
                                <div className="px-4 animate-myFadeIn pt-4 pb-5 flex justify-between gap-2">
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
                                        <Input className="mt-1" placeholder={`1200`} />
                                    </div>
                                </div>

                            }
                            {
                                method === "Cash" &&
                                <div className="px-4 animate-myFadeIn pt-4 pb-5 flex justify-between gap-2">
                                    <div className="w-full">
                                        <Label className="font-semibold">Payer Name</Label>
                                        <Input className="mt-1" placeholder="Input Name" />
                                    </div>
                                    <div className="w-full">
                                        <Label className="font-semibold">From Bank</Label>
                                        <Input className="mt-1" placeholder="Input Name" />
                                    </div>
                                </div>
                            }
                        </Card>



                        <div className="flex mt-5 justify-end items-center gap-2">
                            <SheetClose asChild>
                                <Button className=" border-2 border-zinc-400 hover:bg-zinc-50 bg-transparent text-zinc-700 px-10">Cancel</Button>
                            </SheetClose>
                            {
                                continues ? (
                                    <SheetClose asChild>
                                        <Button className=" border-2 border-blue hover:bg-blue hover:text-white bg-transparent text-blue px-10">Continue</Button>
                                    </SheetClose>
                                ) : (
                                    <Button onClick={() => setContinues(true)} className=" border-2 border-blue hover:bg-blue hover:text-white bg-transparent text-blue px-10">Continue</Button>
                                )
                            }
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </>
    );
};

export default AddPayment;
