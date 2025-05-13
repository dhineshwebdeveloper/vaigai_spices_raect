import React from "react";

// Replace these with your actual image imports
import img1 from "/images/cumin.png";
import img2 from "/images/sesame.png";
import img3 from "/images/fennel.png";
import img4 from "/images/coriander.png";
import img5 from "/images/groundnuts.png";
import img6 from "/images/fenugreek.png";
import img7 from "/images/flax.png";
import img8 from "/images/dill.png";
import img9 from "/images/psyllium.png";
import img10 from "/images/mustard.png";

const products = [
  { name: "Cumin", img: img1 },
  { name: "Sesame", img: img2 },
  { name: "Fennel", img: img3 },
  { name: "Coriander", img: img4 },
  { name: "Groundnuts", img: img5 },
  { name: "Fenugreek", img: img6 },
  { name: "Flax", img: img7 },
  { name: "Dill", img: img8 },
  { name: "Psyllium", img: img9 },
  { name: "Mustard", img: img10 },
];

const ProductSlider = () => {
  const loopProducts = [...products, ...products, ...products]; // Triple for smoother looping

  return (
    <section className="py-12 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Gradient fade effects */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        
        <div className="relative overflow-hidden">
          <div className="flex animate-infinite-scroll gap-8 md:gap-12">
            {loopProducts.map((item, idx) => (
              <div
                key={`${item.name}-${idx}`}
                className="flex flex-col items-center text-center min-w-[120px] sm:min-w-[140px] md:min-w-[160px] transform transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="relative p-2">
                  <div className="absolute inset-0 bg-green-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <img
                    src={item.img}
                    alt={item.name}
                    className="relative h-20 sm:h-24 md:h-28 object-contain transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <p className="mt-3 text-sm sm:text-base font-medium text-green-800 group-hover:text-green-600 transition-colors duration-300">
                  {item.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-50% - 1rem));
          }
        }
        .animate-infinite-scroll {
          animation: scroll 30s linear infinite;
          width: max-content;
        }
        .animate-infinite-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default ProductSlider;