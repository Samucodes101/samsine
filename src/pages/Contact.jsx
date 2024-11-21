import React, { useState } from 'react';
import backgroundImage from '../assets/contact.jpg';
import { Link } from 'react-router-dom';
import { FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa'; // Correct import

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phonenumber: '',
    service: '', // Updated to store service selection
    message: '',
  });

  // Available services in the dropdown
  const services = [
    "Web Development",
    "Software Development",
    "Enterprise Software Solutions",
    "IT Consultancy services",
    "Digital Marketing",
    "Training Services",
    "Penetration Testing",
    "Mobile App Development",
    "Online Distance Learning/Learning Management Solutions",
    "Biometric Solutions"
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Add 'source' field to indicate that this form is from the Contact page
    const formDataWithSource = {
      ...formData,
      source: 'contact-page',
    };

    try {
      const response = await fetch('http://localhost:5000/send-contact-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formDataWithSource),  // Send the modified data
      });

      const data = await response.json();

      if (data.success) {
        alert('Your message has been sent successfully!');
        setFormData({
          name: '',
          email: '',
          phonenumber: '',
          service: '',
          message: '',
        });
      } else {
        alert('There was an issue sending your message. Please try again.');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Contact Us Section with Background */}
      <div className="relative min-h-screen">
        <div className="absolute inset-0">
          <img
            src={backgroundImage}
            alt="Background"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>

        <div className="relative z-10 flex items-center min-h-screen px-6 lg:px-16">
          <div className="w-full max-w-2xl bg-black bg-opacity-75 p-10 lg:p-16 rounded-lg">
            <div className="text-sm text-gray-400 mb-6">
              <Link to="/home" className="hover:text-white">
                Home
              </Link>{' '}
              &gt; <span className="text-white">Contact Us</span>
            </div>
            <h1 className="text-5xl font-extrabold mb-8 text-white">
              Contact Us
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Your gateway to getting in touch with our team. Here, you’ll find
              all the information you need to reach out to us.
            </p>
            <div className="mt-8">
              <p className="text-lg text-gray-300">
                We are here to help you with any inquiries or support you may
                need. Our team is dedicated to providing the best service.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col text-white md:flex-row bg-black mt-44 border rounded-md border-gray-700 mb-44 p-8 md:p-16 space-y-8 md:space-y-0 md:space-x-12">
  {/* Left Section */}
<div className="md:w-1/2 flex flex-col justify-between">
  <div className="space-y-6">
    <h3 className="text-lg font-medium text-gray-500">Let’s Talk</h3>
    <h1 className="text-6xl font-extrabold text-white">
      Our Team Is <br /> Always Ready.
    </h1>
    <p className="text-gray-400 leading-relaxed">
      Whether you need help with a Large-scale Project, or you just have a
      question about a technical issue, our team is here to help.
    </p>
  </div>

  {/* Social Media Title */}
  <h2 className="text-xl font-semibold text-gray-200 mt-60">
    Reach Out to us on Social Media
  </h2>

  <div className="flex space-x-6 text-gray-500 mt-2">
    <a 
      href="https://www.instagram.com/edsine_technologies/" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="hover:text-pink-500"
      aria-label="Instagram"
    >
      <FaInstagram className="text-3xl" />
    </a>
    <a 
      href="https://www.linkedin.com/company/edsinetechnologies" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="hover:text-blue-700"
      aria-label="LinkedIn"
    >
      <FaLinkedinIn className="text-3xl" />
    </a>
    <a 
      href="https://wa.me/2348068359773" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="hover:text-green-500"
      aria-label="WhatsApp"
    >
      <FaWhatsapp className="text-3xl" />
    </a>
  </div>
</div>

  {/* Right Section (Contact Form) */}
  <div className="md:w-1/2">
    <h3 className="text-lg font-medium text-gray-500 mb-8">Contact Form</h3>
    <form onSubmit={handleSubmit}>
      <div className="mb-6">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Full Name"
          className="w-full p-4 bg-black text-white border-2 border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
        />
      </div>
      <div className="mb-6">
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email Address"
          className="w-full p-4 bg-black text-white border-2 border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
        />
      </div>
      <div className="mb-6">
        <input
          type="tel"
          name="phonenumber"
          value={formData.phonenumber}
          onChange={handleChange}
          placeholder="Your Phone Number"
          className="w-full p-4 bg-black text-white border-2 border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
        />
      </div>
      <div className="mb-6">
        <label htmlFor="service" className="block text-gray-400">Service Interested In</label>
        <select
          name="service"
          id="service"
          value={formData.service}
          onChange={handleChange}
          className="w-full p-4 bg-black text-white border-2 border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
        >
          <option value="">Select a Service</option>
          {services.map((service, index) => (
            <option key={index} value={service}>{service}</option>
          ))}
        </select>
      </div>
      <div className="mb-6">
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          rows="5"
          className="w-full p-4 bg-black text-white border-2 border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full bg-pink-500 text-white py-4 rounded-md hover:bg-pink-700 transition duration-300"
      >
        Send Message
      </button>
    </form>
  </div>
</div>
    </div>
  );
};

export default Contact;
