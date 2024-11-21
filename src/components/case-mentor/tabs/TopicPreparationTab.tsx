import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Book, ListCheck, FileText } from "lucide-react";

export const TopicPreparationTab = () => {
  return (
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
  );
};