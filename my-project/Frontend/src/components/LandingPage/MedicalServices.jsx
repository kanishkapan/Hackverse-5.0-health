import React from "react";

const MedicalServices = () => {
  return (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center p-6">
      <div className="grid md:grid-cols-2 gap-8 items-center w-full max-w-6xl">
        {/* Left Image Section */}
        <div className="flex justify-center items-center">
          <img
            src="https://cdn.pixabay.com/photo/2020/12/05/15/55/christmas-tree-5806329_1280.jpg"
            alt="Medical Services"
            className="rounded-lg shadow-lg w-full max-w-sm sm:max-w-md"
          />
        </div>

        {/* Right Content Section */}
        <div className="text-center md:text-left">
          <h3 className="text-blue-600 uppercase tracking-wide font-semibold mb-2">
            Care You Can Believe In
          </h3>
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            Our Services
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Service 1 */}
            <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center transform transition duration-500 hover:scale-105 hover:shadow-xl">
              <div className="text-blue-500 text-4xl mb-3">🔗</div>
              <p className="font-medium text-gray-700">Seamless Appointment</p>
            </div>

            {/* Service 2 */}
            <div className="bg-blue-600 text-white shadow-lg rounded-lg p-6 flex flex-col items-center transform transition duration-500 hover:scale-105 hover:shadow-xl">
              <div className="text-4xl mb-3">❤️</div>
              <p className="font-medium">Consult Jivika</p>
            </div>

            {/* Service 3 */}
            <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center transform transition duration-500 hover:scale-105 hover:shadow-xl">
              <div className="text-blue-500 text-4xl mb-3">🧬</div>
              <p className="font-medium text-gray-700">Medicine Recommendation</p>
            </div>

            {/* Service 4 */}
            <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center transform transition duration-500 hover:scale-105 hover:shadow-xl">
              <div className="text-blue-500 text-4xl mb-3">🩸</div>
              <p className="font-medium text-gray-700">Live Chat</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicalServices;
