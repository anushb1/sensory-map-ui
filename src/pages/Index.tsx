import { useState } from "react";
import { SearchBar } from "@/components/SearchBar";
import { FilterTags } from "@/components/FilterTags";
import { PatientCard } from "@/components/PatientCard";
import { Navigation } from "@/components/Navigation";
import { PatientForm } from "@/components/PatientForm";
import { DailyRecordForm } from "@/components/DailyRecordForm";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const mockPatients = [
  {
    name: "Aarav Singh",
    age: 17,
    gender: "M",
    condition: "Sensory seeking ASD",
    tags: ["OCD", "Aggression"],
    dailyData: [
      { day: "MON", value: 80 },
      { day: "TUE", value: 70 },
      { day: "WED", value: 75 },
      { day: "THU", value: 65 },
      { day: "FRI", value: 70 },
      { day: "SAT", value: 85 },
    ],
    behavior: "Hyperactivity Outburst Observed",
    suggested: "Focus Nature Sounds",
    appointmentTime: "10:00 am to 11:00 am",
    activity: "Motor skills",
    reduction: 23,
  },
];

const filterTags = ["Autism", "Cerebral Palsy", "ADHD", "Dyslexia", "OCD"];

const Index = () => {
  const [selectedTag, setSelectedTag] = useState(filterTags[0]);

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="max-w-4xl mx-auto p-4">
        <h1 className="text-2xl font-bold mb-6">Patient Management</h1>
        
        <Tabs defaultValue="list" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-6">
            <TabsTrigger value="list">Patient List</TabsTrigger>
            <TabsTrigger value="add">Add Patient</TabsTrigger>
            <TabsTrigger value="daily">Daily Record</TabsTrigger>
          </TabsList>
          
          <TabsContent value="list">
            <SearchBar />
            <FilterTags
              tags={filterTags}
              selectedTag={selectedTag}
              onSelectTag={setSelectedTag}
            />
            <div className="space-y-4">
              {mockPatients.map((patient) => (
                <PatientCard key={patient.name} {...patient} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="add">
            <PatientForm />
          </TabsContent>

          <TabsContent value="daily">
            <DailyRecordForm />
          </TabsContent>
        </Tabs>
      </div>

      <Navigation />
    </div>
  );
};

export default Index;