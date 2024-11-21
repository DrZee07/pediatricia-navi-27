import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { BookOpen, Calendar, Users, MessageSquare, Star } from "lucide-react";

const JournalClub = () => {
  const articles = [
    {
      title: "Recent Advances in Pediatric Vaccination",
      journal: "Nelson Journal of Pediatrics",
      date: "2024",
      summary: "Latest developments in vaccination schedules and new vaccine technologies.",
      impact: "High",
      citations: 45,
      discussionCount: 12
    },
    {
      title: "Management of Childhood Asthma",
      journal: "Pediatric Respiratory Reviews",
      date: "2024",
      summary: "Updated guidelines for asthma management in children.",
      impact: "High",
      citations: 38,
      discussionCount: 8
    },
    {
      title: "Early Detection of Developmental Delays",
      journal: "Developmental Medicine & Child Neurology",
      date: "2024",
      summary: "New screening tools and intervention strategies.",
      impact: "Medium",
      citations: 27,
      discussionCount: 15
    }
  ];

  const upcomingDiscussions = [
    {
      title: "Pediatric COVID-19 Long-Term Effects",
      date: "Next Tuesday, 2:00 PM",
      participants: 12,
      status: "Open for Registration"
    },
    {
      title: "Neonatal Sepsis Management",
      date: "Friday, 3:30 PM",
      participants: 8,
      status: "Registration Closed"
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

      <Tabs defaultValue="latest" className="w-full">
        <TabsList>
          <TabsTrigger value="latest">Latest Articles</TabsTrigger>
          <TabsTrigger value="discussions">Upcoming Discussions</TabsTrigger>
          <TabsTrigger value="favorites">My Favorites</TabsTrigger>
        </TabsList>

        <TabsContent value="latest" className="space-y-4">
          {articles.map((article, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-200">
              <div className="flex justify-between items-start">
                <div className="space-y-2">
                  <h2 className="text-xl font-semibold text-primary">{article.title}</h2>
                  <div className="text-sm text-gray-500">
                    {article.journal} • {article.date}
                  </div>
                  <p className="text-gray-600">{article.summary}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <Star className="w-4 h-4" />
                      Impact: {article.impact}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {article.citations} citations
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageSquare className="w-4 h-4" />
                      {article.discussionCount} discussions
                    </span>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  Read More
                </Button>
              </div>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="discussions" className="space-y-4">
          {upcomingDiscussions.map((discussion, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-200">
              <div className="flex justify-between items-start">
                <div className="space-y-2">
                  <h2 className="text-xl font-semibold text-primary">{discussion.title}</h2>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Calendar className="w-4 h-4" />
                    {discussion.date}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Users className="w-4 h-4" />
                    {discussion.participants} participants
                  </div>
                </div>
                <Button variant={discussion.status === "Open for Registration" ? "default" : "secondary"}>
                  {discussion.status}
                </Button>
              </div>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="favorites">
          <div className="text-center py-8">
            <Star className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900">No Favorites Yet</h3>
            <p className="text-gray-600 mt-2">
              Star articles to add them to your favorites
            </p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default JournalClub;