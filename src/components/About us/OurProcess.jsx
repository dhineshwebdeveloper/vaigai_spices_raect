import React from 'react';
import { FaSeedling, FaTruckLoading, FaBalanceScale, FaBoxOpen, FaStore } from 'react-icons/fa';

const steps = [
  {
    icon: <FaSeedling className="text-green-600 text-3xl" />,
    title: 'Sourcing',
    description: 'We begin with sourcing premium raw spices directly from trusted farmers and suppliers.',
  },
  {
    icon: <FaBalanceScale className="text-yellow-600 text-3xl" />,
    title: 'Quality Check',
    description: 'Each batch undergoes strict quality testing to ensure purity, aroma, and freshness.',
  },
  {
    icon: <FaTruckLoading className="text-orange-600 text-3xl" />,
    title: 'Processing',
    description: 'Spices are cleaned, dried, and ground using hygienic and modern techniques.',
  },
  {
    icon: <FaBoxOpen className="text-blue-600 text-3xl" />,
    title: 'Packaging',
    description: 'We use eco-friendly and food-grade packaging for freshness and safety.',
  },
  {
    icon: <FaStore className="text-purple-600 text-3xl" />,
    title: 'Delivery',
    description: 'Our products are delivered promptly to retailers, wholesalers, and global partners.',
  },
];

const OurProcess = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-[#F4FFF0]">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-green-800 mb-6 animate-fade-up">
          Our Process
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-14 animate-fade-up">
          From seed to shelf, we ensure every step in our process is handled with care, expertise, and precision to deliver only the best spices to you.
        </p>

        <div className="grid md:grid-cols-5 sm:grid-cols-2 gap-10 animate-fade-up">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 border border-green-100 shadow-lg hover:-translate-y-2 transition duration-300 group"
            >
              <div className="flex items-center justify-center mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold text-green-800 mb-2">{step.title}</h3>
              <p className="text-gray-700 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
