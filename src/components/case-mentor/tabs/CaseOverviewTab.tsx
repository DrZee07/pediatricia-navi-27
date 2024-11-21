import { Card, CardContent } from "@/components/ui/card";

export const CaseOverviewTab = () => {
  return (
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
        </div>
      </CardContent>
    </Card>
  );
};