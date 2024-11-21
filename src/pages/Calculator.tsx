import { CalorieCalculator } from "@/components/calculator/CalorieCalculator";
import { DrugCalculator } from "@/components/calculator/DrugCalculator";

const Calculator = () => {
  return (
    <div className="animate-fade-in space-y-8">
      <CalorieCalculator />
      <DrugCalculator />
    </div>
  );
};

export default Calculator;