import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

const ProfileNavbar = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  
  // Mock user data - replace with your actual user data
  const user = {
    name: "Dr. Sarah Wilson",
    image: "/api/placeholder/40/40"
  };

  return (
    <div>
      <header>
        {/* Top Section */}
        <div className="bg-gray-100 flex flex-col md:flex-row justify-between items-center px-4 md:px-12 py-4 border-b">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-bold">
              <span className="text-blue-900">Dr.</span>
              <span className="text-blue-500">Jivika</span>
            </h1>
          </div>
          
          {/* Contact Info */}
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-8 text-sm text-gray-600 mt-4 md:mt-0">
            <div className="flex items-center space-x-2">
              <span className="material-icons text-blue-500">call</span>
              <p><span className="font-bold">EMERGENCY:</span> (237) 681-812-255</p>
            </div>
            <div className="flex items-center space-x-2">
              <span className="material-icons text-blue-500">schedule</span>
              <p><span className="font-bold">WORK HOUR:</span> 09:00 - 20:00 Everyday</p>
            </div>
            <div className="flex items-center space-x-2">
              <span className="material-icons text-blue-500">location_on</span>
              <p><span className="font-bold">LOCATION:</span> 0123 Some Place</p>
            </div>
          </div>
        </div>

        {/* Navbar */}
        <nav className="bg-blue-900 text-white px-4 md:px-12 py-4 flex flex-col md:flex-row justify-between items-center">
          {/* Menu Items */}
          <ul className="flex space-x-6 text-sm font-medium">
            <li className="hover:underline cursor-pointer">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:underline cursor-pointer">
              <Link to="/aibot">AI Bot</Link>
            </li>
            <li className="hover:underline cursor-pointer">
              <Link to="/contact">Contact</Link>
            </li>
            <li className="hover:underline cursor-pointer">
              <Link to="/blog">Blogs</Link>
            </li>
            <li className="hover:underline cursor-pointer">
              <Link to="/blogpost">Posts</Link>
            </li>
            <li className="hover:underline cursor-pointer">
              <Link to="/appointment">Appointment</Link>
            </li>
          </ul>

          {/* Profile Dropdown */}
          <div className="mt-4 md:mt-0">
            <div className="relative">
              <button 
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center space-x-2 bg-blue-800 px-3 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200"
              >
                <img 
                  src={user.image} 
                  alt="Profile" 
                  className="w-6 h-6 rounded-full"
                />
                <span>{user.name}</span>
                <ChevronDown 
                  size={16} 
                  className={`transform transition-transform duration-200 ${isProfileOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {/* Dropdown Menu */}
              <div 
                className={`
                  absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 
                  transition-all duration-200 origin-top-right
                  ${isProfileOpen ? 'transform opacity-100 scale-100' : 'transform opacity-0 scale-95 pointer-events-none'}
                `}
              >
                <Link 
                  to="/dashboard" 
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Dashboard
                </Link>
                <Link 
                  to="/profile" 
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Profile
                </Link>
                <hr className="my-1" />
                <button 
                  onClick={() => console.log('Logging out...')}
                  className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                >
                  Log Out
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default ProfileNavbar;