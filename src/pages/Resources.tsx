import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Book, Search, BookOpen, GraduationCap, Bookmark, FileText, Video, Link as LinkIcon } from "lucide-react";

const Resources = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const guidelines = [
    {
      title: "Growth & Development Charts",
      description: "WHO and CDC growth charts with interpretation guidelines",
      type: "document",
      source: "Nelson Textbook of Pediatrics"
    },
    {
      title: "Vaccination Schedules",
      description: "Complete immunization schedules by age group",
      type: "document",
      source: "Nelson Textbook of Pediatrics"
    },
    {
      title: "Developmental Milestones",
      description: "Comprehensive guide to child development stages",
      type: "document",
      source: "Nelson Textbook of Pediatrics"
    }
  ];

  const clinicalResources = [
    {
      title: "Physical Examination Techniques",
      description: "Step-by-step guide for pediatric physical examination",
      format: "video"
    },
    {
      title: "Common Pediatric Procedures",
      description: "Illustrated guides for common procedures",
      format: "document"
    },
    {
      title: "Case Studies Library",
      description: "Collection of educational pediatric cases",
      format: "interactive"
    }
  ];

  const filteredResources = [...guidelines, ...clinicalResources].filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getIcon = (format: string) => {
    switch (format) {
      case "video":
        return <Video className="w-5 h-5" />;
      case "document":
        return <FileText className="w-5 h-5" />;
      case "interactive":
        return <LinkIcon className="w-5 h-5" />;
      default:
        return <BookOpen className="w-5 h-5" />;
    }
  };

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
          placeholder="Search resources..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <Tabs defaultValue="guidelines" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="guidelines" className="flex items-center gap-2">
            <FileText className="w-4 h-4" />
            Clinical Guidelines
          </TabsTrigger>
          <TabsTrigger value="resources" className="flex items-center gap-2">
            <Video className="w-4 h-4" />
            Educational Resources
          </TabsTrigger>
          <TabsTrigger value="bookmarks" className="flex items-center gap-2">
            <Bookmark className="w-4 h-4" />
            My Bookmarks
          </TabsTrigger>
        </TabsList>

        <TabsContent value="guidelines" className="mt-6">
          <ScrollArea className="h-[60vh]">
            <div className="grid gap-4">
              {guidelines.map((item, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-200">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-primary mb-1">{item.title}</h3>
                        <p className="text-sm text-gray-600">{item.description}</p>
                        <p className="text-xs text-gray-500 mt-2">Source: {item.source}</p>
                      </div>
                      {getIcon(item.type)}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </ScrollArea>
        </TabsContent>

        <TabsContent value="resources" className="mt-6">
          <ScrollArea className="h-[60vh]">
            <div className="grid gap-4">
              {clinicalResources.map((item, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-200">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-primary mb-1">{item.title}</h3>
                        <p className="text-sm text-gray-600">{item.description}</p>
                        <p className="text-xs text-gray-500 mt-2">Format: {item.format}</p>
                      </div>
                      {getIcon(item.format)}
                    </div>
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
              Save important resources for quick access
            </p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Resources;