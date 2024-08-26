import React from 'react';
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle
} from "@/components/ui/card";

export function StatCard({ label, value, icon: Icon, color }) {
    return (
        <Card className="flex justify-between items-center w-full p-4 py-6">
            <CardHeader className="flex justify-between items-center pb-2 p-0">
                <div className="flex items-start justify-start flex-col">
                    <div className="flex items-center gap-[7px] pb-2">
                        <span className="w-[10px] h-[10px] rounded-full block" style={{ backgroundColor: color }}></span>
                        <CardTitle className="text-sm font-medium  text-[#454745] block">{label}</CardTitle>
                    </div>
                    <CardContent className="text-2xl font-bold p-0 text-[#101010]">
                        {value}
                    </CardContent>
                </div>
            </CardHeader>
            {Icon && <Icon className="w-6 h-6 text-[#0E0F0C]" />}
        </Card>
    );
}
