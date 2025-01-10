import { Chart } from "react-charts";
import { Card } from "@/components/ui/card";
import { Clock } from "lucide-react";

interface PatientCardProps {
  name: string;
  age: number;
  gender: string;
  condition: string;
  tags: string[];
  dailyData: {
    day: string;
    value: number;
  }[];
  behavior: string;
  suggested: string;
  appointmentTime: string;
  activity: string;
  reduction: number;
}

export const PatientCard = ({
  name,
  age,
  gender,
  condition,
  tags,
  dailyData,
  behavior,
  suggested,
  appointmentTime,
  activity,
  reduction,
}: PatientCardProps) => {
  return (
    <Card className="w-full p-4 mb-4 hover:shadow-lg transition-shadow bg-secondary">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h3 className="text-lg font-semibold">
            {name} <span className="text-sm text-gray-500">{age} y/l {gender}</span>
          </h3>
          <p className="text-sm text-primary">{condition}</p>
          <div className="flex gap-2 mt-2">
            {tags.map((tag) => (
              <span key={tag} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                #{tag}
              </span>
            ))}
          </div>
        </div>
        <div className="text-right">
          <button className="text-primary hover:text-primary/80">
            <span className="sr-only">View details</span>
            &gt;
          </button>
        </div>
      </div>

      <div className="h-32 mb-4">
        <Chart
          options={{
            data: [
              {
                label: "Daily Progress",
                data: dailyData,
              },
            ],
            primaryAxis: {
              getValue: (datum: any) => datum.day,
            },
            secondaryAxes: [
              {
                getValue: (datum: any) => datum.value,
                elementType: "bar",
              },
            ],
          }}
        />
      </div>

      <div className="space-y-2">
        <div>
          <span className="font-medium">Behaviour</span>
          <p className="text-sm text-gray-600">{behavior}</p>
        </div>
        <div>
          <span className="font-medium">Suggested</span>
          <p className="text-sm text-gray-600">{suggested}</p>
        </div>
      </div>

      <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
        <Clock className="w-4 h-4" />
        <span>Today {appointmentTime}</span>
        <span className="text-primary">{activity}</span>
      </div>

      <div className="mt-4 flex items-center gap-2">
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-primary rounded-full h-2"
            style={{ width: `${reduction}%` }}
          />
        </div>
        <span className="text-sm font-medium">{reduction}% Reduction in Aggression</span>
      </div>
    </Card>
  );
};