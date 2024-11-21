import { Card } from "@/components/ui/card";
import { Book } from "lucide-react";

const Resources = () => {
  const resources = [
    {
      title: "Case Library",
      description: "Access comprehensive case studies for learning",
    },
    {
      title: "Clinical Guidelines",
      description: "Evidence-based practice guidelines",
    },
    {
      title: "Educational Materials",
      description: "Learning resources for medical education",
    },
    {
      title: "Reference Tools",
      description: "Quick reference guides and charts",
    },
  ];

  return (
    <div className="animate-fade-in">
      <div className="flex items-center gap-4 mb-6">
        <Book className="w-8 h-8 text-primary" />
        <h1 className="text-3xl font-bold text-gray-900">
          Learning Resources
        </h1>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {resources.map((resource) => (
          <Card
            key={resource.title}
            className="p-6 hover:shadow-lg transition-shadow duration-200 cursor-pointer"
          >
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              {resource.title}
            </h2>
            <p className="text-gray-600">{resource.description}</p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Resources;