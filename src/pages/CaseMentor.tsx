import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Plus, FolderCheck, Play, Check, ListCheck, Book, FileText } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const CaseMentor = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const { toast } = useToast();

  const handleNewCase = () => {
    console.log("Creating new case");
    toast({
      title: "New Case",
      description: "Starting a new case input session",
    });
  };

  const handleSavedCases = () => {
    console.log("Viewing saved cases");
    toast({
      title: "Saved Cases",
      description: "Loading your saved cases",
    });
  };

  const handlePracticeMode = () => {
    console.log("Entering practice mode");
    toast({
      title: "Practice Mode",
      description: "Entering practice mode session",
    });
  };

  return (
    <div className="animate-fade-in space-y-6">
      {/* Header Section */}
      <div className="sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-10 border-b pb-4">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold text-primary">
            CaseMentor – Your Personalized Case-Based Guide
          </h1>
          <p className="text-muted-foreground">
            Master clinical cases with insights, differentials, and structured learning
          </p>
          <div className="flex flex-wrap gap-4 mt-4">
            <Button onClick={handleNewCase} className="flex items-center gap-2">
              <Plus className="w-4 h-4" />
              Input New Case
            </Button>
            <Button variant="outline" onClick={handleSavedCases} className="flex items-center gap-2">
              <FolderCheck className="w-4 h-4" />
              View Saved Cases
            </Button>
            <Button variant="secondary" onClick={handlePracticeMode} className="flex items-center gap-2">
              <Play className="w-4 h-4" />
              Practice Mode
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <Tabs defaultValue="input" className="space-y-4">
        <TabsList className="w-full grid grid-cols-1 md:grid-cols-5 gap-2">
          <TabsTrigger value="input" className="px-4 py-2">Case Input</TabsTrigger>
          <TabsTrigger value="overview" className="px-4 py-2">Case Overview</TabsTrigger>
          <TabsTrigger value="history" className="px-4 py-2">History Writing</TabsTrigger>
          <TabsTrigger value="topic" className="px-4 py-2">Topic Preparation</TabsTrigger>
          <TabsTrigger value="practice" className="px-4 py-2">Q&A Practice</TabsTrigger>
        </TabsList>

        {/* Case Input Tab */}
        <TabsContent value="input" className="space-y-4">
          <Card>
            <CardContent className="p-6">
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input placeholder="Patient Name" />
                  <Input type="number" placeholder="Age" />
                  <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2">
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
                <Textarea placeholder="Presenting Complaints" className="min-h-[100px]" />
                <Textarea placeholder="History Details" className="min-h-[100px]" />
                <Textarea placeholder="Examination Findings" className="min-h-[100px]" />
                <Button type="submit" className="w-full">
                  <Check className="w-4 h-4 mr-2" />
                  Submit Case
                </Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Case Overview Tab */}
        <TabsContent value="overview" className="space-y-4">
          <Card>
            <CardContent className="p-6">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Positive Findings</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <h4 className="font-medium">History</h4>
                      <p className="text-sm text-muted-foreground">
                        Persistent cough, fever (5 days)
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium">Examination</h4>
                      <p className="text-sm text-muted-foreground">
                        Tachypnea, retractions, crepitations
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium">Investigation</h4>
                      <p className="text-sm text-muted-foreground">
                        WBC elevated, CXR: consolidation
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Differential Diagnoses</h3>
                  <div className="space-y-4">
                    {["Pneumonia", "Bronchiolitis", "TB"].map((diagnosis, index) => (
                      <Card key={index}>
                        <CardContent className="p-4">
                          <h4 className="font-medium mb-2">{diagnosis}</h4>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <p className="text-sm font-medium text-green-600">Favoring Points</p>
                              <p className="text-sm text-muted-foreground">
                                {index === 0 && "Fever, CXR consolidation"}
                                {index === 1 && "Tachypnea"}
                                {index === 2 && "TB endemic area"}
                              </p>
                            </div>
                            <div>
                              <p className="text-sm font-medium text-red-600">Against Points</p>
                              <p className="text-sm text-muted-foreground">
                                {index === 0 && "No chronic symptoms"}
                                {index === 1 && "No wheezing"}
                                {index === 2 && "Acute presentation"}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* History Writing Tab */}
        <TabsContent value="history" className="space-y-4">
          <Card>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">History Writing Assistant</h3>
                  <div className="space-y-4">
                    <Textarea placeholder="Chief Complaint" className="min-h-[50px]" />
                    <Textarea placeholder="History of Present Illness (HPI)" className="min-h-[100px]" />
                    <Textarea placeholder="Past Medical History" className="min-h-[100px]" />
                    <Textarea placeholder="Family History" className="min-h-[100px]" />
                    <Textarea placeholder="Social History" className="min-h-[100px]" />
                    <Button className="w-full">
                      <FileText className="w-4 h-4 mr-2" />
                      Generate Draft
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Topic Preparation Tab */}
        <TabsContent value="topic" className="space-y-4">
          <Card>
            <CardContent className="p-6">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Quick Reference Guide</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card>
                      <CardContent className="p-4">
                        <h4 className="font-medium mb-2">Diagnosis</h4>
                        <p className="text-sm text-muted-foreground">
                          Key diagnostic criteria and approach
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-4">
                        <h4 className="font-medium mb-2">Management</h4>
                        <p className="text-sm text-muted-foreground">
                          Treatment guidelines and monitoring
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4">Study Resources</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Button variant="outline" className="h-auto py-4 flex flex-col gap-2">
                      <Book className="w-4 h-4" />
                      <span>Nelson Chapter</span>
                    </Button>
                    <Button variant="outline" className="h-auto py-4 flex flex-col gap-2">
                      <ListCheck className="w-4 h-4" />
                      <span>Flashcards</span>
                    </Button>
                    <Button variant="outline" className="h-auto py-4 flex flex-col gap-2">
                      <FileText className="w-4 h-4" />
                      <span>Guidelines</span>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Q&A Practice Tab */}
        <TabsContent value="practice" className="space-y-4">
          <Card>
            <CardContent className="p-6">
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Button className="h-auto py-8 flex flex-col gap-2">
                    <Play className="w-6 h-6" />
                    <span>Viva Practice</span>
                  </Button>
                  <Button variant="secondary" className="h-auto py-8 flex flex-col gap-2">
                    <ListCheck className="w-6 h-6" />
                    <span>MCQs</span>
                  </Button>
                  <Button variant="outline" className="h-auto py-8 flex flex-col gap-2">
                    <FileText className="w-6 h-6" />
                    <span>Written Questions</span>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Sidebar - Optional */}
      <div className="hidden lg:block fixed right-4 top-24 w-64 space-y-4">
        <Card>
          <CardContent className="p-4">
            <h3 className="font-medium mb-2">Quick Links</h3>
            <div className="space-y-2">
              <Button variant="ghost" className="w-full justify-start">
                <FolderCheck className="w-4 h-4 mr-2" />
                Saved Cases
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <Book className="w-4 h-4 mr-2" />
                CaseMentor Guide
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <FileText className="w-4 h-4 mr-2" />
                Nelson References
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CaseMentor;