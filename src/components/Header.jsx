import { useState } from 'react';
// import { MenuIcon, XIcon } from '';
import Logo from '../assets/edsine_logo.png';

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <nav className="bg-white text-textColor px-4 py-2">
      <div className="flex justify-between items-center">
        {/* Logo on the left */}
        <div className="flex-grow">
          <img src={Logo} alt="Logo" className="w-28" />
        </div>

        {/* Menu icon for mobile view */}
        <div className="md:hidden" onClick={() => setNavOpen(!navOpen)}>
          {/* {navOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />} */}
        </div>

        {/* Desktop navigation */}
        <ul className="hidden md:flex justify-center flex-grow space-x-4">
          <li><a href="#" className="hover:text-gray-400">Home</a></li>
          <li><a href="#" className="hover:text-gray-400">About</a></li>
          <li><a href="#" className="hover:text-gray-400">Services</a></li>
          <li><a href="#" className="hover:text-gray-400">Contact</a></li>
        </ul>
      </div>

      {/* Mobile dropdown menu */}
      {navOpen && (
        <ul className="md:hidden mt-2 space-y-2">
          <li><a href="#" className="block hover:text-gray-400">Home</a></li>
          <li><a href="#" className="block hover:text-gray-400">About</a></li>
          <li><a href="#" className="block hover:text-gray-400">Services</a></li>
          <li><a href="#" className="block hover:text-gray-400">Contact</a></li>
        </ul>
      )}
    </nav>
  );
}
