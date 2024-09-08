import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoSearchOutline } from 'react-icons/io5';
import { FaChevronDown } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
    DropdownMenu,
    DropdownMenuItem,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';
import OccupancyCard from '@/components/DashBoard/OccupancyCard';
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { PiMicrosoftExcelLogoFill } from 'react-icons/pi';
import { OCCUPANCY_PROPERTY } from '@/assets/Dashboard/Occupancy';
import OccupancyRoomCard from '@/components/DashBoard/OccupancyRoomCard';

const Occupancy = () => {
    const [cardType, setCardType] = useState(true); // Updated state name for consistency
    const [searchQuery, setSearchQuery] = useState('');
    const [filters, setFilters] = useState({
        floor: '',
        gender: '',
        status: '',
    });
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 9;

    const handleFilterChange = (filterName, value) => {
        setFilters((prevFilters) => ({
            ...prevFilters,
            [filterName]: value === 'All' ? '' : value,
        }));

        // Update `cardType` state based on the "Type" filter value
        if (filterName === 'Type') {
            setCardType(value === 'Property');
        }
    };

    const filteredProperties = OCCUPANCY_PROPERTY.filter((property) => {
        return (
            (!filters.property || property.name.toLowerCase().includes(filters.property.toLowerCase())) &&
            property.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
    });

    const totalItems = filteredProperties.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentProperties = filteredProperties.slice(startIndex, startIndex + itemsPerPage);

    return (
        <div>

            <div className="flex items-center justify-between">
                <div className="">
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <Link to="/dashboard" className='text-muted-foreground'>Dashboard</Link>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator className="scale-150 mx-1" />
                            <BreadcrumbItem>
                                <Link to="/dashboard/occupancy" className='text-blue'>Occupancy</Link>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
                <Button className="flex items-center gap-2 bg-transparent border-[1.5px] py-5 border-blue text-blue  font-semibold hover:bg-blue hover:text-white"><PiMicrosoftExcelLogoFill className=' text-xl' />Export Data</Button>
            </div>


            <div className="mt-8 border border-gray-200 rounded-t-lg p-3 flex items-center justify-between gap-5">
                <div className="relative max-w-[174px] border-b-[1.5px] border-zinc-200 flex items-center">
                    <Input
                        placeholder="Search"
                        className="pl-6 py-5 w-full border-0 "
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <IoSearchOutline className="absolute left-0 text-[#848485]" />
                </div>

                {/* Filter Dropdowns */}
                <div className="flex items-center gap-4">
                    <div className="border p-3 py-2 border-gray-200 rounded-lg ml-auto flex justify-end items-center flex-wrap gap-5">
                        {[
                            { label: 'Property', name: 'property', options: ['All'] },
                            { label: 'Gender', name: 'gender', options: ['Male', 'Female', 'Others', 'All'] },
                            { label: 'Type', name: 'Type', options: ['Property', 'Room Type'] }, // Updated filter options
                        ].map(({ label, name, options }, index) => (
                            <div key={index} className="flex items-center gap-4 text-nowrap">
                                {label}
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button className="bg-transparent transition-all text-[#101010] border-[1.4px] border-zinc-300 hover:bg-zinc-100 hover:border-zinc-100 flex items-center gap-2">
                                            {filters[name] || 'All'}
                                            <FaChevronDown className='text-[#101010]' />
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent>
                                        {options.map(option => (
                                            <DropdownMenuItem key={option} onSelect={() => handleFilterChange(name, option)}>
                                                {option}
                                            </DropdownMenuItem>
                                        ))}
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="">
                {cardType ? (
                    <div className="border p-3 grid grid-cols-3 gap-4 animate-myFadeIn">
                        {currentProperties.map((property) => (
                            <OccupancyCard key={property.id} property={property} />
                        ))}
                    </div>
                ) : (
                    <div className="border p-3 animate-myFadeIn grid grid-cols-3 gap-4">
                        {currentProperties.map((property) => (
                            <OccupancyRoomCard key={property.id} property={property} />
                        ))}
                    </div>
                )}

                {/* Pagination Section */}
                <div className="flex justify-between items-center px-3 py-2 my-4 border border-gray-200 rounded-lg">
                    <p className="w-full">Showing {startIndex + 1} to {Math.min(startIndex + itemsPerPage, totalItems)} of {totalItems} items</p>
                    <Pagination className="w-auto">
                        <PaginationContent>
                            <PaginationItem>
                                <PaginationPrevious
                                    onClick={() => setCurrentPage((page) => Math.max(page - 1, 1))} disabled={currentPage === 1}
                                    className={`px-[10px] ${currentPage === 1 && "bg-[#ebedf0]"}`}
                                />
                            </PaginationItem>
                            {Array.from({ length: totalPages }, (_, index) => (
                                <PaginationItem key={index}>
                                    <PaginationLink onClick={() => setCurrentPage(index + 1)}
                                        className={`border ${currentPage === index + 1 && "bg-blue text-white"}`}
                                        isActive={currentPage === index + 1}>
                                        {index + 1}
                                    </PaginationLink>
                                </PaginationItem>
                            ))}
                            <PaginationItem>
                                <PaginationNext
                                    className={`px-[10px] ${currentPage === totalPages && "bg-[#ebedf0]"}`}
                                    onClick={() => setCurrentPage((page) => Math.min(page + 1, totalPages))} disabled={currentPage === totalPages} />
                            </PaginationItem>
                        </PaginationContent>
                    </Pagination>
                </div>
            </div>
        </div>
    )
}

export default Occupancy