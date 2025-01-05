import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div>
      <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
        {/* Navbar */}
        <nav className="bg-blue-900 text-white px-4 md:px-12 py-4 flex flex-col md:flex-row justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-3 animate-slide-in-left">
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-wide text-blue-900">
              <span className="text-white">Dr.</span>
              <span className="text-blue-500">Jivika</span>
            </h1>
          </div>

          {/* Menu Items */}
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
              <Link to="/profile/">Profile</Link>
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
              <Link to="/live-chat">Live Chat</Link>
            </li>
          </ul>

          {/* Buttons */}
          <div className="mt-4 md:mt-0 flex items-center space-x-4">
            <button
              className="bg-blue-700 hover:bg-blue-600 px-4 py-2 rounded-md transition-transform transform hover:scale-105"
              onClick={() => navigate("/signup")}
            >
              <span className="material-icons">Sign up</span>
            </button>
            <button
              className="bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-500 transition-transform transform hover:scale-105"
              onClick={() => navigate("/login")}
            >
              Log In
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
