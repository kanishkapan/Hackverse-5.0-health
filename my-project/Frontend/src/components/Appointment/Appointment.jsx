import React, { useState } from "react";

const Appointment = () => {
  const [formData, setFormData] = useState({
    phone: "",
    reason: "",
    preferredDate: "",
    preferredTime: "",
    emergency: false,
    doctor: "",
    department: "",
    additionalNotes: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send data to the backend in a scalable way
    try {
      const response = await fetch("/api/appointments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Appointment booked successfully!");
      } else {
        alert("Error booking appointment.");
      }
    } catch (error) {
      alert("Error: " + error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center animate-fade-in overflow-hidden">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Booking Form Section */}
          <div className="bg-white p-8 shadow-xl rounded-lg transform transition-transform hover:scale-105 animate-slide-in-left">
            <h2 className="text-3xl font-bold text-blue-800 mb-4">Book an Appointment</h2>
            <p className="text-gray-600 mb-6">
              Please fill in the form below to book an appointment.
            </p>
            <form
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                placeholder="Phone Number (required)"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-md"
                required
              />
              <select
                name="reason"
                value={formData.reason}
                onChange={handleChange}
                className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-md"
                required
              >
                <option value="">Reason for Appointment</option>
                <option value="Consultation">Consultation</option>
                <option value="Follow-up">Follow-up</option>
                <option value="Emergency">Emergency</option>
              </select>
              <input
                type="date"
                name="preferredDate"
                value={formData.preferredDate}
                onChange={handleChange}
                className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-md"
                required
              />
              <input
                type="time"
                name="preferredTime"
                value={formData.preferredTime}
                onChange={handleChange}
                className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-md"
                required
              />
              <label className="flex items-center col-span-2">
                
              </label>
              <select
                name="doctor"
                value={formData.doctor}
                onChange={handleChange}
                className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-md"
              >
                <option value="">Doctor (Optional)</option>
                <option value="Dr. Smith">Dr. Smith</option>
                <option value="Dr. Johnson">Dr. Johnson</option>
              </select>
              <select
                name="department"
                value={formData.department}
                onChange={handleChange}
                className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-md"
              >
                <option value="">Department (Optional)</option>
                <option value="Cardiology">Cardiology</option>
                <option value="Neurology">Neurology</option>
              </select>
              <textarea
                name="additionalNotes"
                placeholder="Additional Notes (Optional)"
                value={formData.additionalNotes}
                onChange={handleChange}
                className="col-span-2 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-md"
              ></textarea>
              <button
                type="submit"
                className="col-span-2 bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Schedule Section */}
          <div className="bg-gradient-to-br from-blue-700 to-blue-900 text-white p-8 shadow-xl rounded-lg transform transition-transform hover:scale-105 animate-slide-in-right">
            <h2 className="text-3xl font-bold mb-6">Schedule Hours</h2>
            <div className="mt-6">
              <p className="text-lg font-semibold">Available Slots:</p>
              <ul className="space-y-2 mt-2">
                {Array.from({ length: 12 }, (_, i) => {
                  const startHour = 9 + i; // Start time
                  const start = startHour < 12 ? `${startHour}:00 AM` : `${startHour - 12}:00 PM`; // Format AM/PM
                  const endHour = startHour + 1;
                  const end =
                    endHour < 12
                      ? `${endHour}:00 AM`
                      : endHour === 12
                      ? `12:00 PM`
                      : `${endHour - 12}:00 PM`; // Format AM/PM
                  return (
                    <li key={i} className="flex justify-between">
                      <span>Slot {i + 1}</span>
                      <span>
                        {start} - {end}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
