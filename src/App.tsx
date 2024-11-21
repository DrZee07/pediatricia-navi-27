import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainNav from "./components/MainNav";
import Index from "./pages/Index";
import Diagnosis from "./pages/Diagnosis";
import Calculator from "./pages/Calculator";
import Emergency from "./pages/Emergency";
import Resources from "./pages/Resources";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <MainNav />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/diagnosis" element={<Diagnosis />} />
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/emergency" element={<Emergency />} />
            <Route path="/resources" element={<Resources />} />
          </Routes>
        </main>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;