import React from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 p-5 fixed top-0 w-full z-10">
      <div className="container mx-auto flex justify-center space-x-10">
        <Link to="hero" smooth={true} duration={1000} offset={-80} className="text-white hover:text-purple-500 cursor-pointer">
          Home
        </Link>
        <Link to="technologies" smooth={true} duration={1000} offset={-80} className="text-white hover:text-purple-500 cursor-pointer">
          Technologies
        </Link>
        <Link to="projects" smooth={true} duration={1000} offset={-80} className="text-white hover:text-purple-500 cursor-pointer">
          Projects
        </Link>
        <Link to="contact" smooth={true} duration={1000} offset={-80} className="text-white hover:text-purple-500 cursor-pointer">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;


