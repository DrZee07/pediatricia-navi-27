import { AIChatbot } from "@/components/ai-chat/AIChatbot";
import { Card } from "@/components/ui/card";

const ChatBot = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <Card className="h-[80vh]">
          <AIChatbot />
        </Card>
      </div>
    </div>
  );
};

export default ChatBot;