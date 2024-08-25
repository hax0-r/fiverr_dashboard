import React from 'react'
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { FaChevronDown } from "react-icons/fa6";
import OccupancyCard from '@/components/DashBoard/OccupancyCard';

const Dashboard = () => {
    return (
        <>
            <div className="w-full ">
                <div className="w-full flex justify-between items-center">
                    <h2 className='text-xl font-bold'>Occupancy</h2>
                    <div className="flex items-center gap-2">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button className="bg-transparent transition-all text-[#101010] border-[1.4px] border-zinc-300 hover:bg-zinc-100 hover:border-zinc-100 flex items-center gap-2">
                                    Property
                                    <FaChevronDown className='text-[#101010]' />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuItem>
                                    Property 1
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    Property 2
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    Property 3
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                        <Button className="bg-transparent transition-all border-[1.5px] border-blue text-blue hover:bg-blue hover:text-white">
                            See All
                        </Button>
                    </div>
                </div>
                <div className="mt-5 flex flex-wrap gap-4 items-center">
                    <OccupancyCard />
                    <OccupancyCard />
                    <OccupancyCard />
                </div>
                <div className="w-full flex justify-between items-center mt-5">
                    <h2 className='text-xl font-bold'>Bookings Details</h2>
                    <div className="flex items-center gap-2">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button className="bg-transparent transition-all text-[#101010] border-[1.4px] border-zinc-300 hover:bg-zinc-100 hover:border-zinc-100 flex items-center gap-2">
                                Last Month
                                    <FaChevronDown className='text-[#101010]' />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuItem>
                                    Property 1
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    Property 2
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    Property 3
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                        <Button className="bg-transparent transition-all border-[1.5px] border-blue text-blue hover:bg-blue hover:text-white">
                            See All
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard
