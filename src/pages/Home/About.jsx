import Stats from "./Stats";

export default function About() {
  return (
    <div className="bg-[#FFFFFF] py-12">
      <div className="max-w-7xl mx-auto px-6">
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#08090B] mb-4">About Us</h1>
          <p className="text-lg text-[#08090B]">
            We are dedicated to delivering high-quality solutions and
            outstanding service to our customers.
          </p>
        </section>

        <div className="flex flex-wrap justify-center gap-16 p-6">
          <div className="bg-white rounded-lg shadow-md p-6 w-72 transform transition duration-300 hover:scale-105 hover:shadow-lg">
            <h2 className="text-3xl font-bold mb-4 text-blue-900">Our Mission</h2>
            <p className="text-gray-800 font-semibold">
              Our mission is to innovate and lead in the digital world by delivering state-of-the-art solutions. We are driven by our passion for excellence and commitment to quality.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 w-72 transform transition duration-300 hover:scale-105 hover:shadow-lg">
            <h2 className="text-3xl font-bold mb-4 text-blue-900">Our Values</h2>
            <ul className="text-gray-800 font-semibold flex flex-col px-4 justify-center space-y-2 list-disc">
              <li>Customer-Centric Solutions</li>
              <li>Integrity and Transparency</li>
              <li>Innovation and Creativity</li>
              <li>Quality and Excellence</li>
            </ul>
          </div>
        </div>

        <Stats />
      </div>
    </div>
  );
}
