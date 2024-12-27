import React from "react";

const AppointmentBooking = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Booking Form Section */}
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Book an Appointment</h2>
            <p className="text-gray-600 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare.
            </p>
            <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Name"
                className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
              />
              <select
                className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
              >
                <option>Gender</option>
                <option>Male</option>
                <option>Female</option>
              </select>
              <input
                type="email"
                placeholder="Email"
                className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
              />
              <input
                type="text"
                placeholder="Phone"
                className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
              />
              <input
                type="date"
                className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
              />
              <input
                type="time"
                className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
              />
              <select
                className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
              >
                <option>Doctor</option>
                <option>Dr. Smith</option>
                <option>Dr. Johnson</option>
              </select>
              <select
                className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
              >
                <option>Department</option>
                <option>Cardiology</option>
                <option>Neurology</option>
              </select>
              <textarea
                placeholder="Message"
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

export default AppointmentBooking;
