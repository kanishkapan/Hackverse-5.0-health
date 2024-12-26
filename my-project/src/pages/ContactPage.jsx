import React from "react";
import Contact from "../components/Contact/Contact";
import ResponsiveMap from "../components/Contact/ResposniveMap";
import ContactForm from "../components/Contact/ContactForm";
import FooterForContact from "../components/Contact/FooterForContact";
import Navbar from "../components/Footer/Navbar";
import ContactHeader from "../components/Contact/ContactHeader";

const ContactPage = () => {
  return (
    <div>

     <ContactHeader  />
     

      <ResponsiveMap />
      
      <ContactForm />
      <FooterForContact />
    </div>
  );
};

export default ContactPage;
