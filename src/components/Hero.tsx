import React from "react";
import heroBg from "../assets/herobg.jpg";
import { useNavigate } from "react-router-dom";

const Hero: React.FC = () => {
  const navigate = useNavigate();
  return (
    <section
      className="relative bg-cover bg-center text-white"
      style={{
        backgroundImage: `url(${heroBg})`, 
      }}
    >
      <div className="bg-black/40 absolute inset-0" /> {/* dark overlay */}
      <div className="relative container mx-auto text-center py-24 px-4">
        <h1 className="text-4xl font-['Poppins'] md:text-5xl font-bold mb-4 drop-shadow-lg">
          Welcome To Jagajothi Ayurvedhas
        </h1>
        <p className="text-lg text-[#FBF9F3] font-['Sawarabi\ Mincho'] md:text-xl mb-8 max-w-2xl mx-auto">
          Ayurveda & Varma Vaidhyasala where nature heals, tradition guides, and
          wellness begins
        </p>
        <div className="flex justify-center gap-4">
          <button onClick={()=>navigate("/products-list") } className="bg-[#a3b18a] text-[#f9f6ee] font-semibold px-6 py-2 rounded-full hover:bg-[#8ea176] transition-all">
            See more →
          </button>
          <button onClick={()=>navigate("/about-us") } className="border-2 border-[#a3b18a] text-[#f9f6ee] font-semibold px-6 py-2 rounded-full hover:bg-[#a3b18a] hover:text-[#2b2b2b] transition-all">
            About Us →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
