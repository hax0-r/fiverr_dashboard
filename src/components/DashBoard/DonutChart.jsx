import React, { useMemo } from 'react';
import { Pie, PieChart, Tooltip, ResponsiveContainer, Label } from "recharts";
import { Card, CardContent } from "@/components/ui/card";

const chartData = [
    { name: "Chrome", value: 10, fill: "#fdc247" },
    { name: "Safari", value: 10, fill: "#93c5fd" },
    { name: "Edge", value: 10, fill: "#85ff71" },
    { name: "Other", value: 20, fill: "#fda374" },
];

export default function DonutChart() {
    const totalVisitors = useMemo(() => {
        return chartData.reduce((acc, curr) => acc + curr.value, 0);
    }, []);

    return (
        <Card className="flex flex-col shadow-none border-0 max-w-[12rem]">
            <CardContent className="flex-1 p-0">
                <ResponsiveContainer width="100%" height={250}>
                    <PieChart>
                        <Pie
                            data={chartData}
                            dataKey="value"
                            nameKey="name"
                            innerRadius={60}
                            outerRadius={90}
                            paddingAngle={0}
                            strokeWidth={0}
                        >
                            <Label
                                content={({ viewBox }) => {
                                    const { cx, cy } = viewBox;
                                    return (
                                        <text
                                            x={cx}
                                            y={cy}
                                            fill="black"  // Change the text color here
                                            textAnchor="middle"
                                            dominantBaseline="middle"
                                            className="text-3xl font-bold"
                                        >
                                            {`${totalVisitors} %`}
                                        </text>
                                    );
                                }}
                            />
                        </Pie>
                        <Tooltip />
                    </PieChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    );
}
