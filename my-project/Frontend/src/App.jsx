import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import Navbar
import Navbar from "./components/Footer/Navbar";

// Import Page Components
import AibotPage from "../src/pages/AiBot";
import ContactPage from "../src/pages/ContactPage";
import LandingPage from "../src/pages/LandingPage";
import BlogPage from "./pages/BlogPage";
import BlogPostPage from "./pages/BlogPostPage";
import PatientForm from "./components/Profile/PatientForm";

import Medicines from "./pages/Medicines";
import Login from "./pages/Login";
import SignIn from "./components/Login/SignUp";
import LoginPage from "./components/Login/LoginPage";
import VideoCall from "./pages/VideoCall";
import LiveChat from "./pages/LiveChat";
import AppointmentForm from "./pages/AppointmentForm";
const App = () => {
  return (
    <Router>
      {/* Navbar displayed on all pages */}
      <Navbar />
      
      <Routes>
        {/* Landing Page */}
        <Route path="/" element={<LandingPage />} />

        {/* AI Bot Page */}
        <Route path="/aibot" element={<AibotPage />} />

        {/* Contact Page */}
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/blog" element={<BlogPage />} />\
        <Route path="/blogpost" element={<BlogPostPage />} />
        <Route path="/profile" element={<PatientForm />} />
        <Route path="/Appointment" element={<AppointmentForm/>} />
        <Route path="/medicines" element={<Medicines/>} />
        <Route path="/signup" element={<SignIn/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/video-call" element={<VideoCall/>} />
        <Route path="/live-chat" element={<LiveChat/>} />
        
     
        

       
      </Routes>
    </Router>
  );
};

export default App;
