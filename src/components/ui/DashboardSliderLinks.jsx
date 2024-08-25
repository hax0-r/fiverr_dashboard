import React from 'react'
import { NavLink } from 'react-router-dom'
import { IoSettingsOutline } from 'react-icons/io5';
import { PiBuildingsLight, PiHouseSimple, PiListChecks, PiWarehouseLight } from "react-icons/pi";
import { LiaUser } from "react-icons/lia";



const DashboardSliderLinks = () => {
    return (
        <>
            <div className="w-[7rem] border-r-[1.5px] border-zinc-200 pt-3">
                <ul className='flex flex-col gap-3'>
                    <NavLink to={"/dashboard"} className="flex justify-center p-3  items-center flex-col transition-all">
                        <PiHouseSimple className=' text-2xl' />
                        Dashboard
                    </NavLink>
                    <NavLink to={"/property"} className="flex justify-center p-3  items-center flex-col transition-all ">
                        <PiWarehouseLight className=' text-2xl' />
                        Property
                    </NavLink>
                    <NavLink to={"tenant"} className="flex justify-center p-3  items-center flex-col transition-all ">
                        <PiBuildingsLight className=' text-2xl' />
                        Tenant
                    </NavLink>
                    <NavLink to={"transaction"} className="flex justify-center p-3  items-center flex-col transition-all ">
                        <PiListChecks className=' text-2xl' />
                        Transaction
                    </NavLink>
                    <NavLink to={"account"} className="flex justify-center p-3  items-center flex-col transition-all ">
                        <LiaUser className=' text-2xl' />
                        Account
                    </NavLink>
                    <NavLink to={"setting"} className="flex justify-center p-3  items-center flex-col transition-all ">
                        <IoSettingsOutline className=' text-2xl ' />
                        Settings
                    </NavLink>
                </ul>
            </div>
        </>
    )
}

export default DashboardSliderLinks