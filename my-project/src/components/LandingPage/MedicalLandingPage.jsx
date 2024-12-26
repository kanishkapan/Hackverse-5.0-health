import React from 'react';

const MedicalLandingPage = () => {
  return (
    <div className="font-sans">
      {/* Header */}
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

      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[500px] md:h-[600px] flex items-center justify-center text-center"
        style={{
          backgroundImage:
            "url('https://via.placeholder.com/1200x800')", // Replace with your image URL
        }}
      >
        <div className="absolute inset-0 bg-blue-900 bg-opacity-40"></div>
        <div className="relative z-10 text-white px-6 md:px-12">
          <h2 className="text-4xl md:text-5xl font-bold leading-snug">
            Leading the Way in Medical Excellence
          </h2>
          <p className="mt-4 text-lg">Caring for Life</p>
          <button className="mt-6 bg-blue-500 px-6 py-2 rounded-md hover:bg-blue-600">
            Our Services
          </button>
        </div>
      </section>

      {/* Appointment Section */}
      <section className="bg-white py-8 px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="flex items-center justify-center bg-blue-100 p-6 rounded-lg shadow-md">
          <div>
            <p className="font-bold text-xl text-blue-700">Book an Appointment</p>
            <p className="text-gray-600">Convenient booking</p>
          </div>
        </div>
        <div className="flex items-center justify-center bg-blue-100 p-6 rounded-lg shadow-md">
          <div>
            <p className="font-bold text-xl text-blue-700">Meet Our Doctors</p>
            <p className="text-gray-600">Get expert advice</p>
          </div>
        </div>
        <div className="flex items-center justify-center bg-blue-100 p-6 rounded-lg shadow-md">
          <div>
            <p className="font-bold text-xl text-blue-700">Healthcare Services</p>
            <p className="text-gray-600">Accessible care</p>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
     
    </div>
  );
};

export default MedicalLandingPage;
