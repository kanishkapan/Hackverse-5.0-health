import React from 'react';
import { Phone, Clock, MapPin, Search,  } from 'lucide-react';

const Contact = () => {
  return (
    <div className="w-full">
      {/* Top Info Bar */}
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
        <nav className="bg-blue-900 text-white px-4 md:px-12 py-4 flex flex-wrap justify-between items-center">
          {/* Menu Items */}
          <ul className="flex flex-wrap space-x-6 text-sm font-medium">
            <li className="hover:underline cursor-pointer">Home</li>
            <li className="hover:underline cursor-pointer">About us</li>
            <li className="hover:underline cursor-pointer">Services</li>
            <li className="hover:underline cursor-pointer">Doctors</li>
            <li className="hover:underline cursor-pointer">News</li>
            <li className="hover:underline cursor-pointer">Contact</li>
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


      {/* Contact Header Section */}
      <div className="relative h-64 bg-gradient-to-r from-navy-900 to-blue-800 text-white">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-16">
          <div className="flex flex-col gap-2">
            <div className="text-sm breadcrumbs">
              <span>Home</span>
              <span className="mx-2">/</span>
              <span>Contact</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">Our Contacts</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;