import React from "react";

const MedicalServices = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="grid md:grid-cols-2 gap-6 items-center w-full max-w-6xl">
        {/* Left Image Placeholder */}
        <div className="flex justify-center items-center">
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <p className="text-gray-500">
              
            <img src="https://cdn.pixabay.com/photo/2020/12/05/15/55/christmas-tree-5806329_1280.jpg" alt="Placeholder" className="rounded-lg shadow-lg" />
            </p>
          </div>
        </div>

        {/* Right Content */}
        <div className="text-center md:text-left">
          <h3 className="text-blue-600 uppercase tracking-wide font-semibold mb-2">
            Care You Can Believe In
          </h3>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Services</h2>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center">
              <div className="text-blue-500 text-3xl mb-2">🔗</div>
              <p className="font-medium text-gray-700">Free Checkup</p>
            </div>

            <div className="bg-blue-600 text-white shadow-md rounded-lg p-6 flex flex-col items-center">
              <div className="text-3xl mb-2">❤️</div>
              <p className="font-medium">AI Diagnosis</p>
            </div>

            <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center">
              <div className="text-blue-500 text-3xl mb-2">🧬</div>
              <p className="font-medium text-gray-700">DNA Testing</p>
            </div>

            <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center">
              <div className="text-blue-500 text-3xl mb-2">🩸</div>
              <p className="font-medium text-gray-700">Blood Bank</p>
            </div>
          </div>

          <button className="bg-blue-600 text-white font-medium px-6 py-2 rounded-lg mt-6 hover:bg-blue-700">
            View All
          </button>
        </div>
      </div>
    </div>
  );
};

export default MedicalServices;
