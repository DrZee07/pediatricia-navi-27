import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SignInForm from "@/components/auth/SignInForm";
import SignUpForm from "@/components/auth/SignUpForm";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Stethoscope } from "lucide-react";

const Auth = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const handleGuestAccess = () => {
    setIsLoading(true);
    console.log("Guest access initiated");
    
    // Simulate guest login process
    setTimeout(() => {
      toast({
        title: "Welcome Guest User",
        description: "You have limited access to the application features",
      });
      navigate("/");
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="container mx-auto flex flex-col items-center justify-center min-h-[80vh] px-4">
      <div className="flex flex-col items-center space-y-6 w-full max-w-md">
        <div className="flex items-center space-x-2">
          <Stethoscope className="h-12 w-12 text-primary" />
          <h1 className="text-3xl font-bold">NelsonAssist-AI</h1>
        </div>
        
        <Card className="w-full p-6">
          <Tabs defaultValue="signin" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="signin">Sign In</TabsTrigger>
              <TabsTrigger value="signup">Sign Up</TabsTrigger>
            </TabsList>
            
            <TabsContent value="signin">
              <SignInForm />
            </TabsContent>
            
            <TabsContent value="signup">
              <SignUpForm />
            </TabsContent>
          </Tabs>
          
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Or continue as
                </span>
              </div>
            </div>
            
            <Button
              variant="outline"
              className="w-full mt-4"
              onClick={handleGuestAccess}
              disabled={isLoading}
            >
              Guest Mode
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Auth;