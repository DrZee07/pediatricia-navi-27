import { Card } from "@/components/ui/card";
import { BookOpen } from "lucide-react";

const JournalClub = () => {
  const articles = [
    {
      title: "Recent Advances in Pediatric Vaccination",
      journal: "Nelson Journal of Pediatrics",
      date: "2024",
      summary: "Latest developments in vaccination schedules and new vaccine technologies."
    },
    {
      title: "Management of Childhood Asthma",
      journal: "Pediatric Respiratory Reviews",
      date: "2024",
      summary: "Updated guidelines for asthma management in children."
    },
    {
      title: "Early Detection of Developmental Delays",
      journal: "Developmental Medicine & Child Neurology",
      date: "2024",
      summary: "New screening tools and intervention strategies."
    }
  ];

  return (
    <div className="animate-fade-in space-y-6">
      <div className="flex items-center gap-4 mb-6">
        <BookOpen className="w-8 h-8 text-primary" />
        <h1 className="text-3xl font-bold text-gray-900">
          Pediatric Journal Club
        </h1>
      </div>

      <p className="text-gray-600 mb-8">
        Stay updated with the latest research and evidence-based practices in pediatric medicine.
        All articles are curated from the Nelson Textbook of Pediatrics and related journals.
      </p>

      <div className="grid gap-6">
        {articles.map((article, index) => (
          <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-200">
            <h2 className="text-xl font-semibold text-primary mb-2">{article.title}</h2>
            <div className="text-sm text-gray-500 mb-3">
              {article.journal} • {article.date}
            </div>
            <p className="text-gray-600">{article.summary}</p>
          </Card>
        ))}
      </div>

      <div className="text-center text-gray-600 mt-8">
        <p>New articles are added regularly based on the latest updates in pediatric medicine.</p>
      </div>
    </div>
  );
};

export default JournalClub;