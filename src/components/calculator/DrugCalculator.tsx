import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";
import { calculateDrugDosage } from "@/utils/calculatorUtils";

export const DrugCalculator = () => {
  const [drugName, setDrugName] = useState("");
  const [patientAge, setPatientAge] = useState("");
  const [patientWeight, setPatientWeight] = useState("");
  const [dosage, setDosage] = useState<string | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const handleCalculate = () => {
    if (!drugName || !patientAge || !patientWeight) {
      toast.error("Please fill in all fields");
      return;
    }

    setIsCalculating(true);
    console.log("Calculating drug dosage with inputs:", { drugName, patientAge, patientWeight });

    try {
      const result = calculateDrugDosage(drugName, patientAge, patientWeight);
      setDosage(result);
      toast.success("Drug dosage calculated");
    } catch (error) {
      console.error("Error calculating drug dosage:", error);
      toast.error("Error calculating dosage. Please check your inputs.");
    } finally {
      setIsCalculating(false);
    }
  };

  return (
    <Card className="p-6 animate-fade-in">
      <h2 className="text-2xl font-semibold mb-4">Drug Dosage Calculator</h2>
      <div className="space-y-4">
        <div>
          <label htmlFor="drugName" className="block text-sm font-medium text-gray-700 mb-2">
            Drug Name
          </label>
          <Input
            id="drugName"
            type="text"
            placeholder="Enter drug name"
            value={drugName}
            onChange={(e) => setDrugName(e.target.value)}
            aria-label="Drug name"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="patientAge" className="block text-sm font-medium text-gray-700 mb-2">
              Patient Age (years)
            </label>
            <Input
              id="patientAge"
              type="number"
              placeholder="Enter age"
              value={patientAge}
              onChange={(e) => setPatientAge(e.target.value)}
              aria-label="Patient age in years"
            />
          </div>
          <div>
            <label htmlFor="patientWeight" className="block text-sm font-medium text-gray-700 mb-2">
              Patient Weight (kg)
            </label>
            <Input
              id="patientWeight"
              type="number"
              placeholder="Enter weight"
              value={patientWeight}
              onChange={(e) => setPatientWeight(e.target.value)}
              aria-label="Patient weight in kilograms"
            />
          </div>
        </div>

        <Button 
          onClick={handleCalculate}
          className="w-full"
          disabled={isCalculating}
        >
          {isCalculating ? "Calculating..." : "Calculate Drug Dosage"}
        </Button>

        {dosage && (
          <div className="mt-4 p-4 bg-primary/10 rounded-lg animate-fade-in">
            <h3 className="text-lg font-semibold text-primary mb-2">
              Recommended Dosage Range
            </h3>
            <p className="text-2xl font-bold text-primary">
              {dosage}
            </p>
            <p className="text-sm text-gray-600 mt-2">
              Note: This is a general guideline. Always verify dosage with official medical references and adjust based on individual patient factors.
            </p>
          </div>
        )}
      </div>
    </Card>
  );
};