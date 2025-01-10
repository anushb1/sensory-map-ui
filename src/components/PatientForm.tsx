import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";

export const PatientForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: 0,
    school: "",
    relation: "",
    levelOfKnowledge: "",
    spectrum: "",
    sensoryScale: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (field: string, value: string | number) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto p-6 bg-white rounded-lg shadow">
      <div className="space-y-4">
        <div>
          <Label htmlFor="name">Patient Name</Label>
          <Input
            id="name"
            value={formData.name}
            onChange={(e) => handleChange("name", e.target.value)}
            placeholder="Enter patient name"
          />
        </div>

        <div>
          <Label htmlFor="age">Age</Label>
          <Input
            id="age"
            type="number"
            value={formData.age}
            onChange={(e) => handleChange("age", parseInt(e.target.value))}
            placeholder="Enter age"
          />
        </div>

        <div>
          <Label htmlFor="school">School</Label>
          <Input
            id="school"
            value={formData.school}
            onChange={(e) => handleChange("school", e.target.value)}
            placeholder="Enter school name"
          />
        </div>

        <div>
          <Label htmlFor="relation">Relation</Label>
          <Input
            id="relation"
            value={formData.relation}
            onChange={(e) => handleChange("relation", e.target.value)}
            placeholder="Enter relation"
          />
        </div>

        <div>
          <Label htmlFor="spectrum">Spectrum</Label>
          <Select
            value={formData.spectrum}
            onValueChange={(value) => handleChange("spectrum", value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select spectrum" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="mild">Mild</SelectItem>
              <SelectItem value="moderate">Moderate</SelectItem>
              <SelectItem value="severe">Severe</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label>Sensory Profile</Label>
          <div className="space-y-4">
            <div>
              <Label htmlFor="sight">Sight</Label>
              <Slider
                id="sight"
                max={10}
                step={1}
                defaultValue={[5]}
                onValueChange={(value) => console.log("Sight:", value)}
              />
            </div>
            <div>
              <Label htmlFor="hearing">Hearing</Label>
              <Slider
                id="hearing"
                max={10}
                step={1}
                defaultValue={[5]}
                onValueChange={(value) => console.log("Hearing:", value)}
              />
            </div>
            <div>
              <Label htmlFor="touch">Touch</Label>
              <Slider
                id="touch"
                max={10}
                step={1}
                defaultValue={[5]}
                onValueChange={(value) => console.log("Touch:", value)}
              />
            </div>
          </div>
        </div>
      </div>

      <Button type="submit" className="w-full">
        Save Patient Data
      </Button>
    </form>
  );
};