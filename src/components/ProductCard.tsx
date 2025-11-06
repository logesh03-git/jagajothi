// ProductCard.tsx

import React from 'react';
import { Star } from 'lucide-react'; // For the star icon

// --- Props Typing ---
interface ProductCardProps {
  id: number;
  image: string; // Path to the product image
  name: string;
  price: number; // Assuming price in rupees
  rating: number;
}

const ProductCard: React.FC<ProductCardProps> = ({id, image, name, price, rating }) => {
  // Color derived from the gold star in the image
  const starColor = '#FFC107'; 

  return (
    <a href={`/purchase/${id}`} className="block bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden group">
      {/* Product Image */}
      <div className="w-full h-48 sm:h-56 overflow-hidden rounded-t-lg">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200" 
        />
      </div>

      <div className="p-4">
        {/* Product Name */}
        <h3 className="text-lg font-semibold text-gray-800 mb-2 truncate">
          {name}
        </h3>

        {/* Price and Rating */}
        <div className="flex items-center justify-between">
          <p className="text-gray-700 text-lg font-medium">
            {price} ₹
          </p>
          <div className="flex items-center text-gray-600">
            <Star style={{ color: starColor }} className="w-4 h-4 fill-current mr-1" aria-hidden="true" />
            <span>{rating.toFixed(1)}</span>
          </div>
        </div>
      </div>
    </a>
  );
};

export default ProductCard;