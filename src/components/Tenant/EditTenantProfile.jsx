import React from 'react';
import { Card, CardContent, CardHeader } from '../ui/card';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { CountrySelector } from './CountrySelector';

const EditTenantProfile = () => {
    return (
        <div className={"mt-5"}>
            <Card>
                <CardHeader>
                    <h3 className="text-lg font-semibold">Tenant's Profile</h3>
                </CardHeader>
                <CardContent>
                            <div className="grid grid-cols-2 gap-4 animate-myFadeIn">
                                <div className="flex flex-col">
                                    <Label className="font-semibold">Name</Label>
                                    <Input type="text" id="name" defaultValue="Ahmad Farhan" className="border px-3 mt-2 py-2 rounded-md" />
                                </div>

                                <div className="flex flex-col">
                                    <Label className="font-semibold">Phone Number</Label>
                                    <div className="flex items-center mt-2">
                                        <CountrySelector />
                                        <Input type="text" id="phone" defaultValue="14677829792" className=" rounded-none " />
                                    </div>
                                </div>

                                <div className="flex flex-col">
                                    <Label className="font-semibold">ID/IC/Passport</Label>
                                    <Input type="text" id="id" defaultValue="18810076" className="border px-3 mt-2 py-2 rounded-md" />
                                </div>

                                <div className="flex flex-col">
                                    <Label className="font-semibold">Email</Label>
                                    <Input type="email" id="email" defaultValue="ahmad.farhan@gmail.com" className="border px-3 mt-2 py-2 rounded-md" />
                                </div>

                                <div className="flex flex-col relative">
                                    <Label className="font-semibold">Date of Birth</Label>
                                    <Input type="text" id="dob" defaultValue="20 July 1998" className="border px-3 mt-2 py-2 rounded-md pr-10" />
                                    {/* <FiCalendar className="absolute right-3 top-9 text-gray-500" /> */}
                                </div>

                                <div className="flex flex-col">
                                    <Label className="font-semibold">Emergency Contact</Label>
                                    <div className="flex mt-2 items-center">
                                        <CountrySelector />
                                        <Input type="text" id="emergency" defaultValue="14677829792" className="rounded-none " />
                                    </div>
                                </div>
                            </div>
                </CardContent>
            </Card>

        </div>
    )
}

export default EditTenantProfile