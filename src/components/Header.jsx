import React from 'react';
import Logo from '../assets/edsine_logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-black text-white py-2">
      <div className="container mx-auto flex justify-between items-center">
        <img src={Logo} alt="Logo" className="h-12 w-20" />
        <nav className="flex-grow flex justify-center">
          <ul className="flex space-x-6 text-sm">
            <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
            <li><Link to="/about" className="hover:text-gray-300">About Us</Link></li>
            {/* Dropdown for Services */}
            <li className="relative group">
              <Link to="/services" className="hover:text-gray-300">Services</Link>
              <ul className="absolute left-0 hidden group-hover:block bg-black text-white text-sm py-2 px-4 space-y-2">
                <li><Link to="/hackathon" className="block hover:text-gray-300">Hackathon</Link></li>
                <li><Link to="/techhub" className="block hover:text-gray-300">TechHub</Link></li>
              </ul>
            </li>
            <li><Link to="/contact" className="hover:text-gray-300">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
