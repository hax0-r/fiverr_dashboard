import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button"; 
import { PiCloudArrowUp } from "react-icons/pi";

function PhotoGrid({ photos,grid }) {
  return (
    <div className={`grid grid-cols-${grid} gap-3`}>
      {photos.map((photo, index) => (
        <Card key={index} className="aspect-square">
          <img src={photo} alt={`Photo ${index + 1}`} className="object-cover w-full h-full rounded-lg" />
        </Card>
      ))}
      <Card className="flex justify-center items-center flex-col hover:bg-[#eff6ff] transition-all border-dashed border-2 border-blue rounded-lg">
        <PiCloudArrowUp className="text-3xl text-blue" />
        <Button className={`flex bg-transparent hover:bg-transparent flex-col ${grid === 3 ? "text-lg" : "mt-[-.5rem]"} text-blue`}>
          Add Photo
        </Button>
      </Card>
    </div>
  );
}

export default PhotoGrid;
