import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
        {/* Top Section */}
    

        {/* Navbar */}
        <nav className="bg-blue-900 text-white px-4 md:px-12 py-4 flex flex-col md:flex-row justify-between items-center">
          {/* Menu Items */}
          <div className="flex items-center space-x-3 animate-slide-in-left">
      <h1 className="text-2xl sm:text-3xl font-extrabold tracking-wide text-blue-900">
        <span className="text-white">Dr.</span>
        <span className="text-blue-500">Jivika</span>
      </h1>
    </div>

          <ul className="flex flex-wrap space-x-6 text-sm font-medium">
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
              <Link to="/blog">Blogs</Link>
            </li>
            <li className="hover:underline cursor-pointer hover:text-blue-300 transition duration-300">
              <Link to="/blogpost">Posts</Link>
            </li>
            <li className="hover:underline cursor-pointer hover:text-blue-300 transition duration-300">
              <Link to="/Appointment">Appointment</Link>
            </li>
            <li className="hover:underline cursor-pointer hover:text-blue-300 transition duration-300">
              <Link to="/Medicines">Medicines</Link>
            </li>
            <li className="hover:underline cursor-pointer hover:text-blue-300 transition duration-300">
              <Link to="/live-chat">live-chat</Link>
            </li>
          </ul>

          {/* Search and Appointment */}
          <div className="mt-4 md:mt-0 flex items-center space-x-4">
            <button className="bg-blue-700 hover:bg-blue-600 px-4 py-2 rounded-md transition-transform transform hover:scale-105">
              <span className="material-icons">Sign in </span>
            </button>
            <button className="bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-500 transition-transform transform hover:scale-105">
              Log In 
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
