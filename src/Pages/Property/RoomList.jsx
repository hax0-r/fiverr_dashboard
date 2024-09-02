import RoomListTable from '@/components/Property/RoomListTable'
import React from 'react'

const RoomList = () => {
    return (
        <>
            <div className="animate-myFadeIn">
                <div className="mt-3">
                    <RoomListTable/>
                </div>
            </div>
        </>
    )
}

export default RoomList