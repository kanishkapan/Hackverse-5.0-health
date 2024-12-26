import BookAppointment from "./components/LandingPage/BookApointment";
import ContactSection from "./components/Footer/ContactSection";
import DoctorSlider from "./components/LandingPage/DoctorSlider";
import MedicalLandingPage from "./components/LandingPage/MedicalLandingPage";
import MedicalServices from "./components/LandingPage/MedicalServices";
import NewsGrid from "./components/LandingPage/NewsGrid";
import Specialties from "./components/LandingPage/Specialities";
import WelcomeSection from "./components/LandingPage/WelcomeSection";
import Header from "./components/Aibot/Header";
import ChatBooth from "./components/Aibot/ChatBooth";
import AboutPage from "./components/Aibot/AboutPage";
import Footerai from "./components/Aibot/Footerai";
import Contact from "./components/Contact/Contact";
import ResponsiveMap from "./components/Contact/ResposniveMap";
import ContactForm from "./components/Contact/ContactForm";
import FooterForContact from "./components/Contact/FooterForContact";

export default function App() {
  return (
    <>
    
    <MedicalLandingPage/>
    <WelcomeSection/>
    <MedicalServices/>
    <Specialties/>
    <BookAppointment/>
    <DoctorSlider/>
    <NewsGrid/>
    <ContactSection/>
    <Header/>
    <ChatBooth/>
    <ContactSection/>
    <Contact/>
    <ResponsiveMap/>
    <ContactForm/>
    <NewsGrid/>
    <FooterForContact/>
    
    
   
    
    </>
  )
}