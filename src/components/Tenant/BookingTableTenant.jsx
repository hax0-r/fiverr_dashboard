import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableHeader, TableRow } from '../ui/table';
import { Button } from '../ui/button';
import { RiExpandUpDownFill } from "react-icons/ri";
import { FaChevronDown } from 'react-icons/fa';
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
} from "@/components/ui/pagination";
import SlideSheet from '../Transaction/SlideSheet';
import { TENANT_BOOKING } from '@/assets/TenantList';
import { PiBed, PiBuildings, PiStackSimple } from 'react-icons/pi';
import SlideSheetTenant from './SlideSheetTenant';

const BookingTableTenant = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [paymentTypeFilter, setPaymentTypeFilter] = useState('');
    const [typeFilter, setTypeFilter] = useState('');
    const [propertyFilter, setPropertyFilter] = useState('');
    const [floorFilter, setFloorFilter] = useState('');
    const [genderFilter, setGenderFilter] = useState('');
    const [statusFilter, setStatusFilter] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const filteredBookings = TENANT_BOOKING.filter(booking => {
        const nameMatches = booking.name?.toLowerCase().includes(searchQuery.toLowerCase());
        const idMatches = typeof booking.id === 'string' && booking.id.toLowerCase().includes(searchQuery.toLowerCase());

        return (
            (!searchQuery || (nameMatches || idMatches)) &&
            (!paymentTypeFilter || booking.paymentType === paymentTypeFilter) &&
            (!typeFilter || booking.type === typeFilter) &&
            (!propertyFilter || booking.building === propertyFilter) &&
            (!floorFilter || String(booking.Floor) === floorFilter) &&
            (!genderFilter || booking.gender === genderFilter) &&
            (!statusFilter || booking.status === statusFilter)
        );
    });


    const totalItems = filteredBookings.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentBookings = filteredBookings.slice(startIndex, startIndex + itemsPerPage);

    return (
        <>
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
                        {/* Filters Section */}
                        {[
                            { label: 'Status', value: statusFilter, setValue: setStatusFilter, options: ['Inactive', 'Active', 'All'] },
                            { label: 'Type', value: typeFilter, setValue: setTypeFilter, options: ['Single', 'Double', 'All'] },
                            { label: 'Floor', value: floorFilter, setValue: setFloorFilter, options: ['1', '2', '3', 'All'] },
                            { label: 'Property', value: propertyFilter, setValue: setPropertyFilter, options: ['Hostel A', 'Hostel B', 'Hostel C', 'Clear'] },
                            { label: 'Gender', value: genderFilter, setValue: setGenderFilter, options: ['Male', 'Female', 'Others', 'All'] }
                        ].map(({ label, value, setValue, options }, index) => (
                            <div key={index} className="flex items-center gap-4 text-nowrap">
                                {label}
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button className="bg-transparent transition-all text-[#101010] border-[1.4px] border-zinc-300 hover:bg-zinc-100 hover:border-zinc-100 flex items-center gap-2">
                                            {value || 'Select'}
                                            <FaChevronDown className='text-[#101010]' />
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent>
                                        {options.map(option => (
                                            <DropdownMenuItem key={option} onSelect={() => setValue(option === 'All' ? '' : option)}>
                                                {option}
                                            </DropdownMenuItem>
                                        ))}
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Table Section */}
                <Table className="min-w-full border border-gray-200 rounded-lg">
                    <TableHeader className="bg-[#f7f8fa] text-[#71717A]">
                        <TableRow>
                            {['#', 'Name', 'ID', 'Type', 'Status', 'Property', 'Floor', 'Room', 'Gender', 'Due Date'].map((header, index) => (
                                <TableCell key={index} className="">
                                    <div className="flex justify-between items-end">
                                        {header} <RiExpandUpDownFill className='text-lg' />
                                    </div>
                                </TableCell>
                            ))}
                            <TableCell />
                        </TableRow>
                    </TableHeader>
                    <TableBody>
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
                                    {/* Status indicator */}
                                    <div className={`flex items-center gap-1 ${booking.status === 'Inactive' ? 'text-[#A9A9A9]' : 'text-green-600'}`}>
                                        <div className={`w-3 h-3 rounded-full ${booking.status === 'Inactive' ? 'bg-[#A3A3A3]' : 'bg-green-600'}`}></div>
                                        {booking.status}
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <div className="flex gap-1">
                                        <PiBuildings className='text-xl' />
                                        {booking.building}
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <div className="flex gap-1">
                                        <PiStackSimple className='text-xl' />
                                        {booking.Floor}
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <div className="flex gap-1">
                                        <PiBed className='text-xl' />
                                        {booking.room}
                                    </div>
                                </TableCell>
                                <TableCell>{booking.gender}</TableCell>
                                <TableCell>{booking.date}</TableCell>
                                <TableCell>
                                    <SlideSheetTenant booking={booking} />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

                {/* Pagination Section */}
                <div className="flex justify-between w-full items-center px-3 py-2 my-4 border border-gray-200 rounded-lg">
                    <h2 className="w-full">
                        Showing {startIndex + 1} to {Math.min(startIndex + itemsPerPage, totalItems)} of {totalItems} items
                    </h2>
                    <Pagination className="w-auto">
                        <PaginationContent>
                            <PaginationItem>
                                <PaginationPrevious
                                    href="#"
                                    onClick={() => setCurrentPage(page => Math.max(page - 1, 1))}
                                    disabled={currentPage === 1}
                                    className={`px-[10px] ${currentPage === 1 && "bg-[#ebedf0]"}`}
                                />
                            </PaginationItem>
                            {Array.from({ length: totalPages }, (_, index) => (
                                <PaginationItem key={index}>
                                    <PaginationLink
                                        href="#"
                                        onClick={() => setCurrentPage(index + 1)}
                                        isActive={currentPage === index + 1}
                                        className={`border ${currentPage === index + 1 && "bg-blue text-white"}`}
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
        </>
    );
};

export default BookingTableTenant;
