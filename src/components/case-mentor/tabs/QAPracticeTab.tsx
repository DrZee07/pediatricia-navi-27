import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, ListCheck, FileText } from "lucide-react";

export const QAPracticeTab = () => {
  return (
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
  );
};