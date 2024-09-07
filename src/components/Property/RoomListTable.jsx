import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableHeader, TableRow } from '../ui/table';
import { Button } from '../ui/button';
import { RiEdit2Line, RiExpandUpDownFill } from "react-icons/ri";
import { FaChevronDown } from 'react-icons/fa';
import { Input } from '../ui/input';
import { IoSearchOutline } from 'react-icons/io5';
import { DropdownMenu, DropdownMenuItem, DropdownMenuContent, DropdownMenuTrigger } from '../ui/dropdown-menu';
import { HiMiniBars3 } from "react-icons/hi2";
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";
import { ROOM_LIST } from '@/assets/Property/RoomList';
import { PiBed, PiBuildings, PiCaretRight, PiPencilSimpleLine, PiSquaresFour, PiStackSimple } from 'react-icons/pi';
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbSeparator } from '../ui/breadcrumb';
import { Link, useParams } from 'react-router-dom';
import { PROPERTY_DATA } from '@/assets/Property/PropertyData';
import { BOOKING } from '@/assets/Transactionlist';
import AssignRoom from '../Transaction/AssignRoom';
import AddRooms from './AddRooms';
import RoomSelection from '../Tenant/RoomSelection';
import { ROOM_SELECTED, ROOM_SELECTED_LIST } from '@/assets/RoomSelected';
import { IoIosArrowDown } from 'react-icons/io';
import { Checkbox } from '../ui/checkbox';
import { LuTrash2 } from 'react-icons/lu';

