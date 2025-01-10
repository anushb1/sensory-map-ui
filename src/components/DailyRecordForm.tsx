import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

export const DailyRecordForm = () => {
  const [records, setRecords] = useState({
    AbnormalFlatSpeech: 5,
    AbnormalPosture: 5,
    Aggression: 5,
    Anxiety: 5,
    Depression: 5,
    Fixations: 5,
    NoiseSensitivity: 5,
    PoorEyeContact: 5,
    SocialDifficulty: 5,
    TicsAndFidgets: 5,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Daily records:", records);
  };

  const handleChange = (field: string, value: number[]) => {
    setRecords((prev) => ({
      ...prev,
      [field]: value[0],
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto p-6 bg-white rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">Daily Behavior Record</h2>
      
      {Object.keys(records).map((field) => (
        <div key={field} className="space-y-2">
          <Label htmlFor={field}>
            {field.replace(/([A-Z])/g, " $1").trim()}
          </Label>
          <Slider
            id={field}
            max={10}
            step={1}
            defaultValue={[records[field as keyof typeof records]]}
            onValueChange={(value) => handleChange(field, value)}
          />
        </div>
      ))}

      <Button type="submit" className="w-full">
        Save Daily Record
      </Button>
    </form>
  );
};