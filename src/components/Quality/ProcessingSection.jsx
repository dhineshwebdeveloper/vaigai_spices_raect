import React from 'react';
import processImg from '../../assets/images/processing.png'; // Replace with your image

const ProcessingSection = () => {
  return (
    <section className="py-20 bg-[#F4FFEF] px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-green-900 text-center mb-4 animate-fade-up">
          Processing & Blending Techniques
        </h2>
        <p className="text-center text-gray-700 max-w-3xl mx-auto text-lg mb-12 animate-fade-up">
          Precision. Purity. Perfection. At Vaigai Spices, our processing and blending methods are a fusion of traditional craftsmanship and modern innovation.
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative animate-fade-left">
            <img
              src={processImg}
              alt="Processing Techniques"
              className="rounded-2xl shadow-xl border border-green-100"
            />
            <div className="absolute top-0 left-0 w-24 h-24 bg-green-200 rounded-full blur-2xl opacity-30 -z-10"></div>
          </div>

          {/* Steps/Process Cards */}
          <div className="space-y-6 animate-fade-right">
            <div className="bg-white shadow-md border border-green-100 rounded-xl p-6 hover:shadow-green-300 transition duration-300">
              <h4 className="text-xl font-semibold text-green-800 mb-2">1. Gentle Cleaning & Sorting</h4>
              <p className="text-gray-700">
                Spices undergo thorough cleaning using air and gravity separation to remove impurities while retaining natural oils and aromas.
              </p>
            </div>
            <div className="bg-white shadow-md border border-green-100 rounded-xl p-6 hover:shadow-green-300 transition duration-300">
              <h4 className="text-xl font-semibold text-green-800 mb-2">2. Precision Grinding</h4>
              <p className="text-gray-700">
                Using low-heat grinders, we preserve the rich essential oils and color of each spice, ensuring freshness in every particle.
              </p>
            </div>
            <div className="bg-white shadow-md border border-green-100 rounded-xl p-6 hover:shadow-green-300 transition duration-300">
              <h4 className="text-xl font-semibold text-green-800 mb-2">3. Unique Blending Recipes</h4>
              <p className="text-gray-700">
                Our expert blenders use proprietary techniques to combine spices into signature blends that honor traditional flavors with consistent quality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessingSection;