const RoomListTable = () => {
    const [viewChange, setviewChange] = useState(true);

    const [searchQuery, setSearchQuery] = useState('');
    const [floorFilter, setFloorFilter] = useState('');
    const [blockFilter, setBlockFilter] = useState('');
    const [statusFilter, setStatusFilter] = useState('');
    const [genderFilter, setGenderFilter] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const [checkedIds, setCheckedIds] = useState([]);
    const [selectAll, setSelectAll] = useState(false);

    const handleCheckboxChange = (id) => {
        setCheckedIds(prev => {
            const newCheckedIds = [...prev];
            if (newCheckedIds.includes(id)) {
                return newCheckedIds.filter(checkedId => checkedId !== id);
            } else {
                return [...newCheckedIds, id];
            }
        });
    };

    const handleSelectAllChange = () => {
        if (selectAll) {
            setCheckedIds([]);
        } else {
            setCheckedIds(currentRooms.map(room => room.ids));
        }
        setSelectAll(!selectAll);
    };

    const [showAll, setShowAll] = useState(false); // New state to control showing all cards

    // Determine how many items to display based on the "showAll" state
    const displayedRooms = showAll ? ROOM_SELECTED_LIST : ROOM_SELECTED_LIST.slice(0, 6);


    const [selectedRooms, setSelectedRooms] = useState(() => {
        // Initialize state with an empty object for each block
        const initialSelectedRooms = {};
        ROOM_SELECTED_LIST.forEach(block => {
            initialSelectedRooms[`${block.floor}-${block.block}`] = null;  // Unique key for each block
        });
        return initialSelectedRooms;
    });
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


    const firstAvailableRoom = ROOM_SELECTED.find(room => room.status === "available")?.number || null;
    const [selectedRoom, setSelectedRoom] = useState(firstAvailableRoom);

    const handleRoomClick = (roomNumber, roomStatus, blockKey) => {
        if (roomStatus === "available") {
            setSelectedRooms(prevSelectedRooms => ({
                ...prevSelectedRooms,
                [blockKey]: roomNumber
            }));
        }
    };

    const getRoomClasses = (status, isSelected) => {
        let baseClass = "w-[65px] h-[42px] flex items-center border-[1.5px] border-[#E5E5E5] justify-center rounded-lg ";
        if (isSelected) {
            return baseClass + "bg-blue text-white border-none";
        }
        switch (status) {
            case "available":
                return baseClass + "bg-white";
            case "occupied":
                return baseClass + "bg-[#fff1cc]";
            case "full":
                return baseClass + "bg-[#e6e6e6]";
            case "maintenance":
                return baseClass + "bg-red-500 text-white";
            default:
                return baseClass + "bg-gray-200";
        }
    };

    return (
        <>
            <div className="overflow-x-auto animate-myFadeIn">
                <div className="flex items-center justify-between">
                    <div className="">
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
                    </div>
                    {/* <Button variant="myBlue"> */}
                    <AddRooms btnName="Add Rooms" />
                    {/* </Button> */}
                </div>
                <div className={`mt-8 ${viewChange ? "border-b-0" : "border-b"} border border-gray-200 rounded-t-lg p-3 flex items-center gap-5`}>
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
                        <div className="flex items-center gap-4 text-nowrap">
                            View
                            <div className="flex items-center border-[1.4px] border-zinc-300 rounded-lg">
                                <Button onClick={() => setviewChange(false)} className={`rounded-r-none ${!viewChange ? "bg-blue" : "bg-transparent"} p-3 hover:bg-[dbeafe]`}>
                                    <PiSquaresFour className={`text-lg ${!viewChange ? "text-white" : "text-black"} `} />
                                </Button>
                                <Button onClick={() => setviewChange(true)} className={`rounded-l-none ${viewChange ? "bg-blue" : "bg-transparent"} p-3   hover:bg-[dbeafe]`}>
                                    <HiMiniBars3 className={`text-lg ${viewChange ? "text-white" : "text-black"} `} />
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Table Section */}

                {
                    viewChange && (
                        <div className="">
                        <div className="border gap-2 flex items-center py-4 justify-end p-3 border-b-0">
                            <Button variant="myRed">Set As Maintenance</Button>
                            <Button variant="myRed2">Delete All</Button>
                        </div>
                        <Table className="min-w-full border animate-myFadeIn border-gray-200 rounded-lg">
                            <TableHeader className="bg-[#f7f8fa] text-[#71717A]">
                                <TableRow>
                                    {['IDs', 'Room Name', 'Floor', 'Block', 'Status', 'Tenant', 'Gender'].map((header, index) => (
                                        <TableCell key={index}>
                                            <div className="flex items-center gap-3">
                                                {header === 'IDs' && (
                                                    <Checkbox
                                                        className="data-[state=checked]:bg-blue border-[#9F9FA1]"
                                                        checked={selectAll}
                                                        onCheckedChange={handleSelectAllChange} // Toggle select all
                                                    />
                                                )}
                                                {header} <RiExpandUpDownFill className='text-lg' />
                                            </div>
                                        </TableCell>
                                    ))}
                                    <TableCell />
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {currentRooms.map((data, index) => (
                                    <TableRow
                                        key={index}
                                        className={` ${checkedIds.includes(data.ids) ? 'bg-[#eff6ff]' : ''}`}
                                    >
                                        <TableCell>
                                            <div className="flex items-center gap-3">
                                                <Checkbox
                                                    className="data-[state=checked]:bg-blue border-[#9F9FA1]"
                                                    checked={checkedIds.includes(data.ids)} // Check state
                                                    onCheckedChange={() => handleCheckboxChange(data.ids)} // Update state on change
                                                />
                                                {data.ids}
                                            </div>
                                        </TableCell>
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
                                ${data.status === 'Occupied' ? 'bg-[#fff1cc] hover:bg-[#fff1cc] border-[#B48200] border-[1.5px] text-[#B48200]' : ''} 
                                ${data.status === 'Maintenance' ? 'bg-[#9B1919] hover:bg-[#9B1919] border-[#9B1919] border-[1.5px] text-[#fff]' : ''} 
                                ${data.status === 'Vacant' ? 'bg-[#E7F7FA] hover:bg-[#E7F7FA] border-[#155724] border-[1.5px] text-[#155724]' : ''} 
                                ${data.status === 'Full' ? 'bg-[#FEF2F2] hover:bg-[#FEF2F2] px-6 border-[#9B1919] border-[1.5px] text-[#9B1919]' : ''}`}
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
                                            {checkedIds.includes(data.ids) ? (
                                                <LuTrash2 className='text-red-600 text-2xl cursor-pointer' />
                                            ) : (
                                                <Link to={`/property/${data.id}/room-list/${data.ids}`} className=''>
                                                    <PiCaretRight className='text-2xl text-[#0BB1CB] hover:scale-110 transition-all' />
                                                </Link>
                                            )}
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
                    )

                }

                {
                    !viewChange && (
                        <div className="animate-myFadeIn">
                            <div className="flex items-center gap-4 mt-8 mb-6 pl-5">
                                <div className="flex items-center">
                                    <div className="w-4 h-4 bg-blue rounded-[3px] mr-[6px]"></div>
                                    <span className="text-nowrap">Selected Room</span>
                                </div>
                                <div className="flex items-center">
                                    <div className="w-4 h-4 bg-white rounded-[3px] mr-[6px] border-[1.5px]"></div>
                                    <span>Available</span>
                                </div>
                                <div className="flex items-center">
                                    <div className="w-4 h-4 bg-[#fff1cc] rounded-[3px] mr-[6px]"></div>
                                    <span>Occupied</span>
                                </div>
                                <div className="flex items-center">
                                    <div className="w-4 h-4 bg-[#e6e6e6] rounded-[3px] mr-[6px]"></div>
                                    <span>Full</span>
                                </div>
                                <div className="flex items-center">
                                    <div className="w-4 h-4 bg-red-500 rounded-[3px] mr-[6px]"></div>
                                    <span>Maintenance</span>
                                </div>
                            </div>

                            <div className="">
                                <div className="mx-auto w-full grid animate-myFadeIn grid-cols-2 gap-5">
                                    {displayedRooms.map((block) => {
                                        const blockKey = `${block.floor}-${block.block}`;
                                        return (
                                            <div key={blockKey} className="border rounded-lg p-5 mb-5">
                                                <div className="flex items-center gap-2 pb-4">
                                                    <p className="bg-[#eff6ff] text-[#585858] font-medium px-5 py-1 rounded-lg">
                                                        Floor&nbsp; <span className="text-blue">{block.floor}</span>
                                                    </p>
                                                    <p className="bg-[#eff6ff] text-[#585858] font-medium px-5 py-1 rounded-lg">
                                                        Block&nbsp; <span className="text-blue">{block.block}</span>
                                                    </p>
                                                    <p className="bg-[#eff6ff] text-[#585858] font-medium px-5 py-1 rounded-lg">
                                                        Gender&nbsp; <span className="text-blue">{block.gender}</span>
                                                    </p>
                                                </div>
                                                <div className="grid grid-cols-8 gap-3">
                                                    {block.rooms.map((room) => (
                                                        <button
                                                            key={room.number}
                                                            className={getRoomClasses(room.status, selectedRooms[blockKey] === room.number)}
                                                            onClick={() => handleRoomClick(room.number, room.status, blockKey)}
                                                        >
                                                            {room.number}
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>

                                {/* "Show More" Button */}
                                {!showAll && ROOM_SELECTED_LIST.length > 6 && (
                                    <div className="flex justify-center mt-2 relative items-center">
                                        <div className="z-20 flex items-center gap-2" onClick={() => setShowAll(true)}>
                                            <Button
                                                className="bg-white px-10 hover:bg-white border-2 py-5 shadow-md  rounded-3xl text-black"
                                            >
                                                Show More
                                            </Button>
                                            <div className="bg-white cursor-pointer px-4 border-2 py-[10px] shadow-md  rounded-3xl text-black">
                                                <IoIosArrowDown className='text-xl' />
                                            </div>
                                        </div>
                                        <div className="h-[1.5px] bg-zinc-300 w-full absolute"></div>
                                    </div>
                                )}
                            </div>
                        </div>
                    )
                }
            </div>
        </>
    );
};

export default RoomListTable;
