import React from 'react';
import { Card, CardContent, CardHeader } from '../ui/card';
import { Label } from '../ui/label';

const TenantProfile = ({ booking}) => {
    return (
        <>
            <div>
                <Card>
                    <CardHeader>
                        <h3 className="text-lg font-semibold">Tenant's Profile</h3>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <Label className="font-semibold">{booking.name}</Label>
                                <p>Rachel Subanto</p>
                            </div>
                            <div>
                                <Label className="font-semibold">Phone Number</Label>
                                <p>+60145678901</p>
                            </div>
                            <div>
                                <Label className="font-semibold">ID/IC/Passport</Label>
                                <p>18810076</p>
                            </div>
                            <div>
                                <Label className="font-semibold">Email</Label>
                                <p>ahmad.farhan@gmail.com</p>
                            </div>
                            <div>
                                <Label className="font-semibold">Date of Birth</Label>
                                <p>20 July 2000</p>
                            </div>
                            <div>
                                <Label className="font-semibold">Emergency Contact</Label>
                                <p>+60145678933</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

            </div>
        </>
    )
}

export default TenantProfile