import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white py-10 px-6 text-center">
      {/* Branding */}
      <div className="flex items-center justify-center space-x-2 text-white font-bold text-xl gap-2 mb-6">
        <div className="bg-orange-500 text-white w-8 h-8 flex items-center justify-center rounded">
          C
        </div>
        <span className="text-white">handrasekaran</span>
      </div>

      {/* Social Icons */}
      <div className="flex justify-center gap-6 text-gray-300 text-lg">
        <a href="#" className="hover:text-orange-500 transition">
          <FaFacebookF />
        </a>
        <a href="#" className="hover:text-orange-500 transition">
          <FaTwitter />
        </a>
        <a href="#" className="hover:text-orange-500 transition">
          <FaInstagram />
        </a>
        <a href="#" className="hover:text-orange-500 transition">
          <FaLinkedinIn />
        </a>
      </div>
    </footer>
  );
}
