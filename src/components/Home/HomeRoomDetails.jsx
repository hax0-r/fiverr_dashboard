import { PLACES } from '@/assets/Home/Places';
import { PROPERTY } from '@/assets/Home/Property';
import React from 'react';
import { useParams } from 'react-router-dom';

const HomeRoomDetails = ({ checkInDate, checkOutDate, formatDate, method }) => {
    const { placeName, subCardId } = useParams();

    const filterData = PLACES.filter((item) => item.id === parseInt(subCardId));
    const filterData2 = PROPERTY.filter((item) => item.id === parseInt(subCardId));

    const [room] = filterData;
    const [room2] = filterData2;

    return (
        <div>
            <div className="border-[1.33px] border-[#cfd1d4] p-3 rounded-t-lg flex gap-4">
                <img src={room?.subImg} className="sm:h-[9rem] h-[100px] rounded-xl" alt="house" />
                <div>
                    <p className="text-blue bg-[#EFF6FF] text-nowrap inline-block my-2 px-3 py-[6px] rounded-lg">{room?.title}</p>
                    <h2 className="text-[#1D1D1D] font-semibold text-lg">{room2?.title}</h2>
                    <p className="flex items-center py-1 gap-2 text-[#6E6E6E]">
                        {room?.month} Rent
                    </p>
                    <p className="flex items-center gap-2 text-[#6E6E6E]">
                        {typeof formatDate === "function" ? `${formatDate(checkInDate)} - ${formatDate(checkOutDate)}` : "Aug 24, 2024 - Feb 01, 2025"}
                    </p>
                </div>
            </div>

            <div className="border-[1.33px] border-[#cfd1d4] border-t-0 p-3 rounded-b-lg ">
                {
                    method && (
                        <div className="flex justify-between items-center">
                            <span className="text-[#1D1D1D] font-medium">Payment method</span>
                            <p className="text-[#FA5501] font-semibold">
                                {method}
                            </p>
                        </div>
                    )
                }
                <div className="flex justify-between items-center">
                    <span className="text-[#1D1D1D] font-medium">Total Price</span>
                    <p className="text-[#FA5501] text-xl font-semibold">
                        RM 1200
                    </p>
                </div>
            </div>
        </div>
    );
};

export default HomeRoomDetails;
