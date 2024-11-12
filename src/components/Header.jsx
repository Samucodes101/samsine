import { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Logo from '../assets/edsine_logo.png';

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <nav className="bg-whiteBg text-textColor px-4 py-2">
      <div className="flex justify-between items-center">
        <img src={Logo} alt="Logo" className="w-28" />
        <div className="md:hidden" onClick={() => setNavOpen(!navOpen)}>
          {/* Mobile menu toggle icon */}
        </div>
        <ul className="hidden md:flex space-x-4 flex-grow justify-center items-center">
          <li className="flex justify-center items-center">
            <Link to="/" className="hover:text-gray-400">Home</Link>
          </li>
          <li className="flex justify-center items-center">
            <Link to="/about" className="hover:text-gray-400">About</Link>
          </li>

          {/* Services Dropdown */}
          <li className="relative flex justify-center items-center group">
            <Link to="/services" className="hover:text-gray-400">Services</Link>
            <ul className="absolute left-0 hidden group-hover:block bg-white shadow-lg rounded-md mt-2 z-10">
              <li className="flex justify-center items-center">
                <Link to="/services/hackathon" className="block px-4 py-2 hover:bg-gray-100">Hackathon</Link>
              </li>
              <li className="flex justify-center items-center">
                <Link to="/services/techhub" className="block px-4 py-2 hover:bg-gray-100">Tech Hub</Link>
              </li>
            </ul>
          </li>

          <li className="flex justify-center items-center">
            <Link to="/contact" className="hover:text-gray-400">Contact</Link>
          </li>
        </ul>
      </div>

      {navOpen && (
        <ul className="md:hidden mt-2 space-y-2 text-center">
          <li><Link to="/" className="block hover:text-gray-400">Home</Link></li>
          <li><Link to="/about" className="block hover:text-gray-400">About</Link></li>
          <li>
            <button className="block w-full text-left hover:text-gray-400">Services</button>
            <ul className="pl-4 space-y-2 text-center">
              <li><Link to="/services/hackathon" className="block hover:text-gray-400">Hackathon</Link></li>
              <li><Link to="/services/techhub" className="block hover:text-gray-400">Tech Hub</Link></li>
            </ul>
          </li>
          <li><Link to="/contact" className="block hover:text-gray-400">Contact</Link></li>
        </ul>
      )}
    </nav>
  );
}
