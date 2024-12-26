import React from 'react';
import Navbar from '../Footer/Navbar';

const MedicalLandingPage = () => {
  return (
    <div className="font-sans">
      {/* Header */}
   
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
