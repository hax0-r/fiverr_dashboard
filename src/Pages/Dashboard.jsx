import React from 'react'
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { FaChevronDown } from "react-icons/fa6";
import OccupancyCard from '@/components/DashBoard/OccupancyCard';
import BookingCard from '@/components/DashBoard/BookingCard';
import { Users, CreditCard, CircleCheck, ArrowUpRight } from "lucide-react";
import DonutChartWithText from '@/components/DashBoard/DonutChart';
import { StatCard } from '@/components/DashBoard/StatCard';
import { Link } from 'react-router-dom';
import { OCCUPANCY_PROPERTY } from '@/assets/Dashboard/Occupancy';

const Dashboard = () => {

    const cardData = [
        { label: 'Expected', value: 'RM 1,500,000', color: '#93c5fd', icon: ArrowUpRight },
        { label: 'Collected', value: 'RM 260,000', color: '#85ff71', icon: ArrowUpRight },
        { label: 'Remaining', value: 'RM 200,000', color: '#fda374', icon: ArrowUpRight },
        { label: 'Overdue', value: 'RM 280,000', color: '#fdc247', icon: ArrowUpRight },
    ]

    return (
        <>
            <div className="w-full overflow-hidden animate-myFadeIn">
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
                        <Link to={"/dashboard/occupancy"}>
                            <Button className="bg-transparent transition-all border-[1.5px] border-blue text-blue hover:bg-blue hover:text-white">
                                See All
                            </Button>
                        </Link>
                    </div>
                </div>
                <div className="mt-5 gap-4 items-center grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {
                        OCCUPANCY_PROPERTY.slice(0, 3).map((property) => (
                            <OccupancyCard property={property} />
                        ))
                    }
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
                                    Month 1
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    Month 2
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    Month 3
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                        <Button className="bg-transparent transition-all border-[1.5px] border-blue text-blue hover:bg-blue hover:text-white">
                            See All
                        </Button>
                    </div>
                </div>
                <div className="gap-4 items-center mt-5 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    <BookingCard title="Total Booking" icon={Users} count={158} />
                    <BookingCard title="Waiting Confirmation" icon={CreditCard} count={96} />
                    <BookingCard title="Paid" icon={CircleCheck} count={62} />
                </div>
                <div className="w-full mt-5 flex justify-between items-center">
                    <h2 className='text-xl font-bold'>Income</h2>
                    <div className="flex items-center gap-2">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button className="bg-transparent transition-all text-[#101010] border-[1.4px] border-zinc-300 hover:bg-zinc-100 hover:border-zinc-100 flex items-center gap-2">
                                    This Year
                                    <FaChevronDown className='text-[#101010]' />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuItem>
                                    Year 1
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    Year 2
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    Year 3
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
                <div className="flex items-center mt-5">
                    <div className="min-w-[15rem]">
                        <DonutChartWithText />
                    </div>
                    <div className="  w-full items-center gap-4 grid sm:grid-cols-1 md:grid-cols-2 ">
                        {cardData.map((data, index) => (
                            <StatCard
                                key={index}
                                label={data.label}
                                value={data.value}
                                color={data.color}
                                icon={data.icon}
                            />
                        ))}
                    </div>

                </div>
            </div>
        </>
    )
}

export default Dashboard
