import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

const Diagnosis = () => {
  const [symptoms, setSymptoms] = useState("");

  return (
    <div className="animate-fade-in max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">
        Symptom-Based Diagnosis
      </h1>
      
      <Card className="p-6">
        <div className="space-y-4">
          <div>
            <label htmlFor="symptoms" className="block text-sm font-medium text-gray-700 mb-2">
              Enter Patient Symptoms
            </label>
            <div className="flex gap-2">
              <Input
                id="symptoms"
                placeholder="Describe the symptoms..."
                value={symptoms}
                onChange={(e) => setSymptoms(e.target.value)}
              />
              <Button>Analyze</Button>
            </div>
          </div>
          
          <div className="mt-6">
            <p className="text-gray-600 text-center">
              Enter symptoms above to generate AI-powered differential diagnoses based on the Nelson Textbook of Pediatrics
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Diagnosis;