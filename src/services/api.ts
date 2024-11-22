import { KnowledgeBaseEntry } from "@/types/knowledge";

// Simulated database of knowledge base entries
const knowledgeBaseData: KnowledgeBaseEntry[] = [
  {
    id: "1",
    title: "Pediatric Fever Management",
    content: "Fever in children is generally defined as a temperature of 38°C (100.4°F) or higher. Management includes monitoring temperature, ensuring adequate hydration, and appropriate use of antipyretics when necessary."
  },
  {
    id: "2",
    title: "Respiratory Assessment",
    content: "Key components of pediatric respiratory assessment include work of breathing, respiratory rate, breath sounds, and oxygen saturation. Normal respiratory rates vary by age."
  },
  {
    id: "3",
    title: "Common Childhood Vaccinations",
    content: "Essential vaccines include DTaP, MMR, IPV, Hib, Hepatitis B, and Varicella. Following the recommended immunization schedule is crucial for optimal protection."
  }
];

export const fetchKnowledgeBase = async (): Promise<KnowledgeBaseEntry[]> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  return knowledgeBaseData;
};