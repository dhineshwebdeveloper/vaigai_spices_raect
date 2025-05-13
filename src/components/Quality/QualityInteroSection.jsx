import React from 'react';
import qualityBg from '../../assets/images/qualityBg.jpg'; // Replace with your actual image

const QualityIntroSection = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-40 px-4"
      style={{ backgroundImage: `url(${qualityBg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-75"></div>

      <div className="relative z-10 max-w-5xl mx-auto text-center text-white animate-fade-up">
        <h2 className="text-4xl sm:text-5xl font-bold mb-6 tracking-wide">
          Our Commitment to Quality
        </h2>
        <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
          At <span className="text-green-300 font-semibold">Vaigai Spices</span>, we believe that true flavor starts with trust.
          From farm to kitchen, our mission is to maintain the highest standards of purity, safety, and taste.
          Every step we take is a reflection of our promise to deliver excellence in every pinch.
        </p>
      </div>
    </section>
  );
};

export default QualityIntroSection;
