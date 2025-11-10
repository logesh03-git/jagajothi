import React from 'react';
import vaithiyar from "../assets/vaithiyar.jpg";
import divya from "../assets/divya.jpg";

// Define the type for a physician's data
interface Physician {
  imageSrc: string;
  namePrefix: string;
  name: string;
  title: string;
  description: string;
}

const OurHealingVision: React.FC = () => {
  // Data for the two physicians
  const physicians: Physician[] = [
    {
      imageSrc: vaithiyar,
      namePrefix: 'Brahma sri',
      name: 'Vaithyar Gandhi',
      title: 'Traditional varma practitioner',
      description: '',
    },
    {
      imageSrc: divya,
      namePrefix: 'Brahma sri',
      name: 'Dr.Divyagandhi',
      title: '(B.A.M.S,MD&PN.,)',
      description: 'Ayurvedic Physician & Psychology consultant',
    },
  ];

  return (
    // Outer container with the light background color and padding
    <div className="bg-[#fffaf3] py-16 px-4 sm:px-6 lg:px-8">
      {/* Centering container for content and max-width */}
      <div className="max-w-6xl mx-auto text-center">

        {/* Healing Vision Heading */}
        <h2 className="text-4xl font-bold text-[#6E684A] mb-8 md:text-5xl">
          Our Healing Vision
        </h2>

        {/* Healing Vision Quote */}
        <p className="text-xl leading-relaxed mb-16 text-[#B85C2E] font-serif max-w-3xl mx-auto">
          The true purpose of a physician is not to cure, but to rekindle the rhythm within that already knows how to heal
        </p>

        {/* Physicians Section */}
        <div className="flex flex-col md:flex-row justify-center items-start md:space-x-12 space-y-12 md:space-y-0">
          {physicians.map((physician, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Circular Image */}
              <div className="w-48 h-48 rounded-full overflow-hidden bg-white shadow-lg flex items-center justify-center mb-6">
                <img
                  src={physician.imageSrc}
                  alt={physician.name}
                  className="w-full h-full object-cover transition-transform duration-300"
                />
              </div>

              {/* Physician Details */}
              <p className="text-base text-[#B85C2E] font-serif italic mb-1">{physician.namePrefix}</p>
              <h3 className="text-2xl font-semibold text-[#B85C2E] mb-1">{physician.name}</h3>
              <p className="text-base text-gray-600 font-serif mb-1">{physician.title}</p>
              {physician.description && (
                <p className="text-base text-gray-600 font-serif">{physician.description}</p>
              )}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default OurHealingVision;