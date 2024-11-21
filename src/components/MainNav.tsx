import { useState } from "react";
import { Link } from "react-router-dom";
import { Stethoscope, Calculator, Book, Ambulance, Menu, X } from "lucide-react";

const MainNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Diagnosis", icon: <Stethoscope className="w-5 h-5" />, path: "/diagnosis" },
    { name: "Calculator", icon: <Calculator className="w-5 h-5" />, path: "/calculator" },
    { name: "Emergency", icon: <Ambulance className="w-5 h-5" />, path: "/emergency" },
    { name: "Resources", icon: <Book className="w-5 h-5" />, path: "/resources" },
  ];

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-primary font-bold text-xl">NelsonAssist-AI</span>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
              >
                {item.icon}
                <span className="ml-2">{item.name}</span>
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary hover:bg-gray-50"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                {item.icon}
                <span className="ml-2">{item.name}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default MainNav;