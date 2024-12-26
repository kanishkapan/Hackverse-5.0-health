import React from 'react';

const ContactSection = () => {
  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center py-8">
          <h2 className="text-xl font-semibold text-blue-800">GET IN TOUCH</h2>
          <h3 className="text-3xl font-bold text-blue-900 mt-2">Contact</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Emergency */}
          <div className="bg-blue-100 p-6 rounded-lg text-center">
            <p className="text-blue-900 font-semibold">EMERGENCY</p>
            <p className="mt-2 text-blue-800">(237) 681-812-255</p>
            <p className="text-blue-800">(237) 666-331-894</p>
          </div>
          {/* Location */}
          <div className="bg-blue-900 p-6 rounded-lg text-center text-white">
            <p className="font-semibold">LOCATION</p>
            <p className="mt-2">0123 Some place</p>
            <p>9876 Some country</p>
          </div>
          {/* Email */}
          <div className="bg-blue-100 p-6 rounded-lg text-center">
            <p className="text-blue-900 font-semibold">EMAIL</p>
            <p className="mt-2 text-blue-800">fildineeesoe@gmail.com</p>
            <p className="text-blue-800">myebstudios@gmail.com</p>
          </div>
          {/* Working Hours */}
          <div className="bg-blue-100 p-6 rounded-lg text-center">
            <p className="text-blue-900 font-semibold">WORKING HOURS</p>
            <p className="mt-2 text-blue-800">Mon-Sat 09:00-20:00</p>
            <p className="text-blue-800">Sunday Emergency only</p>
          </div>
        </div>

        <div className="mt-10 bg-blue-900 text-white py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Logo and Description */}
            <div>
              <h4 className="text-lg font-semibold">Dr.Jivika</h4>
              <p className="mt-2">Leading the Way in Medical Excellence, Trusted Care.</p>
            </div>

            {/* Important Links */}
            <div>
              <h4 className="text-lg font-semibold">Important Links</h4>
              <ul className="mt-2">
                <li><a href="#" className="hover:underline">Appointment</a></li>
                <li><a href="#" className="hover:underline">Doctors</a></li>
                <li><a href="#" className="hover:underline">Services</a></li>
                <li><a href="#" className="hover:underline">About Us</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold">Contact Us</h4>
              <p className="mt-2">Call: (237) 681-812-255</p>
              <p>Email: fildineeesoe@gmail.com</p>
              <p>Address: 0123 Some place, Some country</p>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-lg font-semibold">Newsletter</h4>
              <form className="mt-2 flex">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full px-4 py-2 rounded-l-lg focus:outline-none text-black"
                />
                <button className="bg-blue-800 px-4 py-2 rounded-r-lg text-white">&#8594;</button>
              </form>
            </div>
          </div>
          <div className="mt-6 text-center text-sm border-t border-white pt-4">
            <p>&copy; 2021 Hospital's name All Rights Reserved by PNTEC-LTD</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ContactSection;
// import ResponsiveMap from "./components/Contact/ResposniveMap";