import React, { useState } from "react";

const PatientForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    medicalHistory: "",
    contact: "",
    address: "",
    emergencyContact: "",
    bloodType: "",
    allergies: "",
    medications: "",
    surgeries: "",
    chronicConditions: "",
    healthGoals: "",
    insuranceInfo: "",
    file: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      file: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission logic (e.g., sending data to backend)
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-blue-600 flex flex-col items-center justify-center">
      {/* Header with background image and text overlay */}
      <div className="relative w-screen h-72 sm:h-96 lg:h-[500px] overflow-hidden" style={{ marginLeft: 'calc(-50vw + 50%)', marginRight: 'calc(-50vw + 50%)', width: '100vw' }}>
      <video 
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay 
        muted 
        loop 
        playsInline
      >
        <source src="src/assets/49813-458438871_small.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-transparent"></div>

      <div className="relative flex flex-col items-center justify-center h-full text-center px-4 sm:px-8 text-white">
        <div className="text-sm text-gray-300 mb-4">
          <span className="hover:text-gray-100 cursor-pointer">Home</span>
          <span className="mx-2">/</span>
          <span>Contact</span>
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
          Get in Touch with Us
        </h1>

        <p className="mt-4 text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-3xl">
          Have questions or need support? Reach out to us, and we'll be happy to assist you. We're here to help!
        </p>

        <div className="mt-6">
          <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm sm:text-base font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out">
            Contact Us
          </button>
        </div>
      </div>
    </div>


      {/* Patient Form */}
      <form
        className="bg-white shadow-xl rounded-lg p-8 mt-8 w-full max-w-4xl animate__animated animate__fadeIn animate__delay-2s"
        onSubmit={handleSubmit}
      >
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-6">Patient Information Form</h2>

        <div className="space-y-6">
          {/* Name */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-4 border border-gray-300 rounded-lg transition duration-300 ease-in-out transform focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Age */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Age:</label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              className="w-full p-4 border border-gray-300 rounded-lg transition duration-300 ease-in-out transform focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Gender */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Gender:</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full p-4 border border-gray-300 rounded-lg transition duration-300 ease-in-out transform focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Medical History */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Medical History:</label>
            <textarea
              name="medicalHistory"
              value={formData.medicalHistory}
              onChange={handleChange}
              className="w-full p-4 border border-gray-300 rounded-lg transition duration-300 ease-in-out transform focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
              required
            ></textarea>
          </div>

          {/* New Fields for Detailed Patient Analysis */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">Address:</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full p-4 border border-gray-300 rounded-lg transition duration-300 ease-in-out transform focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">Emergency Contact:</label>
              <input
                type="tel"
                name="emergencyContact"
                value={formData.emergencyContact}
                onChange={handleChange}
                className="w-full p-4 border border-gray-300 rounded-lg transition duration-300 ease-in-out transform focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">Blood Type:</label>
              <input
                type="text"
                name="bloodType"
                value={formData.bloodType}
                onChange={handleChange}
                className="w-full p-4 border border-gray-300 rounded-lg transition duration-300 ease-in-out transform focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">Allergies:</label>
              <input
                type="text"
                name="allergies"
                value={formData.allergies}
                onChange={handleChange}
                className="w-full p-4 border border-gray-300 rounded-lg transition duration-300 ease-in-out transform focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">Current Medications:</label>
              <input
                type="text"
                name="medications"
                value={formData.medications}
                onChange={handleChange}
                className="w-full p-4 border border-gray-300 rounded-lg transition duration-300 ease-in-out transform focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">Past Surgeries:</label>
              <input
                type="text"
                name="surgeries"
                value={formData.surgeries}
                onChange={handleChange}
                className="w-full p-4 border border-gray-300 rounded-lg transition duration-300 ease-in-out transform focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">Chronic Conditions:</label>
              <input
                type="text"
                name="chronicConditions"
                value={formData.chronicConditions}
                onChange={handleChange}
                className="w-full p-4 border border-gray-300 rounded-lg transition duration-300 ease-in-out transform focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">Health Goals:</label>
              <textarea
                name="healthGoals"
                value={formData.healthGoals}
                onChange={handleChange}
                className="w-full p-4 border border-gray-300 rounded-lg transition duration-300 ease-in-out transform focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="4"
              ></textarea>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">Insurance Information:</label>
              <input
                type="text"
                name="insuranceInfo"
                value={formData.insuranceInfo}
                onChange={handleChange}
                className="w-full p-4 border border-gray-300 rounded-lg transition duration-300 ease-in-out transform focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Upload File */}
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">Upload Medical File:</label>
              <input
                type="file"
                name="file"
                onChange={handleFileChange}
                className="w-full p-4 border border-gray-300 rounded-lg transition duration-300 ease-in-out transform focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-2/3 md:w-1/3 bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 rounded-lg transition-all duration-300 ease-in-out"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PatientForm;
