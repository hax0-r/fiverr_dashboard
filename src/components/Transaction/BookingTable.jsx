import React from 'react';
import { Table, TableBody, TableCell, TableHeader, TableRow } from '../ui/table';
import { Button } from '../ui/button';
import { RiExpandUpDownFill } from "react-icons/ri";
import { FaCheckCircle, FaChevronDown, FaRegCalendarCheck } from 'react-icons/fa';
import { PiBuildings, PiHourglassHighFill } from 'react-icons/pi';
import { Input } from '../ui/input';
import { IoSearchOutline } from 'react-icons/io5';
import { DropdownMenu, DropdownMenuItem, DropdownMenuContent, DropdownMenuTrigger } from '../ui/dropdown-menu';

const BookingTable = ({ bookings }) => {
    return (
        <div className="overflow-x-auto">
            <div className="mt-5 border-b-0 border  border-gray-200 rounded-t-lg p-3 flex items-center gap-5">
                <div className="relative flex max-w-[174px] border-b-[1.5px] border-zinc-200 justify-center items-center w-full">
                    <Input
                        placeholder="Search"
                        className="rounded-full pl-6 py-5 w-full focus:outline-none focus:ring-0 border border-transparent placeholder:text-[#71717A]"
                    />
                    <IoSearchOutline className="absolute left-0 text-[#848485]" />
                </div>
                <div className="border p-3 py-2 border-gray-200 rounded-lg w-full grid grid-cols-5 ">
                    <div className="flex items-center gap-4 text-nowrap">
                        Payment Type
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button className="bg-transparent transition-all text-[#101010] border-[1.4px] border-zinc-300 hover:bg-zinc-100 hover:border-zinc-100 flex items-center gap-2">
                                Select
                                    <FaChevronDown className='text-[#101010]' />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuItem>
                                    Transfer
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    Property 2
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    Property 3
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                    <div className="flex items-center gap-4 text-nowrap">
                        Payment Type
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button className="bg-transparent transition-all text-[#101010] border-[1.4px] border-zinc-300 hover:bg-zinc-100 hover:border-zinc-100 flex items-center gap-2">
                                Select
                                    <FaChevronDown className='text-[#101010]' />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuItem>
                                    Transfer
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    Property 2
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    Property 3
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                    <div className="flex items-center gap-4 text-nowrap">
                        Payment Type
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button className="bg-transparent transition-all text-[#101010] border-[1.4px] border-zinc-300 hover:bg-zinc-100 hover:border-zinc-100 flex items-center gap-2">
                                Select
                                    <FaChevronDown className='text-[#101010]' />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuItem>
                                    Transfer
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    Property 2
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    Property 3
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                    <div className="flex items-center gap-4 text-nowrap">
                        Payment Type
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button className="bg-transparent transition-all text-[#101010] border-[1.4px] border-zinc-300 hover:bg-zinc-100 hover:border-zinc-100 flex items-center gap-2">
                                Select
                                    <FaChevronDown className='text-[#101010]' />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuItem>
                                    Transfer
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    Property 2
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    Property 3
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                    <div className="flex items-center gap-4 text-nowrap">
                        Payment Type
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button className="bg-transparent transition-all text-[#101010] border-[1.4px] border-zinc-300 hover:bg-zinc-100 hover:border-zinc-100 flex items-center gap-2">
                                Select
                                    <FaChevronDown className='text-[#101010]' />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuItem>
                                    Transfer
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    Property 2
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    Property 3
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
            </div>
            <Table className="min-w-full border border-gray-200 rounded-lg">
                <TableHeader className="bg-[#f7f8fa] text-[#71717A]">
                    <TableRow>
                        <TableCell className="">
                            <div className="flex justify-between items-end">
                                Booking ID <RiExpandUpDownFill className='text-lg' />
                            </div>
                        </TableCell>
                        <TableCell className="">
                            <div className="flex justify-between items-end">
                                Name <RiExpandUpDownFill className='text-lg' />
                            </div>
                        </TableCell>
                        <TableCell className="">
                            <div className="flex justify-between items-end">
                                IDs <RiExpandUpDownFill className='text-lg' />
                            </div>
                        </TableCell>
                        <TableCell className="">
                            <div className="flex justify-between items-end">
                                Type <RiExpandUpDownFill className='text-lg' />
                            </div>
                        </TableCell>
                        <TableCell className="">
                            <div className="flex justify-between items-end">
                                Building <RiExpandUpDownFill className='text-lg' />
                            </div>
                        </TableCell>
                        <TableCell className="">
                            <div className="flex justify-between items-end">
                                Payment Type <RiExpandUpDownFill className='text-lg' />
                            </div>
                        </TableCell>
                        <TableCell className="">
                            <div className="flex justify-between items-end">
                                Status <RiExpandUpDownFill className='text-lg' />
                            </div>
                        </TableCell>
                        <TableCell className="">
                            <div className="flex justify-between items-end">
                                Amount <RiExpandUpDownFill className='text-lg' />
                            </div>
                        </TableCell>
                        <TableCell className="">
                        </TableCell>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {bookings.map((booking, index) => (
                        <TableRow key={index} className="hover:bg-zinc-50">
                            <TableCell>{booking.id}</TableCell>
                            <TableCell>{booking.name}</TableCell>
                            <TableCell>{booking.ids}</TableCell>
                            <TableCell>
                                <Button className={` cursor-default ${booking.type === 'Double' ? 'hover:bg-[#E7F7FA] bg-[#E7F7FA] text-[#065966] hover:text-[#065966]' : 'hover:bg-[#fff1cc] hover:text-[#B48200] bg-[#fff1cc] text-[#B48200]'}`}>
                                    {booking.type}
                                </Button>
                            </TableCell>
                            <TableCell>
                                <div className="flex gap-1">
                                    <PiBuildings className='text-xl' />
                                    {booking.building}
                                </div>
                            </TableCell>
                            <TableCell>{booking.paymentType}</TableCell>
                            <TableCell>
                                <div className="flex items-center gap-1 mb-1 justify-start ">
                                    {
                                        booking.status === 'Paid' ?
                                            <FaCheckCircle className=' text-[#6B934D]' /> :
                                            booking.status === 'Booked' ?
                                                <FaRegCalendarCheck className='text-[1rem] text-[#9E852D]' /> :
                                                <PiHourglassHighFill className='text-lg text-[#F26522]' />
                                    }
                                    <h2 className={`text-[1rem]`}>
                                        {booking.status}
                                    </h2>
                                </div>
                                <div className="text-sm text-gray-500">{booking.date}</div>
                            </TableCell>
                            <TableCell className="text-red-500 font-bold">{booking.amount}</TableCell>
                            <TableCell>
                                <a href="#" className="text-blue text-[1rem] hover:underline ">Details</a>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};

export default BookingTable;
