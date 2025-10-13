import React from "react";
import Profile from "../assets/profile1.png";
import Icons from "../assets/logos.png";

const AboutMe: React.FC = () => {
  return (
    <section id="about" className="text-white py-16 px-4 md:px-16">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10">
        {/* Profile Image */}
        <div className="relative">
          <div className="absolute -inset-4 bg-orange-400 rounded-full -z-10"></div>
          <div className="absolute -inset-8 bg-orange-200 rounded-full -z-20"></div>
          <img
            src={Profile}
            alt="Profile"
            className="rounded-lg w-64 md:w-72 object-cover shadow-lg"
          />
        </div>

        {/* About Me Text */}
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-gray-300 mb-6">
            As an aspiring UI/UX Designer and recent graduate of the Internshala
            UI/UX Bootcamp, I am passionate about creating intuitive and
            user-friendly digital experiences, with skills in user research,
            wireframing, prototyping, and design systems.
          </p>

          {/* Tools */}
          <h3 className="text-2xl font-semibold mb-4">Tools</h3>
          <div className="flex gap-4 flex-wrap">
            <img
              src={Icons}
              alt="Design Tools"
              className="h-12 object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;