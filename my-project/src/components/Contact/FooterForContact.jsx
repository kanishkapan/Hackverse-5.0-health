import React from 'react';

const FooterForContact = () => {
  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
       

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

export default FooterForContact;
