import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableHeader, TableRow } from '../ui/table';
import { Button } from '../ui/button';
import { RiEdit2Line, RiExpandUpDownFill } from "react-icons/ri";
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
import { ROOM_LIST } from '@/assets/Property/RoomList'; // Replace with your actual ROOM_LIST import
import { PiBed, PiBuildings, PiCaretRight, PiPencilSimpleLine, PiStackSimple } from 'react-icons/pi';
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbSeparator } from '../ui/breadcrumb';
import { Link, useParams } from 'react-router-dom';
import { PROPERTY_DATA } from '@/assets/Property/PropertyData';

const RoomListTable = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [floorFilter, setFloorFilter] = useState('');
    const [blockFilter, setBlockFilter] = useState('');
    const [statusFilter, setStatusFilter] = useState('');
    const [genderFilter, setGenderFilter] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    // Filter the room list based on the selected filters and search query
    const filteredRooms = ROOM_LIST.filter(room => {
        const searchMatch = room.ids?.toLowerCase().includes(searchQuery.toLowerCase());
        const floorMatch = !floorFilter || room.floor === floorFilter;
        const blockMatch = !blockFilter || room.block === blockFilter;
        const statusMatch = !statusFilter || room.status === statusFilter;
        const genderMatch = !genderFilter || room.gender === genderFilter;

        return searchMatch && floorMatch && blockMatch && statusMatch && genderMatch;
    });

    const totalItems = filteredRooms.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentRooms = filteredRooms.slice(startIndex, startIndex + itemsPerPage);

    const { id } = useParams()

    let filterData = PROPERTY_DATA.filter((item) => item.id === parseInt(id))
    const [data] = filterData

    return (
        <>
            <div className="overflow-x-auto animate-myFadeIn">
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <Link to="/property" className='text-muted-foreground'>Property List</Link>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator className="scale-150 mx-1" />
                        <BreadcrumbItem>
                            <Link to={`/property/${id}`} className='text-muted-foreground'>{data.title}</Link>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator className="scale-150 mx-1" />
                        <BreadcrumbItem>
                            <Link to="/property/add-property" className='text-blue'>Single</Link>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
                <div className="mt-8 border-b-0 border border-gray-200 rounded-t-lg p-3 flex items-center gap-5">
                    {/* Search Input */}
                    <div className="relative flex max-w-[174px] border-b-[1.5px] border-zinc-200 justify-center items-center w-full">
                        <Input
                            placeholder="Search"
                            className="rounded-full pl-6 py-5 w-full focus:outline-none focus:ring-0 border border-transparent placeholder:text-[#71717A]"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <IoSearchOutline className="absolute left-0 text-[#848485]" />
                    </div>
                    {/* Filters Section */}
                    <div className="border p-3 py-2 border-gray-200 rounded-lg ml-auto flex justify-end items-center flex-wrap gap-5">
                        {[
                            { label: 'Floor', value: floorFilter, setValue: setFloorFilter, options: ['1', '2', 'All'] },
                            { label: 'Block', value: blockFilter, setValue: setBlockFilter, options: ['H1', 'H2', 'All'] },
                            { label: 'Status', value: statusFilter, setValue: setStatusFilter, options: ['Occupied', 'Maintenance', 'Vacant', 'Full', 'All'] },
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
                            {['IDs', 'Room Name', 'Floor', 'Block', 'Status', 'Tenant', 'Gender'].map((header, index) => (
                                <TableCell key={index}>
                                    <div className="flex justify-between items-end">
                                        {header} <RiExpandUpDownFill className='text-lg' />
                                    </div>
                                </TableCell>
                            ))}
                            <TableCell />
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {currentRooms.map((data, index) => (
                            <TableRow key={index} className="hover:bg-zinc-50">
                                <TableCell>{data.ids}</TableCell>
                                <TableCell>
                                    <div className="flex items-center gap-2">
                                        {data.ids}
                                        <PiPencilSimpleLine className='text-blue text-2xl cursor-pointer' />
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <div className="flex gap-1">
                                        <PiStackSimple className='text-xl' />
                                        {data.floor}
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <div className="flex gap-1">
                                        <PiBuildings className='text-xl' />
                                        {data.block}
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <Button
                                        className={`cursor-default 
                                            ${data.status === 'Occupied' ? 'bg-[#fff1cc] hover:bg-[#fff1cc] border-[#B48200] border-[1.5px]  text-[#B48200]' : ''} 
                                            ${data.status === 'Maintenance' ? 'bg-[#9B1919] hover:bg-[#9B1919] border-[#9B1919] border-[1.5px]  text-[#fff]' : ''} 
                                            ${data.status === 'Vacant' ? 'bg-[#E7F7FA] hover:bg-[#E7F7FA] border-[#155724] border-[1.5px]  text-[#155724]' : ''} 
                                            ${data.status === 'Full' ? 'bg-[#FEF2F2] hover:bg-[#FEF2F2] px-6 border-[#9B1919] border-[1.5px]  text-[#9B1919]' : ''}`}
                                    >
                                        {data.status}
                                    </Button>
                                </TableCell>
                                <TableCell>
                                    <div className="flex gap-1">
                                        <PiBed className='text-xl' />
                                        {data.tenant}
                                    </div>
                                </TableCell>
                                <TableCell>{data.gender}</TableCell>
                                <TableCell>
                                    <Link to={`/property/${data.id}/room-list/${data.ids}`} className=''>
                                        <PiCaretRight className='  text-2xl text-[#0BB1CB] hover:scale-110 transition-all' />
                                    </Link>
                                    {/* <SlideSheetTenant booking={data} /> */}
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

export default RoomListTable;
