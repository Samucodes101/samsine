import React, { useState } from 'react';
import backgroundImage from '../assets/services.jpg';
import { Link } from 'react-router-dom';
import Servicestwo from './Home/Servicestwo';

const Contact = () => {
  

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Contact Us Section with Background */}
      <div className="relative min-h-screen">
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
        <div className="relative z-10 flex items-center min-h-screen px-6 lg:px-16">
          <div className="w-full max-w-2xl bg-black bg-opacity-75 p-10 lg:p-16 rounded-lg">
            {/* Breadcrumb */}
            <div className="text-sm text-gray-400 mb-6">
              <span className="hover:text-white cursor-pointer"><Link to='/home'>Home</Link></span> &gt;{' '}
              <span className="text-white">Services</span>
            </div>

            {/* Title */}
            <h1 className="text-5xl font-extrabold mb-8 text-white">Services</h1>

            {/* Description */}
            <p className="text-lg text-gray-300 leading-relaxed">
            We are a team of seasoned IT specialists committed to delivering solutions that give your business a competitive edge. With our innovative ideas and technical expertise, we empower you to harness technology and drive your business forward. Here’s how we can assist you
            </p>

            
          </div>
        </div>
      </div>

      {/* Main Container for "Let's Talk" and "Contact Form" */}
      <div className="border-t border-gray-600 ">
      <Servicestwo />
      </div>
      
          </div>
  );
};

export default Contact;
