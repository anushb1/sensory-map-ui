import { useState } from "react";
import { SearchBar } from "@/components/SearchBar";
import { FilterTags } from "@/components/FilterTags";
import { PatientCard } from "@/components/PatientCard";
import { Navigation } from "@/components/Navigation";

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
  // Add more mock patients here
];

const filterTags = ["Autism", "Cerebral Palsy", "ADHD", "Dyslexia", "OCD"];

const Index = () => {
  const [selectedTag, setSelectedTag] = useState(filterTags[0]);

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="max-w-md mx-auto p-4">
        <h1 className="text-2xl font-bold mb-6">Patients</h1>
        
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
      </div>

      <Navigation />
    </div>
  );
};

export default Index;