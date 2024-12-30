'use client';
import { useState } from 'react';
import { FaUsers, FaRobot, FaClock, FaExclamationTriangle, FaSmile, FaPhoneVolume, FaShieldAlt, FaExchangeAlt } from 'react-icons/fa';
import {
  BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,
  Legend, ResponsiveContainer, PieChart, Pie, Cell
} from 'recharts';

// [Previous mockData object remains the same]
const mockData = {
  dailyStats: [
    { date: '2023-07-01', sessions: 120, matchedIntents: 98, fallbacks: 22 },
    { date: '2023-07-02', sessions: 145, matchedIntents: 125, fallbacks: 20 },
    { date: '2023-07-03', sessions: 168, matchedIntents: 150, fallbacks: 18 },
    { date: '2023-07-04', sessions: 189, matchedIntents: 170, fallbacks: 19 },
    { date: '2023-07-05', sessions: 210, matchedIntents: 190, fallbacks: 20 },
  ],
  topIntents: [
    { name: 'Welcome Intent', count: 450 },
    { name: 'Product Inquiry', count: 380 },
    { name: 'Support Request', count: 320 },
    { name: 'Pricing Questions', count: 280 },
    { name: 'Order Status', count: 250 },
  ],
  csatTrends: [
    { date: '2023-07-01', score: 4.2 },
    { date: '2023-07-02', score: 4.5 },
    { date: '2023-07-03', score: 4.3 },
    { date: '2023-07-04', score: 4.6 },
    { date: '2023-07-05', score: 4.7 },
  ],
  transferDistribution: [
    { name: 'Self Served', value: 785 },
    { name: 'Technical Support', value: 120 },
    { name: 'Billing Support', value: 80 },
    { name: 'Sales Team', value: 45 },
  ],
  responseTimes: [
    { time: '0-1s', count: 450 },
    { time: '1-2s', count: 320 },
    { time: '2-3s', count: 180 },
    { time: '3-4s', count: 90 },
    { time: '4s+', count: 40 },
  ],
};

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export default function AnalyticsPage() {
  const [timeRange, setTimeRange] = useState('7d');

  const metrics = [
    {
      title: 'Total Sessions',
      value: '1,234',
      change: '+12.5%',
      icon: <FaUsers className="h-6 w-6 text-blue-500" />,
    },
    {
      title: 'Intent Match Rate',
      value: '89.2%',
      change: '+3.1%',
      icon: <FaRobot className="h-6 w-6 text-green-500" />,
    },
    {
      title: 'Avg. Response Time',
      value: '1.2s',
      change: '-0.3s',
      icon: <FaClock className="h-6 w-6 text-purple-500" />,
    },
    {
      title: 'Fallback Rate',
      value: '10.8%',
      change: '-2.1%',
      icon: <FaExclamationTriangle className="h-6 w-6 text-yellow-500" />,
    },
    {
      title: 'CSAT Score',
      value: '4.5/5',
      change: '+0.2',
      icon: <FaSmile className="h-6 w-6 text-green-600" />,
    },
    {
      title: 'Avg Handle Time',
      value: '3m 45s',
      change: '-30s',
      icon: <FaPhoneVolume className="h-6 w-6 text-blue-600" />,
    },
    {
      title: 'Containment Rate',
      value: '78.5%',
      change: '+5.2%',
      icon: <FaShieldAlt className="h-6 w-6 text-indigo-500" />,
    },
    {
      title: 'Transfer Rate',
      value: '21.5%',
      change: '-5.2%',
      icon: <FaExchangeAlt className="h-6 w-6 text-red-500" />,
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8 bg-gray-800/30 p-6 rounded-xl backdrop-blur-lg shadow-xl">
          <h1 className="text-4xl font-bold text-white tracking-tight hover:text-blue-400 transition-colors duration-300">
            Analytics Dashboard
            <span className="ml-4 text-sm font-normal text-gray-400">Real-time Insights</span>
          </h1>
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="bg-gray-700 text-white rounded-lg px-4 py-2 border border-gray-600 hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20"
          >
            <option value="24h">Last 24 Hours</option>
            <option value="7d">Last 7 Days</option>
            <option value="30d">Last 30 Days</option>
            <option value="90d">Last 90 Days</option>
          </select>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8">
          {metrics.map((metric, index) => (
            <div 
              key={index} 
              className="bg-gray-800/30 backdrop-blur-lg overflow-hidden rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 group"
            >
              <div className="p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    {metric.icon}
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-400 truncate group-hover:text-gray-300 transition-colors duration-300">
                        {metric.title}
                      </dt>
                      <dd className="flex items-baseline mt-2">
                        <div className="text-2xl font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
                          {metric.value}
                        </div>
                        <div className={`ml-2 flex items-baseline text-sm font-semibold ${
                          metric.change.startsWith('+') ? 'text-green-400' : 'text-red-400'
                        }`}>
                          {metric.change}
                        </div>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Session Trends */}
          <div className="bg-gray-800/30 backdrop-blur-lg p-6 rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg">
            <h2 className="text-lg font-medium text-white mb-4 hover:text-blue-400 transition-colors duration-300">
              Session Trends
            </h2>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={mockData.dailyStats}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="date" stroke="#9CA3AF" />
                  <YAxis stroke="#9CA3AF" />
                  <Tooltip contentStyle={{ backgroundColor: '#1F2937', border: 'none' }} />
                  <Legend />
                  <Line type="monotone" dataKey="sessions" stroke="#3B82F6" strokeWidth={2} />
                  <Line type="monotone" dataKey="matchedIntents" stroke="#10B981" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Top Intents */}
          <div className="bg-gray-800/30 backdrop-blur-lg p-6 rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg">
            <h2 className="text-lg font-medium text-white mb-4 hover:text-blue-400 transition-colors duration-300">
              Top Intents
            </h2>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={mockData.topIntents}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="name" stroke="#9CA3AF" />
                  <YAxis stroke="#9CA3AF" />
                  <Tooltip contentStyle={{ backgroundColor: '#1F2937', border: 'none' }} />
                  <Legend />
                  <Bar dataKey="count" fill="#6366F1" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* CSAT Trends */}
          <div className="bg-gray-800/30 backdrop-blur-lg p-6 rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg">
            <h2 className="text-lg font-medium text-white mb-4 hover:text-blue-400 transition-colors duration-300">
              CSAT Trends
            </h2>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={mockData.csatTrends}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="date" stroke="#9CA3AF" />
                  <YAxis domain={[0, 5]} stroke="#9CA3AF" />
                  <Tooltip contentStyle={{ backgroundColor: '#1F2937', border: 'none' }} />
                  <Legend />
                  <Line type="monotone" dataKey="score" stroke="#10B981" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Transfer Distribution */}
          <div className="bg-gray-800/30 backdrop-blur-lg p-6 rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg">
            <h2 className="text-lg font-medium text-white mb-4 hover:text-blue-400 transition-colors duration-300">
              Agent Transfer Distribution
            </h2>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={mockData.transferDistribution}
                    cx="50%"
                    cy="50%"
                    labelLine={true}
                    label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {mockData.transferDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip contentStyle={{ backgroundColor: '#1F2937', border: 'none' }} />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Response Time Distribution */}
          <div className="bg-gray-800/30 backdrop-blur-lg p-6 rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg">
            <h2 className="text-lg font-medium text-white mb-4 hover:text-blue-400 transition-colors duration-300">
              Response Time Distribution
            </h2>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={mockData.responseTimes}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="time" stroke="#9CA3AF" />
                  <YAxis stroke="#9CA3AF" />
                  <Tooltip contentStyle={{ backgroundColor: '#1F2937', border: 'none' }} />
                  <Legend />
                  <Bar dataKey="count" fill="#6366F1" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}