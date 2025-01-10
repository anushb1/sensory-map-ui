import { Button } from "@/components/ui/button";
import { Calendar, Heart } from "lucide-react";

export const Navigation = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4">
      <div className="flex justify-around max-w-md mx-auto">
        <Button variant="ghost" className="flex flex-col items-center">
          <Calendar className="w-6 h-6" />
          <span className="text-xs mt-1">Appointments</span>
        </Button>
        <Button variant="ghost" className="flex flex-col items-center text-primary">
          <Heart className="w-6 h-6" />
          <span className="text-xs mt-1">Patients</span>
        </Button>
      </div>
    </div>
  );
};