import Stats from "./Stats";

export default function About() {
  return (
    <div className="bg-[#FFFFFF]py-12">
      <div className="max-w-7xl mx-auto px-6">
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#08090B] mb-4">About Us</h1>
          <p className="text-lg text-[#08090B]">
            We are dedicated to delivering high-quality solutions and
            outstanding service to our customers.
          </p>
        </section>

        <div className="w-full  justify-between">
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#08090B] mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-[#08090B] leading-relaxed">
              Our mission is to innovate and lead in the digital world by
              delivering state-of-the-art solutions. We are driven by our
              passion for excellence and commitment to quality.
            </p>
          </section>
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#08090B] mb-6">
              Our Values
            </h2>
            <ul className="space-y-4">
              <li className="text-lg text-[#08090B]">
                - Customer-Centric Solutions
              </li>
              <li className="text-lg text-[#08090B]">
                - Integrity and Transparency
              </li>
              <li className="text-lg text-[#08090B]">
                - Innovation and Creativity
              </li>
              <li className="text-lg text-[#08090B]">
                - Quality and Excellence
              </li>
            </ul>
          </section>
        </div>
        <Stats />
      </div>
    </div>
  );
}
