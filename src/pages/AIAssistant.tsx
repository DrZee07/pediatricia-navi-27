import { AIChatbot } from "@/components/ai-chat/AIChatbot";

const AIAssistant = () => {
  return (
    <div className="h-[calc(100vh-4rem)] flex flex-col animate-fade-in">
      <div className="flex-1 overflow-hidden">
        <AIChatbot />
      </div>
    </div>
  );
};

export default AIAssistant;