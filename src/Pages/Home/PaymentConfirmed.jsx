import { Button } from '@/components/ui/button';
import { Card, CardTitle } from '@/components/ui/card';
import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import HomeRoomDetails from '@/components/Home/HomeRoomDetails';
import { PiClockCountdownDuotone, PiSealCheckFill } from 'react-icons/pi';
import { usePaymentContext } from '@/Context/PaymentContext';
import PaymentNotes from '@/components/Home/PaymentNotes';

const PaymentConfirmed = () => {

    const { selectedMethod } = usePaymentContext();

    return (
        <div>

            <div className="bg-[#eff6ff]">
                <div className="max-w-[960px] min-h-screen mx-auto p-4 bg-white">
                    <Card className="overflow-hidden border-none shadow-none">
                        {
                            selectedMethod === "Transfer" ?
                                <div className="flex justify-center items-center gap-2 flex-col my-10 sm:mb-10 mb-5 ">
                                    <PiClockCountdownDuotone className='text-6xl text-[#169D00] bg-[#F0FFED] p-2 rounded-full' />
                                    <div className="text-center">
                                        <h2 className='text-lg font-semibold'>Waiting for Payment Confirmation</h2>
                                        <p className=' text-[#1D1D1D]'>We will send the receipt to your email if the payment is successful</p>
                                    </div>
                                </div>
                                :
                                <div className="flex justify-center items-center gap-2 flex-col my-10 ">
                                    <PiSealCheckFill className='text-6xl text-[#169D00] bg-[#F0FFED] p-2 rounded-full' />
                                    <div className="text-center">
                                        <h2 className='text-lg font-semibold'>Waiting for Payment</h2>
                                        <p className='text-[#1D1D1D]'>We will send the booking details to your email</p>
                                    </div>
                                </div>
                        }
                        <div className="text-center mt-3">
                            <p className='font-semibold'>Booking ID</p>
                            <p className='text-2xl text-blue font-semibold'>KIZ-8479</p>
                        </div>

                        <div className="mt-5">

                            <HomeRoomDetails method={selectedMethod} />
                        </div>


                        <Card className="p-3 border-[1.33px] border-[#cfd1d4] flex flex-col gap-3 mt-5">
                            <CardTitle className="text-lg">Information Tenant</CardTitle>
                            <div className="">
                                <p className='font-semibold text-[#696969]'>Name</p>
                                <p className='text-[#1D1D1D] font-medium'>Azri bin Mohammad Razali</p>
                            </div>
                            <div className="">
                                <p className='font-semibold text-[#696969]'>ID Student</p>
                                <p className='text-[#1D1D1D] font-medium'>76376837</p>
                            </div>
                            <div className="">
                                <p className='font-semibold text-[#696969]'>Email</p>
                                <p className='text-[#1D1D1D] font-medium'>azri.razali@gmail.com</p>
                            </div>
                            <div className="">
                                <p className='font-semibold text-[#696969]'>Phone Number</p>
                                <p className='text-[#1D1D1D] font-medium'>+60-31245678</p>
                            </div>
                        </Card>

                        {
                            selectedMethod === "Transfer" ?
                                <Card className="p-3 border-[1.33px] border-[#cfd1d4] mt-5">
                                    <CardTitle className="text-lg">Proof of Transfer</CardTitle>
                                    <img src="./" alt="imgFromBackend" />
                                </Card>
                                :
                                <PaymentNotes />
                        }

                        <div className="py-12"></div>
                        <div className="fixed bottom-0 max-w-[944px] mx-auto py-4 pr-4 bg-white  w-full">
                            <div className="">
                                <Link to={`/home`} >
                                    <Button className="bg-[#2463EB] mt-4 w-full justify-center hover:bg-darkBlue text-white flex items-center tracking-wide gap-2 px-4 py-7 rounded-full text-[1rem]">
                                        Back to Home
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default PaymentConfirmed;
