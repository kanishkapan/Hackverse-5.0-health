import React from "react";

const VideoRoom = () => {
  const videoCallUrl = "https://kani21.daily.co/copab2TZoegL5igP9Nny";

  const joinRoom = () => {
    // Redirect to the video call URL
    window.location.href = videoCallUrl;
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-gradient-x">
      <div className="w-full max-w-lg p-8 bg-white rounded-2xl shadow-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
        <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-6 animate-fade-in">
          Video Call Room
        </h1>
        <div className="h-64 w-full bg-gray-200 rounded-lg flex items-center justify-center mb-8 border-4 border-dashed border-gray-300 transition-all duration-500 hover:border-blue-500">
          <p className="text-gray-500 text-lg">Your video feed will appear here.</p>
        </div>
        <button
          onClick={joinRoom}
          className="w-full px-6 py-3 text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-300 transform transition-all duration-300 hover:scale-105"
        >
          Join Call
        </button>
      </div>
    </div>
  );
};

export default VideoRoom;
