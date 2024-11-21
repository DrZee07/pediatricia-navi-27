export const calculateCalories = (
  weight: string,
  height: string,
  age: string,
  gender: string,
  activityLevel: string
): number => {
  const w = parseFloat(weight);
  const h = parseFloat(height);
  const a = parseFloat(age);

  if (isNaN(w) || isNaN(h) || isNaN(a)) {
    throw new Error("Invalid input values");
  }

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

  return Math.round(bmr * activityFactors[activityLevel as keyof typeof activityFactors]);
};

export const calculateDrugDosage = (
  drugName: string,
  patientAge: string,
  patientWeight: string
): string => {
  const weight = parseFloat(patientWeight);
  const age = parseFloat(patientAge);

  if (isNaN(weight) || isNaN(age)) {
    throw new Error("Invalid weight or age values");
  }

  if (weight <= 0 || age < 0) {
    throw new Error("Weight and age must be positive numbers");
  }

  // Calculate dosage (simplified example)
  return `${(weight * 0.1).toFixed(1)} - ${(weight * 0.2).toFixed(1)} mg/kg`;
};