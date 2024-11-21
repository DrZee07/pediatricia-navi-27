import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

export const ContentEditor = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { toast } = useToast();

  const handleSave = () => {
    // This is a placeholder for the actual save functionality
    console.log("Saving content:", { title, content });
    toast({
      title: "Content saved",
      description: "Your changes have been saved successfully",
    });
  };

  return (
    <div className="mt-8 space-y-4">
      <h2 className="text-xl font-semibold mb-4">Content Editor</h2>
      <div className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-sm font-medium mb-1">
            Title
          </label>
          <Input
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter content title"
          />
        </div>
        <div>
          <label htmlFor="content" className="block text-sm font-medium mb-1">
            Content
          </label>
          <Textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Write your content here..."
            className="min-h-[200px]"
          />
        </div>
        <div className="flex justify-end gap-2">
          <Button variant="outline" onClick={() => {
            setTitle("");
            setContent("");
          }}>
            Clear
          </Button>
          <Button onClick={handleSave}>Save Content</Button>
        </div>
      </div>
    </div>
  );
};