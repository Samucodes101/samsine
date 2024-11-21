import Logo from '../assets/edsine_logo.png';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-10">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-4">
        {/* Logo and Description */}
        <div className="text-center sm:text-left">
          <div className="flex justify-center sm:justify-start">
            <img src={Logo} alt="Logo" className="w-28" />
          </div>
          <p className="text-gray-400 mt-4">
            Making organizations thrive in a fast-evolving digital landscape by providing cutting-edge tools and expert guidance.
          </p>
          <div className="flex justify-center sm:justify-start space-x-3 mt-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-pinterest"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>

        {/* IT Services */}
        <div className="text-center sm:text-left">
          <h2 className="text-lg font-semibold mb-4">IT Services</h2>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white">Software Development</a></li>
            <li><a href="#" className="hover:text-white">Web Development</a></li>
            <li><a href="#" className="hover:text-white">Analytic Solutions</a></li>
            <li><a href="#" className="hover:text-white">Cloud and DevOps</a></li>
            <li><a href="#" className="hover:text-white">Product Design</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="text-center sm:text-left">
          <h2 className="text-lg font-semibold mb-4">Contact Info</h2>
          <ul className="space-y-2 text-gray-400">
            <li>3 R. A. Adeleye Cl.</li>
            <li>(+234)908 899 1180</li>
            <li>info@edsinetechnologiesltd.com</li>
            <li>Opening Hours: 8:30 - 18:00</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="text-center sm:text-left">
          <h2 className="text-lg font-semibold mb-4">Newsletter</h2>
          <p className="text-gray-400 mb-4">
            Join our newsletter to stay up-to-date with news, offers, and trends.
          </p>
          <form className="flex flex-col sm:flex-row items-center">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full sm:flex-1 px-4 py-2 text-black rounded-md sm:rounded-l-md sm:rounded-none focus:outline-none mb-2 sm:mb-0"
            />
            <button className="w-full sm:w-auto bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md sm:rounded-r-md text-white">
              <i className="fas fa-paper-plane"></i>
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 text-center text-gray-500 border-t border-gray-700 pt-4">
        © 2024 All Rights Reserved.
      </div>
    </footer>
  );
}
