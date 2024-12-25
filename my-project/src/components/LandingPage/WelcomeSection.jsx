import React from 'react';

const WelcomeSection = () => {
  return (
    <section className="bg-white">
      {/* Text Section */}
      <div className="text-center px-6 md:px-12 py-12">
        <h3 className="text-blue-500 font-bold uppercase text-sm tracking-widest">
          Welcome to Meddical
        </h3>
        <h1 className="text-blue-900 font-bold text-2xl md:text-4xl mt-4">
          A Great Place to Receive Care
        </h1>
        <p className="text-gray-600 mt-4 text-sm md:text-base leading-relaxed max-w-xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          placerat scelerisque tortor ornare ornare. Convallis felis vitae
          tortor augue. Velit nascetur proin massa in. Consequat faucibus
          porttitor enim et.
        </p>
        <button className="mt-6 text-blue-500 hover:text-blue-700 font-medium text-sm flex items-center justify-center">
          Learn More <span className="ml-2 material-icons">arrow_forward</span>
        </button>
      </div>

      {/* Image Section */}
      <div className="relative">
        <img
          src="https://via.placeholder.com/1200x600" // Replace with the actual image URL
          alt="Medical Team"
          className="w-full object-cover"
        />
      </div>
    </section>
  );
};

export default WelcomeSection;
