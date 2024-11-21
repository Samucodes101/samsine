import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; // Don't forget to import the CSS for AOS

export default function Stats() {
  const stats = [
    { label: "Software Programming", value: "100%", color: "#3B82F6" },
    { label: "Data Science", value: "100%", color: "#4B5563" },
    { label: "Cyber Security", value: "100%", color: "#D97706" },
    { label: "Product Design", value: "100%", color: "#10B981" },
    { label: "IT Project Management", value: "100%", color: "#F59E0B" },
    { label: "Data Protection Compliance", value: "100%", color: "#6B7280" },
    { label: "Portfolio Development", value: "100%", color: "#9333EA" },
  ];

  useEffect(() => {
    // Initialize AOS animations
    AOS.init({
      duration: 1000, // Adjust the duration of the animation
      once: true, // Make sure animation happens only once when the element scrolls into view
    });
  }, []);

  return (
    <section className="bg-gray-950 p-12 flex justify-center">
      <div className="max-w-5xl w-full">
        <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-12">
          {/* Image container */}
          <div
            data-aos="fade-up"
            className="w-full md:w-1/2"
          >
            <img
              src="https://edsinetechnologiesltd.com/revamp/wp-content/uploads/2024/11/istockphoto-1626847820-612x612-1.jpg"
              alt="Training Programs"
              className="w-full h-auto rounded-lg"
            />
          </div>

          {/* Stats container */}
          <div
            data-aos="fade-up"
            className="w-full md:w-1/2"
          >
            <div className="text-white text-2xl font-bold mb-8 text-left justify-center">
              We offer a variety of Training programs On The Most In-demand Skills At Our <span className="text-purple-700">Tech Hub</span>
            </div>
            {stats.map((stat, index) => (
              <div key={index} className="mb-6" data-aos="fade-up">
                <div className="flex justify-between items-center">
                  <p className="text-white text-lg font-medium">{stat.label}</p>
                  <p className="text-white text-lg font-semibold">{stat.value}</p>
                </div>
                <div className="w-full bg-gray-700 h-3 rounded-full mt-1">
                  <div
                    className="h-3 rounded-full"
                    style={{
                      width: stat.value,
                      backgroundColor: stat.color,
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-8" data-aos="fade-up">
          <button className="bg-[#881fb2] text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:opacity-90 transition duration-300">
            <Link to="/techhub">Get Started</Link>
          </button>
        </div>
      </div>
    </section>
  );
}
