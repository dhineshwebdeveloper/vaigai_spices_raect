import React from 'react';
import { Leaf, Handshake, Ban, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: <Leaf className="w-10 h-10 text-green-600" />,
    title: '100% Natural',
    description: 'Pure, unadulterated spices directly from nature, without synthetic enhancers.',
  },
  {
    icon: <Handshake className="w-10 h-10 text-green-600" />,
    title: 'Sourced from Farmers',
    description: 'Partnering with local farmers to ensure ethical and fresh sourcing.',
  },
  {
    icon: <Ban className="w-10 h-10 text-green-600" />,
    title: 'No Additives or Colors',
    description: 'Free from artificial colors, preservatives, or harmful chemicals.',
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-green-600" />,
    title: 'International Quality Standards',
    description: 'Every batch is tested and certified for top-tier global quality.',
  },
];

const WhyChooseUs = () => {
  return (
    <section className=" py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-extrabold text-green-900 mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Why Choose Us
        </motion.h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 border border-green-100 hover:shadow-lg transition duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-green-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
