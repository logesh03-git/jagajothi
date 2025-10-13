import { useState } from "react";
import Project1 from "../assets/project1.jpg";
import Project2 from "../assets/project2.jpg";
import Project3 from "../assets/project3.jpg";
import Project4 from "../assets/project4.jpg";
import Project5 from "../assets/project5.jpg";
import Project6 from "../assets/project6.jpg";
import Project7 from "../assets/project7.jpg";

type Project = {
  id: number;
  title: string;
  description: string;
  category: "Case study" | "Design with AI" | "App Design";
  image: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Conto",
    description: "A modern app design concept for finance tracking.",
    category: "App Design",
    image: Project1,
  },
  {
    id: 2,
    title: "AI Design",
    description: "Exploring AI-assisted UI design workflows.",
    category: "Design with AI",
    image: Project2,
  },
  {
    id: 3,
    title: "UX Improvements for RedBus",
    description: "Case study on improving booking flows.",
    category: "Case study",
    image: Project3,
  },
  {
    id: 4,
    title: "Redesign SAAS Landing Page",
    description: "Landing page revamp to boost conversions.",
    category: "Case study",
    image: Project4,
  },
  {
    id: 5,
    title: "Marketing Dashboard",
    description: "Analytics dashboard for tracking campaigns.",
    category: "Case study",
    image: Project5,
  },
  {
    id: 6,
    title: "Productivity App",
    description: "Mobile-first design for task management.",
    category: "Case study",
    image: Project6,
  },
  {
    id: 7,
    title: "Portfolio Website",
    description: "Personal portfolio redesign for UX showcase.",
    category: "Case study",
    image: Project7,
  },
];

const tabs = ["All", "Case study", "Design with AI", "App Design"] as const;

export default function MyProjects() {
  const [activeTab, setActiveTab] = useState<typeof tabs[number]>("All");

  const filteredProjects =
    activeTab === "All"
      ? projects
      : projects.filter((p) => p.category === activeTab);

  return (
    <section id="projects" className="w-full max-w-6xl mx-auto px-6 py-16 text-center">
      {/* Header */}
      <h2 className="text-4xl font-bold text-white mb-4">My Projects</h2>
      <p className="text-gray-400 max-w-2xl mx-auto mb-8">
        Lorem ipsum dolor sit amet consectetur. Imperdiet convallis blandit
        felis ligula aliquam venenatis nisi ante.
      </p>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-5 py-2 rounded-lg text-sm font-medium transition-all ${
              activeTab === tab
                ? "bg-orange-500 text-white"
                : "bg-white text-black hover:bg-gray-200"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project: any) => (
          <div
            key={project.id}
            className="relative group rounded-xl overflow-hidden shadow-lg"
          >
            {/* Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute bottom-0 left-0 w-full h-0 group-hover:h-1/5 bg-orange-500 text-white transition-all duration-300 flex flex-col justify-center items-start px-4">
              <h3 className="text-md font-semibold">{project.title}</h3>
              <p className="text-sm opacity-90">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
