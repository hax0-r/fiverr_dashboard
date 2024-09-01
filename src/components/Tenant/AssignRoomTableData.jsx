import React from 'react'
import { Card, CardContent } from '../ui/card'
import { Label } from '../ui/label'

const AssignRoomTableData = ({booking}) => {
    return (
        <>
            <div className="">
                <Card className="mb-6">
                    <CardContent className="p-4 flex justify-between items-center gap-4">
                        <div>
                            <Label className="text-sm font-semibold">{booking.name}</Label>
                            <p className="text-gray-500 text-sm pt-1" >IDs {booking.ids}</p>
                        </div>
                        <div className="border-gray-200 border h-7 w-[1px]"></div>
                        <div>
                            <Label className="text-sm text-gray-500 ">Property</Label>
                            <p className="text-gray-800 font-semibold pt-1 text-sm">Kolej Ibu Zein</p>
                        </div>
                        <div className="border-gray-200 border h-7 w-[1px]"></div>
                        <div>
                            <Label className="text-sm text-gray-500 ">Rental Duration</Label>
                            <p className="text-gray-800 font-semibold pt-1 text-sm">6 Month</p>
                        </div>
                        <div className="border-gray-200 border h-7 w-[1px]"></div>
                        <div>
                            <Label className="text-sm text-gray-500 ">Boarding Date</Label>
                            <p className="text-gray-800 font-semibold pt-1 text-sm">{booking.date}</p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </>
    )
}

export default AssignRoomTableData