import React from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import { Label } from '../ui/label'

const ChooseProperty = ({heading}) => {
    return (
        <>
            <div className="animate-myFadeIn">
                <div>
                    <h2 className=" font-semibold mb-4 ">{heading}</h2>
                    <div className="grid grid-cols-2 gap-4">
                        {/* Property */}
                        <div>
                            <Label className="font-medium" htmlFor="property">Property</Label>
                            <Select >
                                <SelectTrigger className="mt-1" id="property">
                                    <SelectValue placeholder="Kolej Ibu Zein" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="Kolej Ibu Zein">Kolej Ibu Zein</SelectItem>
                                    {/* Add more options here */}
                                </SelectContent>
                            </Select>
                        </div>

                        {/* Room Type */}
                        <div>
                            <Label className="font-medium" htmlFor="room-type">Room Type</Label>
                            <Select>
                                <SelectTrigger className="mt-1" id="room-type">
                                    <SelectValue placeholder="Single" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="Single">Single</SelectItem>
                                    {/* Add more options here */}
                                </SelectContent>
                            </Select>
                        </div>

                        {/* Floor */}
                        <div>
                            <Label className="font-medium" htmlFor="floor">Floor</Label>
                            <Select>
                                <SelectTrigger className="mt-1" id="floor">
                                    <SelectValue placeholder="1" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="1">1</SelectItem>
                                    <SelectItem value="2">2</SelectItem>
                                    {/* Add more options here */}
                                </SelectContent>
                            </Select>
                        </div>

                        {/* Block */}
                        <div>
                            <Label className="font-medium" htmlFor="block">Block</Label>
                            <Select>
                                <SelectTrigger className="mt-1" id="block">
                                    <SelectValue placeholder="H1" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="H1">H1</SelectItem>
                                    {/* Add more options here */}
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ChooseProperty