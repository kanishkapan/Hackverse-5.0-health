import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const DoctorSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
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
      image: "../src/assets/premium_photo-1661580632282-c56b1bfc0489.jpg", // Replace with actual image URLs
    },
    {
      name: "Dr. Emily Johnson",
      specialization: "Cardiology",
      image: "../src/assets/photo-1700308433598-baf91787c2a3.jpg", // Replace with actual image URLs
    },
    {
      name: "Dr. Michael Brown",
      specialization: "Pediatrics",
      image: "../src/assets/premium_photo-1661544768241-761f1b029100.jpg", // Replace with actual image URLs
    },
    {
      name: "Dr. Sarah Davis",
      specialization: "Orthopedics",
      image: "../src/assets/photo-1673054389621-c21d2c362963.jpg", // Replace with actual image URLs
    },
    {
      name: "Dr. James Wilson",
      specialization: "Dermatology",
      image: "../src/assets/photo-1652592322517-9be4e3e3879a.jpg", // Replace with actual image URLs
    },
    {
      name: "Dr. Laura Martinez",
      specialization: "Psychiatry",
      image: "../src/assets/photo-1678934021124-31bcf34cbd56.jpg", // Replace with actual image URLs
    },
  ];
  

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-center text-blue-600 text-lg font-bold uppercase mb-4">Trusted Care</h2>
      <h3 className="text-center text-3xl font-bold mb-8">Our Doctors</h3>
      <Slider {...settings}>
        {doctors.map((doctor, index) => (
          <div key={index} className="p-4">
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-full h-80 object-cover"
              />
              <div className="p-4">
                <h4 className="text-lg font-semibold mb-2">{doctor.name}</h4>
                <p className="text-blue-500 font-medium">{doctor.specialization}</p>
                <div className="flex items-center justify-center mt-4 space-x-4">
                  <a href="#" className="text-blue-500 hover:text-blue-700">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="#" className="text-blue-500 hover:text-blue-700">
                    <i className="fab fa-facebook"></i>
                  </a>
                  <a href="#" className="text-blue-500 hover:text-blue-700">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
                
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default DoctorSlider;
