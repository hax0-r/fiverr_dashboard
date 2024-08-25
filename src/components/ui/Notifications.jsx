import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const NotificationCard = ({ title, message, isNew }) => {
    return (
        <Card className={`border mr-2  ${isNew ? 'border-blue-500 bg-[#eff6ff]' : 'border-gray-200'}`}>
            <CardHeader className="flex justify-between pb-3">
                <div className="flex items-center gap-2">
                    {
                        isNew && <div className="w-2 h-2 rounded-full bg-blue"></div> 
                    }
                    <CardTitle className="text-sm font-semibold">{title}</CardTitle>
                </div>
            </CardHeader>
            <CardContent className="text-sm text-gray-600 ">
                {message}
            </CardContent>
        </Card>
    );
};

const Notifications = () => {
    return (
        <div className="p-4 max-w-md mx-auto bg-white shadow-lg rounded-lg " >
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Notification</h2>
                <Button variant="primary" size="sm" className="bg-blue text-white transition-all hover:bg-transparent border-blue border-[1.5px] hover:text-blue">+2 New</Button>
            </div>
            <div className="space-y-2 h-[440px] overflow-y-scroll 	">
                <NotificationCard
                    title="Muhammad Ammar Place Book at KIZ"
                    message="Muhammad Ammar has just booked your property: KIZ, Single Bed, Block H2, Room 102. Please confirm the payment to finalize the booking."
                    isNew={true}
                />
                <NotificationCard
                    title="Putra Rasaja Place Payment from Maybank"
                    message="Putra Rasaja has made a payment of RM 1,250 via Maybank. Bank Account No:1234-5678-9012. Please verify and confirm the transaction."
                    isNew={true}
                />
                <NotificationCard
                    title="Ahmad Rahayu Place Book at KIZ"
                    message="Ahmad Rahayu has just booked your property: KIZ, Single Bed, Block H2, Room 103. Please confirm the payment to finalize the booking."
                    isNew={false}
                />
                <NotificationCard
                    title="Ahmad Rahayu Place Book at KIZ"
                    message="Ahmad Rahayu has just booked your property: KIZ, Single Bed, Block H2, Room 103. Please confirm the payment to finalize the booking."
                    isNew={false}
                />
            </div>
            <div className="mt-4">
                <Button variant="outline" size="sm" className="hover:bg-blue font-semibold hover:text-white transition-all bg-transparent border-blue border-[1.5px] text-blue w-full">See All</Button>
            </div>
        </div>
    );
};

export default Notifications;
