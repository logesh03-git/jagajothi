import React, { useState } from "react";
import { Menu, X, Home, ShoppingCart, Info, Phone } from "lucide-react";

import logo from "../assets/logo.jpg";
import { useNavigate } from "react-router-dom";


// Placeholder for external logo import, using text and emoji instead.
const BrandLogo = () => (
  <div className="text-xl flex font-bold text-[#6b5b3e]">
    <img
      src={logo}
      alt="Jagajothi Ayurvedhas"
      className="h-8 w-8 mr-2"
    /> 
    <span className="hidden sm:inline">Jagajothi Ayurvedhas</span>
  </div>
);

// Helper array for navigation items
const navItems = [
  { name: 'Home', path: '/', Icon: Home },
  { name: 'Products', path: '/products-list', Icon: ShoppingCart },
  { name: 'About us', path: '/about-us', Icon: Info },
  { name: 'Contact us', path: '/contact', Icon: Phone },
];

const Navbar: React.FC = () => {
  // State to manage the visibility of the mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Function to simulate navigation and close the mobile menu
  const handleNavigation = (path: string) => {
    navigate(`${path}`)
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-[#f9f6ee] shadow-md sticky top-0 z-10 font-['Inter']">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 max-w-7xl">

        {/* Logo + Brand Name */}
        <div onClick={() => handleNavigation("/")} className="flex items-center space-x-2 cursor-pointer">
          <BrandLogo />
        </div>

        {/* Desktop Navigation (Visible on medium screens and up) */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8 text-[#3c3c3c] font-medium">
            {navItems.map(item => (
              <li
                key={item.name}
                onClick={() => handleNavigation(item.path)}
                className="border-b-2 border-transparent text-[20px] font-['Sawarabi Mincho'] hover:border-[#7a7f43] transition-all cursor-pointer py-1"
              >
                {item.name}
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button (Visible on small screens) */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-md text-[#6b5b3e] hover:bg-[#e8e4db] focus:outline-none"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {/* Toggle between Menu and Close icons */}
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Content (Conditionally Rendered and responsive) */}
      {isMenuOpen && (
        <div id="mobile-menu" className="md:hidden bg-[#f3f0e8] transition-all duration-300 ease-in-out">
          <ul className="flex flex-col space-y-2 p-4 text-[#3c3c3c] font-medium border-t border-[#e8e4db]">
            {navItems.map(item => (
              <li
                key={item.name}
                onClick={() => handleNavigation(item.path)}
                className="flex items-center font-['Poppins'] p-3 rounded-lg hover:bg-[#e8e4db] transition-colors cursor-pointer"
              >
                <item.Icon className="h-5 w-5 mr-3 text-[#7a7f43]" />
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
