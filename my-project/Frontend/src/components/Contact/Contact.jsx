import React from 'react';
import { Phone, Clock, MapPin, Search } from 'lucide-react';

const Contact = () => {
  return (
    <div className="w-full">
      {/* Contact Header Section */}
      <div
        className="relative h-48 sm:h-56 bg-cover bg-center text-white"
        style={{
          backgroundImage: `url('https://cdn.pixabay.com/photo/2023/01/15/17/58/nature-7720825_960_720.jpg')`, // Replace with your image URL
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Smooth Blur Effect at Bottom */}
        <div
          className="absolute inset-x-0 bottom-0 h-20"
          style={{
            background: `linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(255, 255, 255, 0.2) 50%, rgba(255, 255, 255, 1) 100%)`,
            filter: 'blur(12px)', // Adjust blur intensity
            transform: 'scale(1.05)', // Expands the blur slightly for smoother blending
          }}
        ></div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-8 py-12">
          <div className="flex flex-col gap-4 text-center sm:text-left">
            <div className="text-sm breadcrumbs">
              <span>Home</span>
              <span className="mx-2">/</span>
              <span>Contact</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
              Our Contacts
            </h1>
          </div>
        </div>
      </div>

      {/* Map or other content below */}
      
    </div>
  );
};

export default Contact;
