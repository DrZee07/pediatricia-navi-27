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
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [activityLevel, setActivityLevel] = useState("");
  const [calories, setCalories] = useState<number | null>(null);

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

  return (
    <div className="animate-fade-in max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">
        Pediatric Calculators
      </h1>
      
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

      {/* Keep space for other calculators */}
      <div className="text-center text-gray-600">
        <p>More pediatric calculators coming soon...</p>
      </div>
    </div>
  );
};

export default Calculator;
