import React from 'react';
import { Clock, Leaf, Star } from 'lucide-react'; // using lucide-react icons

const reasons = [
  {
    icon: <Clock className="w-8 h-8 text-green-600" />,
    title: 'Peak Freshness',
    desc: 'Harvesting at the right time ensures spices retain maximum aroma, oils, and nutrients.',
  },
  {
    icon: <Leaf className="w-8 h-8 text-green-600" />,
    title: 'Natural Quality',
    desc: 'Spices harvested in-season grow under ideal climate, making them naturally robust and flavorful.',
  },
  {
    icon: <Star className="w-8 h-8 text-green-600" />,
    title: 'Better Shelf Life',
    desc: 'Well-timed harvests produce spices that are more stable and last longer without additives.',
  },
];

const WhyTimingMatters = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-green-50 to-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-green-900 mb-6 animate-fade-up">
          Why Timing Matters
        </h2>
        <p className="text-lg text-gray-700 mb-12 animate-fade-up delay-200">
          The right harvest season isn’t just about tradition — it directly influences how fresh, flavorful, and long-lasting your spices are.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white border border-green-100 p-6 rounded-2xl shadow-xl hover:shadow-green-100 transform hover:-translate-y-1 transition duration-300 ease-in-out animate-fade-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="mb-4 flex justify-center">{reason.icon}</div>
              <h3 className="text-xl font-semibold text-green-800 mb-2">{reason.title}</h3>
              <p className="text-gray-600">{reason.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyTimingMatters;
