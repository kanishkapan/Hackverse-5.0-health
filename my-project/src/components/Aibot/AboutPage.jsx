import React from 'react';
import { Clock, MapPin, Phone, Search } from 'lucide-react';

const AboutPage = () => {
  const features = [
    "A Passion for Healing",
    "5-Star Care",
    "All our best",
    "Believe in Us",
    "Always Caring",
    "A Legacy of Excellence"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header>
      {/* Top Section */}
      <div className="bg-gray-100 flex flex-col md:flex-row justify-between items-center px-4 md:px-12 py-4 border-b">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <h1 className="text-2xl font-bold">
            <span className="text-blue-900">MED</span>
            <span className="text-blue-500">DICAL</span>
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


      {/* Hero Banner */}
      <div className="relative h-64 bg-cover bg-center" style={{backgroundImage: `url('/api/placeholder/1200/400')`}}>
        <div className="absolute inset-0 bg-navy-900/50" />
        <div className="container mx-auto px-4 h-full flex items-center relative">
          <div>
            <div className="text-gray-300 mb-2">Home / About</div>
            <h1 className="text-4xl font-bold text-white">About us</h1>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <img src="/api/placeholder/600/600" alt="Healthcare" className="rounded-lg w-full" />
          </div>
          <div className="md:w-1/2">
            <div className="text-blue-500 mb-2">WELCOME TO HOSPITAL NAME</div>
            <h2 className="text-3xl font-bold text-navy-900 mb-6">Best Care for Your Good Health</h2>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare.
            </p>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque. Convallis felis vitae tortor augue.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;