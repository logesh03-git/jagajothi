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


const WhatsAppIcon = ({ size = 32 }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="currentColor"
    >
        <path d="M12.031 3.178c-4.887 0-8.87 3.982-8.87 8.87 0 1.57.41 3.06 1.18 4.385l-1.25 4.58c-.14.51.37.99.87.82l4.8-.97c1.23.68 2.62 1.05 4.07 1.05 4.88 0 8.87-3.98 8.87-8.87 0-4.88-3.98-8.87-8.87-8.87zm3.17 12.87c-.07.13-.2.24-.37.26-.2.03-.43-.05-.67-.18-.24-.13-1.47-.6-1.7-.68-.23-.08-.4-.14-.57.14-.17.28-.65.68-.8.8-.16.12-.33.18-.62.06-.3-.14-1.25-.46-2.38-1.55-.88-.85-1.47-1.92-1.64-2.2-.17-.28-.01-.43.12-.56.12-.13.27-.29.38-.43.12-.14.16-.25.24-.43.08-.18.04-.33-.02-.45-.06-.12-.34-.82-.47-1.07-.12-.25-.24-.45-.29-.53-.06-.08-.15-.1-.23-.1-.08 0-.17.03-.27.16-.1.12-.38.37-.58.55-.2.18-.42.33-.53.48-.1.15-.22.3-.1.52.12.22.69 1.06 1.49 1.83.8.77 1.77 1.34 1.85 1.37.08.03.22.04.41-.09.19-.13.79-.32.96-.4.18-.08.3-.12.52.02.22.14 1.39.9 1.63 1.03.24.12.4.18.57.17.16 0 .33-.06.49-.18.16-.12.26-.35.15-.55 0-.01-.1-.13-.15-.22l-.1-.18z"/>
    </svg>
);


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
