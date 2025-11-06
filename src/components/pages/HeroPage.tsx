// HeroSection.tsx

import React from 'react';

// 1. Import your local image assets
// NOTE: Replace these placeholder paths with the actual paths to your files.
import StoreInteriorImage from '../../assets/store1.png';
import StoreExteriorSignImage from '../../assets/store2.png';
import ProductShelfLowerImage from '../../assets/store3.png';

// 2. Define the main component
const HeroPage: React.FC = () => {
  const sectionBg = '#fffaf3';
  // Text colors derived visually from the images
  const primaryTextColor = '#4A4B46'; // Darker color for headings
  const secondaryTextColor = '#A8795A'; // Brownish color for subtitles and emphasis

  return (
    <section
      style={{ backgroundColor: sectionBg }}
      className="py-12 sm:py-16 lg:py-20"
      aria-labelledby="main-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">

        {/* --- Title Block --- */}
        <h1
          id="main-heading"
          className="text-4xl font-['Poppins'] sm:text-5xl font-semibold font- tracking-tight mb-2"
          style={{ color: primaryTextColor }}
        >
          Jagajothi Ayurvedhas
        </h1>
        <p className="text-lg sm:text-xl font-medium mb-12" style={{ color: secondaryTextColor }}>
          Ayurveda & Varma Vaidhyasalai Where nature heals, tradition guides, and wellness begins
        </p>

        {/* --- Image Gallery Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto mb-16">

          {/* Top Left Image: Interior */}
          <div className="md:row-span-2 overflow-hidden rounded-lg shadow-lg">
            <img
              src={StoreInteriorImage}
              alt="Interior view of the Jagajothi Ayurvedhas store with shelves full of products"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Top Right Image: Exterior Sign */}
          <div className="overflow-hidden rounded-lg shadow-lg">
            <img
              src={StoreExteriorSignImage}
              alt="Exterior sign board of Jagajothi Ayurvedhas with clinic timings and services"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Bottom Right Image: Product Shelf Close-up */}
          <div className="overflow-hidden rounded-lg shadow-lg">
            <img
              src={ProductShelfLowerImage}
              alt="Close-up of product shelves with various ayurvedic medicines and supplements"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* --- Value Proposition Text Block --- */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-['Poppins'] font-semibold tracking-tight mb-6" style={{ color: primaryTextColor }}>
            Healing with nature – Reviving traditions – Nurturing vitality.
          </h2>

          <p className="text-base sm:text-lg mb-6 leading-relaxed" style={{ color: primaryTextColor }}>
            At Jagajothi Ayurvedhas – Ayurveda & Varma Vaidhyasalai, we believe true healing is more than curing symptoms — it is restoring balance to body, mind, and soul. Rooted in the wisdom of Ayurveda and the sacred science of Varma, our treatments are holistic, natural, and personalized to every individual.


          </p>

          <p className="text-base sm:text-lg leading-relaxed" style={{ color: primaryTextColor }}>
            With a blend of traditional knowledge and compassionate care, we guide you towards vitality, inner harmony, and long-lasting wellness. Step into our vaidhyasalai and experience the light of healing through nature’s touch.
          </p>
        </div>

      </div>
    </section>
  );
};

export default HeroPage;