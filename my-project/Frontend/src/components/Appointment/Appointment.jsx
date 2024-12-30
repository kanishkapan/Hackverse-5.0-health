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
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Booking Form Section */}
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Book an Appointment</h2>
            <p className="text-gray-600 mb-6">
              Please fill in the form below to book an appointment.
            </p>
            <form className="grid grid-cols-1 sm:grid-cols-2 gap-4" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Phone Number (required)"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                required
              />
              <select
                name="reason"
                value={formData.reason}
                onChange={handleChange}
                className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
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
                className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                required
              />
              <input
                type="time"
                name="preferredTime"
                value={formData.preferredTime}
                onChange={handleChange}
                className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                required
              />
              <label className="flex items-center col-span-2">
                <input
                  type="checkbox"
                  name="emergency"
                  checked={formData.emergency}
                  onChange={handleChange}
                  className="mr-2"
                />
                Emergency
              </label>
              <select
                name="doctor"
                value={formData.doctor}
                onChange={handleChange}
                className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
              >
                <option value="">Doctor (Optional)</option>
                <option value="Dr. Smith">Dr. Smith</option>
                <option value="Dr. Johnson">Dr. Johnson</option>
              </select>
              <select
                name="department"
                value={formData.department}
                onChange={handleChange}
                className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
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
                className="col-span-2 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
              ></textarea>
              <button
                type="submit"
                className="col-span-2 bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Schedule Section */}
          <div className="bg-blue-700 text-white p-6 shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold mb-6">Schedule Hours</h2>
            <ul className="space-y-4">
              <li className="flex justify-between">
                <span>Monday</span>
                <span>09:00 AM - 07:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Tuesday</span>
                <span>09:00 AM - 07:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Wednesday</span>
                <span>09:00 AM - 07:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Thursday</span>
                <span>09:00 AM - 07:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Friday</span>
                <span>09:00 AM - 07:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span>09:00 AM - 07:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span>Closed</span>
              </li>
            </ul>
            <div className="mt-6">
              <p className="text-lg font-semibold">Emergency</p>
              <p className="text-lg">(237) 681-812-255</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
