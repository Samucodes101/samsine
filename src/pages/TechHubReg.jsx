import React, { useState } from 'react';
import course from '../assets/online-learning.png';
import duration from '../assets/clock.svg';
import learn from '../assets/learn.svg';
import price from '../assets/price.svg';
import { HiMiniBuildingOffice2 } from "react-icons/hi2";

function TechHubReg() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phonenumber, setPhoneNumber] = useState('');
  const [state, setState] = useState('');
  const [message, setMessage] = useState('');
  const [selectedProgram, setSelectedProgram] = useState('Beg'); // Default to Beginner

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare the form data
    const formData = { name, email, phonenumber, state, message, program: selectedProgram };

    try {
      // Send the form data to the backend (Express API endpoint)
      const response = await fetch('http://localhost:5000/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        alert('Your message has been sent successfully!');
        setName('');
        setEmail('');
        setPhoneNumber('');
        setState('');
        setMessage('');
      } else {
        alert('There was an issue sending your message. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  const programDetails = {
    Beg: {
      title: 'Beginner',
      description: 'Write Your First Line Of Code.',
      duration: '6 weeks (3 hours daily, Tuesday, Wednesday, Thursday)',
      format: 'In-person (on-site)',
      price: '150,000',
      courseOutline: 'Key topics include foundational knowledge, hands-on projects, and real-world case studies.',
      learningOutcomes: 'By the end of the program, participants will be ready for the next step in their careers.',
    },
    Int: {
      title: 'Intermediate',
      description: 'Build More Complex Projects.',
      duration: '8 weeks (3 hours daily, Tuesday, Wednesday, Thursday)',
      format: 'In-person (on-site)',
      price: '200,000',
      courseOutline: 'Key topics include advanced programming techniques and larger-scale projects.',
      learningOutcomes: 'By the end of the program, participants will be proficient in advanced skills and problem-solving.',
    },
    Pro: {
      title: 'Professional',
      description: 'Master Your Skills for Career Growth.',
      duration: '10 weeks (3 hours daily, Monday, Wednesday, Friday)',
      format: 'In-person (on-site)',
      price: '250,000',
      courseOutline: 'Key topics include industry-level projects, professional development, and team collaboration.',
      learningOutcomes: 'Participants will be prepared for high-level roles in their field.',
    },
  };

  return (
    <div>
      <div className="text-white justify-center text-center mt-44">
        <h1 className="font-bold text-3xl">Register Below</h1>
        <p className="mt-4">Each of our programs is designed with the participant in mind,<p> ensuring you gain hands-on experience and practical knowledge. Here’s what you can expect:</p></p>
      </div>

      {/* Program Buttons */}
      <div className="p-4 text-white flex justify-center space-x-4 rounded-full w-fit mx-auto mt-16 border border-white bg-[#151515]">
        <div className="hover:border-b-2 hover:border-white cursor-pointer" onClick={() => setSelectedProgram('Beg')}>
          Beg
        </div>
        <div className="hover:border-b-2 hover:border-white cursor-pointer" onClick={() => setSelectedProgram('Int')}>
          Int
        </div>
        <div className="hover:border-b-2 hover:border-white cursor-pointer" onClick={() => setSelectedProgram('Pro')}>
          Pro
        </div>
      </div>
      <h5 className='text-white font-semibold justify-center text-center mt-5'>Choose Your Difficulty</h5>


      {/* Contact Section */}
      <div className="mt-20 flex md:flex-row items-stretch bg-black text-white mx-10 md:mx-44 border-x-white rounded-xl shadow-lg overflow-hidden">
        {/* Left Section */}
        <div className="p-8 md:w-1/2 flex flex-col justify-center bg-gray-900 rounded-l-xl border border-gray-500">
          <h2 className="text-orange-500 text-lg font-semibold mb-4">Program Details</h2>
          <h1 className="text-3xl font-bold mb-4">{programDetails[selectedProgram].title}</h1>
          <p className="mb-6 font-semibold">{programDetails[selectedProgram].description}</p>
          <div className="space-y-6">
            <div className="flex items-center">
              <img src={duration || 'https://via.placeholder.com/50'} alt="Duration" className="w-8 h-8 mr-4" />
              <div>
                <p className="font-bold">Duration</p>
                <p>{programDetails[selectedProgram].duration}</p>
              </div>
            </div>
            <div className="flex items-center">
              <HiMiniBuildingOffice2 className="text-2xl mr-4" />
              <div>
                <p className="font-bold">Format</p>
                <p>{programDetails[selectedProgram].format}</p>
              </div>
            </div>
            <div className="flex items-center">
              <img src={course || 'https://via.placeholder.com/50'} alt="Course Outline" className="w-8 h-8 mr-4" />
              <div>
                <p className="font-bold">Course Outline</p>
                <p>{programDetails[selectedProgram].courseOutline}</p>
              </div>
            </div>
            <div className="flex items-center">
              <img src={learn || 'https://via.placeholder.com/50'} alt="Learning Outcomes" className="bg-white w-8 h-8 mr-4" />
              <div>
                <p className="font-bold">Learning Outcomes</p>
                <p>{programDetails[selectedProgram].learningOutcomes}</p>
              </div>
            </div>
            <div className="flex items-center">
              <img src={price || 'https://via.placeholder.com/50'} alt="Price" className="w-8 h-8 mr-4" />
              <div>
                <p className="font-bold">Price</p>
                <p>{programDetails[selectedProgram].price}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="p-8 bg-white text-black md:w-1/2 rounded-r-xl shadow-lg">
          <h2 className="text-lg font-bold mb-4">Register Now</h2>
          <p className="mb-6">We are excited to have you on board!</p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full border-2 border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="E-Mail"
              className="w-full border-2 border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="w-full border-2 border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
              value={phonenumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <input
              type="text"
              placeholder="State"
              className="w-full border-2 border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
              value={state}
              onChange={(e) => setState(e.target.value)}
            />
            <textarea
              placeholder="Your Message Here"
              className="w-full border-2 border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-3 rounded-lg font-bold hover:bg-orange-600 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default TechHubReg;
