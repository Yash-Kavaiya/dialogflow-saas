"use client";

import { FC } from 'react';
import { FaRobot, FaRoute, FaCode, FaCogs, FaProjectDiagram, FaBug, FaChartLine, FaVial, FaInfoCircle, FaHeart, FaGithub } from 'react-icons/fa';
import { ArrowRight } from 'lucide-react';
import FeatureCard from '@/components/FeatureCard';
import Footer from '@/components/Footer';
import { useRouter } from 'next/navigation';
import RoadmapSection from '@/components/RoadmapSection';

interface Feature {
  icon: JSX.Element;
  title: string;
  description: string;
  link: string;
}

export default function Home() {
  const router = useRouter();
  const features: Feature[] = [
    {
      icon: <FaRobot className="w-6 h-6" />,
      title: "Intent Generation",
      description: "AI-powered intent generation for your Dialogflow chatbot",
      link: "/intents"
    },
    {
      icon: <FaCogs className="w-6 h-6" />,
      title: "Entity Detection",
      description: "Automatically identify entities and parameters",
      link: "/entities"
    },
    {
      icon: <FaRoute className="w-6 h-6" />,
      title: "Route Creation",
      description: "Generate conversation flows and routes",
      link: "/routes"
    },
    {
      icon: <FaCode className="w-6 h-6" />,
      title: "Webhook Generator",
      description: "Create webhooks and fulfillment code",
      link: "/webhooks"
    },
    {
      icon: <FaProjectDiagram className="w-6 h-6" />,
      title: "Flow Generator",
      description: "Design and generate custom workflow diagrams with an intuitive interface",
      link: "/flowmaker"
    },
    {
      icon: <FaBug className="w-6 h-6" />,
      title: "Debugddy",
      description: "Advanced debugging tool for tracking and resolving application issues",
      link: "/debugdddy"
    },
    {
      icon: <FaChartLine className="w-6 h-6" />,
      title: "Analytics Dashboard",
      description: "Track and analyze chatbot performance metrics and user interactions",
      link: "/analytics"
    },
    {
      icon: <FaVial className="w-6 h-6" />,
      title: "Test Suite",
      description: "Automated testing tools for validating chatbot responses and conversation flows",
      link: "/test-suite"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex flex-col">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"></div>
          
          {/* Content */}
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
            <div className="text-center">
              {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-8">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 
               shadow-lg duration-300 animate-pulse
               hover:text-blue-400">
            Dialogflow Development
            </span>
            <span className="block text-white mt-2 
               hover:text-blue-400 transition-colors duration-300 
               hover:glow-blue-500 animate-fade-in-out">
            Made Simple
            </span>
          </h1>

              {/* Description */}
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Simplify your Dialogflow development process with our suite of powerful tools and features. Whether you're generating intents, creating routes, or analyzing performance, we've got you covered.
              </p>

              {/* CTA Buttons */}
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => router.push('/intents')}
            className="px-8 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 
               text-white font-medium transition-all duration-300 
               hover:from-blue-600 hover:to-purple-700
               transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25
               focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900
               flex items-center justify-center gap-2
               animate-fade-in-out"
          >
            Get Started
            <ArrowRight className="w-5 h-5" />
          </button>
          
          <a
            href="https://github.com/Yash-Kavaiya"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-lg border border-gray-600 
               text-gray-300 font-medium transition-all duration-300
               hover:bg-gray-800 hover:border-gray-500
               transform hover:scale-105
               focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-900
               flex items-center justify-center gap-2
               animate-fade-in-out"
          >
            <FaGithub className="w-5 h-5" />
            View on GitHub
          </a>
              </div>

              {/* Stats */}
              <div className="mt-20 grid grid-cols-2 gap-8 md:grid-cols-4">
          {[
            { label: 'Active Users', value: '50+' },
            { label: 'Test Cases Run', value: '1k+' },
            { label: 'Intents Generated', value: '5k+' },
            { label: 'Github Stars', value: '1+' },
          ].map((stat, index) => (
            <div 
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700/50
                 transform hover:scale-105 transition-all duration-300
                 hover:border-blue-500/50 group animate-fade-in-out
                 hover:shadow-lg hover:shadow-blue-500/25"
            >
              <dt className="text-gray-400 text-sm font-medium mb-2">
                {stat.label}
              </dt>
              <dd className="text-2xl font-bold text-white">
                {stat.value}
              </dd>
            </div>
          ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16 relative">
              <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 sm:text-4xl">
                Powerful Features
              </h2>
              <div className="group relative inline-block">
                <FaInfoCircle className="inline-block ml-2 mb-1 text-gray-400 hover:text-blue-400 transition-colors duration-200 cursor-help" />
                <div className="invisible group-hover:visible absolute z-10 w-64 p-4 bg-gray-800 text-gray-200 text-sm rounded-lg shadow-lg -right-8 top-8">
                  Click on any feature card to explore detailed functionality and documentation
                </div>
              </div>
              <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-300">
                Everything you need to build and manage your Dialogflow chatbots effectively
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  onClick={() => router.push(feature.link)}
                  className="cursor-pointer transform transition-all duration-300 hover:scale-105"
                >
                  <FeatureCard
                    icon={feature.icon}
                    title={feature.title}
                    description={feature.description}
                    className="bg-gradient-to-br from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600 text-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-700 hover:border-gray-600"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Decorative Background Elements */}
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10">
          </div>
        </section>

        {/* Sponsor Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="relative group cursor-pointer" onClick={() => router.push('/sponsor')}>
              {/* Animated Background */}
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              
              {/* Content */}
              <div className="relative px-8 py-12 bg-gray-800 rounded-lg border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300">
                <FaHeart className="w-12 h-12 mx-auto text-red-500 animate-pulse mb-6" />
                <h2 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
                  Support the Project
                </h2>
                <p className="text-gray-300 mb-8">
                  Help us keep improving Dialogflow Buddy and create more amazing tools for the community!
                </p>
                <button 
                  className="px-8 py-3 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 
                           text-white font-medium transition-all duration-300 
                           hover:from-pink-600 hover:to-purple-700
                           transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25
                           focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-800"
                  onClick={() => router.push('/sponsor')}
                >
                  <span className="flex items-center justify-center gap-2">
                    <FaHeart className="w-5 h-5" />
                    <span>Become a Sponsor</span>
                  </span>
                </button>

                {/* Floating Icons */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-pink-500 rounded-full animate-bounce delay-100"></div>
                <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-purple-500 rounded-full animate-bounce delay-300"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Roadmap Section */}
        <RoadmapSection />
      </main>

      {/* Footer with Proper Spacing */}
      <div className="mt-auto bg-gray-900">
        <Footer />
      </div>
    </div>
  );
}