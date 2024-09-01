import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import EditTenantProfile from './EditTenantProfile';
import ProgressNavigation from '../Transaction/ProgressNavigation';
import TenantProfile from './TenantProfile';
import { TENANT_BOOKING } from '@/assets/TenantList';
import RoomDetails from './RoomDetails';
import AssignRoomTableData from './AssignRoomTableData';
import ChooseProperty from './ChooseProperty';
import RoomSelection from './RoomSelection';
import { ROOM_SELECTED } from '@/assets/RoomSelected';
import { FaArrowRightLong } from 'react-icons/fa6';
import { Label } from '../ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { BOOKING } from '@/assets/Transactionlist';


const AddTenant = () => {

    const [defaultComp, setDefaultComp] = useState(true);
    const [isSave, setIsSave] = useState(false);
    const [isAssign, setIsAssign] = useState(false);
    const [progressNavigation, setProgressNavigation] = useState(false);
    const [rentTime, setrentTime] = useState(false);
    const [allSet, setAllSet] = useState(false);
    const [currentStep, setCurrentStep] = useState(0);

    const saveHandler = () => {
        setDefaultComp(false);
        setIsSave(true)
    }

    const assignHandler = () => {
        setIsSave(false)
        setIsAssign(true)
        setProgressNavigation(true)

    }

    const rentTimeHandler = () => {
        setIsAssign(false)
        setrentTime(true)
        setCurrentStep(50)
    }
    const allSetHandler = () => {
        setrentTime(false)
        setAllSet(true)
        setCurrentStep(200)
    }

    const allConfirmedHandler = () => {
        setIsAssign(false)
        setIsSave(false)
        setProgressNavigation(false)
        setDefaultComp(true);
        setrentTime(false)
        setAllSet(false)
        setCurrentStep(0)
    }



    return (
        <>
            <div className="animate-myFadeIn">
                <div>
                    <Sheet >
                        <SheetTrigger asChild>
                            <Button href="#" className="border-2 border-blue py-5 bg-blue text-white hover:bg-transparent hover:text-blue">Add Tenant</Button>
                        </SheetTrigger>
                        <SheetContent >
                            <SheetHeader>
                                <div className="flex items-center justify-between" onClick={() => setIsEdit(true)}>
                                    <SheetTitle>Add Tenant</SheetTitle>
                                </div>
                            </SheetHeader>

                            {
                                defaultComp && (
                                    <div className="animate-myFadeIn">
                                        <EditTenantProfile />
                                    </div>
                                )
                            }

                            {
                                isSave && (
                                    <div className="mt-5 animate-myFadeIn">
                                        <TenantProfile booking={TENANT_BOOKING} />
                                        <RoomDetails booking={TENANT_BOOKING} />
                                        <div className="mt-8">
                                            <div className="flex justify-between items-center">
                                                <h2 className='font-bold'>Payment History</h2>
                                                <div className="flex items-center gap-2">
                                                    <Button className=" bg-transparent text-blue hover:bg-transparent hover:text-blue ">See All</Button>
                                                    <Button className="border-2 border-blue bg-blue text-white hover:bg-transparent hover:text-blue ">Add Payment</Button>
                                                </div>
                                            </div>
                                            <div className="h-[9.6rem] flex justify-center items-center mt-5">
                                                <p className='text-[#A9A9A9] font-medium text-sm'>No Payment History</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }

                            {
                                progressNavigation &&
                                <div className="mt-8 animate-myFadeIn">
                                    <ProgressNavigation currentStep={currentStep} />
                                </div>
                            }
                            {
                                isAssign && (
                                    <div className="animate-myFadeIn">
                                        <AssignRoomTableData booking={TENANT_BOOKING} />
                                        <ChooseProperty heading="Room Details" />
                                        <RoomSelection roomSelected={ROOM_SELECTED} />
                                    </div>
                                )
                            }
                            {
                                rentTime && (
                                    <div className="animate-myFadeIn">
                                        <div className="px-3">
                                            <SheetHeader>
                                                <SheetTitle>Rent Time</SheetTitle>
                                            </SheetHeader>

                                            <div className="my-5 flex gap-3 items-center w-full">
                                                <div className="w-full">
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
                                                <div className="w-full">
                                                    <Label className="font-medium" htmlFor="property">Property</Label>
                                                    <div className="flex border w-full  items-center p-[7px] mt-1 rounded-md ">
                                                        <input type="date" className='w-full' />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="font-medium text-sm text-[#0F172A] pt-4">Chek In - Check Out &nbsp;<span className='text-[#F86B1C] bg-[#fff3ec] p-[6px] px-3 rounded-sm'>6 months (180 Days)</span></div>

                                            <div className="grid grid-cols-2 border mt-3 gap-4 p-[10px] rounded-md">
                                                <div className="flex justify-between items-center ">
                                                    <p>21 August 2024</p>
                                                    <FaArrowRightLong />
                                                </div>
                                                <div className="flex w-full  items-center ">
                                                    {/* by default selectd this 9 January 2025 */}
                                                    <input type="date" className='w-full' />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }

                            {
                                allSet && (
                                    <div className="animate-myFadeIn">
                                        <TenantProfile booking={TENANT_BOOKING} />
                                        <RoomDetails booking={TENANT_BOOKING}/>
                                    </div>
                                )
                            }





                            <div className="flex items-center mt-4 justify-end gap-3">
                                <SheetClose asChild>
                                    <Button className=" border-2 border-zinc-400 hover:bg-zinborder-zinc-400  bg-transparent text-zinborder-zinc-400 px-6">Cancel</Button>
                                </SheetClose>
                                {
                                    defaultComp && (
                                        <Button onClick={saveHandler} className=" border-2 border-blue bg-blue text-white hover:bg-transparent hover:text-blue px-11">Save</Button>
                                    )
                                }
                                {
                                    isSave && (
                                        <Button onClick={assignHandler} className=" border-2 border-blue bg-blue text-white hover:bg-transparent hover:text-blue px-11">Assign</Button>
                                    )
                                }
                                {
                                    isAssign && (
                                        <Button onClick={rentTimeHandler} className=" border-2 border-blue bg-blue text-white hover:bg-transparent hover:text-blue px-6">Continue</Button>
                                    )
                                }
                                {
                                    rentTime && (
                                        <Button onClick={allSetHandler} className=" border-2 border-blue bg-blue text-white hover:bg-transparent hover:text-blue px-6">Continue</Button>
                                    )
                                }
                                {
                                    allSet && (
                                        <SheetClose asChild>
                                            <Button onClick={allConfirmedHandler} className=" border-2 border-blue bg-blue text-white hover:bg-transparent hover:text-blue px-6">Confirm</Button>
                                        </SheetClose>
                                    )
                                }
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </>
    )
}

export default AddTenant