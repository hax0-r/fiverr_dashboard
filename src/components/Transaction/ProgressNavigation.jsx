import React from 'react'
import { PiDoorOpen } from 'react-icons/pi';
import { Calendar, Check } from 'lucide-react';



const ProgressNavigation = ({ currentStep }) => {
    const progressBarWidth = `${(currentStep - 1) * 100}%`;

    return (
        <div className="flex items-center justify-between border-b border-gray-200 pb-4 mb-4">
            {/* Step 1: Room */}
            <div className="text-blue-500 flex flex-col items-center">
                <PiDoorOpen className="text-lg text-blue" />
                <div className="text-[12px] font-medium text-blue">Room</div>
            </div>
            <div className="relative transition-all overflow-hidden">
                <div className="border-gray-200 border h-[1px] w-40"></div>
                <div className="bg-blue absolute top-0 left-0 h-[2px] transition-all" style={{ width: progressBarWidth }}></div>
            </div>
            {/* Step 2: Rent Time */}
            <div className="flex flex-col items-center">
                <Calendar className={`text-lg ${currentStep >= 2 ? 'text-blue' : 'text-zinc-400'}`} />
                <div className={`transition-all text-[12px] font-medium ${currentStep >= 2 ? 'text-blue' : 'text-zinc-400'}`}>Rent Time</div>
            </div>
            <div className="relative transition-all">
                <div className="border-gray-200 border h-[1px] w-40"></div>
                <div className="bg-blue transition-all absolute top-0 left-0 h-[2px]" style={{ width: currentStep === 3 ? '100%' : '0' }}></div>
            </div>
            {/* Step 3: All Set */}
            <div className="flex flex-col items-center">
                <Check className={`text-lg ${currentStep === 3 ? 'text-blue' : 'text-zinc-400'}`} />
                <div className={`text-[12px] font-medium ${currentStep === 3 ? 'text-blue' : 'text-zinc-400'}`}>All Set</div>
            </div>
        </div>
    );
};

export default ProgressNavigation