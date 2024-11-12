import React from 'react';
import backgroundImage from '../assets/Contact.jpg';

const Contact = () => {
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
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-400 mb-4">
          <span className="hover:text-white cursor-pointer">Home</span> &gt;{' '}
          <span className="text-white">Contact Us</span>
        </div>

        {/* Title */}
        <h1 className="text-5xl font-extrabold mb-6">Contact Us</h1>

        {/* Description */}
        <p className="max-w-lg text-center text-gray-300">
          Your gateway to getting in touch with our team. Here, you’ll find all
          the information you need to reach out to us, including our phone
          number, email address, and a contact form that you can use to send us
          a message.
        </p>
      </div>
    </div>
  );
};

export default Contact;
