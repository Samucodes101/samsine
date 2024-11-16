import React from 'react';
import backgroundImage from '../assets/contact.jpg';

const Contact = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      
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
              <span className="hover:text-white cursor-pointer">Home</span> &gt;{' '}
              <span className="text-white">Contact Us</span>
            </div>

            {/* Title */}
            <h1 className="text-5xl font-extrabold mb-8 text-white">Contact Us</h1>

            {/* Description */}
            <p className="text-lg text-gray-300 leading-relaxed">
              Your gateway to getting in touch with our team. Here, you’ll find
              all the information you need to reach out to us, including our phone
              number, email address, and a contact form that you can use to send
              us a message.
            </p>

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

      {/* Main Container for "Let's Talk" and "Contact Form" */}
      <div className="flex flex-col md:flex-row container mx-auto px-16 py-12 gap-12">
        {/* Let's Talk Section */}
        <div className="flex flex-col py-32 max-w-96 bg-gradient-to-r from-blue-800 to-blue-500 text-white px-4 rounded-lg shadow-lg">
          <h3 className="text-4xl font-semibold mb-4">Let's Talk</h3>
          <p className="text-lg mb-6">
            Have any questions or need assistance? We're here to help!
          </p>
          <a
            href="mailto:contact@yourdomain.com"
            className="inline-block px-8 py-3 bg-blue-600 m-auto flex justify-center items-center w-64 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300"
          >
            Reach Out Now
          </a>
        </div>

        {/* Contact Form Section */}
        <div className="flex-1 md:w-7/10 bg-white p-8 rounded-lg">
          <h3 className="text-3xl font-bold text-gray-800 mb-6">
            We'd love to hear from you!
          </h3>
          <form
            className="flex flex-wrap gap-x-10 gap-y-6"
            action="#"
            method="POST"
          >
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-600"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                className="mt-2 w-72 p-3 bg-slate-100 rounded-md"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-600"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                className="mt-2 w-72 p-3 bg-slate-100 rounded-md"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="phonenumber"
                className="block text-sm font-medium text-gray-600"
              >
                Your Phone Number
              </label>
              <input
                type="text"
                id="phonenumber"
                name="phonenumber"
                placeholder="Phone Number"
                className="mt-2 w-72 p-3 bg-slate-100 rounded-md"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="website"
                className="block text-sm font-medium text-gray-600"
              >
                Your Website
              </label>
              <input
                type="text"
                id="website"
                name="website"
                placeholder="Website"
                className="mt-2 w-72 p-3 bg-slate-100 rounded-md"
                required
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-600"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                className="mt-2 w-full p-3 bg-slate-100 rounded-md"
                rows="5"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-64 py-3 bg-gradient-to-r from-blue-800 to-blue-400 text-white font-semibold rounded-md hover:bg-blue-700"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
