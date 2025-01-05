import React from "react";
import Contact from "../components/Contact/Contact";
import ResponsiveMap from "../components/Contact/ResposniveMap";
import ContactForm from "../components/Contact/ContactForm";
import Navbar from "../components/Footer/Navbar";
import ContactHeader from "../components/Contact/ContactHeader";
import ContactSection from "../components/Footer/ContactSection";

const ContactPage = () => {
  return (
    <div>

     <ContactHeader  />
     

      <ResponsiveMap />
      
    
      <ContactSection />
      
    </div>
  );
};

export default ContactPage;
