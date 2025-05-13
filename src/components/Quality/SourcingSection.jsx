import React from 'react';
import sourcingImage from '../../assets/images/sourcingImage.jpg'; // Replace with your actual image

const SourcingSection = () => {
  return (
    <section className="py-20 px-4 bg-[#F8FFF4]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Image */}
        <div className="relative animate-fade-left">
          <img
            src={sourcingImage}
            alt="Sourcing of Raw Materials"
            className="rounded-3xl shadow-lg border border-green-200 overflow-x-hidden"
          />
         
        </div>

        {/* Text */}
        <div className="animate-fade-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-green-800 mb-6">
            Sourcing of Raw Materials
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            At <span className="text-green-600 font-medium">Vaigai Spices</span>, our sourcing process begins with a deep connection to nature and the farmers who nurture it. We partner directly with trusted growers who share our vision for quality and sustainability.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Each spice is handpicked at peak freshness, ensuring rich aroma and bold flavor. We conduct thorough inspections and quality checks at every step — from harvest to transport — to preserve the natural essence of our ingredients.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SourcingSection;
