import React from 'react';
import backgroundImage from '../assets/services.jpg';
import { IoIosArrowRoundForward } from 'react-icons/io';

const TechHub = () => {
  return (
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
            {[
              {
                title: 'Full Stack Development',
                description:
                  'Learn how to build scalable web applications from scratch using modern frameworks.',
                image: 'https://via.placeholder.com/300x200?text=Full+Stack+Development',
              },
              {
                title: 'Data Science',
                description:
                  'Master data collection, transformation, and visualization techniques.',
                image: 'https://via.placeholder.com/300x200?text=Data+Science',
              },
              {
                title: 'Cyber Security',
                description:
                  'Become proficient in CI/CD, containerization, and cloud deployments.',
                image: 'https://via.placeholder.com/300x200?text=Cyber+Security',
              },
              {
                title: 'Product Design',
                description:
                  'Learn to craft intuitive and user-centric designs that bring ideas to life.',
                image: 'https://via.placeholder.com/300x200?text=Product+Design',
              },
              {
                title: 'IT Project Management',
                description:
                  'Gain skills in leading projects from planning to execution with confidence.',
                image: 'https://via.placeholder.com/300x200?text=IT+Project+Management',
              },
              {
                title: 'Data Protection Compliance',
                description:
                  'Understand regulations and practices to ensure data privacy and security.',
                image: 'https://via.placeholder.com/300x200?text=Data+Protection+Compliance',
              },
            ].map((program, index) => (
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
                   Read More<IoIosArrowRoundForward className="m-5" />
                </a>
              </div>
            ))}
          </section>
        </main>
      </div>
    </div>
  );
};

export default TechHub;
