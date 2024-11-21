import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Ambulance, Heart, Lungs, AlertTriangle, Brain, Search, Clock } from "lucide-react";

const Emergency = () => {
  const protocols = [
    {
      title: "Pediatric Basic Life Support",
      description: "Step-by-step guide for pediatric CPR",
      category: "Resuscitation",
      urgency: "Critical",
      steps: [
        "Check responsiveness and breathing",
        "Call emergency services",
        "Begin chest compressions",
        "Give rescue breaths"
      ]
    },
    {
      title: "Anaphylaxis Management",
      description: "Emergency response for severe allergic reactions",
      category: "Allergic",
      urgency: "Critical",
      steps: [
        "Assess airway and breathing",
        "Administer epinephrine",
        "Position patient appropriately",
        "Monitor vital signs"
      ]
    },
    {
      title: "Status Epilepticus",
      description: "Protocol for managing prolonged seizures",
      category: "Neurological",
      urgency: "Urgent",
      steps: [
        "Protect from injury",
        "Time the seizure",
        "Administer anti-epileptics",
        "Monitor oxygen saturation"
      ]
    },
    {
      title: "Respiratory Distress",
      description: "Emergency management of breathing difficulties",
      category: "Respiratory",
      urgency: "Urgent",
      steps: [
        "Assess work of breathing",
        "Check oxygen saturation",
        "Position appropriately",
        "Initiate oxygen therapy if needed"
      ]
    }
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Resuscitation":
        return <Heart className="w-5 h-5 text-red-500" />;
      case "Respiratory":
        return <Lungs className="w-5 h-5 text-blue-500" />;
      case "Neurological":
        return <Brain className="w-5 h-5 text-purple-500" />;
      case "Allergic":
        return <AlertTriangle className="w-5 h-5 text-yellow-500" />;
      default:
        return <AlertTriangle className="w-5 h-5 text-gray-500" />;
    }
  };

  return (
    <div className="animate-fade-in">
      <div className="flex items-center gap-4 mb-6">
        <Ambulance className="w-8 h-8 text-destructive" />
        <h1 className="text-3xl font-bold text-gray-900">
          Emergency Protocols
        </h1>
      </div>

      <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4 mb-6">
        <h2 className="text-lg font-semibold text-destructive mb-2 flex items-center gap-2">
          <Clock className="w-5 h-5" />
          Quick Access Protocols
        </h2>
        <p className="text-sm text-gray-700">
          These protocols are based on the Nelson Textbook of Pediatrics and current emergency medicine guidelines.
          Always use clinical judgment and follow local hospital protocols when applicable.
        </p>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList>
          <TabsTrigger value="all">All Protocols</TabsTrigger>
          <TabsTrigger value="critical">Critical</TabsTrigger>
          <TabsTrigger value="urgent">Urgent</TabsTrigger>
          <TabsTrigger value="recent">Recently Viewed</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-6">
          <ScrollArea className="h-[60vh]">
            <div className="grid md:grid-cols-2 gap-6">
              {protocols.map((protocol, index) => (
                <Card
                  key={index}
                  className="p-6 hover:shadow-lg transition-shadow duration-200"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-2">
                      {getCategoryIcon(protocol.category)}
                      <span className="text-sm font-medium text-gray-600">
                        {protocol.category}
                      </span>
                    </div>
                    <span className={`text-sm px-2 py-1 rounded ${
                      protocol.urgency === "Critical" 
                        ? "bg-red-100 text-red-700" 
                        : "bg-yellow-100 text-yellow-700"
                    }`}>
                      {protocol.urgency}
                    </span>
                  </div>

                  <h2 className="text-xl font-semibold text-gray-900 mb-2">
                    {protocol.title}
                  </h2>
                  <p className="text-gray-600 mb-4">{protocol.description}</p>

                  <div className="space-y-2">
                    {protocol.steps.map((step, stepIndex) => (
                      <div key={stepIndex} className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm">
                          {stepIndex + 1}
                        </span>
                        <span className="text-sm text-gray-700">{step}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 flex justify-end">
                    <Button>View Full Protocol</Button>
                  </div>
                </Card>
              ))}
            </div>
          </ScrollArea>
        </TabsContent>

        <TabsContent value="critical">
          <div className="grid md:grid-cols-2 gap-6">
            {protocols.filter(p => p.urgency === "Critical").map((protocol, index) => (
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
        </TabsContent>

        <TabsContent value="urgent">
          <div className="grid md:grid-cols-2 gap-6">
            {protocols.filter(p => p.urgency === "Urgent").map((protocol, index) => (
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
        </TabsContent>

        <TabsContent value="recent">
          <div className="text-center py-8">
            <Clock className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900">No Recent Protocols</h3>
            <p className="text-gray-600 mt-2">
              Protocols you view will appear here for quick access
            </p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Emergency;
