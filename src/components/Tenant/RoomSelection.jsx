import React, { useState } from 'react';

const RoomSelection = ({ roomSelected }) => {
    const firstAvailableRoom = roomSelected.find(room => room.status === "available")?.number || null;
    const [selectedRoom, setSelectedRoom] = useState(firstAvailableRoom);

    const handleRoomClick = (roomNumber, roomStatus) => {
        if (roomStatus === "available") {
            setSelectedRoom(roomNumber);
        }
    };

    const getRoomClasses = (status, isSelected) => {
        let baseClass = "w-16 h-11 flex items-center border-[1.5px] border-[#E5E5E5] justify-center rounded-lg ";
        if (isSelected) {
            return baseClass + "bg-blue text-white border-none";
        }
        switch (status) {
            case "available":
                return baseClass + "bg-white";
            case "occupied":
                return baseClass + "bg-[#fff1cc]";
            case "full":
                return baseClass + "bg-[#e6e6e6]";
            case "maintenance":
                return baseClass + "bg-red-500 text-white";
            default:
                return baseClass + "bg-gray-200";
        }
    };

    return (
        <div className="max-w-2xl mx-auto p-4">
            <h2 className="font-semibold mb-4">Select Room</h2>
            <div className="grid grid-cols-8 gap-[10px]">
                {roomSelected.map((room) => (
                    <button
                        key={room.number}
                        className={getRoomClasses(room.status, room.number === selectedRoom)}
                        onClick={() => handleRoomClick(room.number, room.status)}
                    >
                        {room.number}
                    </button>
                ))}
            </div>

            {/* Room Status Legend */}
            <div className="flex items-center gap-4 mt-6">
                <div className="flex items-center">
                    <div className="w-4 h-4 bg-blue rounded-[3px] mr-[6px]"></div>
                    <span className='text-nowrap'>Selected Room</span>
                </div>
                <div className="flex items-center">
                    <div className="w-4 h-4 bg-white rounded-[3px] mr-[6px] border-[1.5px]"></div>
                    <span>Available</span>
                </div>
                <div className="flex items-center">
                    <div className="w-4 h-4 bg-[#fff1cc] rounded-[3px] mr-[6px] "></div>
                    <span>Occupied</span>
                </div>
                <div className="flex items-center">
                    <div className="w-4 h-4 bg-[#e6e6e6] rounded-[3px] mr-[6px] "></div>
                    <span>Full</span>
                </div>
                <div className="flex items-center">
                    <div className="w-4 h-4 bg-red-500 rounded-[3px] mr-[6px] "></div>
                    <span>Maintenance</span>
                </div>
            </div>
        </div>
    );
};

export default RoomSelection;
