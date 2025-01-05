import React, { useState } from "react";

const DoctorAppointments = () => {
  const [appointments, setAppointments] = useState([
    {
      id: 1,
      patientName: "John Doe",
      time: "10:00 AM",
      date: "2025-01-01",
      status: "pending",
    },
    {
      id: 2,
      patientName: "Jane Smith",
      time: "11:30 AM",
      date: "2025-01-01",
      status: "pending",
    },
  ]);

  const [previousAppointments, setPreviousAppointments] = useState([
    {
      id: 1,
      patientName: "Alice Brown",
      time: "9:00 AM",
      date: "2024-12-31",
      status: "accepted",
    },
    {
      id: 2,
      patientName: "Bob Martin",
      time: "10:30 AM",
      date: "2024-12-30",
      status: "rejected",
    },
  ]);

  const handleAction = (id, action) => {
    setAppointments((prev) =>
      prev.map((appointment) =>
        appointment.id === id ? { ...appointment, status: action } : appointment
      )
    );
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8">Manage Appointments</h1>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Upcoming Appointments</h2>
        <div className="bg-white shadow-md rounded-lg p-4">
          {appointments.length > 0 ? (
            appointments.map(({ id, patientName, time, date, status }) => (
              <div
                key={id}
                className="flex items-center justify-between border-b py-3"
              >
                <div>
                  <p className="font-medium">Patient: {patientName}</p>
                  <p>
                    Date: {date} | Time: {time}
                  </p>
                  <p>Status: {status}</p>
                </div>
                <div>
                  {status === "pending" && (
                    <>
                      <button
                        onClick={() => handleAction(id, "accepted")}
                        className="bg-green-500 text-white px-4 py-2 rounded-lg mr-2 hover:bg-green-600"
                      >
                        Accept
                      </button>
                      <button
                        onClick={() => handleAction(id, "rejected")}
                        className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                      >
                        Reject
                      </button>
                    </>
                  )}
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">No upcoming appointments.</p>
          )}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">Previous Appointments</h2>
        <div className="bg-white shadow-md rounded-lg p-4">
          {previousAppointments.length > 0 ? (
            previousAppointments.map(({ id, patientName, time, date, status }) => (
              <div
                key={id}
                className="flex items-center justify-between border-b py-3"
              >
                <div>
                  <p className="font-medium">Patient: {patientName}</p>
                  <p>
                    Date: {date} | Time: {time}
                  </p>
                  <p>Status: {status}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">No previous appointments.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DoctorAppointments;