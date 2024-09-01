import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { PiReceiptFill } from 'react-icons/pi';
import TenantProfile from '../Tenant/TenantProfile';
import AlertDialogComp from '../Transaction/AlertDialogComp';
import RoomDetails from './RoomDetails';
import { Table, TableBody, TableCell, TableRow } from '../ui/table';
import { RiEdit2Line } from 'react-icons/ri';
import EditTenantProfile from './EditTenantProfile';


const SlideSheetTenant = ({ booking }) => {

    const [isEdit, setIsEdit] = useState(false);

    return (
        <>
            <div>
                <Sheet >

                    <SheetTrigger asChild>
                        <a href="#" className="text-blue text-[1rem] hover:underline">Details</a>
                    </SheetTrigger>
                    <SheetContent >
                        <SheetHeader>
                            <div className="flex items-center justify-between" onClick={() => setIsEdit(true)}>
                                <SheetTitle>{isEdit ? "Edit Tenant" : "Tenants Details"}</SheetTitle>
                                {
                                    !isEdit && (
                                        <Button className="border-2 border-blue hover:bg-blue hover:text-white bg-white z-50 mt-[-.5rem] mr-[-.5rem] text-blue flex items-center gap-2 "><RiEdit2Line className='text-xl' />
                                            Edit</Button>
                                    )
                                }
                            </div>
                        </SheetHeader>


                        <div className="mt-4">
                            {
                                !isEdit ? (
                                    <TenantProfile booking={booking} />
                                ) : (
                                    <EditTenantProfile booking={booking} />
                                )
                            }
                        </div>


                        <div className="">
                            <RoomDetails booking={booking} isEdit={isEdit} />
                        </div>

                        {
                            !isEdit && (
                                <div className="mt-8">
                                    <div className="flex justify-between items-center">
                                        <h2 className='font-bold'>Payment History</h2>
                                        <div className="flex items-center gap-2">
                                            <Button className=" bg-transparent text-blue hover:bg-transparent hover:text-blue ">See All</Button>
                                            <Button className="border-2 border-blue bg-blue text-white hover:bg-transparent hover:text-blue ">Add Payment</Button>
                                        </div>
                                    </div>
                                    <div className="h-[9.6rem] overflow-y-scroll mt-5">
                                        <Table className="min-w-full rounded-xl  overflow-hidden">
                                            <TableBody>
                                                <TableRow className="bg-[#eff6ff] hover:bg-[#eef3f8]">
                                                    <TableCell className="p-3">{booking.date}</TableCell>
                                                    <TableCell className="p-3 text-blue cursor-pointer hover:underline">
                                                        {booking.ids}
                                                    </TableCell>
                                                    <TableCell className="p-2">Bank Transfer</TableCell>
                                                    <TableCell className="p-2">Maybank</TableCell>
                                                    <TableCell className="p-2">RM 1,200</TableCell>
                                                    <TableCell className="p-2 text-blue">
                                                        <PiReceiptFill className='text-2xl' />
                                                    </TableCell>
                                                </TableRow>
                                            </TableBody>
                                        </Table>
                                        <Table className="min-w-full rounded-xl mt-2 overflow-hidden">
                                            <TableBody>
                                                <TableRow className="bg-[#eff6ff] hover:bg-[#eef3f8]">
                                                    <TableCell className="p-3">{booking.date}</TableCell>
                                                    <TableCell className="p-3 text-blue cursor-pointer hover:underline">
                                                        {booking.ids}
                                                    </TableCell>
                                                    <TableCell className="p-2">Bank Transfer</TableCell>
                                                    <TableCell className="p-2">Maybank</TableCell>
                                                    <TableCell className="p-2">RM 1,200</TableCell>
                                                    <TableCell className="p-2 text-blue">
                                                        <PiReceiptFill className='text-2xl' />
                                                    </TableCell>
                                                </TableRow>
                                            </TableBody>
                                        </Table>
                                        <Table className="min-w-full rounded-xl mt-2 overflow-hidden">
                                            <TableBody>
                                                <TableRow className="bg-[#eff6ff] hover:bg-[#eef3f8]">
                                                    <TableCell className="p-3">{booking.date}</TableCell>
                                                    <TableCell className="p-3 text-blue cursor-pointer hover:underline">
                                                        {booking.ids}
                                                    </TableCell>
                                                    <TableCell className="p-2">Bank Transfer</TableCell>
                                                    <TableCell className="p-2">Maybank</TableCell>
                                                    <TableCell className="p-2">RM 1,200</TableCell>
                                                    <TableCell className="p-2 text-blue">
                                                        <PiReceiptFill className='text-2xl' />
                                                    </TableCell>
                                                </TableRow>
                                            </TableBody>
                                        </Table>
                                        <Table className="min-w-full rounded-xl mt-2 overflow-hidden">
                                            <TableBody>
                                                <TableRow className="bg-[#eff6ff] hover:bg-[#eef3f8]">
                                                    <TableCell className="p-3">{booking.date}</TableCell>
                                                    <TableCell className="p-3 text-blue cursor-pointer hover:underline">
                                                        {booking.ids}
                                                    </TableCell>
                                                    <TableCell className="p-2">Bank Transfer</TableCell>
                                                    <TableCell className="p-2">Maybank</TableCell>
                                                    <TableCell className="p-2">RM 1,200</TableCell>
                                                    <TableCell className="p-2 text-blue">
                                                        <PiReceiptFill className='text-2xl' />
                                                    </TableCell>
                                                </TableRow>
                                            </TableBody>
                                        </Table>
                                    </div>
                                </div>
                            )
                        }


                        <div className="flex items-center mt-4 justify-end gap-3">

                            {
                                !isEdit &&
                                <div className="flex items-center mt-4 justify-end gap-3">
                                    <AlertDialogComp className="border-2 border-red-600 hover:bg-red-600 hover:text-white bg-transparent text-red-600 px-8" dialog="Release" btn1="Release" desc="Are you sure you want to confirm this action?"
                                        head={`Release Ahmad Farhan from Room ${booking.room} ${booking.building}`}
                                    />
                                    <SheetClose asChild>
                                        <Button className=" border-2 border-blue bg-blue text-white hover:bg-transparent hover:text-blue px-11">Done</Button>
                                    </SheetClose>
                                </div>
                            }
                            {
                                isEdit && <div className="flex items-center mt-4 justify-end gap-3">

                                    <Button onClick={() => setIsEdit(false)} className=" border-2 border-zinc-400 bg-zinborder-zinc-400 text-zinc-500 hover:bg-transparent hover:text-zinborder-zinc-400 px-5">Cancel</Button>

                                    <AlertDialogComp className=" border-2 border-blue bg-blue text-white hover:bg-transparent hover:text-blue px-8" dialog="Confirm" btn1="Confirm" desc="Are you sure you want to save the changes you’ve made?"
                                        head={`Save Changes`}
                                    />
                                </div>
                            }

                        </div>
                    </SheetContent>
                </Sheet>
            </div>

        </>
    )
}

export default SlideSheetTenant