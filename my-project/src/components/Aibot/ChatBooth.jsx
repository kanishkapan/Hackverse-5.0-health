import React, { useState } from 'react';
import { Send, Search, Settings, Bell } from 'lucide-react';

const ChatBooth = () => {
  const [message, setMessage] = useState('');

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between bg-gray-800/50 backdrop-blur-lg p-6 border-b border-gray-700">
        <h1 className="text-2xl font-bold tracking-tight">JIVIKA</h1>
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-4">
            <Bell className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
            <Settings className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-lg font-semibold">G</div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-grow flex overflow-hidden">
        {/* Sidebar */}
        <div className="w-80 bg-gray-800/30 border-r border-gray-700">
          <div className="p-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input 
                type="text" 
                placeholder="Search conversations"
                className="w-full bg-gray-700/50 text-sm rounded-lg pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="space-y-2 p-2">
            {Array(5).fill().map((_, index) => (
              <div
                key={index}
                className="flex items-start p-4 hover:bg-gray-700/50 rounded-lg cursor-pointer transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-lg font-semibold">
                  {index + 1}
                </div>
                <div className="flex-grow mx-3">
                  <h2 className="text-sm font-semibold">Conversation {index + 1}</h2>
                  <p className="text-xs text-gray-400 truncate mt-1">
                    Latest message preview...
                  </p>
                </div>
                <span className="text-xs text-gray-500">2m</span>
              </div>
            ))}
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-grow flex flex-col bg-gradient-to-b from-gray-800/20 to-gray-900/20">
          <div className="flex-grow overflow-y-auto p-6 space-y-4">
            {Array(4).fill().map((_, index) => (
              <div
                key={index}
                className={`flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
              >
                <div className={`max-w-md p-4 rounded-2xl ${
                  index % 2 === 0 
                    ? 'bg-gray-700/60 rounded-tl-sm' 
                    : 'bg-blue-600 rounded-tr-sm'
                }`}>
                  <p className="text-sm">
                    This is a sample message that demonstrates the chat interface design.
                  </p>
                  <span className="text-xs text-gray-400 mt-2 block">
                    {index % 2 === 0 ? '12:42 PM' : '12:43 PM'}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Input Area */}
          <div className="p-6 border-t border-gray-700">
            <div className="flex items-center space-x-4">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-grow p-4 rounded-lg bg-gray-700/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="p-4 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBooth;