import React, { useState, useEffect } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";

const PatientForm = () => {
  const { t, i18n } = useTranslation(); // useTranslation hook for language handling
  const [formData, setFormData] = useState({
    age: "",
    gender: "",
    medicalHistory: "",
    contact: "",
    emergencyContact: "",
    allergies: "",
    medications: "",
  });
  const [isEditing, setIsEditing] = useState(false); // For toggling edit mode
  const [isLoading, setIsLoading] = useState(true); // To handle loading state

  // Fetch the patient's data from the backend
  useEffect(() => {
    const fetchPatientData = async () => {
      try {
        const response = await axios.get("http://localhost:3015/api/user/profile/patient", { withCredentials: true });
        setFormData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching patient data:", error);
        setIsLoading(false);
      }
    };

    fetchPatientData();
  }, []);

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
      const response = await axios.put(
        "http://localhost:3015/api/user/profile/patient/",
        formData,
        {
          withCredentials: true, // Important for sending cookies
        }
      );
      alert(t("patientForm.formSuccess"));
      setIsEditing(false); // After successful update, disable edit mode
    } catch (error) {
      console.error("Error sending data to backend:", error);
      alert(t("patientForm.formError"));
    }
  };

  const handleEdit = () => {
    setIsEditing(true); // Enable edit mode when button is clicked
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-black to-blue-600 flex items-center justify-center">
        <div className="text-white font-semibold text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-blue-600 flex flex-col items-center justify-center">
      <div className="relative w-full h-72 bg-blue-800 flex items-center justify-center text-white">
        <h1 className="text-3xl font-bold">{t("patientForm.title")}</h1>
      </div>

      <div className="mt-4 flex justify-center space-x-4">
        <button
          onClick={() => changeLanguage("en")}
          className="text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 font-semibold py-2 px-6 rounded-lg transition duration-300 transform hover:scale-105"
        >
          English
        </button>
        <button
          onClick={() => changeLanguage("hi")}
          className="text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 font-semibold py-2 px-6 rounded-lg transition duration-300 transform hover:scale-105"
        >
          हिंदी
        </button>
        <button
          onClick={() => changeLanguage("mr")}
          className="text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 font-semibold py-2 px-6 rounded-lg transition duration-300 transform hover:scale-105"
        >
          मराठी
        </button>
        <button
          onClick={() => changeLanguage("kn")}
          className="text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 font-semibold py-2 px-6 rounded-lg transition duration-300 transform hover:scale-105"
        >
          ಕನ್ನಡ
        </button>
      </div>

      <form
        className="bg-white shadow-xl rounded-lg p-8 mt-8 w-full max-w-4xl"
        onSubmit={handleSubmit}
      >
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-6">
          {t("patientForm.fillDetails")}
        </h2>
        <div className="space-y-6">
          {/* Age */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              {t("patientForm.age")}:
            </label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              required
              disabled={!isEditing} // Disable input if not in edit mode
            />
          </div>

          {/* Gender */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              {t("patientForm.gender")}:
            </label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              required
              disabled={!isEditing} // Disable input if not in edit mode
            >
              <option value="" disabled>
                {t("patientForm.selectGender")}
              </option>
              <option value="male">{t("patientForm.male")}</option>
              <option value="female">{t("patientForm.female")}</option>
              <option value="other">{t("patientForm.other")}</option>
            </select>
          </div>

          {/* Medical History */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              {t("patientForm.medicalHistory")}:
            </label>
            <textarea
              name="medicalHistory"
              value={formData.medicalHistory}
              onChange={handleChange}
              className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              rows="4"
              required
              disabled={!isEditing} // Disable input if not in edit mode
            ></textarea>
          </div>

          {/* Contact */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              {t("patientForm.contact")}:
            </label>
            <input
              type="tel"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              required
              disabled={!isEditing} // Disable input if not in edit mode
            />
          </div>

          {/* Emergency Contact */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              {t("patientForm.emergencyContact")}:
            </label>
            <input
              type="tel"
              name="emergencyContact"
              value={formData.emergencyContact}
              onChange={handleChange}
              className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              required
              disabled={!isEditing} // Disable input if not in edit mode
            />
          </div>

          {/* Allergies */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              {t("patientForm.allergies")}:
            </label>
            <input
              type="text"
              name="allergies"
              value={formData.allergies}
              onChange={handleChange}
              className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              required
              disabled={!isEditing} // Disable input if not in edit mode
            />
          </div>

          {/* Current Medications */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              {t("patientForm.medications")}:
            </label>
            <input
              type="text"
              name="medications"
              value={formData.medications}
              onChange={handleChange}
              className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              disabled={!isEditing} // Disable input if not in edit mode
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full md:w-1/3 bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 rounded-lg"
            >
              {isEditing ? t("patientForm.submit") : t("patientForm.edit")}
            </button>
          </div>
        </div>
      </form>

      {/* Edit Profile Button */}
      {!isEditing && (
        <div className="flex justify-center mt-4">
          <button
            onClick={handleEdit}
            className="text-white bg-blue-600 hover:bg-blue-700 font-semibold py-2 px-6 rounded-lg"
          >
            {t("patientForm.editProfile")}
          </button>
        </div>
      )}
    </div>
  );
};

export default PatientForm;
