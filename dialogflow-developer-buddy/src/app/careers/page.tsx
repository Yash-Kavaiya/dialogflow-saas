import Image from "next/image";
import Link from "next/link";
import { 
  FaBrain, 
  FaRocket, 
  FaHandsHelping, 
  FaLaptopCode,
  FaGraduationCap,
  FaHeart,
  FaCalendar,
  FaGlobe,
  FaArrowRight 
} from "react-icons/fa";
import Footer from "@/components/Footer";

interface CompanyValue {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface Benefit {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface Position {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  requirements: string[];
  email: string;
}

const companyValues: CompanyValue[] = [
  {
    icon: <FaBrain className="w-6 h-6" />,
    title: "Innovation First",
    description: "We push boundaries and embrace cutting-edge technologies to solve complex problems."
  },
  {
    icon: <FaRocket className="w-6 h-6" />,
    title: "Growth Mindset",
    description: "We believe in continuous learning and personal development."
  },
  {
    icon: <FaHandsHelping className="w-6 h-6" />,
    title: "Collaboration",
    description: "We work together across teams to achieve common goals and success."
  }
];

const benefits: Benefit[] = [
  {
    icon: <FaLaptopCode className="w-6 h-6" />,
    title: "Remote First",
    description: "Work from anywhere in the world with flexible hours."
  },
  {
    icon: <FaGraduationCap className="w-6 h-6" />,
    title: "Learning Budget",
    description: "Annual budget for courses, conferences, and books."
  },
  {
    icon: <FaHeart className="w-6 h-6" />,
    title: "Health Benefits",
    description: "Comprehensive health, dental, and vision coverage."
  },
  {
    icon: <FaCalendar className="w-6 h-6" />,
    title: "Unlimited PTO",
    description: "Take time off when you need it, no questions asked."
  }
];

const openPositions: Position[] = [
  {
    id: "sr-backend-dev",
    title: "Senior Backend Developer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    experience: "5+ years",
    description: "We're looking for a senior backend developer to help build and scale our infrastructure.",
    requirements: [
      "Extensive experience with Node.js and TypeScript",
      "Experience with cloud platforms (AWS/GCP)",
      "Strong knowledge of API design and microservices",
      "Background in real-time communication systems"
    ],
    email: "arkavaiya@gmail.com"
  },
  {
    id: "frontend-dev",
    title: "Frontend Developer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    experience: "3+ years",
    description: "Join us in creating beautiful and intuitive user interfaces for our platform.",
    requirements: [
      "Strong experience with React and Next.js",
      "Proficiency in TypeScript",
      "Experience with modern CSS and Tailwind",
      "Knowledge of state management solutions"
    ],
    email: "arkavaiya@gmail.com"
  }
];

export default function Careers() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5"></div>
      
      <main className="relative flex-grow pt-10">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-b from-gray-900 to-gray-800 border-b border-gray-800/50">
          <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl">
                <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Join Our Mission
                </span>
              </h1>
              <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-gray-400">
                Help us revolutionize how developers build conversational experiences
              </p>
            </div>
          </div>
        </div>

        {/* Company Values Section */}
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Our Values
          </h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {companyValues.map((value, index) => (
              <div 
                key={index} 
                className="group relative bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl
                         border border-gray-700/50 hover:border-blue-500/30
                         transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 
                              rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative">
                  <span className="rounded-xl inline-flex p-3 bg-gradient-to-br from-blue-500/10 to-purple-500/10
                                text-blue-400 ring-1 ring-blue-500/20 group-hover:ring-blue-500/30 
                                transition-all duration-300">
                    {value.icon}
                  </span>
                  <div className="mt-8">
                    <h3 className="text-lg font-medium text-gray-100 group-hover:text-white transition-colors">
                      {value.title}
                    </h3>
                    <p className="mt-2 text-gray-400 group-hover:text-gray-300 transition-colors">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="relative bg-gradient-to-br from-blue-900/20 to-purple-900/20 border-y border-gray-800/50">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Why Join Us?
            </h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {benefits.map((benefit, index) => (
                <div 
                  key={index} 
                  className="group relative bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl
                           border border-gray-700/50 hover:border-blue-500/30
                           transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 
                                rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative">
                    <div className="text-blue-400 group-hover:text-blue-300 transition-colors">
                      {benefit.icon}
                    </div>
                    <h3 className="mt-4 text-lg font-medium text-gray-100 group-hover:text-white">
                      {benefit.title}
                    </h3>
                    <p className="mt-2 text-gray-400 group-hover:text-gray-300">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Open Positions Section */}
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Open Positions
          </h2>
          <div className="space-y-6">
            {openPositions.map((position) => (
              <div 
                key={position.id}
                className="group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl
                         border border-gray-700/50 hover:border-blue-500/30
                         transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 
                              rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative p-6">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                    <div className="flex-grow">
                      <h3 className="text-xl font-semibold text-gray-100 group-hover:text-white">
                        {position.title}
                      </h3>
                      <div className="mt-2 space-y-1">
                        <p className="text-sm text-gray-400">
                          {position.department} • {position.location} • {position.type}
                        </p>
                        <p className="text-sm text-gray-400">
                          Experience: {position.experience}
                        </p>
                      </div>
                      <p className="mt-4 text-base text-gray-300">
                        {position.description}
                      </p>
                      <div className="mt-4">
                        <h4 className="text-sm font-medium text-gray-200">Requirements:</h4>
                        <ul className="mt-2 space-y-2">
                          {position.requirements.map((req, index) => (
                            <li key={index} className="flex items-center text-sm text-gray-400">
                              <div className="mr-2 w-1 h-1 rounded-full bg-blue-400"></div>
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <p className="mt-4 text-sm text-gray-400">
                        Contact: 
                        <a href={`mailto:${position.email}`} className="ml-1 text-blue-400 hover:text-blue-300">
                          {position.email}
                        </a>
                      </p>
                    </div>
                    <div className="mt-6 sm:mt-0 sm:ml-4 flex-shrink-0">
                      <Link 
                        href={`/careers/apply/${position.id}`}
                        className="inline-flex items-center px-6 py-3 rounded-lg
                                 bg-gradient-to-r from-blue-500 to-purple-600 
                                 text-white font-medium transition-all duration-300
                                 hover:from-blue-600 hover:to-purple-700
                                 transform hover:scale-105 active:scale-100
                                 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40"
                      >
                        Apply Now
                        <FaArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="relative bg-gradient-to-br from-blue-900/20 to-purple-900/20 border-t border-gray-800/50">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Don't See the Right Role?
              </h2>
              <p className="mt-4 text-xl text-gray-400">
                We're always looking for talented individuals to join our team.
              </p>
              <div className="mt-8">
                <Link 
                  href="/careers/general-application"
                  className="inline-flex items-center px-8 py-4 rounded-lg
                           bg-gradient-to-r from-blue-500 to-purple-600 
                           text-white font-medium transition-all duration-300
                           hover:from-blue-600 hover:to-purple-700
                           transform hover:scale-105 active:scale-100
                           shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40"
                >
                  Send General Application
                  <FaArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}