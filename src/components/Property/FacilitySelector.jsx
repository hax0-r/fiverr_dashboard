import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { GoPlusCircle } from "react-icons/go";
import { AddFacility } from "@/Pages/Property/AddFacility";

const FacilitySelector = ({ facilities, popup }) => { // Accepting facilities as a prop
    const [selectedFacilities, setSelectedFacilities] = useState([]);

    const toggleFacility = (facility) => {
        if (selectedFacilities.includes(facility)) {
            setSelectedFacilities(selectedFacilities.filter(f => f !== facility));
        } else {
            setSelectedFacilities([...selectedFacilities, facility]);
        }
    };

    return (
        <div className="">
            <div className="flex flex-wrap gap-2">
                {facilities.map(({ name, icon: Icon }) => (
                    <Button
                        key={name}
                        onClick={() => toggleFacility(name)}
                        className={`flex items-center gap-2 px-3 py-2 rounded-full active:bg-darkBlue border-[1.5px] border-[#52525292] 
                    ${selectedFacilities.includes(name) ? "bg-blue border-blue text-white" : "bg-transparent text-[#525252]"} 
                    group hover:bg-blue hover:border-blue hover:text-white`}
                    >
                        <Icon className={`text-lg ${selectedFacilities.includes(name) ? "text-white" : "text-[#525252db]"} group-hover:text-white`} />
                        {name}
                    </Button>

                ))}
            </div>
            {
                popup === "addProperty" ?
                    <AddFacility
                        title="Shared Facilities"
                        placeholder="Input new shared Facilities"
                        btnName="Add custom facility"
                    />
                    :
                    <AddFacility
                        title="Room Facilities"
                        placeholder="Input new room Facilities"
                        btnName="Add custom facility"
                    />
            }
        </div>
    );
};

export default FacilitySelector;
