import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Header = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header>
        {/* Top Section */}
        <div className="bg-gray-100 flex flex-col md:flex-row justify-between items-center px-4 md:px-12 py-4 border-b">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-bold">
              <span className="text-blue-900">Dr.</span>
              <span className="text-blue-500">Jivika</span>
            </h1>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-8 text-sm text-gray-600 mt-4 md:mt-0">
            <div className="flex items-center space-x-2">
              <span className="material-icons text-blue-500">call</span>
              <p>
                <span className="font-bold">EMERGENCY:</span> (237) 681-812-255
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <span className="material-icons text-blue-500">schedule</span>
              <p>
                <span className="font-bold">WORK HOUR:</span> 09:00 - 20:00
                Everyday
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <span className="material-icons text-blue-500">location_on</span>
              <p>
                <span className="font-bold">LOCATION:</span> 0123 Some Place
              </p>
            </div>
          </div>
        </div>

        {/* Navbar */}
        <nav className="bg-blue-900 text-white px-4 md:px-12 py-4 flex flex-wrap justify-between items-center">
          {/* Menu Items */}
          <ul className="flex flex-wrap space-x-6 text-sm font-medium">
            <li className="hover:underline cursor-pointer">Home</li>
            <li className="hover:underline cursor-pointer">About us</li>
            <li className="hover:underline cursor-pointer">Services</li>
            <li className="hover:underline cursor-pointer">Doctors</li>
            <li className="hover:underline cursor-pointer">News</li>
            <li className="hover:underline cursor-pointer">Contact</li>
          </ul>

          {/* Search and Appointment */}
          <div className="mt-4 md:mt-0 flex items-center space-x-4">
            <button className="bg-blue-700 hover:bg-blue-600 px-4 py-2 rounded-md">
              <span className="material-icons">search</span>
            </button>
            <button className="bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-500">
              Appointment
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <div className="flex-1 relative bg-navy-900">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://cdn.pixabay.com/photo/2024/03/11/19/15/ai-generated-8627457_1280.png')`,
            backgroundBlendMode: 'overlay',
            backgroundColor: 'rgba(0, 0, 50, 0.7)',
          }}
        >
          <div className="container mx-auto px-4 h-full flex items-center">
            <div className="relative min-h-[80vh] flex items-center">
              <div className="absolute inset-0 bg-gradient-to-r from-navy-900/95 to-navy-900/80" />
              <div className="container mx-auto px-6 relative z-10">
                <motion.div
                  ref={ref}
                  initial="hidden"
                  animate={inView ? 'visible' : 'hidden'}
                  variants={textVariants}
                  className="max-w-2xl text-white backdrop-blur-sm bg-navy-900/20 p-8 rounded-2xl border border-white/10"
                >
                  <div className="inline-block mb-4 px-4 py-2 bg-blue-500/20 rounded-full">
                    <span className="text-blue-400 font-medium">AI-Powered Healthcare</span>
                  </div>

                  <motion.h1
                    variants={textVariants}
                    className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent"
                  >
                    Meet Jivika: The AI doc that's always on call!
                  </motion.h1>

                  <motion.div variants={textVariants} className="space-y-4">
                    <p className="text-base leading-relaxed text-gray-300">
                      Jivaka Komarabhacca was a renowned ancient Indian physician during the time of Buddha, celebrated for his exceptional skills in medicine and surgery.
                    </p>

                    <p className="text-base leading-relaxed text-gray-300">
                      Jivaka is mentioned in Buddhist texts as the personal physician to Buddha and the Sangha (the Buddhist monastic community). He was also a royal physician serving King Bimbisara and King Ajatashatru of Magadha.
                    </p>

                    <p className="text-base leading-relaxed text-gray-300">
                      Known for his compassion and dedication, Jivaka treated patients without expecting material rewards, embodying selfless service.
                    </p>
                  </motion.div>

                  <motion.div
                    variants={buttonVariants}
                    className="mt-8 flex flex-wrap gap-4"
                  >
                    <button className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg transition-colors">
                      Learn More
                    </button>
                    <button className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg transition-colors">
                      Book Consultation
                    </button>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
