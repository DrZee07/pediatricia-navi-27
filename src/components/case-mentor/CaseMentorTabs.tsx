import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CaseInputTab } from "./tabs/CaseInputTab";
import { CaseOverviewTab } from "./tabs/CaseOverviewTab";
import { HistoryWritingTab } from "./tabs/HistoryWritingTab";
import { TopicPreparationTab } from "./tabs/TopicPreparationTab";
import { QAPracticeTab } from "./tabs/QAPracticeTab";

export const CaseMentorTabs = () => {
  return (
    <Tabs defaultValue="input" className="space-y-4">
      <TabsList className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2 p-1">
        <TabsTrigger value="input" className="w-full px-4 py-2 text-sm">
          Case Input
        </TabsTrigger>
        <TabsTrigger value="overview" className="w-full px-4 py-2 text-sm">
          Case Overview
        </TabsTrigger>
        <TabsTrigger value="history" className="w-full px-4 py-2 text-sm">
          History Writing
        </TabsTrigger>
        <TabsTrigger value="topic" className="w-full px-4 py-2 text-sm">
          Topic Preparation
        </TabsTrigger>
        <TabsTrigger value="practice" className="w-full px-4 py-2 text-sm">
          Q&A Practice
        </TabsTrigger>
      </TabsList>

      <TabsContent value="input">
        <CaseInputTab />
      </TabsContent>
      <TabsContent value="overview">
        <CaseOverviewTab />
      </TabsContent>
      <TabsContent value="history">
        <HistoryWritingTab />
      </TabsContent>
      <TabsContent value="topic">
        <TopicPreparationTab />
      </TabsContent>
      <TabsContent value="practice">
        <QAPracticeTab />
      </TabsContent>
    </Tabs>
  );
};