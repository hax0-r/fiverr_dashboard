import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { GoPlusCircle } from 'react-icons/go';
import { PiTrash } from 'react-icons/pi';
import { FiPlus } from 'react-icons/fi';

export function AddFacility({ placeholder, title, btnName }) {
    const [add, setAdd] = useState(false);
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button
                    variant="link"
                    className={`text-blue text-[15px] ${title === "Rules" && "mx-auto"} p-0  mt-4 mb-1 underline font-normal flex items-center gap-1`}
                >
                    <GoPlusCircle className="w-5 h-5 text-blue" />
                    {btnName}
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                </DialogHeader>
                <div className=" pt-4 pb-3">
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="name" className="animate-myFadeIn">
                            {
                                add ? "Facilites 1" : "Add New"
                            }
                        </Label>
                        <div className="flex items-center gap-2">
                            <Input
                                id="name"
                                className="col-span-3"
                                placeholder={placeholder}
                            />
                            {
                                add && (
                                    <div className=" border-[1.4px] border-[#FF0000] p-[6px] hover:bg-red-50 transition-all rounded-full cursor-pointer">
                                        <PiTrash
                                            className='text-[#FF0000]'
                                        />
                                    </div>
                                )
                            }
                        </div>
                    </div>
                    {
                        add && (

                            <div className="flex flex-col mt-4 gap-2 animate-myFadeIn">
                                <Label htmlFor="name">
                                    Facilites 2
                                </Label>
                                <div className="flex items-center gap-2">
                                    <Input
                                        id="name"
                                        className="col-span-3"
                                        placeholder={placeholder}
                                    />
                                    <FiPlus
                                        className='text-white bg-blue border-2 border-blue rounded-full transition-all w-9 h-8 p-[6px] cursor-pointer' />
                                </div>
                            </div>
                        )
                    }
                    {
                        !add && (
                            <Button
                                variant="link"
                                className=" text-blue text-[15px] p-0 ml-auto mt-1  underline font-normal flex items-center gap-1"
                                onClick={() => setAdd(true)}
                            >
                                <GoPlusCircle className="w-5 h-5 text-blue" />
                                Add
                            </Button>
                        )
                    }
                </div>
                <DialogFooter>
                    <div className="flex items-end justify-between w-full">
                        <DialogClose asChild>
                            <Button type="button" variant="myRed">Cancel</Button>
                        </DialogClose>
                        <DialogClose asChild>
                            <Button type="button" variant="myBlue">Apply</Button>
                        </DialogClose>
                    </div>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
