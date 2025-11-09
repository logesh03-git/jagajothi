import React from 'react';

// Define the component using a functional component structure
const JagajothiVision: React.FC = () => {
  return (
    // Outer container with the light background color
    <div className="bg-[#fffaf3] py-16 px-4 sm:px-6 lg:px-8">
      {/* Centering container for content and max-width */}
      <div className="max-w-4xl mx-auto text-center">

        {/* Vision Heading */}
        <h2 className="text-4xl font-bold text-[#6E684A] mb-10 md:text-5xl">
          Our Vision
        </h2>

        {/* First Paragraph: Main Vision Statement */}
        <p className="text-xl leading-relaxed mb-8 text-[#B85C2E] font-serif">
          At Jagajothi Ayurvedhas – Ayurveda & Varma Vaidhyasalai, we believe true healing is more than curing symptoms, it is restoring balance to body, mind, and soul. Rooted in the ancient wisdom of Ayurveda and the parambariyam (traditional lineage) of Varma, our treatments are holistic, natural, and personalized for every individual.
        </p>

        {/* Second Paragraph: Call to Action/Experience */}
        <p className="text-xl leading-relaxed text-[#B85C2E] font-serif">
          With a blend of time-honored knowledge and compassionate care, we guide you towards vitality, inner harmony, and long-lasting wellness. Step into our Vaidhyasalai and experience the light of healing through nature sacred touch.
        </p>

      </div>
    </div>
  );
};

export default JagajothiVision;