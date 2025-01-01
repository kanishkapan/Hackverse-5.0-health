import React from "react";

const VideoRoom = () => {
  const videoCallUrl = "https://kani21.daily.co/copab2TZoegL5igP9Nny";

  const joinRoom = () => {
    // Redirect to the video call URL
    window.location.href = videoCallUrl;
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900">
      <div className="w-full max-w-lg p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">
          Video Call Room
        </h1>
        <div className="h-60 w-full bg-gray-200 rounded-lg flex items-center justify-center mb-6">
          <p className="text-gray-500">Your video feed will appear here.</p>
        </div>
        <button
          onClick={joinRoom}
          className="w-full px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          Join Call
        </button>
      </div>
    </div>
  );
};

export default VideoRoom;
                                                                                                                                                                                                                                                                                                                                                                        