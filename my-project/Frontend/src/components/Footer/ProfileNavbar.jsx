import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ChevronDown } from "lucide-react";

const ProfileNavbar = () => {
  const navigate = useNavigate();
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  // Mock user data - replace with actual user data
  const user = {
    name: "Dr. Sarah Wilson",
    image: "/api/placeholder/40/40", // Placeholder for user profile image
  };

  return (
    <div>
      <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
        {/* Navbar */}
        <nav className="bg-blue-900 text-white px-4 md:px-12 py-4 flex flex-wrap md:flex-nowrap justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-3 animate-slide-in-left">
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-wide text-blue-900">
              <span className="text-white">Dr.</span>
              <span className="text-blue-500">Jivika</span>
            </h1>
          </div>

          {/* Menu Items */}
          <ul className="hidden md:flex flex-wrap space-x-6 text-sm font-medium">
            <li className="hover:underline cursor-pointer hover:text-blue-300 transition duration-300">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:underline cursor-pointer hover:text-blue-300 transition duration-300">
              <Link to="/aibot">AI Bot</Link>
            </li>
            <li className="hover:underline cursor-pointer hover:text-blue-300 transition duration-300">
              <Link to="/contact">Contact</Link>
            </li>
            <li className="hover:underline cursor-pointer hover:text-blue-300 transition duration-300">
              <Link to="/profile">Profile</Link>
            </li>
            <li className="hover:underline cursor-pointer hover:text-blue-300 transition duration-300">
              <Link to="/appointment">Appointment</Link>
            </li>
            <li className="hover:underline cursor-pointer hover:text-blue-300 transition duration-300">
              <Link to="/medicines">Medicines</Link>
            </li>
            <li className="hover:underline cursor-pointer hover:text-blue-300 transition duration-300">
              <Link to="/live-chat">Live Chat</Link>
            </li>
          </ul>

          {/* Profile Dropdown */}
          <div className="relative mt-4 md:mt-0">
            <button
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="flex items-center space-x-2 bg-blue-800 px-3 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200"
            >
              <span>{user.name}</span>
              <ChevronDown
                size={16}
                className={`transform transition-transform duration-200 ${
                  isProfileOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Dropdown Menu */}
            <div
              className={`absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 transition-all duration-200 origin-top-right ${
                isProfileOpen
                  ? "transform opacity-100 scale-100"
                  : "transform opacity-0 scale-95 pointer-events-none"
              }`}
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
                onClick={() => console.log("Logging out...")}
                className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
              >
                Log Out
              </button>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default ProfileNavbar;
