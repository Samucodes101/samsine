import React from 'react';
import backgroundImage from '../assets/team.jpg';
import Services from './Home/Services';

const AboutUs = () => {
  return (
    <div className="relative bg-gray-900 text-white min-h-screen">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={backgroundImage}
          alt="Background"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60"></div> {/* Dark overlay */}
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center min-h-screen px-6 lg:px-16 pb-12">
        <div className="w-full max-w-2xl bg-black bg-opacity-75 p-10 lg:p-16 rounded-lg">
          {/* Breadcrumb */}
          <div className="text-sm text-gray-400 mb-6">
            <span className="hover:text-white cursor-pointer">Home</span> &gt;{' '}
            <span className="text-white">About Us</span>
          </div>

          {/* Title */}
          <h1 className="text-5xl font-extrabold mb-8">About Us</h1>

          {/* Description */}
          <p className="text-lg text-gray-300 leading-relaxed">
            With a focus on quality, affordability, and customer satisfaction,
            we strive to be the go-to partner for businesses looking to enhance
            their operations and achieve their goals through technology. Whether
            you’re looking for a simple application or a complex system, we have
            the expertise and experience to help you succeed.
          </p>
        </div>
      </div>

      {/* Services Section */}
      <div className="relative z-10">
        <Services />
      </div>
    </div>
  );
};

export default AboutUs;
