import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableHeader, TableRow } from '../ui/table';
import { Button } from '../ui/button';
import { RiExpandUpDownFill } from "react-icons/ri";
import { FaCheckCircle, FaChevronDown, FaRegCalendarCheck } from 'react-icons/fa';
import { PiBuildings, PiHourglassHighFill } from 'react-icons/pi';
import { Input } from '../ui/input';
import { IoSearchOutline } from 'react-icons/io5';
import { DropdownMenu, DropdownMenuItem, DropdownMenuContent, DropdownMenuTrigger } from '../ui/dropdown-menu';
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import SlideSheet from './SlideSheet';


const BookingTable = ({ bookings }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [paymentTypeFilter, setPaymentTypeFilter] = useState('');
    const [typeFilter, setTypeFilter] = useState('');
    const [propertyFilter, setPropertyFilter] = useState('');
    const [statusFilter, setStatusFilter] = useState('');
    const [dateFilter, setDateFilter] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const filteredBookings = bookings.filter(booking => {
        return (
            (booking.name.toLowerCase().includes(searchQuery.toLowerCase()) || booking.id.toLowerCase().includes(searchQuery.toLowerCase())) &&
            (paymentTypeFilter === '' || booking.paymentType === paymentTypeFilter) &&
            (typeFilter === '' || booking.type === typeFilter) &&
            (propertyFilter === '' || booking.building === propertyFilter) &&
            (statusFilter === '' || booking.status === statusFilter) &&
            (dateFilter === '' || booking.date === dateFilter)
        );
    });

    const totalItems = bookings.length;

    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentBookings = filteredBookings.slice(startIndex, startIndex + itemsPerPage);
    const totalPages = Math.ceil(filteredBookings.length / itemsPerPage);

    return (
        <div className="overflow-x-auto">
            <div className="mt-5 border-b-0 border border-gray-200 rounded-t-lg p-3 flex items-center gap-5">
                <div className="relative flex max-w-[174px] border-b-[1.5px] border-zinc-200 justify-center items-center w-full">
                    <Input
                        placeholder="Search"
                        className="rounded-full pl-6 py-5 w-full focus:outline-none focus:ring-0 border border-transparent placeholder:text-[#71717A]"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <IoSearchOutline className="absolute left-0 text-[#848485]" />
                </div>
                <div className="border p-3 py-2 border-gray-200 rounded-lg ml-auto flex justify-end items-center flex-wrap gap-5">
                    <div className="flex items-center gap-4 text-nowrap">
                        Payment Type
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button className="bg-transparent transition-all text-[#101010] border-[1.4px] border-zinc-300 hover:bg-zinc-100 hover:border-zinc-100 flex items-center gap-2">
                                    {paymentTypeFilter || 'Select'}
                                    <FaChevronDown className='text-[#101010]' />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuItem onSelect={() => setPaymentTypeFilter('Cash Payment')}>
                                    Cash Payment
                                </DropdownMenuItem>
                                <DropdownMenuItem onSelect={() => setPaymentTypeFilter('Transfer')}>
                                    Transfer
                                </DropdownMenuItem>
                                <DropdownMenuItem onSelect={() => setPaymentTypeFilter('E-Money')}>
                                    E-Money
                                </DropdownMenuItem>
                                <DropdownMenuItem onSelect={() => setPaymentTypeFilter('')}>
                                    Clear
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                    <div className="flex items-center gap-4 text-nowrap">
                        Type
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button className="bg-transparent transition-all text-[#101010] border-[1.4px] border-zinc-300 hover:bg-zinc-100 hover:border-zinc-100 flex items-center gap-2">
                                    {typeFilter || 'Select'}
                                    <FaChevronDown className='text-[#101010]' />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuItem onSelect={() => setTypeFilter('Single')}>
                                    Single
                                </DropdownMenuItem>
                                <DropdownMenuItem onSelect={() => setTypeFilter('Double')}>
                                    Double
                                </DropdownMenuItem>
                                <DropdownMenuItem onSelect={() => setTypeFilter('')}>
                                    Clear
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                    <div className="flex items-center gap-4 text-nowrap">
                        Property
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button className="bg-transparent transition-all text-[#101010] border-[1.4px] border-zinc-300 hover:bg-zinc-100 hover:border-zinc-100 flex items-center gap-2">
                                    {propertyFilter || 'Select'}
                                    <FaChevronDown className='text-[#101010]' />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuItem onSelect={() => setPropertyFilter('Hostel A')}>
                                    Hostel A
                                </DropdownMenuItem>
                                <DropdownMenuItem onSelect={() => setPropertyFilter('Hostel B')}>
                                    Hostel B
                                </DropdownMenuItem>
                                <DropdownMenuItem onSelect={() => setPropertyFilter('Hostel C')}>
                                    Hostel C
                                </DropdownMenuItem>
                                <DropdownMenuItem onSelect={() => setPropertyFilter('')}>
                                    Clear
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                    <div className="flex items-center gap-4 text-nowrap">
                        Status
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button className="bg-transparent transition-all text-[#101010] border-[1.4px] border-zinc-300 hover:bg-zinc-100 hover:border-zinc-100 flex items-center gap-2">
                                    {statusFilter || 'Select'}
                                    <FaChevronDown className='text-[#101010]' />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuItem onSelect={() => setStatusFilter('Paid')}>
                                    Paid
                                </DropdownMenuItem>
                                <DropdownMenuItem onSelect={() => setStatusFilter('Booked')}>
                                    Booked
                                </DropdownMenuItem>
                                <DropdownMenuItem onSelect={() => setStatusFilter('Waiting Confirmation')}>
                                    Waiting Confirmation
                                </DropdownMenuItem>
                                <DropdownMenuItem onSelect={() => setStatusFilter('')}>
                                    Clear
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                    <div className="flex items-center gap-4 text-nowrap">
                        Date
                        <Input
                            type="date"
                            className="text-[#101010] border-[1.4px] border-zinc-300"
                            value={dateFilter}
                            onChange={(e) => setDateFilter(e.target.value)}
                            placeholder="Select date"
                        />
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
                <TableBody className="">
                    {currentBookings.map((booking, index) => (
                        <TableRow key={index} className="hover:bg-zinc-50">
                            <TableCell>{booking.id}</TableCell>
                            <TableCell>{booking.name}</TableCell>
                            <TableCell>{booking.ids}</TableCell>
                            <TableCell>
                                <Button className={`cursor-default ${booking.type === 'Double' ? 'hover:bg-[#E7F7FA] bg-[#E7F7FA] text-[#065966] hover:text-[#065966]' : 'hover:bg-[#fff1cc] hover:text-[#B48200] bg-[#fff1cc] text-[#B48200]'}`}>
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
                                <div className="flex items-center gap-1 mb-1 justify-start">
                                    {
                                        booking.status === 'Paid' ?
                                            <FaCheckCircle className='text-[#6B934D]' /> :
                                            booking.status === 'Booked' ?
                                                <FaRegCalendarCheck className='text-[1rem] text-[#9E852D]' /> :
                                                <PiHourglassHighFill className='text-lg text-[#F26522]' />
                                    }
                                    <h2 className={`text-[1rem]`}>
                                        {booking.status.length > 11 ? `${booking.status.substring(0, 11)}...` : booking.status}
                                    </h2>
                                </div>
                                <div className="text-sm text-gray-500">{booking.date}</div>
                            </TableCell>
                            <TableCell className="text-red-500 font-bold">{booking.amount}</TableCell>
                            <TableCell>
                                <SlideSheet booking={booking} />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

            <div className="flex justify-between w-full items-center px-3 py-2 my-4 border border-gray-200 rounded-lg">
                <h2 className="w-full">
                    Showing 1 to 10 of {totalItems} items
                </h2>
                <Pagination className="w-auto">
                    <PaginationContent className="">
                        <PaginationItem>
                            <PaginationPrevious
                                href="#"
                                onClick={() => setCurrentPage(page => Math.max(page - 1, 1))}
                                disabled={currentPage === 1}
                                className={` px-[10px] ${currentPage === 1 && "bg-[#ebedf0]"}`}
                            />
                        </PaginationItem>
                        {Array.from({ length: totalPages }, (_, index) => (
                            <PaginationItem key={index}>
                                <PaginationLink
                                    href="#"
                                    onClick={() => setCurrentPage(index + 1)}
                                    isActive={currentPage === index + 1}
                                    className={` border ${currentPage === index + 1 && "bg-blue text-white"}`}
                                >
                                    {index + 1}
                                </PaginationLink>
                            </PaginationItem>
                        ))}
                        <PaginationItem>
                            <PaginationNext
                                href="#"
                                onClick={() => setCurrentPage(page => Math.min(page + 1, totalPages))}
                                disabled={currentPage === totalPages}
                                className={`px-[10px] ${currentPage === totalPages && "bg-[#ebedf0]"}`}
                            />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            </div>
        </div>
    );
};

export default BookingTable;
