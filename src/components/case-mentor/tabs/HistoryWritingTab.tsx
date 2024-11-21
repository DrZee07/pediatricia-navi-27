import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

export const HistoryWritingTab = () => {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="space-y-4">
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
      </CardContent>
    </Card>
  );
};