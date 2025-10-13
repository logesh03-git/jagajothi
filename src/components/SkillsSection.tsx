import React from "react";

const skills = [
  "UI & UX",
  "User research",
  "Design system",
  "Visual design",
  "Prototype",
  "Interaction design",
  "Wireframing",
  "Usability testing",
  "Accessibility",
  "Responsive design",
];

export default function SkillsSection() {
  return (
    <section id="skills" className="w-full py-16 text-center overflow-hidden">
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Skills</h2>
      <p className="text-gray-300 max-w-2xl mx-auto mb-12 text-sm md:text-base">
        Lorem ipsum dolor sit amet consectetur. Imperdiet convallis blandit felis ligula 
        aliquam venenatis fghh hgjj nisi ante.
      </p>

      {/* Infinite Scrolling Skills */}
      <div className="relative w-full overflow-hidden">
        <div className="flex animate-scroll whitespace-nowrap">
          {/* First row */}
          {skills.map((skill, idx) => (
            <div
              key={`first-${idx}`}
              className="inline-block bg-white text-black rounded-lg px-6 py-3 m-2 shadow-md font-medium text-sm md:text-base"
            >
              {skill}
            </div>
          ))}
          {/* Duplicate row for infinite loop */}
          {skills.map((skill, idx) => (
            <div
              key={`second-${idx}`}
              className="inline-block bg-white text-black rounded-lg px-6 py-3 m-2 shadow-md font-medium text-sm md:text-base"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
