import React from 'react';
import ProductFeatures from '../ProductFeatures';
import Products from '../Products';
import ContactUsSection from '../ContactUsSection';
import TestimonialsSection from '../TestimonialsSection';
import Hero from '../Hero';
import JagajothiVision from '../JagajothiVision';
import OurHealingVision from '../OurHealingVision';
import RiceVarieties from '../RiceVarieties';
import VarmaForWellness from '../VarmaForWellness';
import HolisticCare from '../HolisticCare';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton: React.FC = () => {
    return (
        // The container uses fixed positioning to float on the screen
        // bottom-10 and right-10 position it clearly on the bottom-right
        <div className="fixed bottom-10 right-10 z-50">
            <a
                href="https://wa.me/message/AU5H4A3B73VHH1"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with us on WhatsApp"
                // Styling the button to look prominent and friendly
                className="
                    bg-green-500 text-white 
                    p-4 rounded-full shadow-lg 
                    transition-transform duration-300 hover:scale-110 
                    flex items-center justify-center
                "
            >
                {/* Using the inline SVG component */}
                <FaWhatsapp size={24} />
            </a>
        </div>
    );
};

// NOTE: I am assuming 'Hero' and 'HeroPage' are distinct components. 
// If they are the same, you can remove one import.

const Home: React.FC = () => {
  return (
    // Consolidate all static landing page sections here
    <div className="min-h-screen w-full relative">
      <Hero />
      <JagajothiVision />
      <OurHealingVision />
      <Products />
      <ProductFeatures />
      <RiceVarieties />
      <VarmaForWellness />
      <HolisticCare />
      <ContactUsSection />
      <TestimonialsSection />

      {/* Floating WhatsApp Button */}
        <WhatsAppButton />
    </div>
  );
};

export default Home;
