import React from 'react';
import { CheckCircle, Globe, Leaf, Shield } from 'lucide-react';

const certifications = [
  {
    icon: <CheckCircle className="w-8 h-8 text-green-700" />,
    title: 'FSSAI Certified',
    description: 'Complies with India’s Food Safety and Standards Authority for safe and quality food manufacturing.',
  },
  {
    icon: <Globe className="w-8 h-8 text-green-700" />,
    title: 'ISO 22000',
    description: 'International standard for food safety management systems — ensures quality from sourcing to packaging.',
  },
  {
    icon: <Leaf className="w-8 h-8 text-green-700" />,
    title: 'Organic Certified',
    description: 'Certified for organic farming practices and non-GMO raw material handling.',
  },
  {
    icon: <Shield className="w-8 h-8 text-green-700" />,
    title: 'HACCP Compliant',
    description: 'Adheres to Hazard Analysis and Critical Control Points to mitigate contamination risks.',
  },
];

const CertificationsStandardsSection = () => {
  return (
    <section className="bg-white py-20 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-green-900 mb-6 animate-fade-up">
          Certifications & Standards
        </h2>
        <p className="text-gray-700 text-lg max-w-3xl mx-auto mb-12 animate-fade-up">
          We take your trust seriously. Our spices are certified to meet international quality, safety, and environmental standards — ensuring you always receive the best.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 animate-fade-up">
          {certifications.map((item, index) => (
            <div
              key={index}
              className="bg-[#F5FFF2] border border-green-100 rounded-xl p-6 shadow-sm hover:shadow-green-200 transition duration-300 text-center"
            >
              <div className="mb-4 flex justify-center">{item.icon}</div>
              <h4 className="text-xl font-semibold text-green-800 mb-2">{item.title}</h4>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsStandardsSection;
