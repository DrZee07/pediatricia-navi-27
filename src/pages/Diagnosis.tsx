import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { InfoIcon } from "lucide-react";

const Diagnosis = () => {
  const [clinicalFindings, setClinicalFindings] = useState("");
  const [ageGroup, setAgeGroup] = useState("");
  const [temperature, setTemperature] = useState("");
  const [heartRate, setHeartRate] = useState("");
  const [respiratoryRate, setRespiratoryRate] = useState("");
  const [labResults, setLabResults] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Generating diagnosis with:", {
      clinicalFindings,
      ageGroup,
      temperature,
      heartRate,
      respiratoryRate,
      labResults,
    });
    // Add your diagnosis generation logic here
  };

  const handleReset = () => {
    setClinicalFindings("");
    setAgeGroup("");
    setTemperature("");
    setHeartRate("");
    setRespiratoryRate("");
    setLabResults("");
  };

  return (
    <div className="animate-fade-in max-w-4xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">
        Symptom-Based Diagnosis
      </h1>

      <Alert className="bg-warning/20 border-warning mb-6">
        <InfoIcon className="h-4 w-4" />
        <AlertDescription>
          Medical Disclaimer: This tool is for educational purposes only and should
          not replace professional medical judgment. Always rely on your clinical
          expertise for medical decisions.
        </AlertDescription>
      </Alert>

      <Card className="p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div>
              <label
                htmlFor="clinicalFindings"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Clinical Findings
              </label>
              <Textarea
                id="clinicalFindings"
                placeholder="Enter positive clinical findings..."
                value={clinicalFindings}
                onChange={(e) => setClinicalFindings(e.target.value)}
                className="min-h-[100px]"
              />
            </div>

            <div>
              <label
                htmlFor="ageGroup"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Patient Age Group
              </label>
              <Select value={ageGroup} onValueChange={setAgeGroup}>
                <SelectTrigger id="ageGroup">
                  <SelectValue placeholder="Select age group..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newborn">Newborn (0-28 days)</SelectItem>
                  <SelectItem value="infant">Infant (1-12 months)</SelectItem>
                  <SelectItem value="toddler">Toddler (1-3 years)</SelectItem>
                  <SelectItem value="preschool">Preschool (3-5 years)</SelectItem>
                  <SelectItem value="schoolAge">School Age (5-12 years)</SelectItem>
                  <SelectItem value="adolescent">Adolescent (12-18 years)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Vital Signs (if relevant)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label
                    htmlFor="temperature"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Temperature (°C)
                  </label>
                  <Input
                    id="temperature"
                    type="number"
                    step="0.1"
                    placeholder="36.5"
                    value={temperature}
                    onChange={(e) => setTemperature(e.target.value)}
                  />
                </div>
                <div>
                  <label
                    htmlFor="heartRate"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Heart Rate (bpm)
                  </label>
                  <Input
                    id="heartRate"
                    type="number"
                    placeholder="80"
                    value={heartRate}
                    onChange={(e) => setHeartRate(e.target.value)}
                  />
                </div>
                <div>
                  <label
                    htmlFor="respiratoryRate"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Respiratory Rate
                  </label>
                  <Input
                    id="respiratoryRate"
                    type="number"
                    placeholder="16"
                    value={respiratoryRate}
                    onChange={(e) => setRespiratoryRate(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div>
              <label
                htmlFor="labResults"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Laboratory Results (if available)
              </label>
              <Textarea
                id="labResults"
                placeholder="Enter relevant laboratory findings..."
                value={labResults}
                onChange={(e) => setLabResults(e.target.value)}
                className="min-h-[100px]"
              />
            </div>
          </div>

          <div className="flex gap-4 justify-end">
            <Button
              type="button"
              variant="outline"
              onClick={handleReset}
              className="w-full md:w-auto"
            >
              Start New Assessment
            </Button>
            <Button type="submit" className="w-full md:w-auto">
              Generate Differential Diagnosis
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default Diagnosis;