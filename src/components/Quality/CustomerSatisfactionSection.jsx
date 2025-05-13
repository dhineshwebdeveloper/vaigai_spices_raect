import React from 'react';
import { Smile, ThumbsUp, ShieldCheck, RefreshCcw } from 'lucide-react';

const promises = [
  {
    icon: <Smile className="w-8 h-8 text-green-700" />,
    title: 'Customer-First Mindset',
    description: 'Your satisfaction is our success. Every decision is made with your happiness in mind.',
  },
  {
    icon: <ThumbsUp className="w-8 h-8 text-green-700" />,
    title: 'Uncompromised Quality',
    description: 'Each spice pack you receive is backed by our quality checks and crafted for excellence.',
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-green-700" />,
    title: 'Safe & Secure',
    description: 'Our packaging ensures hygiene and security, from factory to your kitchen shelf.',
  },
  {
    icon: <RefreshCcw className="w-8 h-8 text-green-700" />,
    title: 'Easy Returns',
    description: 'If you are not satisfied, we make returns or exchanges smooth and transparent.',
  },
];

const CustomerSatisfactionSection = () => {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-green-900 mb-6 animate-fade-up">
          Our Customer Satisfaction Promise
        </h2>
        <p className="text-gray-700 text-lg max-w-3xl mx-auto mb-12 animate-fade-up">
          At Vaigai Spices, our mission doesn’t end at delivering quality spices — it continues with ensuring your experience is exceptional. Here's what we promise to every customer.
        </p>

        <div className="grid md:grid-cols-2 gap-10 animate-fade-up">
          {promises.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-4 bg-green-50 border border-green-100 p-6 rounded-xl shadow hover:shadow-md hover:shadow-green-200 transition duration-300 text-left"
            >
              <div className="shrink-0">{item.icon}</div>
              <div>
                <h4 className="text-xl font-semibold text-green-800 mb-1">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerSatisfactionSection;
