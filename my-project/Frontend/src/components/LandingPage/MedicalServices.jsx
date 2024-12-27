import React from "react";
import { Heart, CheckCircle, Droplet, TestTube } from "lucide-react"; // Replace with a valid icon

const MedicalServices = () => {
  const services = [
    {
      title: 'Free Checkup',
      icon: CheckCircle,
      color: 'text-blue-500'
    },
    {
      title: 'AI Diagnosis',
      icon: Heart,
      color: 'text-indigo-600'
    },
    {
      title: 'DNA Testing',
      icon: TestTube, // Use TestTube instead of Flask or Vial
      color: 'text-blue-500'
    },
    {
      title: 'Blood Bank',
      icon: Droplet,
      color: 'text-blue-500'
    }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto p-4 bg-white">
      <div className="text-center mb-8">
        <h2 className="text-sm font-medium text-blue-500 uppercase tracking-wider mb-2">
          CARE YOU CAN BELIEVE IN
        </h2>
        <h1 className="text-3xl font-bold text-navy-900">Our Services</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 p-3 rounded-full bg-gray-50">
                <service.icon className={`w-8 h-8 ${service.color}`} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                {service.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <button className="bg-navy-900 text-white px-8 py-3 rounded-md hover:bg-navy-800 transition-colors duration-300">
          View All
        </button>
      </div>
    </div>
  );
};

export default MedicalServices;
