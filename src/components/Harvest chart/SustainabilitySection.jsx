import React from 'react';
import { Leaf, Handshake, Globe, Recycle } from 'lucide-react';

const SustainabilitySection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-tr from-green-50 via-white to-lime-100 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-4 animate-fade-up">
          🌿 Sustainability & Ethical Harvesting
        </h2>
        <p className="text-gray-700 text-lg max-w-3xl mx-auto mb-12 animate-fade-up delay-200">
          At Vaigai Spices, we believe flavorful food shouldn’t come at the planet’s expense.
          We work with nature — not against it — to deliver pure, ethical, and eco-conscious spices.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-left animate-fade-up delay-300">
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-2xl shadow-xl border border-green-100 hover:shadow-2xl transition-all duration-300">
            <Leaf className="w-10 h-10 text-green-600 mb-4" />
            <h3 className="text-xl font-semibold text-green-800 mb-2">Eco-Friendly Farming</h3>
            <p className="text-gray-600 text-sm">
              We support chemical-free, sustainable agriculture that protects soil and biodiversity.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded-2xl shadow-xl border border-green-100 hover:shadow-2xl transition-all duration-300">
            <Handshake className="w-10 h-10 text-green-600 mb-4" />
            <h3 className="text-xl font-semibold text-green-800 mb-2">Fair Trade Practices</h3>
            <p className="text-gray-600 text-sm">
              Our farmers earn fair wages and operate under transparent agreements that uplift communities.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 rounded-2xl shadow-xl border border-green-100 hover:shadow-2xl transition-all duration-300">
            <Globe className="w-10 h-10 text-green-600 mb-4" />
            <h3 className="text-xl font-semibold text-green-800 mb-2">Local Empowerment</h3>
            <p className="text-gray-600 text-sm">
              We invest in local farming families and cooperatives to build long-term resilience and growth.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-6 rounded-2xl shadow-xl border border-green-100 hover:shadow-2xl transition-all duration-300">
            <Recycle className="w-10 h-10 text-green-600 mb-4" />
            <h3 className="text-xl font-semibold text-green-800 mb-2">Minimal Waste</h3>
            <p className="text-gray-600 text-sm">
              Our processing units follow eco-conscious practices with recyclable packaging and efficient waste handling.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SustainabilitySection;
