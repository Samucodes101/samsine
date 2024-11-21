import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/edsine_logo.png';

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full px-4 py-2 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md text-black' : 'bg-transparent text-white'
      }`}
    >
      <div className="flex justify-between items-center">
        <img src={Logo} alt="Logo" className="w-24 ml-4" />
        <div className="md:hidden mr-4" onClick={() => setNavOpen(!navOpen)}>
          <span className="text-2xl cursor-pointer">&#9776;</span>
        </div>
        <ul className="hidden md:flex space-x-4 flex-grow justify-center items-center ml-48">
          <li><Link to="/" className="hover:text-gray-400">Home</Link></li>
          <li><Link to="/about" className="hover:text-gray-400">About</Link></li>
          <li><Link to="/services" className="hover:text-gray-400">Services</Link></li>
          <li><Link to="/contact" className="hover:text-gray-400">Contact</Link></li>
          <li><Link to="/techhub" className="hover:text-gray-400 text-purple-500">Tech Hub</Link></li>
        </ul>
      </div>

      {/* Mobile Menu */}
      <div className='justify-end items-end'>
      {navOpen && (
        <ul className="md:hidden absolute top-0 right-0  mt-16 space-y-2 bg-black border border-gray w-fit shadow-lg rounded-lg p-4 text-white">
          <li>
            <Link to="/" className="block py-2 px-4 rounded-lg hover:text-gray-400">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="block py-2 px-4 rounded-lg hover:text-gray-400">
              About
            </Link>
          </li>
          <li>
            <Link to="/services" className="block py-2 px-4 rounded-lg hover:text-gray-400">
              Services
            </Link>
          </li>
          <li>
            <Link to="/contact" className="block py-2 px-4 rounded-lg hover:text-gray-400">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/techhub" className="block py-2 px-4 rounded-lg hover:text-gray-400 text-purple-500">
              Tech Hub
            </Link>
          </li>
        </ul>
      )}
      </div>
    </nav>
  );
}
