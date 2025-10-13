import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 w-full bg-[#000] px-8 py-4 flex justify-between items-center z-50">
      {/* Logo */}
      <div className="flex items-center space-x-2 text-white font-bold text-xl">
        <div className="bg-orange-500 text-white w-8 h-8 flex items-center justify-center rounded">
          C
        </div>
        <span className="text-white">handrasekaran</span>
      </div>

      {/* Menu */}
      <ul className="hidden md:flex space-x-8 text-white font-medium">
        <li>
          <a href="#home" className="hover:text-orange-500">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="hover:text-orange-500">
            About
          </a>
        </li>
        <li>
          <a href="#skills" className="hover:text-orange-500">
            Skills
          </a>
        </li>
        <li>
          <a href="#projects" className="hover:text-orange-500">
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-orange-500">
            Contact Us
          </a>
        </li>
      </ul>

      {/* Button */}
      <button className="ml-6 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-4 py-2 rounded">
        Download CV
      </button>
    </nav>
  );
};

export default Navbar;