export default function Hero() {
  return (
    <section
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/blueglitterbackground.jpg')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center p-20">
        <div className="text-start text-white">
          <h1 className="text-4xl md:text-7xl font-bold">
            We deliver IT solutions
          </h1>
          <p className="mt-4 text-lg md:text-2xl">
            Empowering Businesses With Innovative Tech Solutions
          </p>
          {/* <button className="mt-8 px-6 py-3 bg-[#1F4FB2] rounded-lg hover:bg-[#257CE5]">
            Join Us
          </button> */}
        </div>
      </div>
    </section>
  );
}
