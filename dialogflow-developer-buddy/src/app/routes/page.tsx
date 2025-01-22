'use client';

import { useState } from 'react';
import axios from 'axios';
import { FaRoute, FaLightbulb, FaCopy, FaCheck } from 'react-icons/fa';

export default function RoutesPage() {
  const [inputText, setInputText] = useState('');
  const [routes, setRoutes] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const getRouteExamples = async () => {
    if (!inputText.trim()) return;
    
    try {
      setLoading(true);
      const response = await axios.post('/api/generate-routes', {
        input: inputText
      });
      setRoutes(response.data.routes);
    } catch (error) {
      console.error('Error generating routes:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const examples = [
    "Generate routes for a restaurant booking chatbot",
    "Create routes for a weather information bot",
    "Design routes for a flight booking assistant"
  ];

  return (
    <div className="mt-12 min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5"></div>
      
      <div className="relative container mx-auto p-6 pt-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
            Route Generator
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Generate intelligent conversation routes for your Dialogflow chatbot with AI-powered suggestions.
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-3xl mx-auto space-y-8">
          {/* Input Section */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
            <div className="relative space-y-4 bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700/50">
              <label className="block text-sm font-medium text-gray-300">
                Describe Your Route Requirements
              </label>
              <textarea
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Describe the conversation flow you want to create..."
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-100 
                         placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent
                         transition-all duration-300 min-h-[100px]"
              />
              <button
                onClick={getRouteExamples}
                disabled={loading || !inputText.trim()}
                className="w-full flex items-center justify-center px-6 py-3 rounded-lg
                         bg-gradient-to-r from-blue-500 to-purple-600 
                         text-white font-medium transition-all duration-300
                         hover:from-blue-600 hover:to-purple-700
                         disabled:opacity-50 disabled:cursor-not-allowed
                         transform hover:scale-[1.02] active:scale-[0.98]
                         shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Generating Routes...
                  </>
                ) : (
                  <>
                    <FaRoute className="mr-2" />
                    Generate Routes
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Example Suggestions */}
          <div className="text-center space-y-4">
            <p className="text-sm text-gray-400 flex items-center justify-center">
              <FaLightbulb className="mr-2 text-yellow-400" />
              Try these examples:
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              {examples.map((example, index) => (
                <button
                  key={index}
                  onClick={() => setInputText(example)}
                  className="px-4 py-2 rounded-lg bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 
                           transition-colors duration-300 text-sm"
                >
                  {example}
                </button>
              ))}
            </div>
          </div>

          {/* Generated Routes */}
          {routes.length > 0 && (
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Generated Routes
              </h2>
              <div className="space-y-4">
                {routes.map((route, index) => (
                  <div
                    key={index}
                    className="group relative bg-gradient-to-br from-gray-800 to-gray-900 p-4 rounded-lg
                             border border-gray-700/50 hover:border-blue-500/30
                             transition-all duration-300"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 
                                  rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative flex justify-between items-start gap-4">
                      <p className="text-gray-300 flex-grow">{route}</p>
                      <button
                        onClick={() => handleCopy(route, index)}
                        className="flex-shrink-0 p-2 rounded-lg bg-blue-500/10 text-blue-400 
                                 hover:bg-blue-500/20 transition-colors duration-300"
                      >
                        {copiedIndex === index ? (
                          <FaCheck className="w-4 h-4" />
                        ) : (
                          <FaCopy className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}