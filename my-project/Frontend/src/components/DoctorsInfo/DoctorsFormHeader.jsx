

import React from "react";

const DoctorsHeader = () => {
  return (
    <div className="relative w-full h-72 sm:h-96 lg:h-[500px] bg-cover bg-center text-white" 
      style={{
        backgroundImage: `url('../src/assets/premium_photo-1661382210749-759c11c197a4.jpg')`, // Replace with your image URL
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-transparent"></div>

      {/* Content */}
      <div className="relative flex flex-col items-center justify-center h-full text-center px-4 sm:px-8">
        {/* Breadcrumbs */}
        <div className="text-sm text-gray-300 mb-4">
          
          
        </div>

        {/* Main Heading */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
         Doctors Form 
        </h1>

        {/* Subheading */}
        <p className="mt-4 text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-3xl">
        Thank you for being part of the Dr. Jivka platform! Your expertise and dedication are greatly appreciated in helping us provide quality healthcare services to our users.
        </p>

        {/* Call to Action Button */}
        
      </div>
    </div>
  );
};

export default DoctorsHeader;
