import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Book, Search, BookOpen, GraduationCap, Bookmark } from "lucide-react";

const Resources = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const knowledgeBase = [
    {
      title: "Growth & Development",
      description: "Comprehensive guide to pediatric growth and developmental milestones",
      type: "chapter"
    },
    {
      title: "Infectious Diseases",
      description: "Common and rare pediatric infections, diagnosis, and treatment protocols",
      type: "chapter"
    },
    {
      title: "Emergency Care",
      description: "Acute care and emergency management in pediatrics",
      type: "chapter"
    }
  ];

  const examResources = [
    {
      title: "FCPS Preparation",
      description: "Structured content for Fellowship exam preparation"
    },
    {
      title: "MCPS Study Guide",
      description: "Comprehensive study materials for Membership exam"
    },
    {
      title: "MRCPCH Questions",
      description: "Practice questions aligned with international standards"
    }
  ];

  const filteredKnowledge = knowledgeBase.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="animate-fade-in space-y-6">
      <div className="flex items-center gap-4 mb-6">
        <Book className="w-8 h-8 text-primary" />
        <h1 className="text-3xl font-bold text-gray-900">
          Learning Resources
        </h1>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
        <Input
          className="pl-10"
          placeholder="Search topics, chapters, or conditions..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <Tabs defaultValue="knowledge" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="knowledge" className="flex items-center gap-2">
            <BookOpen className="w-4 h-4" />
            Knowledge Base
          </TabsTrigger>
          <TabsTrigger value="exam" className="flex items-center gap-2">
            <GraduationCap className="w-4 h-4" />
            Exam Prep
          </TabsTrigger>
          <TabsTrigger value="bookmarks" className="flex items-center gap-2">
            <Bookmark className="w-4 h-4" />
            Bookmarks
          </TabsTrigger>
        </TabsList>

        <TabsContent value="knowledge" className="mt-6">
          <ScrollArea className="h-[60vh]">
            <div className="grid gap-4">
              {filteredKnowledge.map((item, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-200">
                  <CardHeader>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </ScrollArea>
        </TabsContent>

        <TabsContent value="exam" className="mt-6">
          <ScrollArea className="h-[60vh]">
            <div className="grid gap-4">
              {examResources.map((item, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-200">
                  <CardHeader>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </ScrollArea>
        </TabsContent>

        <TabsContent value="bookmarks" className="mt-6">
          <div className="text-center py-8">
            <Bookmark className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900">No Bookmarks Yet</h3>
            <p className="text-gray-600 mt-2">
              Start bookmarking chapters and topics for quick access
            </p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Resources;