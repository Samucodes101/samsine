import { FaCode, FaLaptopCode, FaChartLine, FaBullhorn, FaChalkboardTeacher, FaShieldAlt } from "react-icons/fa";
import backgroundImage from '../../assets/handshake.jpg';
import { Link } from "react-router-dom";

export default function ServicesSection() {
  const servicesTop = [
    {
      icon: <FaCode className="text-orange-500 w-16 h-16" />,
      title: "Software Development",
      description:
        "Our full-stack software developers handle the entire lifecycle of software creation—from design to deployment.",
    },
    {
      icon: <FaLaptopCode className="text-pink-500 w-16 h-16" />,
      title: "Web Development",
      description:
        "We design and develop dynamic websites and web applications using the latest technologies, ensuring tailored, responsive solutions.",
    },
    {
      icon: <FaChartLine className="text-sky-500 w-16 h-16" />,
      title: "IT Consultancy Services",
      description:
        "We provide comprehensive IT consultancy, covering every phase of your ICT project. From strategy to execution, we've got you covered.",
    },
  ];

  const servicesBottom = [
    {
      icon: <FaBullhorn className="text-yellow-500 w-16 h-16" />,
      title: "Digital Marketing",
      description:
        "We specialize in digital marketing services to help businesses increase their online visibility. Our expertise includes search engine optimization (SEO), social media marketing, and paid advertising.",
    },
    {
      icon: <FaChalkboardTeacher className="text-green-500 w-16 h-16" />,
      title: "Training Services",
      description:
        "We offer ICT-related training programs, from web and mobile development to system building. Specialized training for ISO certifications is also available.",
    },
    {
      icon: <FaShieldAlt className="text-red-500 w-16 h-16" />,
      title: "Penetration Testing",
      description:
        "We simulate real-world cyber-attacks to identify vulnerabilities in your systems, networks, and applications. Our expert team provides in-depth assessments and actionable insights.",
    },
  ];

  return (
    <div className="bg-black text-white py-16 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Services Header Section */}
        <div className="flex justify-between items-center mb-12">
          <div>
            <h4 className="text-[#881fb2] uppercase text-sm tracking-widest mb-2">Services</h4>
            <h2 className="text-4xl font-bold leading-snug">
              What Solutions We Provide to Our Valued Customers
            </h2>
          </div>
          <button className="bg-[#881fb2] text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-[#6f1280] transition duration-300">
            <Link to="/contact">Get Started</Link>
          </button>
        </div>

        {/* Top Services Section */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesTop.map((service, index) => (
            <div key={index} className="bg-gray-900 p-8 rounded-xl shadow-lg relative hover:bg-[#881fb2] transition duration-300">
              <div className="absolute top-6 right-6 text-6xl font-bold text-gray-700 opacity-10">
                {String(index + 1).padStart(2, "0")}
              </div>
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Bottom Services Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesBottom.map((service, index) => (
            <div key={index} className="bg-gray-900 p-8 rounded-xl shadow-lg relative hover:bg-[#881fb2] transition duration-300">
              <div className="absolute top-6 right-6 text-6xl font-bold text-gray-700 opacity-10">
                {String(index + 4).padStart(2, "0")}
              </div>
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Why Choose Us Section */}
        {/* Why Choose Us Section */}
<div className="mt-16 bg-gray-800 p-12 rounded-xl text-white flex items-center flex-col md:flex-row">
  {/* Image Section */}
  <div className="w-full md:w-1/2 mb-6 md:mb-0">
    <img
      src={backgroundImage}
      alt="Background"
      className="h-full w-full object-cover rounded-lg"
    />
  </div>

  {/* Text Section */}
  <div className="flex-1 md:w-1/2 md:pl-8">
    <h3 className="text-3xl font-bold mb-4">Why Choose Us</h3>
    <p className="text-lg text-gray-300 leading-relaxed">
      We prioritize a user-centered approach in everything we do. We believe the most effective software solutions are crafted with the end user in mind. 
    </p>
    <ul className="mt-8 space-y-6">
      <li className="flex items-center">
        <FaBullhorn className="text-yellow-500 w-8 h-8 mr-4" />
        <span className="font-semibold">First Growing Process</span>
      </li>
      <li className="flex items-center">
        <FaLaptopCode className="text-pink-500 w-8 h-8 mr-4" />
        <span className="font-semibold">Clean Code</span>
      </li>
      <li className="flex items-center">
        <FaShieldAlt className="text-red-500 w-8 h-8 mr-4" />
        <span className="font-semibold">Digital Marketing</span>
      </li>
    </ul>
  </div>
</div>

      </div>
    </div>
  );
}
