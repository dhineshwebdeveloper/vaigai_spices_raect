import React from 'react';
import { FaLeaf, FaStar, FaHandsHelping, FaBoxes, FaSeedling, FaUserShield } from 'react-icons/fa';

const features = [
  {
    icon: <FaLeaf className="text-green-600 text-4xl mb-4" />,
    title: "Fresh & Natural",
    description: "We offer spices that are freshly sourced and 100% natural, with no additives or preservatives.",
  },
  {
    icon: <FaStar className="text-yellow-500 text-4xl mb-4" />,
    title: "Premium Quality",
    description: "Every spice is handpicked, cleaned, and processed with strict quality control for purity and flavor.",
  },
  {
    icon: <FaHandsHelping className="text-blue-500 text-4xl mb-4" />,
    title: "Customer-Centric",
    description: "We prioritize our customers’ needs and ensure timely delivery, support, and satisfaction.",
  },
  {
    icon: <FaBoxes className="text-purple-500 text-4xl mb-4" />,
    title: "Custom Packaging",
    description: "Our in-house design and packaging service lets you choose branding and quantity that fits your business.",
  },
  {
    icon: <FaSeedling className="text-green-500 text-4xl mb-4" />,
    title: "Sustainable Sourcing",
    description: "We work with local farmers using eco-friendly farming practices to support sustainability.",
  },
  {
    icon: <FaUserShield className="text-red-500 text-4xl mb-4" />,
    title: "Trust & Transparency",
    description: "From sourcing to delivery, we ensure full traceability, accountability, and honesty in everything we do.",
  },
];

const WhatMakesUsDifferent = () => {
  return (
    <section className="py-20 px-4 bg-[#F9FFF5]">
      <div className="max-w-6xl mx-auto text-center animate-fade-up">
        <h2 className="text-3xl sm:text-4xl font-bold text-green-800 mb-4">
          What Makes Us Different
        </h2>
        <p className="text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
          Discover the reasons why Vaigai Spices stands out from the rest in the spice industry.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white border border-green-100 p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-1 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'both' }}
            >
              {feature.icon}
              <h4 className="text-xl font-semibold text-green-800 mb-2 ">{feature.title}</h4>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatMakesUsDifferent;
