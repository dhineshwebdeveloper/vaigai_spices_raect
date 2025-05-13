import React from 'react';
import { FaEye, FaBullseye } from 'react-icons/fa';

const VisionMission = () => {
  return (
    <section className="py-20 px-4 ">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-green-800 mb-6 animate-fade-up">
          Our Vision & Mission
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-12 animate-fade-up">
          At Vaigai Spices, we strive to craft a flavorful future by upholding our core principles through a clear vision and powerful mission.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Vision Card */}
          <div className="bg-white rounded-xl shadow-lg border border-green-100 p-8 text-left transform hover:-translate-y-1 transition duration-300 animate-fade-up">
            <div className="flex items-center mb-4">
              <FaEye className="text-green-600 text-3xl mr-3" />
              <h3 className="text-2xl font-semibold text-green-800">Our Vision</h3>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              To become a globally admired brand recognized for delivering pure, flavorful, and ethically sourced Indian spices that elevate every kitchen and inspire culinary creativity worldwide.
            </p>
          </div>

          {/* Mission Card */}
          <div className="bg-white rounded-xl shadow-lg border border-green-100 p-8 text-left transform hover:-translate-y-1 transition duration-300 animate-fade-up">
            <div className="flex items-center mb-4">
              <FaBullseye className="text-red-500 text-3xl mr-3" />
              <h3 className="text-2xl font-semibold text-green-800">Our Mission</h3>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              To deliver premium quality spices by blending tradition with technology, support sustainable farming, and consistently exceed customer expectations through innovation, transparency, and care.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
