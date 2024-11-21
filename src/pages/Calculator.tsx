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

const Calculator = () => {
  const [weight, setWeight] = useState("");
  const [medication, setMedication] = useState("");

  return (
    <div className="animate-fade-in max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">
        Pediatric Drug Calculator
      </h1>
      
      <Card className="p-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Patient Weight (kg)
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
              Select Medication
            </label>
            <Select onValueChange={setMedication}>
              <SelectTrigger>
                <SelectValue placeholder="Choose medication" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="paracetamol">Paracetamol</SelectItem>
                <SelectItem value="ibuprofen">Ibuprofen</SelectItem>
                <SelectItem value="amoxicillin">Amoxicillin</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <Button className="w-full">Calculate Dose</Button>
        </div>
      </Card>
    </div>
  );
};

export default Calculator;