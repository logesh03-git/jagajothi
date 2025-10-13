import React from "react";

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center text-white px-6">
      <p className="text-lg md:text-xl">Hi I am</p>
      <h1 className="text-3xl md:text-4xl font-bold text-orange-500 mt-2">
        Chandrasekaran
      </h1>
      <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mt-4">
        UI &amp; UX Designer
      </h2>
      <p className="text-gray-300 mt-6 max-w-2xl text-base md:text-lg">
        Crafting user-friendly interfaces that make technology simple,
        engaging, and meaningful.
      </p>
    </section>
  );
};

export default Hero;
