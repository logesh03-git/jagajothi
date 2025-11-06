import React from 'react';
import ProductFeatures from '../ProductFeatures';
import Products from '../Products';
import ContactUsSection from '../ContactUsSection';
import TestimonialsSection from '../TestimonialsSection';
import Hero from '../Hero';

// NOTE: I am assuming 'Hero' and 'HeroPage' are distinct components. 
// If they are the same, you can remove one import.

const Home: React.FC = () => {
  return (
    // Consolidate all static landing page sections here
    <div className="min-h-screen w-full">
      <Hero />
      <Products />
      <ProductFeatures />
      <ContactUsSection />
      <TestimonialsSection />
      {/* If Hero is another main section, include it here: <Hero /> */}
    </div>
  );
};

export default Home;
