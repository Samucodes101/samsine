import React from 'react';

const Contact = () => {
  return (
    <div>
      {/* Contact Us Section */}
      <div className="flex justify-center items-center text-white gap-4 flex-col bg-blue-800 p-36">
        <h2 className="text-6xl font-bold">Contact Us</h2>
        <p className="font-semibold">Get in touch with us for more information.</p>
      </div>

      {/* Main Container for both Let's Talk and Contact Form */}
      <div className="flex flex-col md:flex-row container mx-auto px-16 py-12 gap-12">

        {/* Let's Talk Section with Blue Gradient Background (30% width) */}
        <div className="flex flex-col py-32 max-w-96 bg-gradient-to-r from-blue-800 to-blue-500 text-white px-4 rounded-lg shadow-lg">
          <h3 className="text-4xl font-bold font-semibold mb-4">Let's Talk</h3>
          <p className="text-lg mb-6">Have any questions or need assistance? We're here to help!</p>
          <a 
            href="mailto:contact@yourdomain.com" 
            className="inline-block px-8 py-3 bg-blue-600 flex justify-center items-center w-64 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300"
          >
            Reach Out Now
          </a>
        </div>

        {/* Contact Form Section (70% width) */}
        <div className="flex-1 md:w-7/10 bg-white p-8 rounded-lg ">
          <h3 className="text-3xl font-bold text-gray-800 mb-6">We'd love to hear from you!</h3>
          <form className='flex flex-wrap gap-x-10 gap-y-6' action="#" method="POST">
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-600">Your Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                placeholder='Name'
                className="mt-2 w-72 p-3 bg-slate-100 rounded-md" 
                required 
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-600">Your Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                placeholder='Email'
                className="mt-2 w-72 p-3 bg-slate-100 rounded-md" 
                required 
              />
            </div>
            <div className="mb-4">
              <label htmlFor="phonenumber" className="block text-sm font-medium text-gray-600">Your Phone Number</label>
              <input 
                type="text" 
                id="phonenumber" 
                name="phonenumber" 
                placeholder='Phone Number'
                className="mt-2 w-72 p-3 bg-slate-100 rounded-md" 
                required 
              />
            </div>

            <div className="mb-4">
              <label htmlFor="website" className="block text-sm font-medium text-gray-600">Your Website</label>
              <input 
                type="text" 
                id="website" 
                name="website" 
                placeholder='Website'
                className="mt-2 w-72 p-3 bg-slate-100 rounded-md" 
                required 
              />
            </div>


            <div className="mb-6 text-area-contact">
              <label htmlFor="message" className="block text-sm font-medium text-gray-600">Your Message</label>
              <textarea 
                id="message" 
                name="message" 
                className="mt-2 text-area-contact  p-3 bg-slate-100 rounded-md" 
                rows="5" 
                required 
              ></textarea>
            </div>

            <button type="submit" className="w-64 py-3 bg-gradient-to-r from-blue-800 to-blue-400 text-white font-semibold rounded-md hover:bg-blue-700">Submit</button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Contact;
