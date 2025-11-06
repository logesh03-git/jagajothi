import React from 'react';
// Using lucide-react for placeholder icons like User and Star
import { User, Star } from 'lucide-react';

// --- Data Typing and Structure ---
interface Review {
  id: number;
  name: string;
  rating: number;
  comment: string;
}

const reviewsData: Review[] = [
  { 
    id: 1, 
    name: 'Subashree', 
    rating: 4.9, 
    comment: 'The doctor’s approach and treatment are very helpful to me, thank you.' 
  },
  { 
    id: 2, 
    name: 'Prakash', 
    rating: 4.8, 
    comment: '“Been getting Varma treatment for years; massages are rejuvenating and refreshing.”' 
  },
  { 
    id: 3, 
    name: 'Eswari', 
    rating: 5.0, 
    comment: 'Highly recommend Dr. Divya & Vaithiyar Gandhi – great service & comfort!' 
  },
  { 
    id: 4, 
    name: 'Ragul', 
    rating: 4.7, 
    comment: 'Exceptional service and deep knowledge in traditional treatments. Felt very well cared for.' 
  },
  { 
    id: 5, 
    name: 'Saravanan', 
    rating: 5.0, 
    comment: 'My chronic pain improved significantly after just a few sessions. Highly recommend Jagajothi Ayurvedhas.' 
  },
];

// Duplicate the data to ensure an endless loop animation
const allReviews = [...reviewsData, ...reviewsData, ...reviewsData];


// --- Review Card Component ---
const ReviewCard: React.FC<Review> = ({ name, rating, comment }) => {
  const starColor = '#FFC107'; 
  const textColor = '#555';

  return (
    // Apply styling to make it look like the original design, but now as a flex item
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 flex-shrink-0 w-[calc(100vw-2rem)] sm:w-[350px] lg:w-[400px]">
      {/* Header: User Icon, Name, and Rating */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          {/* User Icon (The light grey circle) */}
          <div className="bg-gray-100 p-2 rounded-full mr-3">
            <User className="w-5 h-5 text-gray-500" aria-hidden="true" />
          </div>
          <p className="font-semibold text-lg text-gray-800">{name}</p>
        </div>

        {/* Rating */}
        <div className="flex items-center">
          <Star style={{ color: starColor }} className="w-5 h-5 fill-current mr-1" aria-hidden="true" />
          <p className="text-gray-700 font-medium text-lg">{rating.toFixed(1)}</p>
        </div>
      </div>

      {/* Comment/Testimonial Text */}
      <p className="text-sm" style={{ color: textColor }}>
        {comment}
      </p>
    </div>
  );
};

// --- Main Testimonials Section Component ---
const TestimonialsSection: React.FC = () => {
  const sectionBg = '#FFFAF3';
  const headerColor = '#4A4B46'; 
  const subtextColor = '#A8795A';

  return (
    // Add custom styles for the infinite scrolling animation
    <section 
      style={{ backgroundColor: sectionBg }}
      className="py-16 sm:py-20 overflow-hidden" // overflow-hidden is key to hide the animation overflow
      aria-labelledby="testimonials-heading"
    >
      <style>
        {/* Define the horizontal scrolling animation */}
        {`
          @keyframes scroll-x {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-50%); /* Scroll exactly one full set of reviews */
            }
          }

          .infinite-scroll-container {
            /* Apply animation. Adjust duration based on review count and desired speed. */
            animation: scroll-x 40s linear infinite; 
          }
          /* Pause animation on hover */
          .infinite-scroll-container:hover {
            animation-play-state: paused;
          }
        `}
      </style>
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Header */}
        <h2 
          id="testimonials-heading" 
          className="text-3xl sm:text-4xl font-semibold tracking-tight mb-2"
          style={{ color: headerColor }}
        >
          What Our Customers Say
        </h2>
        <p className="text-md sm:text-lg mb-12" style={{ color: subtextColor }}>
          Real experiences from our satisfied customers
        </p>
      </div>

      {/* --- Infinite Scrolling Container --- */}
      <div className="w-full relative">
        <div 
          className="infinite-scroll-container flex space-x-6 px-4 sm:px-6 lg:px-8"
          style={{ width: `${(allReviews.length / 2) * 450}px` }} /* Ensure the container is wide enough to hold two full sets of reviews */
        >
          {allReviews.map((review, index) => (
            // Use index as a key here since allReviews is a static list for animation
            <ReviewCard key={index} {...review} />
          ))}
        </div>
      </div>
      
    </section>
  );
};

export default TestimonialsSection;
