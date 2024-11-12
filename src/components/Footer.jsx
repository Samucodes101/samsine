export default function Footer() {
  return (
    <footer className="bg-[#DAE5FA] text-[#454545] py-10">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold">Stay Updated</h2>
        <p className="mt-4">Join our newsletter to stay up-to-date with news, offers, and trends.</p>
        <div className="mt-6">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 rounded-l-lg text-black outline-none"
          />
          <button className="px-6 py-2 bg-white text-[#454545] font-bold rounded-r-lg hover:bg-gray-300">
            Subscribe
          </button>
        </div>
        <div className="mt-10 text-sm">
          <p>&copy; EdSine Technologies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
