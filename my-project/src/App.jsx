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
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blogpost" element={<BlogPostPage />} />
        <Route path="/profile" element={<PatientForm />} />
     
        

       
      </Routes>
    </Router>
  );
};

export default App;
