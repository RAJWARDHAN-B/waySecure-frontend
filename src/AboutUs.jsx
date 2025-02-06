import React, { useState } from 'react';

const AboutUs = () => {
  const [isLightMode, setIsLightMode] = useState(true);

  return (
    <div className={`min-h-screen ${isLightMode ? 'bg-white' : 'bg-gray-900'} transition-all`}>
      {/* Navbar */}
      <div className="absolute top-2 left-0 right-0 flex items-center p-4 z-30 text-xl">
        <div className="flex space-x-10">
          <a href="/how-it-works" className="text-white font-medium">How it Works</a>
          <a href="/file" className="text-white font-medium">File a Report</a>
          <a href="/about-us" className="text-white font-medium">About Us</a>
        </div>

        <div className="flex-grow"></div>

        <div className="flex items-center">
          <button
            className={`relative w-13 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${isLightMode ? 'bg-[#D8B4FE]' : 'bg-[#7C3AED]'}`}
            onClick={() => setIsLightMode(!isLightMode)}
          >
            <div className={`w-5 h-5 bg-white rounded-full shadow-md transition-transform ${isLightMode ? 'translate-x-7' : 'translate-x-0'}`}></div>
          </button>
        </div>
      </div>

      {/* Header */}
      <div className={`absolute top-5 left-7 text-3xl font-extrabold transition-all z-30 ${isLightMode ? 'text-black drop-shadow-[0_0_4px_rgba(255,255,255,0.5)]' : 'text-[#EAEAEA] drop-shadow-[0_0_2px_rgba(255,255,255,0.2)]'}`}>
        WaySecure
      </div>

      {/* Main Content */}
      <div className="pt-32 pb-12 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
            About Us
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-4">
            We help you navigate safely through your city with real-time data and recommendations.
          </p>
        </div>

        {/* Cards Section */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white shadow-lg rounded-lg p-6 dark:bg-gray-800">
            <div className="flex items-center mb-4">
              <span className="text-blue-500 text-2xl">🗺️</span>
              <h2 className="text-xl font-semibold ml-3">Route Safety Mapping</h2>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              Our system tracks the safest routes in real-time, using community feedback and official data.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-lg rounded-lg p-6 dark:bg-gray-800">
            <div className="flex items-center mb-4">
              <span className="text-green-500 text-2xl">📍</span>
              <h2 className="text-xl font-semibold ml-3">Safe Locations</h2>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              We provide information about safe zones, including police stations, hospitals, and more.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-lg rounded-lg p-6 dark:bg-gray-800">
            <div className="flex items-center mb-4">
              <span className="text-red-500 text-2xl">🚨</span>
              <h2 className="text-xl font-semibold ml-3">Emergency Alerts</h2>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              Stay informed with emergency alerts, helping you avoid hazardous areas in real-time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
