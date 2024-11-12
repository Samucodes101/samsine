import React from 'react';
import backgroundImage from '../assets/lightsbluebkg.jpg';

const Hackathon = () => {
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
        <div className="relative z-10 flex items-center min-h-screen px-6 lg:px-16">
            <div className="w-full max-w-2xl bg-black bg-opacity-75 p-10 lg:p-16 rounded-lg">
            {/* Breadcrumb */}
            <div className="text-sm text-gray-400 mb-6">
                <span className="hover:text-white cursor-pointer">Home</span> &gt;{' '}
                <span className="text-white">Contact Us</span>
            </div>

            {/* Title */}
            <h1 className="text-5xl font-extrabold mb-8">Contact Us</h1>

            {/* Description */}
            <p className="text-lg text-gray-300 leading-relaxed">
                Your gateway to getting in touch with our team. Here, you’ll find
                all the information you need to reach out to us, including our phone
                number, email address, and a contact form that you can use to send
                us a message.
            </p>

            {/* Additional Placeholder for Content */}
            <div className="mt-8">
                <p className="text-lg text-gray-300">
                We are here to help you with any inquiries or support you may
                need. Our team is dedicated to providing the best service and
                ensuring all your questions are answered promptly.
                </p>
            </div>
            </div>
        </div>
        </div>
  );
};

export default Hackathon;