import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users } from "lucide-react";

function BookingCard({ title, icon: Icon, count }) {
  return (
    <Card className="w-full">
      <CardHeader className="pb-3">
        <CardTitle className="flex justify-between items-center ">
          <span className="text-[1rem] font-medium">{title}</span>
          <Icon className="w-4 h-4 text-[#71717A]" />
        </CardTitle>
      </CardHeader>
      <CardContent className="text-2xl font-bold">
        {count}
      </CardContent>
    </Card>
  );
}

export default BookingCard;
