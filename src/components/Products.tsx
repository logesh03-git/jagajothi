import React from "react";
import { Star } from "lucide-react";
import icium from "../assets/calcium.png";
import power from "../assets/tailam.png";
import omega from "../assets/omega.png";
import multi from "../assets/multivitamin.png";
import { useNavigate } from "react-router-dom";

const products = [
  {
    id: 3,
    name: "Calcium Plus",
    price: "600 ₹",
    rating: 4.7,
    image: icium,
  },
  {
    id: 4,
    name: "Power Tailam",
    price: "75 ₹",
    rating: 4.4,
    image: power,
  },
  {
    id: 5,
    name: "Omega 369 capsule",
    price: "700 ₹",
    rating: 4.8,
    image: omega,
  },
  {
    id: 6,
    name: "Multi vitamin tablet",
    price: "699 ₹",
    rating: 4.4,
    image: multi,
  },
];

const Products: React.FC = () => {
  const navigate = useNavigate();
  return (
    <section className="bg-[#fffaf3] py-16 px-6 md:px-12">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-[#5c4033]">
          Our Products
        </h2>
        <p className="text-[#a67c52] mt-2">
          Explore our carefully curated collection of authentic Ayurvedic
          products
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {products.map((product) => (
          <div
            key={product.id}
            onClick={()=>navigate(`purchase/${product.id}`)}
            className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 pointer overflow-hidden"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <p className="text-lg text-[#524E37] mb-2">
                {product.name}
              </p>
              <div className="flex justify-between items-center text-[#555]">
                <span>{product.price}</span>
                <div className="flex items-center gap-1">
                  <Star size={16} fill="#FFD700" color="#FFD700" />
                  <span>{product.rating}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-end mt-8 max-w-6xl mx-auto">
        <button onClick={()=>navigate("/products-list")} className="flex items-center gap-1 text-[#5c4033] hover:underline font-medium">
          View all →
        </button>
      </div>
    </section>
  );
};

export default Products;