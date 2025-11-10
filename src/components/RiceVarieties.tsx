import React from 'react';

// --- IMPORT YOUR ACTUAL IMAGES HERE ---
// Assuming you have individual image files for each item
import amRiceImg from '../assets/amrice.jpg';
import poongarRiceImg from '../assets/poongarrice.jpg';
import kuruvaiRiceImg from '../assets/kuravairice.jpg';
import rockSaltImg from '../assets/rices.jpg';
import nattusarkarai from '../assets/nattusarakarai.jpeg';
import karuppukavunirice from '../assets/karuppukavunirice.jpeg';
import karunkauruvai from '../assets/karunkauruvai.jpeg';
import manisamba from '../assets/manisamba.jpeg';
import rakthas from '../assets/rakthas.jpeg';
import Poongar from '../assets/Poongar.jpeg';
import kullakar from '../assets/kullakar.jpeg';
import mappilla from '../assets/mappilla.jpeg';

// Define the type for a single item (rice or salt)
interface VarietyItem {
  id: number;
  name: string;
  imageSrc: string; // Changed from imagePlaceholder to imageSrc for actual image paths
}

const RiceVarieties: React.FC = () => {
  // Data for the visible and partially visible items in the image
  const items: VarietyItem[] = [
    { id: 1, name: 'Kuttuyanam rice', imageSrc: amRiceImg },
    { id: 2, name: 'Rock salt', imageSrc: poongarRiceImg },
    { id: 3, name: '60 kuruvai rice', imageSrc: kuruvaiRiceImg },
    { id: 4, name: 'Mysoremalli rice', imageSrc: rockSaltImg },
    { id: 5, name: 'Nattu sarkarai', imageSrc: nattusarkarai },
    { id: 6, name: 'Karuppu kavuni rice', imageSrc: karuppukavunirice },
    { id: 7, name: 'Karunkuruvai rice', imageSrc: karunkauruvai },
    { id: 8, name: 'Manisamba rice', imageSrc: manisamba },
    { id: 9, name: 'Rakthashali rice', imageSrc: rakthas },
    { id: 10, name: 'Kullakar rice', imageSrc: kullakar },
    { id: 11, name: 'Poongar rice', imageSrc: Poongar },
    { id: 12, name: 'Mappillasamba rice', imageSrc: mappilla },
  ];

  return (
    // Outer container with the light background color and padding
    <div className="bg-[#fffaf3] py-16 px-4 sm:px-6 lg:px-8">
      {/* Centering container for header text */}
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-[#6E684A] mb-4 md:text-5xl">
          Rice Varities
        </h2>

        <p className="text-xl leading-relaxed mb-12 text-[#B85C2E] font-serif max-w-2xl mx-auto">
         Rooted in tradition, grown in purity-our parambariya rice from our own arogya_farms_9
Our vision is simple-to bring pure, traditional grains to your plate and health to your life.
        </p>

        {/* Subtitle/Quote */}
        <p className="text-xl leading-relaxed mb-12 text-[#524E37] font-serif max-w-2xl mx-auto">
           ‘One who has a good kitchen always leads a healthy life.’
        </p>
      </div>

      {/* --- Horizontal Scrolling Container --- */}
      <div className="max-w-full mx-auto overflow-x-auto hide-scrollbar">
        <div className="flex justify-start space-x-10 pb-4 min-w-max md:justify-center md:space-x-16">
          {items.map((item) => (
            <div key={item.id} className="flex flex-col items-center w-40 flex-shrink-0">
              {/* Circular Image Container */}
              <div className="w-40 h-40 rounded-full overflow-hidden bg-white shadow-md flex items-center justify-center mb-4 border-2 border-transparent hover:border-[#B85C2E] transition duration-300">
                {/* --- ACTUAL IMAGE TAG HERE --- */}
                <img
                  src={item.imageSrc} // Use the actual imported image source
                  alt={item.name}
                  className="w-full h-full object-cover" // Ensure it covers the circle without distortion
                />
              </div>

              {/* Item Name */}
              <p className="text-lg font-semibold text-[#B85C2E] font-serif text-center">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* ------------------------------------- */}
    </div>
  );
};

export default RiceVarieties;