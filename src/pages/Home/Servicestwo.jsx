import { FaCode, FaLaptopCode, FaChartLine, FaBullhorn, FaChalkboardTeacher, FaShieldAlt } from "react-icons/fa";

export default function ServicesSection() {
  const servicesTop = [
    {
      icon: <FaCode className="text-orange-500 w-12 h-12" />,
      title: "Software Development",
      description:
        "Our full-stack software developers handle the entire lifecycle of software creation—from design to deployment.",
    },
    {
      icon: <FaLaptopCode className="text-pink-500 w-12 h-12" />,
      title: "Web Development",
      description:
        "We design and develop dynamic websites and web applications using the latest technologies, ensuring tailored, responsive solutions.",
    },
    {
      icon: <FaChartLine className="text-sky-500 w-12 h-12" />,
      title: "IT Consultancy Services",
      description:
        "We provide comprehensive IT consultancy, covering every phase of your ICT project. From strategy to execution, we've got you covered.",
    },
  ];

  const servicesBottom = [
    {
      icon: <FaBullhorn className="text-yellow-500 w-12 h-12" />,
      title: "Digital Marketing",
      description:
        "We specialize in digital marketing services to help businesses increase their online visibility. Our expertise includes search engine optimization (SEO), social media marketing, and paid advertising, focusing on digital channels to effectively reach your target audience.",
    },
    {
      icon: <FaChalkboardTeacher className="text-green-500 w-12 h-12" />,
      title: "Training Services",
      description:
        "We offer ICT-related training programs, from web and mobile development to system building. We also provide specialized training for ISO certifications such as ISO 9001, ISO 27001, ISO 20000, ISO 22301, and ISO 14001, helping you and your team achieve global standards.",
    },
    {
      icon: <FaShieldAlt className="text-red-500 w-12 h-12" />,
      title: "Penetration Testing",
      description:
        "We simulate real-world cyber-attacks to identify vulnerabilities in your systems, networks, and applications. Our expert team provides in-depth assessments, detailed reports, and actionable insights to help you strengthen your security infrastructure and stay ahead of potential threats.",
    },
  ];

  return (
    <div className="bg-black text-white py-16 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex justify-between items-center">
          <div>
            <h4 className="text-[#881fb2] uppercase text-sm tracking-widest mb-2">
              Services
            </h4>
            <h2 className="text-4xl font-bold leading-snug">
              What Solutions We Provide <br /> to Our Valued Customers
            </h2>
          </div>
          <button className="bg-[#881fb2] text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:opacity-90 transition duration-300">
            Get Started
          </button>
        </div>

        {/* Top Cards Section */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesTop.map((service, index) => (
            <div
              key={index}
              className="bg-gray-900 p-8 rounded-xl shadow-lg relative hover:bg-[#881fb2] transition duration-300"
            >
              <div className="absolute top-6 right-6 text-6xl font-bold text-gray-700 opacity-10">
                {String(index + 1).padStart(2, "0")}
              </div>
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Bottom Cards Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesBottom.map((service, index) => (
            <div
              key={index}
              className="bg-gray-900 p-8 rounded-xl shadow-lg relative hover:bg-[#881fb2] transition duration-300"
            >
              <div className="absolute top-6 right-6 text-6xl font-bold text-gray-700 opacity-10">
                {String(index + 4).padStart(2, "0")}
              </div>
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
