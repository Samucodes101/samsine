export default function Hero() {
  return (
    <section
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('https://edsinetechnologiesltd.com/revamp/wp-content/uploads/2021/02/home-11.jpg')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center p-20">
        <div className="text-start text-white">
          <h1 className="text-4xl md:text-7xl font-bold">
            We Deliver IT <p>Solutions
            That Fit <p>Your Business</p></p>
          </h1>
          <p className="mt-4 text-lg md:text-2xl font-light">
            Empowering Businesses With Innovative Tech Solutions
          </p>
          <button className="mt-8 px-6 py-3 bg-[#881fb2] rounded-full hover:bg-[#45163d]">
            <p className="font-bold hover:font-normal">Get Started</p>
          </button>
        </div>
      </div>
    </section>
  );
}
