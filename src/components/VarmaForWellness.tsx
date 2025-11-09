import React from 'react';
import varma from '../assets/varma.jpg';


const VarmaForWellness: React.FC = () => {
  return (
    // Outer container with the light background color and padding
    // Note: The image shows content extending down to "Holistic Care" which I will treat 
    // as the start of the next section, so this component focuses on the Varma section.
    <div className="bg-[#fffaf3] py-20 px-4 sm:px-6 lg:px-8">
      {/* Centering container for content and max-width */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start">

        {/* --- 1. Image Collage Section (Left Side) --- */}
        <div className="relative h-96 w-full md:h-[450px] flex justify-center md:justify-start">
          
          {/* Container for the specific collage arrangement */}
          <div className="relative w-full max-w-lg h-full">

           <img
              src={varma}
              alt="Varmas"
              style={{ clipPath: 'inset(0 0 0 0)' }}
            />

          </div>
        </div>

        {/* --- 2. Text Content Section (Right Side) --- */}
        <div className="md:pl-10 pt-10 md:pt-20 md:text-left text-center">
          
          {/* Heading */}
          <h2 className="text-5xl font-bold text-[#6E684A] mb-6">
            Varma for <br />Wellness
          </h2>

          {/* Description */}
          <p className="text-xl leading-relaxed text-[#B85C2E] font-serif max-w-sm md:max-w-none mx-auto">
           Varma is an ancient healing science that activates vital energy points to restore balance and relieve pain.
          </p>
        </div>

      </div>

    </div>
  );
};

export default VarmaForWellness;