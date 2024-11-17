import React from 'react';
import backgroundImage from '../assets/services.jpg';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { HiMiniBuildingOffice2 } from "react-icons/hi2";

import cyber from '../assets/cyber.jpg';
import data_science from '../assets/data_science.jpg';
import product_design from '../assets/product_design.jpg';
import TechHubReg from './TechHubReg';
import product_management from '../assets/project_management.jpg';
import data_protect from '../assets/data_protect.jpg';
import fullstack_dev from '../assets/fullstack_dev.jpg';


const TechHub = () => {
  return (
    <div className="bg-black">
    <div className="bg-gray-900 text-white min-h-screen">
      <div className="relative min-h-screen">
        <div className="absolute inset-0">
          <img
            src={backgroundImage}
            alt="Background"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex items-center min-h-screen px-6 lg:px-16">
          <div className="w-full max-w-2xl bg-black bg-opacity-75 p-10 lg:p-16 rounded-lg">

            <div className="text-sm text-gray-400 mb-6">
              <span className="hover:text-white cursor-pointer">Home</span> &gt;{' '}
              <span className="text-white">Tech Hub</span>
            </div>

            {/* Title */}
            <h1 className="text-5xl font-extrabold mb-8">Tech Hub</h1>

            {/* Description */}
            <p className="text-lg text-gray-300 leading-relaxed">
              Our mission is simple: to provide world-class IT education and
              cutting-edge solutions that empower Africa's next generation of
              innovators, driving excellence and transformation in the global
              tech landscape. Whether you're just starting or looking to advance
              your career, our programs are designed to equip you with the skills
              you need to thrive.
            </p>
          </div>
        </div>
      </div>

      {/* Training Programs Section */}
      <div className="bg-[#151515] border border-gray-500">
        <main className="container mx-auto py-10 max-w-screen-lg mt-64">
          {/* Section Title */}
          <h1 className="text-4xl text-center text-white font-bold mb-11">
            Our Training Programs
          </h1>
          <p className="text-center text-gray-400 mb-11 text-lg">
            Explore our diverse programs designed to equip you with top-notch skills.
          </p>

          {/* Cards Section */}
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            {/* Card */}
            {[{ 
              title: 'Full Stack Development', 
              description: 'Learn how to build scalable web applications from scratch using modern frameworks.', 
              image: fullstack_dev 
            }, 
            { 
              title: 'Data Science', 
              description: 'Master data collection, transformation, and visualization techniques.', 
              image: data_science
            },
            { 
              title: 'Cyber Security', 
              description: 'Our Cybersecurity program is designed to equip you with the skills and knowledge to protect digital assets in an ever-evolving threat landscape.', 
              image: cyber
            }, 
            { 
              title: 'Product Design', 
              description: 'Learn to craft intuitive and user-centric designs that bring ideas to life.', 
              image: product_design
            }, 
            { 
              title: 'IT Project Management', 
              description: 'Gain skills in leading projects from planning to execution with confidence.', 
              image: product_management 
            },
            { 
              title: 'Data Protection Compliance', 
              description: 'Understand regulations and practices to ensure data privacy and security.', 
              image: data_protect 
            }].map((program, index) => (
              <div
                key={index}
                className="bg-[#100f0f] p-6 rounded-lg shadow-lg hover:shadow-xl transition"
              >
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-40 object-cover rounded mb-4"
                />
                <h2 className="text-xl font-semibold text-white">{program.title}</h2>
                <p className="mt-3 text-gray-400">{program.description}</p>
                <a
                  href="#"
                  className="mt-4 flex items-center text-left py-2 rounded text-white hover:text-purple-700"
                >
                  Read More
                  <IoIosArrowRoundForward className="m-5" />
                </a>
              </div>
            ))}
          </section>
        </main>
      </div>

      

    </div>
    <TechHubReg />
    </div>
  );
};

export default TechHub;
