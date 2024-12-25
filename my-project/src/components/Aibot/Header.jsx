import React from 'react';
import { Clock, MapPin, Phone, Search } from 'lucide-react';

const Header = () => {
  return (
    <div className="min-h-screen flex flex-col">
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

      <div className="flex-1 relative bg-navy-900">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/api/placeholder/1200/800')`,
            backgroundBlendMode: 'overlay',
            backgroundColor: 'rgba(0, 0, 50, 0.7)'
          }}
        >
          <div className="container mx-auto px-4 h-full flex items-center">
            <div className="max-w-2xl text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Meet Jivika: The AI doc that's always on call!
              </h1>
              <p className="text-lg opacity-90 leading-relaxed">
                Jivaka Komarabhacca was a renowned ancient Indian physician during the time of Buddha, celebrated for his exceptional skills in medicine and surgery. Jivaka is mentioned in Buddhist texts as the personal physician to Buddha and the Sangha (the Buddhist monastic community). He was also a royal physician serving King Bimbisara and King Ajatashatru of Magadha. Known for his compassion and dedication, Jivaka treated patients without expecting material rewards, embodying selfless service.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;