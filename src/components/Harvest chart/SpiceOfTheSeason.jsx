import React from "react";
import spiceImg from "../../assets/images/turmericpowder.jpg"; // Replace with current seasonal spice image
import { Flame, Sparkles } from "lucide-react";

const SpiceOfTheSeason = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-yellow-50 to-white overflow-hidden">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Image with style */}
        <div className="relative animate-fade-up">
          <img
            src={spiceImg}
            alt="Turmeric"
            className="rounded-3xl shadow-2xl border-4 border-yellow-200 object-cover w-full h-full"
          />
          <div className="absolute top-4 left-4 bg-yellow-100 text-yellow-800 px-3 py-1 text-sm rounded-full shadow">
            In Season
          </div>
        </div>

        {/* Content */}
        <div className="animate-fade-up delay-200">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-900 mb-4 flex flex-wrap items-center gap-2">
            <Sparkles className="w-6 h-6 text-yellow-600" />
            <span>Spice of the Season:</span>
            <span className="text-orange-500">Turmeric</span>
          </h2>

          <p className="text-gray-700 text-lg mb-6">
            Known as “golden spice,” turmeric is rich in curcumin, prized for
            its anti-inflammatory and antioxidant properties. Perfect for
            curries, wellness drinks, and golden milk.
          </p>

          <div className="bg-yellow-100 p-4 rounded-xl text-yellow-900 shadow-md">
            <h3 className="text-xl font-semibold flex items-center gap-2 mb-2">
              <Flame className="w-5 h-5" /> Quick Recipe Idea:
            </h3>
            <p className="text-sm">
              Make a warming <strong>Turmeric Latte</strong> with milk, honey, a
              pinch of black pepper, and a teaspoon of turmeric. Stir, simmer,
              and enjoy!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpiceOfTheSeason;
