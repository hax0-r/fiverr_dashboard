import React from 'react'
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTrigger,
} from "@/components/ui/dialog"
import { PiReceiptFill } from 'react-icons/pi'

const Receipt = () => {
    return (
        <div>
            <Dialog>
                <DialogTrigger asChild>
                    <PiReceiptFill className="text-[#2463EB] cursor-pointer text-lg" />
                </DialogTrigger>
                <DialogContent className="sm:max-w-[950px] p-0 h-[90vh] overflow-y-auto">
                    <div className="p-6">

                    <DialogHeader>
                        <div className="flex items-center gap-3">
                            <div className="w-[3px] bg-blue h-16"></div>
                            <div className="">
                                <h3 className='font-bold'>Receipt</h3>
                                <p className='text-[#696969]'>Number : INV/2500724/0024</p>
                                <p className='text-[#696969]'>Date  : 19 Aug 2024, 07.28 PM (Thursday) </p>
                            </div>
                        </div>
                    </DialogHeader>

                    <div className="my-5 ml-5">
                        <p className='text-lg font-bold'>Booking ID</p>
                        <p className='text-3xl font-semibold text-blue'>KIZ8479</p>
                    </div>

                    <div className="">
                        <h3 className='font-bold bg-[#F5F5F5] text-sm w-full p-2 '>Tenant Details</h3>
                        <div className="text-[#696969] grid grid-cols-4 text-sm p-2 pt-5 pb-0">
                            <p>Tenant Name:</p>
                            <p>Phone Number:</p>
                            <p>Email:</p>
                            <p>ID/IC/Passport:</p>
                        </div>
                        <div className="text-[#0F172A] font-medium grid text-sm grid-cols-4 p-2 pt-0">
                            <p>Ahmad Farhan</p>
                            <p>+60 1223 427989</p>
                            <p>ahmad.farhan@gmail.com</p>
                            <p>3892739273</p>
                        </div>
                    </div>
                    <div className="mt-3">
                        <h3 className='font-bold bg-[#F5F5F5] text-sm w-full p-2 '>Property Details</h3>
                        <div className="text-[#696969] grid grid-cols-4 text-sm p-2 pt-5 pb-0">
                            <p>Property Name:</p>
                            <p>Room Type:</p>
                            <p>Check-in:</p>
                            <p>Duration:</p>
                        </div>
                        <div className="text-[#0F172A] font-medium grid grid-cols-4 text-sm p-2 pt-0">
                            <p>Kolej Ibu Zein</p>
                            <p>Single Room Premium</p>
                            <p>24-08-2025</p>
                            <p>6 months</p>
                        </div>
                    </div>
                    <div className="mt-3">
                        <h3 className='font-bold bg-[#F5F5F5] text-sm w-full p-2 '>Payment Details</h3>
                        <div className="text-[#696969] grid grid-cols-4 text-sm  p-2 pt-5 pb-0">
                            <p>Payment Method:</p>
                            <p>Payer Name:</p>
                            <p>Status:</p>
                            <p>Amount:</p>
                        </div>
                        <div className="text-[#0F172A] font-medium grid grid-cols-4 text-sm p-2 pt-0">
                            <p>Bank Transfer</p>
                            <p>Ahmad Farhan</p>
                            <p>Paid</p>
                            <p className='text-lg font-bold'>RM 1,200</p>
                        </div>
                    </div>

                    <div className="flex justify-end">
                        <img src="/Assets/Tenant/paid.png" alt="paid" className='h-40' />
                    </div>
                    </div>

                    <p className='text-white text-center bg-blue p-3 bottom-0 left-0 w-full'>Terms and Conditions applied. Please refer to hhtp://www.stayukm.com/termsandconditions</p>
                </DialogContent>
            </Dialog>

        </div>
    )
}

export default Receipt