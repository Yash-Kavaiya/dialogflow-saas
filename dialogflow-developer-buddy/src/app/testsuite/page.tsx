'use client';
import { useState } from 'react';
import { FaPlay, FaPlus, FaTrash, FaEdit } from 'react-icons/fa';

export default function TestSuite() {
  const [testCases, setTestCases] = useState([
    { id: 1, name: 'Welcome Intent Test', status: 'pending' },
    { id: 2, name: 'Product Search Flow', status: 'passed' },
    { id: 3, name: 'Error Handling', status: 'failed' },
    { id: 4, name: 'Login Flow', status: 'pending' },
    { id: 5, name: 'Signup Flow', status: 'passed' },
    { id: 6, name: 'Password Reset', status: 'failed' },
    { id: 7, name: 'Profile Update', status: 'pending' },
    { id: 8, name: 'Logout Flow', status: 'passed' },
    { id: 9, name: 'Add to Cart', status: 'failed' },
    { id: 10, name: 'Remove from Cart', status: 'pending' },
    { id: 11, name: 'Checkout Process', status: 'passed' },
    { id: 12, name: 'Order History', status: 'failed' },
    { id: 13, name: 'Search Functionality', status: 'pending' },
    { id: 14, name: 'Filter Products', status: 'passed' },
    { id: 15, name: 'Sort Products', status: 'failed' },
    { id: 16, name: 'Product Details', status: 'pending' },
    { id: 17, name: 'User Reviews', status: 'passed' },
    { id: 18, name: 'Wishlist', status: 'failed' },
    { id: 19, name: 'Notifications', status: 'pending' },
    { id: 20, name: 'Email Verification', status: 'passed' },
    { id: 21, name: 'Two-Factor Authentication', status: 'failed' },
    { id: 22, name: 'Address Management', status: 'pending' },
    { id: 23, name: 'Payment Gateway', status: 'passed' },
    { id: 24, name: 'Order Tracking', status: 'failed' },
    { id: 25, name: 'Customer Support', status: 'pending' },
    { id: 26, name: 'FAQ Section', status: 'passed' },
    { id: 27, name: 'Live Chat', status: 'failed' },
    { id: 28, name: 'Feedback Form', status: 'pending' }
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="flex items-center justify-between bg-gray-800/30 p-6 rounded-xl backdrop-blur-lg shadow-xl">
          <h1 className="text-4xl font-bold text-white tracking-tight hover:text-blue-400 transition-colors duration-300">
            Test Suite
            <span className="ml-4 text-sm font-normal text-gray-400 hover:text-blue-300 transition-colors duration-300">
              {testCases.length} Tests Total
            </span>
          </h1>
          
          <div className="flex items-center gap-6 text-sm">
            <span className="flex items-center gap-2 hover:scale-110 transition-transform duration-300">
              <span className="w-3 h-3 rounded-full bg-green-500 animate-pulse shadow-lg shadow-green-500/50"></span>
              <span className="text-gray-300">
                {testCases.filter(t => t.status === 'passed').length} Passed
              </span>
            </span>
            <span className="flex items-center gap-2 hover:scale-110 transition-transform duration-300">
              <span className="w-3 h-3 rounded-full bg-red-500 animate-pulse shadow-lg shadow-red-500/50"></span>
              <span className="text-gray-300">
                {testCases.filter(t => t.status === 'failed').length} Failed
              </span>
            </span>
            <span className="flex items-center gap-2 hover:scale-110 transition-transform duration-300">
              <span className="w-3 h-3 rounded-full bg-yellow-500 animate-pulse shadow-lg shadow-yellow-500/50"></span>
              <span className="text-gray-300">
                {testCases.filter(t => t.status === 'pending').length} Pending
              </span>
            </span>
          </div>
        </div>
        
        {/* Control Panel */}
        <div className="bg-gray-800/30 backdrop-blur-lg p-6 rounded-xl shadow-2xl border border-gray-700/50 hover:border-blue-500/50 transition-colors duration-300">
          <div className="flex justify-between items-center">
            <div className="flex gap-4">
              <button className="bg-green-500 hover:bg-green-400 text-white px-6 py-2.5 rounded-lg flex items-center gap-2 transition-all duration-300 font-medium shadow-lg hover:shadow-green-500/50 hover:scale-105 hover:rotate-1">
                <FaPlay className="text-sm" /> Run All Tests
              </button>
              <button className="bg-blue-500 hover:bg-blue-400 text-white px-6 py-2.5 rounded-lg flex items-center gap-2 transition-all duration-300 font-medium shadow-lg hover:shadow-blue-500/50 hover:scale-105 hover:-rotate-1">
                <FaPlus className="text-sm" /> New Test Case
              </button>
            </div>
            <select className="px-4 py-2.5 rounded-lg bg-gray-700 text-gray-200 border border-gray-600 hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
              <option>All Tests</option>
              <option>Failed Tests</option>
              <option>Passed Tests</option>
            </select>
          </div>
        </div>

        {/* Test Cases List */}
        <div className="bg-gray-800/30 backdrop-blur-lg rounded-xl shadow-2xl border border-gray-700/50 hover:border-blue-500/50 transition-colors duration-300">
          <div className="p-6 border-b border-gray-700/50">
            <h2 className="text-xl font-semibold text-white hover:text-blue-400 transition-colors duration-300">Test Cases</h2>
          </div>
          <div className="max-h-[calc(100vh-20rem)] overflow-y-auto">
            {testCases.map((test) => (
              <div 
                key={test.id} 
                className="p-4 flex items-center justify-between hover:bg-gray-700/50 transition-all duration-300 group hover:shadow-lg"
              >
                <div className="flex items-center gap-4">
                  <span className={`w-3 h-3 rounded-full transition-all duration-300 group-hover:scale-125 ${
                    test.status === 'passed' ? 'bg-green-500 shadow-lg shadow-green-500/50' :
                    test.status === 'failed' ? 'bg-red-500 shadow-lg shadow-red-500/50' : 
                    'bg-yellow-500 shadow-lg shadow-yellow-500/50'
                  }`}></span>
                  <span className="font-medium text-gray-200 group-hover:text-white transition-colors duration-300">
                    {test.name}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <button className="p-2 text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-110">
                    <FaEdit className="text-sm" />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-red-400 transition-all duration-300 hover:scale-110">
                    <FaTrash className="text-sm" />
                  </button>
                  <button className="bg-indigo-500 hover:bg-indigo-400 text-white px-4 py-1.5 rounded-lg transition-all duration-300 shadow-lg hover:shadow-indigo-500/50 hover:scale-105">
                    Run
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}