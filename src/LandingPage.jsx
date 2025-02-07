import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import darkMapBg from './assets/darkmapbg.jpg';
import lightMapBg from './lightmapbg.png';
import profileIcon from './profileIcon.png';
import { motion } from 'framer-motion';

const MissionPathAnimation = () => {
  return (
    <div className="absolute inset-0 h-[500px] pointer-events-none z-10">
      <svg className="absolute top-11/60 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px]" viewBox="0 0 300 150">
        <motion.path
          d="M20,140 L80,100 L140,140 L200,100 L260,140 L280,60"
          fill="none"
          stroke="#FFDD00"
          strokeWidth="2.5"
          strokeDasharray="10"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
        />
        <circle cx="20" cy="140" r="5" fill="#FFDD00" />
        <circle cx="280" cy="60" r="5" fill="#FFDD00" />
      </svg>
    </div>
  );
};

const LandingPage = () => {
  const navigate = useNavigate();
  const [isLightMode, setIsLightMode] = useState(false);

  return (
    <div className={`flex flex-col min-h-screen transition-colors duration-300 relative ${isLightMode ? "bg-gray-100" : "bg-[#0A0F1F]"}`}>
      {!isLightMode && (
        <>
          <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: `url(${darkMapBg})` }}></div>
          <MissionPathAnimation />
        </>
      )}
      {isLightMode && (
        <>
          <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: `url(${lightMapBg})` }}></div>
          <MissionPathAnimation />
        </>
      )}
      <div className="absolute top-2 left-100 right-0 flex items-center p-4 z-30 text-xl">
        <div className={`flex space-x-10 ${isLightMode ? "text-gray-800" : "text-white"}`}>
          <button className="relative font-semibold hover:underline hover:font-bold transition-all"
           onClick={() => navigate("/how")}>How it Works</button>
          <button className="relative font-semibold hover:underline hover:font-bold transition-all" 
          onClick={() => navigate("/file")}>File a Report</button>
          <button className="relative font-semibold hover:underline hover:font-bold transition-all" 
          onClick={() => navigate("/about-us")}>About Us</button>
        </div>
        <div className="flex-grow"></div>
        <div className="flex items-center">
          <button className={`relative w-13 h-6 flex items-center right-60 rounded-full p-1 cursor-pointer transition-colors duration-300 ${isLightMode ? "bg-[#D8B4FE]" : "bg-[#7C3AED]"}`} onClick={() => setIsLightMode(!isLightMode)}>
            <div className={`w-5 h-5 bg-white rounded-full shadow-md transition-transform ${isLightMode ? "translate-x-7" : "translate-x-0"}`}></div>
          </button>
        </div>
      </div>
      <div className={`absolute top-5 left-7 text-3xl font-extrabold transition-all z-30 ${isLightMode ? "text-gray-900" : "text-[#EAEAEA]"}`}>WaySecure</div>
      <div className={`flex-1 flex flex-col items-center justify-center text-center px-6 ${isLightMode ? "bg-gray-100" : "bg-gradient-to-b from-[#1C1C1C] to-[#0A0A0A]"}`}>
        <h1 className={`text-5xl font-bold transition-all z-20 ${isLightMode ? "text-gray-900" : "text-gray-300"}`}>WaySecure</h1>
        <p className={`mt-3 text-xl transition-all z-20 ${isLightMode ? "text-gray-700" : "text-gray-400"}`}>Our mission is to help you travel with Confidence</p>
        {/* Get Directions Button */}
        <button
          className={`mt-6 px-20 py-2 text-sm font-semibold rounded-md transition-all z-20
    ${isLightMode
              ? "bg-[#6EE7B7] text-black hover:bg-[#34D399]" // Light Green in Light Mode
              : "bg-gradient-to-b from-[#00FFC6] to-[#008F5F] text-white hover:from-[#66FFA9] hover:to-[#006B4F] shadow-lg shadow-cyan-500/15"
            }`}
          onClick={() => navigate("/map")}
        >
          Get Directions
        </button>

      </div>
      <div className="absolute top-6 right-5 flex space-x-4 z-30">
        <button
          className={`w-18 h-7.5 text-sm rounded-md transition font-medium 
          ${isLightMode
              ? "bg-[#D8B4FE] text-black hover:bg-[#C084FC]" // Light Purple in Light Mode
              : "bg-gradient-to-b from-[#A855F7] to-[#7C3AED] text-white hover:from-[#C084FC] hover:to-[#9333EA]" // Neon Purple + Gradient in Dark Mode
            }`}
          onClick={() => navigate("/login")}
        >
          Login
        </button>

        <button
          className={`w-18 h-7.5 text-sm rounded-md transition font-medium 
          ${isLightMode
              ? "bg-[#D8B4FE] text-black hover:bg-[#C084FC]" // Light Purple in Light Mode
              : "bg-gradient-to-b from-[#A855F7] to-[#7C3AED] text-white hover:from-[#C084FC] hover:to-[#9333EA]" // Neon Purple + Gradient in Dark Mode
            }`}
          onClick={() => navigate("/signup")}
        >
          Sign Up
        </button>

        <button
          className={`bg-gradient-to-r p-1 rounded-full transition w-10 h-10 mb-6 flex items-center justify-center
    ${isLightMode
              ? "from-[#D8B4FE] to-[#C084FC] hover:from-[#C084FC] hover:to-[#A855F7]" // Light Mode Gradient
              : "from-[#A855F7] to-[#7C3AED] hover:from-[#9333EA] hover:to-[#C084FC]" // Dark Mode Gradient
            }`}
            onClick={() => navigate("/profile")}
        >
          <img src={profileIcon} alt="profile" />
        </button>

      </div>
      <footer className={`w-full text-center py-2 mt-5 z-60  ${isLightMode ? "bg-gray-200 text-gray-800" : "bg-[#1C1C1C] text-gray-400"}`}>
        Designed and developed by team HackElite
      </footer>
    </div>
  );
};

export default LandingPage;
