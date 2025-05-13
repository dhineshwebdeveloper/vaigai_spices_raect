import React from 'react';
import { HeartHandshake, Leaf, Star } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const WhyQualityMattersSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-green-50 via-white to-green-100 overflow-hidden py-20 px-4">
      {/* Decorative background blur */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-green-200 rounded-full opacity-30 blur-3xl animate-pulse -z-10" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-green-300 rounded-full opacity-20 blur-2xl animate-pulse delay-200 -z-10" />

      <div className="max-w-4xl mx-auto text-center backdrop-blur-lg bg-white/70 border border-green-100 p-10 rounded-3xl shadow-xl animate-fade-up">
        <h2 className="text-3xl sm:text-4xl font-bold text-green-900 mb-4">
          Why Quality Matters
        </h2>
        <p className="text-gray-700 text-lg sm:text-xl mb-6">
          Quality is more than a standard — it's a promise. It's the difference between average and unforgettable, between trust and doubt. At <span className="text-green-800 font-semibold">Vaigai Spices</span>, we believe quality isn't just what we deliver, it's what defines us.
        </p>

        <div className="grid sm:grid-cols-3 gap-6 text-left text-green-900 mt-8">
          <div className="flex flex-col items-center text-center">
            <HeartHandshake className="w-10 h-10 mb-2 text-green-700" />
            <h4 className="text-lg font-semibold">Trust Built Daily</h4>
            <p className="text-sm text-gray-600 mt-1">Our spices reflect our integrity in every pinch.</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <Leaf className="w-10 h-10 mb-2 text-green-700" />
            <h4 className="text-lg font-semibold">Pure & Natural</h4>
            <p className="text-sm text-gray-600 mt-1">No shortcuts. Just authentic, chemical-free flavor.</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <Star className="w-10 h-10 mb-2 text-green-700" />
            <h4 className="text-lg font-semibold">Unmatched Experience</h4>
            <p className="text-sm text-gray-600 mt-1">From field to fork, we obsess over quality control.</p>
          </div>
        </div>
<NavLink to="/OurProducts">
        <button className="mt-10 bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-full shadow-md transition duration-300">
          Experience the Vaigai Quality
        </button>
</NavLink>
      </div>
    </section>
  );
};

export default WhyQualityMattersSection;
