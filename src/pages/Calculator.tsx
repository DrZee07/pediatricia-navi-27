import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

const Calculator = () => {
  // Existing calorie calculator state
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [activityLevel, setActivityLevel] = useState("");
  const [calories, setCalories] = useState<number | null>(null);

  // New drug calculator state
  const [drugName, setDrugName] = useState("");
  const [patientAge, setPatientAge] = useState("");
  const [patientWeight, setPatientWeight] = useState("");
  const [dosage, setDosage] = useState<string | null>(null);

  // Existing calorie calculation function
  const calculateCalories = () => {
    if (!weight || !height || !age || !gender || !activityLevel) {
      toast.error("Please fill in all fields");
      return;
    }

    const w = parseFloat(weight);
    const h = parseFloat(height);
    const a = parseFloat(age);

    // Schofield equation for children (3-10 years)
    let bmr;
    if (gender === "male") {
      bmr = (19.59 * w) + (130.3 * h / 100) + 414.9;
    } else {
      bmr = (16.97 * w) + (161.8 * h / 100) + 371.2;
    }

    // Activity factor
    const activityFactors = {
      sedentary: 1.2,
      light: 1.375,
      moderate: 1.55,
      active: 1.725,
      veryActive: 1.9
    };

    const totalCalories = Math.round(bmr * activityFactors[activityLevel as keyof typeof activityFactors]);
    setCalories(totalCalories);
    
    toast.success("Calories calculated successfully!");
    console.log("Calculated calories:", totalCalories);
  };

  // New drug dosage calculation function
  const calculateDrugDosage = () => {
    if (!drugName || !patientAge || !patientWeight) {
      toast.error("Please fill in all fields");
      return;
    }

    const weight = parseFloat(patientWeight);
    const age = parseFloat(patientAge);

    if (isNaN(weight) || isNaN(age)) {
      toast.error("Please enter valid numbers");
      return;
    }

    if (weight <= 0 || age < 0) {
      toast.error("Please enter valid weight and age");
      return;
    }

    // Calculate dosage (this is a simplified example)
    const calculatedDosage = `${weight * 0.1} - ${weight * 0.2} mg/kg`;
    setDosage(calculatedDosage);
    
    toast.success("Drug dosage calculated");
    console.log("Drug dosage calculated:", {
      drugName,
      patientAge,
      patientWeight,
      calculatedDosage
    });
  };

  return (
    <div className="animate-fade-in space-y-8">
      {/* Existing Calorie Calculator */}
      <Card className="p-6 mb-6">
        <h2 className="text-2xl font-semibold mb-4">Daily Calorie Requirements</h2>
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Weight (kg)
              </label>
              <Input
                type="number"
                placeholder="Enter weight"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Height (cm)
              </label>
              <Input
                type="number"
                placeholder="Enter height"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Age (years)
              </label>
              <Input
                type="number"
                placeholder="Enter age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Gender
              </label>
              <Select onValueChange={setGender}>
                <SelectTrigger>
                  <SelectValue placeholder="Select gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Activity Level
            </label>
            <Select onValueChange={setActivityLevel}>
              <SelectTrigger>
                <SelectValue placeholder="Select activity level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="sedentary">Sedentary (little to no exercise)</SelectItem>
                <SelectItem value="light">Light (exercise 1-3 times/week)</SelectItem>
                <SelectItem value="moderate">Moderate (exercise 3-5 times/week)</SelectItem>
                <SelectItem value="active">Active (exercise 6-7 times/week)</SelectItem>
                <SelectItem value="veryActive">Very Active (intense exercise daily)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button 
            onClick={calculateCalories}
            className="w-full"
          >
            Calculate Calories
          </Button>

          {calories && (
            <div className="mt-4 p-4 bg-primary/10 rounded-lg">
              <h3 className="text-lg font-semibold text-primary mb-2">
                Estimated Daily Calorie Needs
              </h3>
              <p className="text-2xl font-bold text-primary">
                {calories} calories/day
              </p>
              <p className="text-sm text-gray-600 mt-2">
                Based on the Schofield equation for children. This is an estimate and may need to be adjusted based on individual circumstances.
              </p>
            </div>
          )}
        </div>
      </Card>

      {/* New Drug Calculator */}
      <Card className="p-6">
        <h2 className="text-2xl font-semibold mb-4">Drug Dosage Calculator</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Drug Name
            </label>
            <Input
              type="text"
              placeholder="Enter drug name"
              value={drugName}
              onChange={(e) => setDrugName(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Patient Age (years)
              </label>
              <Input
                type="number"
                placeholder="Enter age"
                value={patientAge}
                onChange={(e) => setPatientAge(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Patient Weight (kg)
              </label>
              <Input
                type="number"
                placeholder="Enter weight"
                value={patientWeight}
                onChange={(e) => setPatientWeight(e.target.value)}
              />
            </div>
          </div>

          <Button 
            onClick={calculateDrugDosage}
            className="w-full"
          >
            Calculate Drug Dosage
          </Button>

          {dosage && (
            <div className="mt-4 p-4 bg-primary/10 rounded-lg">
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
    </div>
  );
};

export default Calculator;
