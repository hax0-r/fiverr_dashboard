import React, { useState } from 'react';
import { Button } from './button';
import Notifications from './Notifications';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const DashBoardHeader = () => {
    const [isAdminMenuOpen, setIsAdminMenuOpen] = useState(false);
    const [isNotificationOpen, setIsNotificationOpen] = useState(false);

    const location = useLocation();
    const navigate = useNavigate();

    // Determine the current page based on the URL path
    const currentPage = location.pathname.substring(1); // Remove the leading slash

    const toggleNotification = () => {
        setIsNotificationOpen(!isNotificationOpen);
        setIsAdminMenuOpen(false);
    };

    const toggleAdminMenu = () => {
        setIsAdminMenuOpen(!isAdminMenuOpen);
        setIsNotificationOpen(false);
    };

    const handleLogout = () => {
        navigate('/');
    };

    return (
        <>
            <div className="flex justify-between items-center fixed w-full bg-white z-50 p-5 border-[1.5px] border-zinc-200">
                <div className="flex items-center gap-8">
                    <Link to={"/home"}>
                        <img src="./Assets/Global/logoBlue.svg" alt="Logo" />
                    </Link>
                    <h1 className="text-[#101010] text-2xl font-semibold capitalize">
                        {currentPage}
                    </h1>
                </div>
                <div className="flex items-center gap-4 z-510">
                    <div className="bg-[#edefeb] relative w-10 h-10 flex justify-center cursor-pointer items-center rounded-full transition-all hover:bg-[#e2e4e0]" onClick={toggleNotification}>
                        <div className="absolute -top-2 -right-1 w-5 h-5 text-sm flex justify-center items-center text-white rounded-full bg-[#2463EB]">2</div>
                        <img src="./Assets/Dashboard/Bell.svg" alt="Notifications" className='select-none' />
                        {isNotificationOpen && (
                            <div className="absolute z-50 top-12 animate-myFadeIn right-5 w-[448px]">
                                <Notifications />
                            </div>
                        )}
                    </div>
                    <div
                        className="bg-[#edefeb] z-20 w-10 h-10 flex justify-center items-center rounded-full transition-all hover:bg-[#e2e4e0] cursor-pointer relative"
                        onClick={toggleAdminMenu}
                    >
                        <img src="./Assets/Dashboard/User.svg" alt="User" className='select-none' />
                        {/* Admin Logout */}
                        {isAdminMenuOpen && (
                            <div className="absolute bg-white z-50 animate-myFadeIn top-14 right-2">
                                <div className="shadow-myShadow rounded-lg p-2 py-3 w-48">
                                    <div className="up flex justify-start gap-2 items-center">
                                        <h2 className="w-10 text-[#2463EB] font-bold h-10 flex justify-center items-center rounded-full bg-[#EFF6FF]">
                                            OA
                                        </h2>
                                        <div className="">
                                            <h2 className="font-semibold leading-5">Owner Ali</h2>
                                            <p className="text-[11px] text-[#A9A9A9]">Admin</p>
                                        </div>
                                    </div>
                                    <div className="w-full h-[1px] bg-[#cfd1d486] my-3"></div>
                                    <Button onClick={handleLogout} className="w-full bg-transparent border-[1.5px] hover:bg-red-600 hover:text-white border-red-500 text-red-600 font-semibold">
                                        Log Out
                                    </Button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default DashBoardHeader;
