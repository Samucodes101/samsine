import React from 'react';
import course from '../assets/online-learning.png';
import duration from '../assets/clock.svg';
import learn from '../assets/learn.svg';
import price from '../assets/price.svg';
import { HiMiniBuildingOffice2 } from "react-icons/hi2";

function TechHubReg() {
  return (
    <div>
        <div className='text-white justify-center text-center mt-44'>
        <h1 className='font-bold text-center font-extrabold'>Register Below</h1>
        <p>Each of our programs is designed with the participant in mind, <p></p>ensuring you gain hands-on experience and practical knowledge. Here’s what you can expect:</p>
        </div>
      {/* Contact Section */}
      <div className="mt-20  flex md:flex-row items-stretch bg-black text-white mx-44 border-x-white">
        {/* Left Section */}
        <div className="p-8 md:w-1/2 flex flex-col justify-center">
          <div>
            <h2 className="text-orange-500 text-lg font-semibold mb-4">
              Program Details
            </h2>
            <h1 className="text-3xl font-bold mb-4">Beginner</h1>
            <p className="mb-6 font-semibold">
            Write Your First Line Of Code.
            </p>
            <div className="space-y-6">
              <div className="flex items-center">
                <img
                  src={duration || 'https://via.placeholder.com/50'}
                  alt="Duration"
                  className="w-8 h-8 mr-4"
                />
                <div>
                  <p className="font-bold">Duration</p>
                  <p>6 weeks (3 hours daily, Tuesday, Wednesday, Thursday)</p>
                </div>
              </div>
              <div className="flex items-center">
                <HiMiniBuildingOffice2 className="text-2xl mr-4" />
                <div>
                  <p className="font-bold">Format</p>
                  <p>In-person (on-site)</p>
                </div>
              </div>
              <div className="flex items-center">
                <img
                  src={course || 'https://via.placeholder.com/50'}
                  alt="Course Outline"
                  className="w-8 h-8 mr-4"
                />
                <div>
                  <p className="font-bold">Course Outline</p>
                  <p>
                    Key topics include foundational knowledge, hands-on projects, and real-world case studies.
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <img
                  src={learn || 'https://via.placeholder.com/50'}
                  alt="Learning Outcomes"
                  className="bg-white w-8 h-8 mr-4"
                />
                <div>
                  <p className="font-bold">Learning Outcomes</p>
                  <p>
                    By the end of each program, participants will have the ability to apply their new skills to real-world situations and be ready for the next step in their careers.
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <img
                  src={price || 'https://via.placeholder.com/50'}
                  alt="Price"
                  className="w-8 h-8 mr-4"
                />
                <div>
                  <p className="font-bold">Price</p>
                  <p>150,000</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="p-8 bg-white text-black md:w-1/2">
          <h2 className="text-lg font-bold mb-4">Schedule Appointment</h2>
          <p className="mb-6">We are here to help you 24/7 with experts</p>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full border rounded-md p-3"
            />
            <input
              type="email"
              placeholder="E-Mail"
              className="w-full border rounded-md p-3"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="w-full border rounded-md p-3"
            />
            <textarea
              placeholder="Your Message Here"
              className="w-full border rounded-md p-3"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-md"
            >
              Submit Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default TechHubReg;
