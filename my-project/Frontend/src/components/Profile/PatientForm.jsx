import React, { useState } from "react";
import axios from "axios";

const PatientForm = () => {
  const [formData, setFormData] = useState({
    age: "",
    gender: "",
    medicalHistory: "",
    contact: "",
    emergencyContact: "",
    allergies: "",
    medications: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/patient-data", formData);
      console.log("Data successfully sent to backend:", response.data);
      alert("Form submitted successfully!");
    } catch (error) {
      console.error("Error sending data to backend:", error);
      alert("Failed to submit the form. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-blue-600 flex flex-col items-center justify-center">
      <div className="relative w-full h-72 bg-blue-800 flex items-center justify-center text-white">
        <h1 className="text-3xl font-bold">Patient Information Form</h1>
      </div>

      <form
        className="bg-white shadow-xl rounded-lg p-8 mt-8 w-full max-w-4xl"
        onSubmit={handleSubmit}
      >
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-6">Fill Your Details</h2>
        <div className="space-y-6">
          {/* Age */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Age:</label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Gender */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Gender:</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="" disabled>Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Medical History */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Medical History:</label>
            <textarea
              name="medicalHistory"
              value={formData.medicalHistory}
              onChange={handleChange}
              className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              rows="4"
              required
            ></textarea>
          </div>

          {/* Contact */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Contact:</label>
            <input
              type="tel"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Emergency Contact */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Emergency Contact:</label>
            <input
              type="tel"
              name="emergencyContact"
              value={formData.emergencyContact}
              onChange={handleChange}
              className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Allergies */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Allergies:</label>
            <input
              type="text"
              name="allergies"
              value={formData.allergies}
              onChange={handleChange}
              className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Current Medications */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Current Medications:</label>
            <input
              type="text"
              name="medications"
              value={formData.medications}
              onChange={handleChange}
              className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full md:w-1/3 bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 rounded-lg"
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