import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Send, Bot } from "lucide-react";

const API_URL = "https://api-inference.huggingface.co/models/openai-community/gpt2";
const API_KEY = "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";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export const AIChatbot = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const systemPrompt = `You are a knowledgeable assistant specialized in pediatric healthcare. 
    Provide accurate, concise, and empathetic answers to user questions. 
    Ensure your responses are easy to understand and tailored to the needs of parents and caregivers. 
    Cite reliable sources if necessary.`;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
        body: JSON.stringify({
          inputs: `${systemPrompt}\n\nUser: ${input}\nAssistant:`,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to get response from AI");
      }

      const data = await response.json();
      const aiMessage: Message = {
        role: "assistant",
        content: data[0].generated_text || "I apologize, but I couldn't generate a response.",
      };

      setMessages((prev) => [...prev, aiMessage]);
      console.log("AI Response received:", aiMessage);
    } catch (error) {
      console.error("Error in AI chat:", error);
      toast({
        title: "Error",
        description: "Failed to get response from AI assistant. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center gap-2 p-4 border-b">
        <Bot className="w-6 h-6 text-primary" />
        <h1 className="text-xl font-semibold">Pediatric AI Assistant</h1>
      </div>

      <div className="flex-1 overflow-y-auto flex flex-col-reverse p-4 space-y-reverse space-y-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${
              message.role === "user" ? "justify-end" : "justify-start"
            } animate-fade-in`}
          >
            <div
              className={`max-w-[80%] p-3 rounded-lg ${
                message.role === "user"
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted"
              }`}
            >
              {message.content}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="max-w-[80%] p-3 rounded-lg bg-muted animate-pulse">
              Thinking...
            </div>
          </div>
        )}
      </div>

      <div className="border-t p-4">
        <form onSubmit={handleSubmit} className="flex gap-2">
          <Textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask a question about pediatric care..."
            className="flex-1 min-h-[60px] max-h-[120px]"
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSubmit(e);
              }
            }}
          />
          <Button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="self-end"
          >
            <Send className="w-4 h-4" />
          </Button>
        </form>
      </div>
    </div>
  );
};