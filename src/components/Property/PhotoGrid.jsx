import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button"; // Correct the import path for Button
import { PiCloudArrowUp } from "react-icons/pi";

const photos = [
  '/Assets/Property/img1.png', 
  '/Assets/Property/img2.png', 
  '/Assets/Property/img3.png', 
  '/Assets/Property/img4.png', 
  '/Assets/Property/img5.png', 
];

function PhotoGrid() {
  return (
    <div className="grid grid-cols-3 gap-4">
      {photos.map((photo, index) => (
        <Card key={index} className="aspect-square ">
          <img src={photo} alt={`Photo ${index + 1}`} className="object-cover w-full h-full rounded-lg" />
        </Card>
      ))}
      <Card className="flex justify-center items-center flex-col border-dashed border-2 border-blue rounded-lg">
          <PiCloudArrowUp className="text-3xl text-blue" />
        <Button variant="ghost " className="flex flex-col text-lg text-blue">
          Add Photo
        </Button>
      </Card>
    </div>
  );
}

export default PhotoGrid;
