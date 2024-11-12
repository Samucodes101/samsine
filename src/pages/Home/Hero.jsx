export default function Hero() {
    return (
      <section className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('../assets/blueglitterbackground.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold">We deliver IT solutions</h1>
            <p className="mt-4 text-lg md:text-xl">Empowering Businesses With Innovative Tech Solutions</p>
            <button className="mt-8 px-6 py-3 bg-[#1F4FB2] rounded-lg hover:bg-[#257CE5]">
              Join Us
            </button>
          </div>
        </div>
      </section>
    );
  }
  