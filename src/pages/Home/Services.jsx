import {
  FaShieldAlt,
  FaChartLine,
  FaMobile,
  FaCode,
  FaCloud,
  FaDesktop,
  FaPalette,
  FaDatabase,
} from "react-icons/fa";

export default function Services() {
  const services = [
    {
      icon: <FaShieldAlt className="w-12 h-12 text-blue-500" />,
      title: "Cybersecurity",
      description:
        "Our cybersecurity services are designed to protect your digital assets from cyber threats and attacks. We offer comprehensive security solutions, including vulnerability assessments, threat detection, and real-time monitoring to ensure your systems are resilient and secure against evolving risks.",
    },
    {
      icon: <FaChartLine className="w-12 h-12 text-blue-500" />,
      title: "Analytics",
      description:
        "Unlock the full potential of your data with our analytics services. We provide advanced data analysis and reporting tools, empowering your business with actionable insights for informed decision-making, optimization, and strategic growth.",
    },
    {
      icon: <FaMobile className="w-12 h-12 text-blue-500" />,
      title: "Mobile Solutions",
      description:
        "Enhance your business reach with our custom mobile solutions. We build user-friendly, scalable mobile applications tailored to your specific needs, ensuring seamless functionality across all devices.",
    },
  ];

  return (
    <div className="bg-black text-white py-16 px-8">
      <section className="max-w-7xl mx-auto">
        {/* Text Section */}
        <div className="mb-16">
          <h2 className="text-[#b23ae1] uppercase text-lg tracking-wide">
            About Us
          </h2>
          <h1 className="text-4xl md:text-5xl font-bold mt-4 leading-tight">
            At EDSINE Technologies, we empower Businesses <br />
            with Innovative Technology Solutions.
          </h1>
          <p className="mt-6 text-gray-300 text-lg">
            Founded with a mission to deliver top-tier IT services, engineering
            expertise, and consultancy, we cater to small and medium-sized
            businesses, government agencies, and non-governmental organizations.
            Our goal is to help organizations thrive in a fast-evolving digital
            landscape by providing cutting-edge tools and expert guidance.
          </p>
          <div className="mt-10 flex space-x-10">
            <div>
              <p className="text-6xl font-bold text-orange-500">450+</p>
              <p className="mt-2 text-gray-400">Happy Clients</p>
            </div>
            <div>
              <p className="text-6xl font-bold text-[#b23ae1]">750+</p>
              <p className="mt-2 text-gray-400">Projects Delivered</p>
            </div>
          </div>
        </div>

        {/* Cards Section */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-900 p-6 rounded-lg flex flex-col items-start"
            >
              {service.icon}
              <h3 className="text-2xl font-semibold mt-4">{service.title}</h3>
              <p className="mt-2 text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
