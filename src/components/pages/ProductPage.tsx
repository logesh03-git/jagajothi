// ProductGridSection.tsx

import React from 'react';
import ProductCard from '../ProductCard';
import icium from "../../assets/calcium.png";
import power from "../../assets/tailam.png";
import omega from "../../assets/omega.png";
import multi from "../../assets/multivitamin.png";
import amrutha from "../../assets/amrutha.png";
import powerliquid from "../../assets/powerliquid.png";

// --- Data Typing and Structure ---
interface Product {
  id: number;
  image: string;
  name: string;
  price: number;
  rating: number;
}

// --- Product Data Array ---
// NOTE: Replace these image paths with your actual imported image assets.
// Example: import PowerLiquidImg from './assets/products/power_liquid.jpg';
const productsData: Product[] = [
  { 
    id: 1, 
    image: powerliquid,
    name: 'Power Liquid', 
    rating: 4.8, 
    price: 240, 
  },
  { 
    id: 2, 
    image: amrutha,
    name: 'Amrutha Jeevani', 
    rating: 4.4, 
    price: 270, 
  },
  { 
    id: 3, 
    image: icium, // Using the imported variable
    name: 'Calcium Plus', 
    rating: 4.7, 
    price: 600, 
  },
  { 
    id: 4, 
    image: power, // Using the imported variable
    name: 'Power Tailam', 
    rating: 4.4, 
    price: 75, 
  },
  { 
    id: 5, 
    image: omega, // Using the imported variable
    name: 'Omega 369 capsule', 
    rating: 4.8, 
    price: 700, 
  },
  { 
    id: 6, 
    image: multi, 
    name: 'Multi Vitamin Tablet', 
    rating: 4.4, 
    price: 699, 
  },
];

// --- Main Product Grid Section Component ---
const ProductPage: React.FC = () => {
  const sectionBg = '#fffaf3'; // Background color for the entire section

  return (
    <section 
      style={{ backgroundColor: sectionBg }}
      className="py-12 sm:py-16 lg:py-20"
      aria-labelledby="products-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Optional: Add a title for the product section if desired */}
        {/* <h2 id="products-heading" className="text-3xl font-semibold text-gray-800 text-center mb-8">Our Products</h2> */}
        
        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 xl:gap-8">
          {productsData.map(product => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductPage;