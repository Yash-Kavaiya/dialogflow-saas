import React from 'react';
import { FaFlag, FaRocket, FaTools, FaStar } from 'react-icons/fa';

const RoadmapSection = () => {
  const roadmapItems = [
    {
      icon: <FaFlag />,
      month: "January 2025",
      title: "Foundation & Core Features",
      items: [
        "Launch of Intent Generation System",
        "Basic Entity Detection Implementation",
        "Initial Route Creation Tools"
      ],
      status: "In Progress"
    },
    {
      icon: <FaTools />,
      month: "February 2025",
      title: "Enhanced Development Tools",
      items: [
        "Advanced Webhook Generator",
        "Improved Flow Designer",
        "Beta Testing of Debugddy"
      ],
      status: "Planned"
    },
    {
      icon: <FaRocket />,
      month: "March 2025",
      title: "Performance & Analytics",
      items: [
        "Analytics Dashboard Release",
        "Real-time Performance Monitoring",
        "User Interaction Tracking"
      ],
      status: "Upcoming"
    },
    {
      icon: <FaStar />,
      month: "April 2025",
      title: "Advanced Features & Integration",
      items: [
        "Comprehensive Test Suite",
        "CI/CD Pipeline Integration",
        "Enterprise Features Release"
      ],
      status: "Planned"
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "In Progress":
        return "bg-green-500";
      case "Planned":
        return "bg-yellow-500";
      case "Upcoming":
        return "bg-blue-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 sm:text-4xl">
            Development Roadmap
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-300">
            Our journey towards building the ultimate Dialogflow development toolkit
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-500 opacity-20 rounded-full" />

          <div className="space-y-16">
            {roadmapItems.map((item, index) => (
              <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                {/* Timeline Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white shadow-lg">
                  {item.icon}
                </div>

                {/* Content Card */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-16' : 'pl-16'}`}>
                  <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700/50 transform hover:scale-105 transition-all duration-300 hover:border-blue-500/50 group animate-fade-in-out hover:shadow-lg hover:shadow-blue-500/25 hover:glow-blue-500">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm font-medium text-gray-400">{item.month}</span>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(item.status)} text-white`}>
                        {item.status}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                    <ul className="space-y-2">
                      {item.items.map((listItem, i) => (
                        <li key={i} className="text-gray-300 flex items-center">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-2" />
                          {listItem}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Background */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10" />
    </section>
  );
};

export default RoadmapSection;
