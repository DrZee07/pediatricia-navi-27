import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export const CaseInputTab = () => {
  return (
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
  );
};