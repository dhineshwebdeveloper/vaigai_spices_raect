import React from 'react';
import storyImg from '../../assets/images/storyimg.png'; // Replace with your actual image

const OurStorySection = () => {
  return (
    <section className="py-20 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-10 animate-fade-up">
        {/* Left Image */}
        <div className="relative">
          <img
            src={storyImg}
            alt="Vaigai Spices Story"
            
            className="rounded-3xl shadow-lg  transform hover:scale-105 transition duration-500"
          />
            
        </div>

        {/* Right Text Content */}
        <div className="bg-white bg-opacity-90 rounded-2xl p-8 shadow-lg border border-green-100">
          <h2 className="text-3xl sm:text-4xl font-bold text-green-900 mb-4">Our Story</h2>
          <p className="text-gray-800 text-lg leading-relaxed">
            Every great journey begins with a spark — and for us, that spark is the love for authentic Indian flavors.
            Though Vaigai Spices is a newly launched venture, our commitment to purity, quality, and customer satisfaction
            stands strong. Our story is just beginning, driven by the ambition to bring households and chefs the finest,
            freshest spices crafted with care and modern techniques.
          </p>
          <p className="mt-4 text-gray-700">
            As we grow, we carry forward a promise: to blend tradition with innovation and offer spice solutions that elevate
            every dish. Join us as we build a brand rooted in flavor, transparency, and trust.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurStorySection;
