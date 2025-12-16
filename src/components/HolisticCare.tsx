import React from 'react';
import services from '../assets/services.jpg';

const treatmentList: string[] = [
  'Shirodhara',
  'Udvarthanam',
  'Greeva Vasti',
  'Kati Vasti',
  'Janu Vasti',
  'Illai Kizhi',
  'Podi Kizhi',
  'Navara Kizhi',
  'Pichu',
  'Nasyam',
  'Tarpanam',
  'Dhanyamla Dhara',
  'Mukha Abhyangam',
  'Pada Abhyangam',
];


const HolisticCare: React.FC = () => {
  return (
    // Outer container with the light background color and padding
    <div className="bg-[#fffaf3] py-20 px-4 sm:px-6 lg:px-8">
      {/* Centering container for content and max-width */}
      <div className="max-w-6xl mx-auto">

        {/* Heading centered over the content area */}
        <h2 className="text-4xl text-[#6E684A] font-bold mb-12 text-center md:text-5xl">
          Holistic Care
        </h2>

        {/* Main Content Grid: List on Left, Images on Right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 items-start">

          {/* --- 1. Treatment List (Left Side) --- */}
          <div className="md:pr-12 md:pt-4">
            <ul className="list-disc pl-5">
              {treatmentList.map((treatment, index) => (
                <li 
                  key={index} 
                  className="text-xl leading-relaxed text-[#B85C2E] font-serif mb-2 marker:text-amber-800"
                >
                  {treatment}
                </li>
              ))}
            </ul>
          </div>

          {/* --- 2. Image Collage (Right Side) --- */}
          <div className="max-w-lg mx-auto md:max-w-none md:mx-0">
            <img
                  src={services}
                  alt={`Ayurvedic treatment image`}
                  className="w-full h-full object-cover aspect-square"
                />
          </div>

        </div>
      </div>
    </div>
  );
};

export default HolisticCare;