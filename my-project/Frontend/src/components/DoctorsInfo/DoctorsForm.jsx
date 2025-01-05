import React, { useState } from "react";
import axios from "axios";

const DoctorsForm = () => {
  const [formData, setFormData] = useState({
    age: "",
    gender: "",
    medicalCollege: "",
    ugDegree: "",
    yearOfUgCompletion: "",
    medicalRegistrationNumber: "",
    specialities: [],
    pgDegree: "",
    pgSpecialization: "",
    yearOfPgCompletion: "",
    experience: "",
  });

  const specialityOptions = [
    "General Medicine",
    "Pediatrics",
    "Cardiology",
    "Dermatology",
    "Orthopedics",
    "Neurology",
    "Ayurveda",
    "Gynecology",
    "ENT",
    "Ophthalmology",
  ];

  const ugDegrees = ["MBBS", "BAMS", "BHMS", "BDS"];
  const pgDegrees = ["MD", "MS", "DNB", "DM"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSpecialityChange = (e) => {
    const value = e.target.value;
    setFormData((prev) => {
      const updatedSpecialities = e.target.checked
        ? [...prev.specialities, value]
        : prev.specialities.filter((speciality) => speciality !== value);
      return { ...prev, specialities: updatedSpecialities };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3015/api/user/profile/doctor",
        formData
      );
      console.log("Doctor Registered:", response.data);
    } catch (error) {
      console.error("Error registering doctor:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-32 pb-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-blue-900 mb-8 text-center">
            Doctor Registration
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Basic Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Age
                </label>
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Gender
                </label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            {/* Education Details */}
            <div className="border-t pt-6">
              <h2 className="text-xl font-bold text-blue-900 mb-4">
                Education Details
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Medical College
                  </label>
                  <input
                    type="text"
                    name="medicalCollege"
                    value={formData.medicalCollege}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    UG Degree
                  </label>
                  <select
                    name="ugDegree"
                    value={formData.ugDegree}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  >
                    <option value="">Select UG Degree</option>
                    {ugDegrees.map((degree) => (
                      <option key={degree} value={degree}>
                        {degree}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Year of UG Completion
                  </label>
                  <input
                    type="number"
                    name="yearOfUgCompletion"
                    value={formData.yearOfUgCompletion}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Medical Registration Number
                  </label>
                  <input
                    type="text"
                    name="medicalRegistrationNumber"
                    value={formData.medicalRegistrationNumber}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Specialities */}
            <div className="relative">
              <label className="block text-gray-700 font-semibold mb-2">
                Specialities
              </label>

              {/* Wrapper for Checkboxes */}
              <div className="relative">
                <div className="overflow-hidden max-h-72">
                  <ul className="space-y-4 p-4 border border-gray-300 rounded-lg shadow-lg hover:border-blue-500 transition-all duration-300 ease-in-out">
                    {specialityOptions.map((speciality) => (
                      <li
                        key={speciality}
                        className="flex items-center space-x-3 opacity-0 animate-fadeIn"
                      >
                        <input
                          type="checkbox"
                          value={speciality}
                          onChange={handleSpecialityChange}
                          checked={formData.specialities.includes(speciality)}
                          className="form-checkbox text-blue-500 focus:ring-blue-500 transition-all duration-300 ease-in-out"
                        />
                        <span className="text-gray-700 font-semibold">{speciality}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Animation for Checkbox Appearance */}
              <style jsx>{`
                @keyframes fadeIn {
                  0% {
                    opacity: 0;
                  }
                  100% {
                    opacity: 1;
                  }
                }

                /* Animation for each list item */
                .animate-fadeIn {
                  animation: fadeIn 0.5s forwards;
                }
              `}</style>
            </div>

            {/* PG Details (Optional) */}
            <div className="border-t pt-6">
              <h2 className="text-xl font-bold text-blue-900 mb-4">
                Post Graduation Details (Optional)
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    PG Degree
                  </label>
                  <select
                    name="pgDegree"
                    value={formData.pgDegree}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select PG Degree</option>
                    {pgDegrees.map((degree) => (
                      <option key={degree} value={degree}>
                        {degree}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    PG Specialization
                  </label>
                  <input
                    type="text"
                    name="pgSpecialization"
                    value={formData.pgSpecialization}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Year of PG Completion
                  </label>
                  <input
                    type="number"
                    name="yearOfPgCompletion"
                    value={formData.yearOfPgCompletion}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Years of Experience
                  </label>
                  <input
                    type="number"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center pt-6">
              <button
                type="submit"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DoctorsForm;
