import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
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
              <p>
                <span className="font-bold">EMERGENCY:</span> (237) 681-812-255
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <span className="material-icons text-blue-500">schedule</span>
              <p>
                <span className="font-bold">WORK HOUR:</span> 09:00 - 20:00
                Everyday
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <span className="material-icons text-blue-500">location_on</span>
              <p>
                <span className="font-bold">LOCATION:</span> 0123 Some Place
              </p>
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
              <Link to="/profile">Profile</Link>
            </li>
            <li className="hover:underline cursor-pointer">
              <Link to="/blog">Blogs</Link>
            </li>
            <li className="hover:underline cursor-pointer">
              <Link to="/blogpost">Posts</Link>
            </li>
            <li className="hover:underline cursor-pointer">
              <Link to="/Appointment">Appointment</Link>
            </li>
          </ul>

          {/* Search and Appointment */}
          <div className="mt-4 md:mt-0 flex items-center space-x-4">
            <button className="bg-blue-700 hover:bg-blue-600 px-4 py-2 rounded-md">
              <span className="material-icons">search</span>
            </button>
            <button className="bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-500">
              Appointment
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
