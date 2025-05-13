import React from 'react';
import { ShieldCheck, TestTube2, Microscope, FlaskConical } from 'lucide-react';

const qualityChecks = [
  {
    icon: <ShieldCheck className="w-8 h-8 text-green-700" />,
    title: 'Rigorous Safety Standards',
    description:
      'Each spice batch is tested under strict hygiene protocols to ensure it meets global food safety certifications.',
  },
  {
    icon: <Microscope className="w-8 h-8 text-green-700" />,
    title: 'Microbiological Testing',
    description:
      'We run advanced microbiological checks to detect and eliminate pathogens, ensuring food safety.',
  },
  {
    icon: <TestTube2 className="w-8 h-8 text-green-700" />,
    title: 'Chemical Residue Check',
    description:
      'Every batch is screened for pesticide residues and harmful chemicals, keeping your health our top priority.',
  },
  {
    icon: <FlaskConical className="w-8 h-8 text-green-700" />,
    title: 'Moisture & Purity Analysis',
    description:
      'Precision tools measure spice moisture and purity levels to ensure the freshness and potency of flavors.',
  },
];

const QualityControlSection = () => {
  return (
    <section className="bg-[#F8FFF2] py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-green-900 mb-6 animate-fade-up">
          Quality Control & Testing
        </h2>
        <p className="text-gray-700 text-lg max-w-3xl mx-auto mb-12 animate-fade-up">
          Our commitment to quality goes beyond words — it’s rooted in our every action. From source to pack, our spices undergo rigorous, science-backed testing to ensure they’re safe, pure, and flavorful.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 animate-fade-up">
          {qualityChecks.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-green-100 rounded-xl p-6 shadow-md hover:shadow-green-300 transition duration-300 flex flex-col items-center text-center"
            >
              <div className="mb-4">{item.icon}</div>
              <h4 className="text-xl font-semibold text-green-800 mb-2">{item.title}</h4>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QualityControlSection;
