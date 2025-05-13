import React from 'react';
import { Sparkles } from 'lucide-react';
import heroBg from '../../assets/images/produecthero.jpg'; // Replace with your actual image

const ProductHeroSection = () => {
  return (
    <section
      className="relative h-[90vh] flex items-center justify-center bg-center bg-cover"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 to-black/40 backdrop-blur-sm"></div>

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-3xl mx-auto animate-fade-up">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white flex justify-center items-center gap-2">
          <Sparkles className="text-yellow-400 w-8 h-8" />
          Discover the True Essence of <span className="text-yellow-400">Indian Spices</span>
        </h1>
        <p className="text-lg sm:text-xl mt-6 text-gray-200 font-light leading-relaxed">
          Explore our collection of premium spices, handpicked and crafted to bring authentic flavor to your dishes.
        </p>
      </div>
    </section>
  );
};

export default ProductHeroSection;
