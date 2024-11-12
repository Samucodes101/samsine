import { useState } from 'react';
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
            <a href="/" className="hover:text-gray-400">Home</a>
          </li>
          <li className="flex justify-center items-center">
            <a href="/about" className="hover:text-gray-400">About</a>
          </li>

          {/* Services Dropdown */}
          <li className="relative flex justify-center items-center group">
            <a href="/services" className="hover:text-gray-400">Services</a>
            <ul className="absolute left-0 hidden group-hover:block bg-white shadow-lg rounded-md mt-2 z-10">
              <li className="flex justify-center items-center">
                <a href="/services/hackathon" className="block px-4 py-2 hover:bg-gray-100">Hackathon</a>
              </li>
              <li className="flex justify-center items-center">
                <a href="/services/tech-hub" className="block px-4 py-2 hover:bg-gray-100">Tech Hub</a>
              </li>
            </ul>
          </li>

          <li className="flex justify-center items-center">
            <a href="/contact" className="hover:text-gray-400">Contact</a>
          </li>
        </ul>
      </div>

      {navOpen && (
        <ul className="md:hidden mt-2 space-y-2 text-center">
          <li><a href="/" className="block hover:text-gray-400">Home</a></li>
          <li><a href="/about" className="block hover:text-gray-400">About</a></li>
          <li>
            <button className="block w-full text-left hover:text-gray-400">Services</button>
            <ul className="pl-4 space-y-2 text-center">
              <li><a href="/services/hackathon" className="block hover:text-gray-400">Hackathon</a></li>
              <li><a href="/services/tech-hub" className="block hover:text-gray-400">Tech Hub</a></li>
            </ul>
          </li>
          <li><a href="/contact" className="block hover:text-gray-400">Contact</a></li>
        </ul>
      )}
    </nav>
  );
}
