import React from 'react';

const Contact = () => {
  return (
    <div>
      {/* Main Container for both Let's Talk and Contact Form */}
      <div className="flex flex-col md:flex-row container mx-auto px-4 py-12 gap-12">

        {/* Let's Talk Section with Blue Gradient Background */}
        <div className="flex-1 bg-gradient-to-r  from-blue-700 to-blue-300 text-white p-8 rounded-lg shadow-lg">
          <h3 className="text-3xl font-semibold mb-4">Let's Talk</h3>
          <p className="text-lg mb-6">Have any questions or need assistance? We're here to help!</p>
          <a 
            href="mailto:contact@yourdomain.com" 
            className="inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300"
          >
            Reach Out Now
          </a>
        </div>

        {/* Contact Form Section */}
        <div className="flex-1 bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">We'd love to hear from you!</h3>
          <form action="#" method="POST">
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-600">Your Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                className="mt-2 w-full p-3 border border-gray-300 rounded-md" 
                required 
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-600">Your Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                className="mt-2 w-full p-3 border border-gray-300 rounded-md" 
                required 
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-600">Your Message</label>
              <textarea 
                id="message" 
                name="message" 
                className="mt-2 w-full p-3 border border-gray-300 rounded-md" 
                rows="5" 
                required 
              ></textarea>
            </div>

            <button type="submit" className="w-full py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700">Submit</button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Contact;
