import { Card, CardContent } from "@/components/ui/card";

interface SearchResultsProps {
  query: string;
}

export const SearchResults = ({ query }: SearchResultsProps) => {
  // This is a placeholder for the actual search results
  // In a real implementation, this would fetch results from your backend
  const results = [
    {
      id: 1,
      title: "Pediatric Fever Management",
      excerpt: "Guidelines for managing fever in children...",
      category: "Clinical Guidelines",
    },
    {
      id: 2,
      title: "Respiratory Distress in Infants",
      excerpt: "Assessment and management of respiratory...",
      category: "Emergency Care",
    },
  ];

  if (!query) {
    return (
      <div className="text-center text-gray-500 py-8">
        Enter a search term to find relevant content
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {results.map((result) => (
        <Card key={result.id} className="hover:shadow-md transition-shadow">
          <CardContent className="p-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-semibold text-primary">
                  {result.title}
                </h3>
                <p className="text-sm text-gray-600 mt-1">{result.excerpt}</p>
              </div>
              <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                {result.category}
              </span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};