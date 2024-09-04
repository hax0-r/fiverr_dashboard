import React from 'react'
import { SheetClose, SheetHeader, SheetTitle } from '../ui/sheet'
import { Button } from '../ui/button'
import { FaArrowLeftLong } from 'react-icons/fa6'
import { FaCarSide } from 'react-icons/fa'
import { PiReceiptFill } from 'react-icons/pi'
import { Link } from 'react-router-dom'
import Receipt from './Receipt'

const SeeAllPayment = ({ setSeeAll }) => {
    const data = [
        { date: '12/07/2024', ref: 'KIZ87838', payment: 'Cash', method: 'Counter', amount: 'RM 1,150' },
        { date: '12/07/2024', ref: 'KIZ87839', payment: 'Bank Transfer', method: 'Maybank', amount: 'RM 1,250' },
        { date: '13/07/2024', ref: 'KIZ87840', payment: 'Credit Card', method: 'Maybank', amount: 'RM 900' },
        { date: '14/07/2024', ref: 'KIZ87841', payment: 'Cash', method: 'Maybank', amount: 'RM 1,300' },
        { date: '14/07/2024', ref: 'KIZ87842', payment: 'Bank Transfer', method: 'Maybank ', amount: 'RM 1,100' },
        { date: '15/07/2024', ref: 'KIZ87843', payment: 'Cash', method: 'Maybank', amount: 'RM 1,050' },
        { date: '15/07/2024', ref: 'KIZ87844', payment: 'Bank Transfer', method: 'Maybank', amount: 'RM 1,200' },
        { date: '16/07/2024', ref: 'KIZ87845', payment: 'Credit Card', method: 'Maybank', amount: 'RM 1,000' },
        { date: '17/07/2024', ref: 'KIZ87846', payment: 'Cash', method: 'Maybank', amount: 'RM 1,350' },
        { date: '17/07/2024', ref: 'KIZ87847', payment: 'Bank Transfer', method: 'Maybank', amount: 'RM 1,250' },
        { date: '18/07/2024', ref: 'KIZ87848', payment: 'Credit Card', method: 'Maybank', amount: 'RM 950' },
        { date: '19/07/2024', ref: 'KIZ87849', payment: 'Cash', method: 'Maybank', amount: 'RM 1,200' },
        { date: '19/07/2024', ref: 'KIZ87850', payment: 'Bank Transfer', method: 'Maybank', amount: 'RM 1,300' },
        { date: '20/07/2024', ref: 'KIZ87851', payment: 'Credit Card', method: 'Maybank', amount: 'RM 1,150' },
        { date: '21/07/2024', ref: 'KIZ87852', payment: 'Cash', method: 'Maybank', amount: 'RM 1,000' }
    ];

    return (
        <div className='relative'>
            <SheetHeader>
                <div className="flex items-center justify-between">
                    <SheetTitle>
                        <div className="flex items-center gap-2">
                            <FaArrowLeftLong className="bg-[#F5F5F5] p-2 text-3xl rounded-full text-[#101010]" />
                            Tenants Details
                        </div>
                    </SheetTitle>
                </div>
            </SheetHeader>

            <div className="flex items-center mt-4 justify-between">
                <h2 className='font-semibold' >Payment History</h2>
                <Button variant="myBlue">Create Payment</Button>
            </div>

            <div className="mt-5">
                <div className="">
                    <table className="min-w-full  bg-white border-gray-200">
                        <tbody>
                            {data.map((item, index) => (
                                <>
                                    <tr key={index} className=" ">
                                        <td className=" p-3 py-3 text-nowrap rounded-l-lg bg-[#eff6ff]  text-gray-700">{item.date}</td>
                                        <td className=" p-3 py-3 text-nowrap bg-[#eff6ff]  text-[#2463EB] hover:underline cursor-pointer">{item.ref}</td>
                                        <td className=" p-3 py-3 text-nowrap bg-[#eff6ff]  text-gray-700">{item.payment}</td>
                                        <td className=" p-3 py-3 text-nowrap bg-[#eff6ff]  text-gray-700">{item.method}</td>
                                        <td className=" p-3 py-3 text-nowrap bg-[#eff6ff]  text-gray-700">{item.amount}</td>
                                        <td className=" p-3 py-3 text-nowrap rounded-r-lg bg-[#eff6ff]  text-gray-700">
                                            <Link>
                                                <Receipt />
                                            </Link>
                                        </td>
                                    </tr>
                                    <tr className='h-2'></tr>
                                </>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>


            <div className="flex items-end justify-end mt-5 bg-white py-3 fixed bottom-[22px] w-[36rem]">
                <Button onClick={() => setSeeAll(false)} variant="myBlue2" className="px-8 ">Back</Button>
            </div>

        </div >
    )
}

export default SeeAllPayment