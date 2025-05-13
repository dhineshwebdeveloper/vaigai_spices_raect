import React from 'react';
import harvestBg from '../../assets/images/harvest-bg.png'; // Add your background image

const HarvestIntro = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat text-white py-40 px-4"
      style={{ backgroundImage: `url(${harvestBg})` }}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

      <div className="relative z-10 max-w-5xl mx-auto text-center animate-fade-up">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight tracking-wide text-green-100 drop-shadow-md">
          Understanding the Harvest Seasons
        </h1>
        <p className="text-lg sm:text-xl text-green-50 max-w-3xl mx-auto leading-relaxed">
          Every spice tells a seasonal story. Knowing when spices are harvested helps ensure you get unmatched freshness,
          vibrant color, and rich aroma straight from the farms to your kitchen.
        </p>
        <div className="mt-10 flex justify-center">
          <span className="inline-block bg-green-600 hover:bg-green-700 transition-colors px-6 py-3 rounded-full text-white text-base font-medium shadow-lg animate-pulse">
            Discover the Harvest Cycle
          </span>
        </div>
      </div>
    </section>
  );
};

export default HarvestIntro;
