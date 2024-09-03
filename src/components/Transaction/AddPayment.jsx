import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { IoSearchOutline } from 'react-icons/io5';
import { Input } from '../ui/input';
import { Label } from '../ui/label';


const AddPayment = ({ booking }) => {

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



                        <div className="flex mt-5 justify-end items-center gap-2">
                            <SheetClose asChild>
                                <Button className=" border-2 border-zinc-400 hover:bg-zinc-50 bg-transparent text-zinc-700 px-10">Cancel</Button>
                            </SheetClose>
                            <Button className=" border-2 border-blue hover:bg-blue hover:text-white bg-transparent text-blue px-10">Continue</Button>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </>
    );
};

export default AddPayment;
