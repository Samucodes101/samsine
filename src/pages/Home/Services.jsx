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
      icon: <FaShieldAlt />,
      title: "Cybersecurity",
      description:
        "Our cybersecurity services are designed to protect your digital assets from cyber threats and attacks. We offer comprehensive security solutions, including vulnerability assessments, threat detection, and real-time monitoring to ensure your systems are resilient and secure against evolving risks.",
    },
    {
      icon: <FaChartLine />,
      title: "Analytics",
      description:
        "Unlock the full potential of your data with our analytics services. We provide advanced data analysis and reporting tools, empowering your business with actionable insights for informed decision-making, optimization, and strategic growth. Turn complex data into valuable insights with us.",
    },
    {
      icon: <FaMobile />,
      title: "Mobile Solutions",
      description:
        "Enhance your business reach with our custom mobile solutions. We build user-friendly, scalable mobile applications tailored to your specific needs, ensuring seamless functionality across all devices. From concept to launch, our team delivers mobile apps that drive engagement and deliver value to your users.",
    },
    {
      icon: <FaCode />,
      title: "Software Development",
      description:
        "Transforming ideas into reliable, scalable software solutions. We apply agile principles to build robust applications tailored to your business needs, ensuring quality, efficiency, and seamless user experience.",
    },
    {
      icon: <FaCloud />,
      title: "Cloud & DevOps",
      description:
        "Enabling seamless cloud adoption and DevOps practices to streamline your workflows. We offer cloud migrations, infrastructure management, and CI/CD solutions to boost efficiency and scalability.",
    },
    {
      icon: <FaDesktop />,
      title: "Web Development",
      description:
        "Offering full-stack web development services to create dynamic, responsive websites that are visually impactful and optimized for performance across all devices.",
    },
    {
      icon: <FaPalette />,
      title: "Product & Design",
      description:
        "Creating innovative products and designs that prioritize user experience. Our design and product development services focus on crafting intuitive, user-centered solutions that stand out in the market.",
    },
    {
      icon: <FaChartLine />,
      title: "Analytic Solutions",
      description:
        "Providing data analytics services to turn complex data into valuable insights, equipping you with tools for informed, strategic decision-making.",
    },
    {
      icon: <FaDatabase />,
      title: "Data Center",
      description:
        "Ensuring reliable data storage and infrastructure management with secure, scalable solutions for critical business operations.",
    },
  ];

  return (
    <div className="bg-gray-100 py-16 px-4">
      <h2 className="text-4xl font-bold text-center text-[#0A0A0A] mb-10">
      We Are Offering All Kinds of IT Solutions Services
      </h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-16">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative bg-white p-6 h-80 rounded-lg shadow-lg hover:bg-gray-200 hover:text-gray-800 transition duration-300"
          >
            <div className="text-6xl mb-4 text-blue-800">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              {service.title}
            </h3>
            <p className="text-gray-700 text-sm ">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
