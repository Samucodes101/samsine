import React from 'react';
import backgroundImage from '../assets/blueglitterbackground.jpg'; // Update path to your image

const Home = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Background image */}
      <img 
        src={backgroundImage} 
        alt="Background" 
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      {/* Text container */}
      <div className="relative z-10 flex flex-col justify-center items-start pl-16 h-full w-full bg-black bg-opacity-50">
        {/* Large, left-aligned heading */}
        <h1 className="text-white text-7xl font-bold mb-4">We deliver IT solutions <p></p>that fit your business</h1>
        {/* Left-aligned paragraph */}
        <p className="text-white">
          Empowering Businesses With Innovative Tech Solutions
        </p>
      </div>
    </div>
  );
};

export default Home;
