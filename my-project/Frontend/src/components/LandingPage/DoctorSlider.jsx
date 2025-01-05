import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useSpring, animated } from "react-spring"; // Importing react-spring for animations

const DoctorSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Set interval for autoplay (in milliseconds)
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const doctors = [
    {
      name: "Dr. John Smith",
      specialization: "Neurology",
      image: "../src/assets/premium_photo-1661580632282-c56b1bfc0489.jpg",
      socialLinks: {
        linkedin: "https://www.linkedin.com/in/drjohnsmith",
        facebook: "https://www.facebook.com/drjohnsmith",
        instagram: "https://www.instagram.com/drjohnsmith",
      },
    },
    {
      name: "Dr. Emily Johnson",
      specialization: "Cardiology",
      image: "../src/assets/photo-1700308433598-baf91787c2a3.jpg",
      socialLinks: {
        linkedin: "https://www.linkedin.com/in/dremilyjohnson",
        facebook: "https://www.facebook.com/dremilyjohnson",
        instagram: "https://www.instagram.com/dremilyjohnson",
      },
    },
    {
      name: "Dr. Michael Brown",
      specialization: "Pediatrics",
      image: "../src/assets/premium_photo-1661544768241-761f1b029100.jpg",
      socialLinks: {
        linkedin: "https://www.linkedin.com/in/drmichaelbrown",
        facebook: "https://www.facebook.com/drmichaelbrown",
        instagram: "https://www.instagram.com/drmichaelbrown",
      },
    },
    {
      name: "Dr. Sarah Davis",
      specialization: "Orthopedics",
      image: "../src/assets/photo-1673054389621-c21d2c362963.jpg",
      socialLinks: {
        linkedin: "https://www.linkedin.com/in/drsarahdavis",
        facebook: "https://www.facebook.com/drsarahdavis",
        instagram: "https://www.instagram.com/drsarahdavis",
      },
    },
    {
      name: "Dr. James Wilson",
      specialization: "Dermatology",
      image: "../src/assets/photo-1652592322517-9be4e3e3879a.jpg",
      socialLinks: {
        linkedin: "https://www.linkedin.com/in/drjameswilson",
        facebook: "https://www.facebook.com/drjameswilson",
        instagram: "https://www.instagram.com/drjameswilson",
      },
    },
    {
      name: "Dr. Laura Martinez",
      specialization: "Psychiatry",
      image: "../src/assets/photo-1678934021124-31bcf34cbd56.jpg",
      socialLinks: {
        linkedin: "https://www.linkedin.com/in/drlauramartinez",
        facebook: "https://www.facebook.com/drlauramartinez",
        instagram: "https://www.instagram.com/drlauramartinez",
      },
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-center text-blue-600 text-lg font-bold uppercase mb-4">Trusted Care</h2>
      <h3 className="text-center text-3xl font-bold mb-8">Our Doctors</h3>
      <Slider {...settings}>
        {doctors.map((doctor, index) => {
          // Animation effect using react-spring
          const fadeIn = useSpring({
            opacity: 1,
            from: { opacity: 0 },
            config: { duration: 1000 },
          });

          return (
            <div key={index} className="p-4">
              <animated.div style={fadeIn} className="bg-white shadow-md rounded-lg overflow-hidden">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-80 object-cover transform transition-all duration-500 hover:scale-105"
                />
                <div className="p-4">
                  <h4 className="text-lg font-semibold mb-2">{doctor.name}</h4>
                  <p className="text-blue-500 font-medium">{doctor.specialization}</p>
                  <div className="flex items-center justify-center mt-4 space-x-4">
                    <a
                      href={doctor.socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:text-blue-700 transform transition-all duration-300 hover:scale-110"
                    >
                      <i className="fab fa-linkedin"></i>
                    </a>
                    <a
                      href={doctor.socialLinks.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:text-blue-700 transform transition-all duration-300 hover:scale-110"
                    >
                      <i className="fab fa-facebook"></i>
                    </a>
                    <a
                      href={doctor.socialLinks.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:text-blue-700 transform transition-all duration-300 hover:scale-110"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </animated.div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default DoctorSlider;
