import React from 'react';
import { Box, Eye, PackageCheck, Truck } from 'lucide-react';

const steps = [
  {
    icon: <Box className="w-8 h-8 text-green-700" />,
    title: 'Eco-Friendly Packaging',
    description: 'We use sustainable and food-safe packaging materials to preserve freshness and protect the environment.',
  },
  {
    icon: <Eye className="w-8 h-8 text-green-700" />,
    title: 'Visual Inspection',
    description: 'Each packet is manually and digitally inspected to remove inconsistencies or packaging defects.',
  },
  {
    icon: <PackageCheck className="w-8 h-8 text-green-700" />,
    title: 'Seal of Freshness',
    description: 'A quality seal is applied to every pouch to lock in aroma, flavor, and purity until it reaches your kitchen.',
  },
  {
    icon: <Truck className="w-8 h-8 text-green-700" />,
    title: 'Ready for Dispatch',
    description: 'Final products are stored in temperature-controlled environments and packed for safe delivery.',
  },
];

const PackagingInspectionSection = () => {
  return (
    <section className="bg-gradient-to-br from-green-50 via-white to-green-100 py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-green-900 mb-6 animate-fade-up">
          Packaging & Final Inspection
        </h2>
        <p className="text-gray-700 text-lg max-w-3xl mx-auto mb-12 animate-fade-up">
          Before it reaches your hands, every product undergoes a final layer of protection. From eco-safe packaging to detailed inspections, we ensure your spices arrive in perfect condition — every time.
        </p>

        <div className="relative grid md:grid-cols-2 gap-10 animate-fade-up">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="flex items-start gap-4 bg-white border border-green-100 rounded-xl p-6 shadow-md hover:shadow-green-300 transition duration-300 text-left"
            >
              <div className="shrink-0">{step.icon}</div>
              <div>
                <h4 className="text-xl font-semibold text-green-800 mb-1">{step.title}</h4>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackagingInspectionSection;
