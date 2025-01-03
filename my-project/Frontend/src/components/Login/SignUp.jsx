import React, { useState } from "react";
import axios from "axios";

const SignUp = () => {
  const [signupSuccess, setSignupSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
      role: formData.get("role") || "Patient", // Default role to "Patient"
    };

    try {
      const response = await axios.post(
        "http://localhost:3015/api/user/register",
        data
      );

      if (response.status === 200) {
        setSignupSuccess(true); // Show success alert
        setTimeout(() => {
          setSignupSuccess(false);
        }, 3000); // Alert disappears after 3 seconds
      }
    } catch (error) {
      console.error("Error during sign-up:", error);
      setErrorMessage(
        error.response?.data?.message || "Sign-up failed. Please try again."
      );
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Left Video Section */}
      <div className="hidden lg:flex lg:w-1/2 relative">
        <video
          src="https://cdn.pixabay.com/video/2024/11/07/240330_tiny.mp4"
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-blue-500/20" />
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white bg-gradient-to-b from-transparent to-black/50">
          <h2 className="text-3xl font-bold mb-2">Welcome to Jivika</h2>
          <p className="text-lg">Your trusted partner in healthcare</p>
        </div>
      </div>

      {/* Right Form Section */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-4 sm:p-8 lg:p-12">
        <div className="w-full max-w-lg bg-white shadow-xl rounded-md p-8 space-y-6">
          {/* Header */}
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold">Create Your Account</h1>
            <p className="text-lg text-gray-600">
              Sign up to start your journey of finding medicines easily!
            </p>
          </div>

          {/* Form */}
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Name */}
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
                required
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
                required
              />
            </div>

            {/* Password */}
            <div className="space-y-2">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
                required
              />
            </div>

            {/* Role */}
            <div className="space-y-2">
              <label
                htmlFor="role"
                className="block text-sm font-medium text-gray-700"
              >
                Role
              </label>
              <select
                id="role"
                name="role"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
                defaultValue="Patient"
              >
                <option value="Doctor">Doctor</option>
                <option value="Patient">Patient</option>
              </select>
            </div>

            {/* Sign Up Button */}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 font-semibold"
            >
              Sign Up
            </button>
          </form>

          {/* Footer */}
          <p className="text-center text-gray-600">
            Already have an account?{" "}
            <a
              href="/signin"
              className="text-blue-600 hover:underline font-medium"
            >
              Sign In
            </a>
          </p>
        </div>
      </div>

      {/* Success Alert */}
      {signupSuccess && (
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-8 py-4 rounded-md shadow-lg">
          <p className="font-semibold">Sign Up Successful!</p>
        </div>
      )}

      {/* Error Alert */}
      {errorMessage && (
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-8 py-4 rounded-md shadow-lg">
          <p className="font-semibold">{errorMessage}</p>
        </div>
      )}
    </div>
  );
};

export default SignUp;
