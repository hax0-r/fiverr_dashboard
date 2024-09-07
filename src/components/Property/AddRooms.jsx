import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import ChooseProperty from '../Tenant/ChooseProperty';
import { Label } from '../ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Input } from '../ui/input';


const AddRooms = ({ btnName }) => {

    const [makeCopy, setMakeCopy] = useState(false);


    return (
        <>
            <div>
                <Sheet >
                    <SheetTrigger asChild>
                        <Button variant="myBlue">
                            {
                                btnName ? btnName : "Details"
                            }

                        </Button>
                    </SheetTrigger>




                    <SheetContent className="">
                        <div className=" h-full flex flex-col justify-between">
                            <div className="">
                                <SheetHeader>
                                    <SheetTitle>Add Room</SheetTitle>
                                </SheetHeader>

                                <div className="mt-8">
                                    <ChooseProperty heading={"Set Room"} />
                                    <div className='grid grid-cols-2 gap-4'>
                                        <div className="mt-4">
                                            <Label className="font-medium" htmlFor="gender">Gender Allowance</Label>
                                            <Select >
                                                <SelectTrigger className="mt-1" id="gender">
                                                    <SelectValue placeholder="Select Gender" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="Kolej Ibu Zein">Male</SelectItem>
                                                    {/* Add more options here */}
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="">
                                <div className={`flex items-center justify-between h-16 animate-myFadeIn ${makeCopy && "bg-[#eff6ff]"} py-2 px-5 rounded-md`}>
                                    <div className="flex items-center gap-2">
                                        <p className='text-sm font-medium'>Make a copy</p>
                                        <label class="relative inline-flex items-center cursor-pointer">
                                            <input type="checkbox" value="" class="sr-only peer" />
                                            <div onClick={() => setMakeCopy(!makeCopy)} class="group peer ring-0  bg-[#e4e4e7] border-2  rounded-full outline-none duration-1000 after:duration-300 w-[52px] h-7   peer-focus:outline-none  after:content-[''] after:rounded-full after:absolute   peer-checked:after:rotate-180 after:[background:conic-gradient(from_135deg,_#ffffff,_#ffffff,_#ffffff,_#ffffff,_#ffffff,_#ffffff)]  after:outline-none after:h-5 after:w-5 after:top-1 after:left-1  peer-checked:after:translate-x-6 peer-hover:after:scale-95 peer-checked:bg-blue">
                                            </div>
                                        </label>
                                    </div>
                                    {
                                        makeCopy && (
                                            <div className="relative animate-myFadeIn flex max-w-[17rem] items-center border rounded-lg">
                                                <Input id="roomSize" className="placeholder:text-[#94A3B8] border-none rounded-r-none " placeholder="Ex: 200" type="number" />
                                                <span className="bg-[#f5f7fa] p-[8px] px-3">Room</span>
                                            </div>
                                        )
                                    }
                                </div>

                                <div className="flex gap-2 items-center justify-end mt-6">
                                    <SheetClose asChild>
                                        <Button className=" border-2 border-zinc-300 hover:bg-zinc-100 bg-transparent text-zinc-500 px-6">Cancel</Button>
                                    </SheetClose>
                                    <SheetClose asChild>
                                        <Button variant="myBlue" className="px-5">Add Room</Button>
                                    </SheetClose>
                                </div>
                            </div>
                        </div>
                    </SheetContent>
                </Sheet>


            </div >
        </>
    );
};

export default AddRooms;
