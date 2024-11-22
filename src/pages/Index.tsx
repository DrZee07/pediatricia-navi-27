import { Link } from "react-router-dom";
import { Stethoscope, Calculator, Book, Ambulance, Bot } from "lucide-react";

const Index = () => {
  const features = [
    {
      title: "Symptom-Based Diagnosis",
      description: "AI-powered differential diagnosis generator",
      icon: <Stethoscope className="w-12 h-12 text-primary" />,
      path: "/diagnosis",
    },
    {
      title: "Calculator",
      description: "Pediatric medication dosage calculator",
      icon: <Calculator className="w-12 h-12 text-primary" />,
      path: "/calculator",
    },
    {
      title: "Emergency",
      description: "Quick access to emergency guidelines",
      icon: <Ambulance className="w-12 h-12 text-primary" />,
      path: "/emergency",
    },
    {
      title: "Resources",
      description: "Case-based learning and reference materials",
      icon: <Book className="w-12 h-12 text-primary" />,
      path: "/resources",
    },
  ];

  return (
    <div className="animate-fade-in">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to NelsonAssist-AI
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Your intelligent companion for pediatric healthcare, powered by the Nelson
          Textbook of Pediatrics
        </p>
        <div className="mt-6 bg-primary/5 p-6 rounded-lg max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Bot className="w-8 h-8 text-primary" />
            <h2 className="text-2xl font-semibold text-primary">Pediatric Knowledge at Your Fingertips</h2>
          </div>
          <p className="text-gray-700">
            Access instant, AI-powered pediatric expertise anytime, anywhere. Our AI Assistant helps you make informed decisions with reliable, evidence-based information from the Nelson Textbook of Pediatrics.
          </p>
          <Link 
            to="/ai-assistant" 
            className="inline-block mt-4 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
          >
            Chat with AI Assistant
          </Link>
        </div>
      </section>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature) => (
          <Link
            key={feature.title}
            to={feature.path}
            className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
          >
            <div className="flex flex-col items-center text-center">
              {feature.icon}
              <h2 className="mt-4 text-xl font-semibold text-gray-900">
                {feature.title}
              </h2>
              <p className="mt-2 text-gray-600">{feature.description}</p>
            </div>
          </Link>
        ))}
      </div>

      <section className="mt-12 text-center">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Evidence-Based Practice
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Access reliable, up-to-date information from the Nelson Textbook of
          Pediatrics to support your clinical decisions
        </p>
      </section>
    </div>
  );
};

export default Index;