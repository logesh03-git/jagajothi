// Footer.tsx

import React from 'react';
// Using react-icons for social media and utility icons
import { FaMapMarkerAlt, FaPhoneAlt, FaInstagram } from 'react-icons/fa';
import { Mail } from 'lucide-react'
import { FaWhatsapp } from "react-icons/fa";

const Footer: React.FC = () => {
  const footerBg = '#373425';
  // Text color for the main section
  const mainTextColor = '#EBE9E0';
  // Text color for the copyright section (slightly lighter)
  const copyrightTextColor = '#A8A69E';

  return (
    <footer
      style={{ backgroundColor: footerBg }}
      className="pt-10 pb-4 text-white"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">Footer</h2>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Top Row: Brand & Icons */}
        <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start mb-6">

          {/* Brand Name */}
          <div className="mb-6 sm:mb-0 text-3xl font-semibold tracking-wide" style={{ color: mainTextColor }}>
            Jagajothi Ayurvedhas
          </div>

          {/* Contact/Social Icons */}
          <div className="flex space-x-6 text-xl" style={{ color: mainTextColor }}>

            {/* Utility Icons (Location/Phone) */}
            <a href="https://share.google/C8XswH9QQ7lqO61vu" aria-label="Our Location" className="hover:text-gray-400 transition-colors">
              <FaMapMarkerAlt />
            </a>
            <a href="tel:1234567890" aria-label="Call Us" className="hover:text-gray-400 transition-colors">
              <FaPhoneAlt />
            </a>

            <a
              href="mailto:jagajothiayurvedas@gmail.com"
              aria-label="Email Us: jagajothiayurvedas@gmail.com"
              className="hover:text-gray-400 transition-colors"
            >
              <Mail size={24} />
            </a>

            {/* Social Icons */}
            <a
              href="https://wa.me/message/AU5H4A3B73VHH1"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp Link"
              className="hover:text-gray-400 transition-colors"
            >
              {/* Note: WhatsApp icon is not available in Lucide, using MessageSquare as a substitute */}
              <FaWhatsapp size={24} />
            </a>
            <a href="https://www.instagram.com/jagajothi_ayurvedhas" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-gray-400 transition-colors">
              <FaInstagram size={24} />
            </a>

          </div>
        </div>

        {/* Horizontal Line */}
        <hr className="border-t opacity-30 my-6" style={{ borderColor: mainTextColor }} />

        {/* Bottom Row: Copyright & Links */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-center sm:text-left text-sm" style={{ color: copyrightTextColor }}>

          {/* Copyright Text */}
          <p className="order-2 sm:order-1 mt-4 sm:mt-0">
            &copy; 2025 Jagajothi Ayurvedhas All rights reserved.
          </p>

          {/* Links */}
          <div className="flex flex-wrap justify-center sm:justify-end space-x-4 order-1 sm:order-2">
            <a href="/privacy" className="hover:text-white transition-colors">Privacy policy</a>
            <a href="/terms" className="hover:text-white transition-colors">Terms of service</a>
            <a href="/cookies" className="hover:text-white transition-colors">Cookie settings</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;