import { useEffect, useState } from 'react';

const features = [
  { icon: "👨‍🍳", text: "Fresh and Hygienically processed products" },
  { icon: "✅", text: "100% Consistency in quality and standards" },
  { icon: "📦", text: "Customizable packing" },
  { icon: "🔍", text: "Careful inspection to ensure quality and taste" },
  { icon: "🏷️", text: "Inhouse private labelling" },
  { icon: "🚚", text: "Ontime shipments with integrated distribution network" },
];

export default function WelcomeSection() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimate(true), 100);
  }, []);

  return (
    <section className={`bg-white text-gray-800 px-6 py-16 transition-all duration-1000 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <div className="max-w-6xl mx-auto text-center">
        {/* Stylized Title */}
        <h2 className="text-4xl sm:text-5xl md:h-18 md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-green-600 via-yellow-500 to-red-500 bg-clip-text text-transparent drop-shadow-md animate-fadeInUp">
          Welcome to Vaigai Spices
        </h2>

        {/* Optional decorative underline */}
        <div className="w-24 h-1 bg-green-500 mx-auto mb-6 rounded-full animate-pulse"></div>

        <p className="mb-10 text-lg sm:text-xl leading-relaxed text-gray-700 max-w-3xl mx-auto animate-fadeInSlow">
          We at Vaigai Spices are proud exporters of premium quality spices, spice blends, and agro products. With a strong commitment to quality and a robust supply chain, we serve the best of nature to the world.
        </p>

        {/* Feature Grid */}
        <h3 className="text-2xl font-semibold mb-6 animate-fadeInUp">What We Offer</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, index) => (
            <div key={index} className="flex items-center gap-4 bg-green-50 p-4 rounded-xl shadow hover:scale-105 transition-transform duration-300">
              <div className="text-3xl">{item.icon}</div>
              <p className="text-base font-medium">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
