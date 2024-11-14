export default function Stats() {
  const stats = [
    { label: "Software Programming", value: "100%", color: "#3B82F6" }, // Dark blue
    { label: "Data Science", value: "100%", color: "#4B5563" }, // Dark gray
    { label: "Cyber Security", value: "100%", color: "#D97706" }, // Dark orange
    { label: "Product Design", value: "100%", color: "#10B981" }, // Dark green
    { label: "IT Project Management", value: "100%", color: "#F59E0B" }, // Amber
    { label: "Data Protection Compliance", value: "100%", color: "#6B7280" }, // Gray
    { label: "Portfolio Development", value: "100%", color: "#9333EA" }, // Purple
  ];

  return (
    <section className="bg-gray-950 p-12 flex justify-center">
      {/* Main container with slight width limitation */}
      <div className="max-w-5xl w-full">
        {/* Text positioned above stats */}
        <div className="text-white text-2xl font-bold mb-8 text-center">
          We offer a variety of training programs, split into key categories to suit different needs and skill levels:
        </div>

        <div className="flex items-center space-x-12"> {/* Increased space between image and stats */}
          {/* Image container */}
          <div className="w-">
            <img
              src="https://edsinetechnologiesltd.com/revamp/wp-content/uploads/2024/11/istockphoto-1626847820-612x612-1.jpg"
              alt="Training Programs"
              className="w-full h-auto rounded-lg"
            />
          </div>

          {/* Stats container */}
          <div className="w-1/2">
            {stats.map((stat, index) => (
              <div key={index} className="mb-6">
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

        {/* Button positioned below stats */}
        <div className="flex justify-center mt-8">
          <button className="bg-[#881fb2] text-white py-3 px-8 rounded-full hover:bg-orange-700 text-lg font-semibold">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}
