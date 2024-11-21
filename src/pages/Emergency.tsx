import { Card } from "@/components/ui/card";
import { Ambulance } from "lucide-react";

const Emergency = () => {
  const protocols = [
    {
      title: "Pediatric Basic Life Support",
      description: "Step-by-step guide for pediatric CPR",
    },
    {
      title: "Anaphylaxis Management",
      description: "Emergency response for severe allergic reactions",
    },
    {
      title: "Status Epilepticus",
      description: "Protocol for managing prolonged seizures",
    },
    {
      title: "Respiratory Distress",
      description: "Emergency management of breathing difficulties",
    },
  ];

  return (
    <div className="animate-fade-in">
      <div className="flex items-center gap-4 mb-6">
        <Ambulance className="w-8 h-8 text-destructive" />
        <h1 className="text-3xl font-bold text-gray-900">
          Emergency Protocols
        </h1>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {protocols.map((protocol) => (
          <Card
            key={protocol.title}
            className="p-6 hover:shadow-lg transition-shadow duration-200 cursor-pointer"
          >
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              {protocol.title}
            </h2>
            <p className="text-gray-600">{protocol.description}</p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Emergency;