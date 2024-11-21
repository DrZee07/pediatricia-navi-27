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
import { calculateCalories } from "@/utils/calculatorUtils";

export const CalorieCalculator = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [activityLevel, setActivityLevel] = useState("");
  const [calories, setCalories] = useState<number | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const handleCalculate = () => {
    if (!weight || !height || !age || !gender || !activityLevel) {
      toast.error("Please fill in all fields");
      return;
    }

    setIsCalculating(true);
    console.log("Calculating calories with inputs:", { weight, height, age, gender, activityLevel });

    try {
      const result = calculateCalories(weight, height, age, gender, activityLevel);
      setCalories(result);
      toast.success("Calories calculated successfully!");
    } catch (error) {
      console.error("Error calculating calories:", error);
      toast.error("Error calculating calories. Please check your inputs.");
    } finally {
      setIsCalculating(false);
    }
  };

  return (
    <Card className="p-6 mb-6 animate-fade-in">
      <h2 className="text-2xl font-semibold mb-4">Daily Calorie Requirements</h2>
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="weight" className="block text-sm font-medium text-gray-700 mb-2">
              Weight (kg)
            </label>
            <Input
              id="weight"
              type="number"
              placeholder="Enter weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              aria-label="Weight in kilograms"
            />
          </div>
          <div>
            <label htmlFor="height" className="block text-sm font-medium text-gray-700 mb-2">
              Height (cm)
            </label>
            <Input
              id="height"
              type="number"
              placeholder="Enter height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              aria-label="Height in centimeters"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-2">
              Age (years)
            </label>
            <Input
              id="age"
              type="number"
              placeholder="Enter age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              aria-label="Age in years"
            />
          </div>
          <div>
            <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-2">
              Gender
            </label>
            <Select onValueChange={setGender}>
              <SelectTrigger id="gender" aria-label="Select gender">
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
          <label htmlFor="activity" className="block text-sm font-medium text-gray-700 mb-2">
            Activity Level
          </label>
          <Select onValueChange={setActivityLevel}>
            <SelectTrigger id="activity" aria-label="Select activity level">
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
          onClick={handleCalculate}
          className="w-full"
          disabled={isCalculating}
        >
          {isCalculating ? "Calculating..." : "Calculate Calories"}
        </Button>

        {calories && (
          <div className="mt-4 p-4 bg-primary/10 rounded-lg animate-fade-in">
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
  );
};