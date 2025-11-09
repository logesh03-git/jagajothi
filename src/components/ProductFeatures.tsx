import React from 'react';

import Hand from "../assets/handIcon.png"; 
import Tick from "../assets/tick.png"; 
import Discount from "../assets/discount.png"; 
import Approved from "../assets/approved.png"; 

// 2. Define the data structure for type safety (TypeScript)
interface Feature {
  id: number;
  iconSrc: string; // The path to the image file
  label: string;
  altText: string;
}

// 3. Define the data array
const features: Feature[] = [
  { id: 1, iconSrc: Hand, label: '100% Genuine products', altText: 'Handshake icon' },
  { id: 2, iconSrc: Tick, label: 'Maximum Quality assured', altText: 'Checkmark icon' },
  { id: 3, iconSrc: Discount, label: 'Honest discount', altText: 'Hand holding coin icon' },
  { id: 4, iconSrc: Approved, label: 'Approved Products', altText: 'Open book with stars icon' },
];
// 3. The main React component
const ProductFeatures: React.FC = () => {
  // Styles for the container using the provided background color
 const containerBg = '#EBE9E0';

  return (
    // Outer container with the custom background color and strong vertical padding
    <section 
      style={{ backgroundColor: containerBg }}
      className="py-6 sm:py-8"
      aria-label="Product Guarantees and Features"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Main Flex Container for the four items */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 sm:gap-4">
          
          {features.map((feature) => (
            // Feature Item Component
            <FeatureItem 
              key={feature.id} 
              iconSrc={feature.iconSrc} 
              label={feature.label} 
              altText={feature.altText} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// 4. Component for a single feature item (reusability and clean structure)
interface FeatureItemProps {
  iconSrc: string;
  label: string;
  altText: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ iconSrc, label, altText }) => {
  return (
    <div className="flex flex-col items-center text-center w-full sm:w-1/4 p-2">
      
      {/* Icon Container - using <img> tag */}
      <div className="mb-3">
        <img 
          src={iconSrc} 
          alt={altText} // Important for accessibility
          // Tailwind classes for size
          className="w-10 h-10 sm:w-12 sm:h-12 object-contain" 
          aria-hidden="true" // Text label provides the context, so the image can be hidden from screen readers
        />
      </div>

      {/* Label Text */}
      <p className="text-sm font-medium text-gray-800 tracking-tight">
        {label}
      </p>
      
    </div>
  );
};

export default ProductFeatures;