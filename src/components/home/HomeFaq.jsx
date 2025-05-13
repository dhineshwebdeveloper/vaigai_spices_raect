import React, { useState, useEffect } from 'react';

const faqs = [
  {
    question: "What products does Vaigai Spices offer?",
    answer: "We offer a wide range of whole and blended Indian spices, including masalas, powders, and seasonings.",
  },
  {
    question: "Do you offer private labeling services?",
    answer: "Yes, we provide full-service private labeling, including packaging design and printing.",
  },
  {
    question: "Are your spices organic?",
    answer: "We offer both conventional and certified organic spices depending on client requirements.",
  },
  {
    question: "Do you export internationally?",
    answer: "Yes, we export to multiple countries across Asia, Europe, and North America.",
  },
  {
    question: "Can I request custom spice blends?",
    answer: "Absolutely! We specialize in developing customized spice blends for your needs.",
  },
  {
    question: "How long has Vaigai Spices been in business?",
    answer: "We have been blending and exporting spices since 1999 with a strong track record of quality.",
  },
  {
    question: "Do you supply in bulk quantities?",
    answer: "Yes, we handle full container loads as well as mixed spice orders in bulk.",
  },
  {
    question: "What quality standards do you follow?",
    answer: "We follow FSSAI and ISO standards for food safety and quality assurance.",
  },
  {
    question: "Do you offer samples before bulk orders?",
    answer: "Yes, samples are available upon request for quality verification.",
  },
  {
    question: "How can I become a distributor?",
    answer: "You can reach out via our contact page to inquire about distributor partnerships.",
  },
];

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768); // Tailwind md:breakpoint
    };
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const half = Math.ceil(faqs.length / 2);
  const firstCol = faqs.slice(0, half);
  const secondCol = faqs.slice(half);

  return (
    <section className="py-20 px-4 bg-[#F4FBF2]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-green-800 mb-12 animate-fade-up">
          Frequently Asked Questions
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {[firstCol, secondCol].map((col, i) => (
            <div key={i} className="space-y-6">
              {col.map((faq, index) => {
                const isActive = activeIndex === index + i * half;
                return (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-green-400 animate-fade-up cursor-pointer"
                    style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'both' }}
                    onClick={() => isMobile && handleToggle(index + i * half)}
                  >
                    <h3 className="text-lg font-semibold text-green-900 mb-2 flex justify-between items-center">
                      {faq.question}
                      <span className="text-green-700 md:hidden">
                        {isActive ? '-' : '+'}
                      </span>
                    </h3>

                    {/* Answer - show on large screens or when active on mobile */}
                    <p
                      className={`text-gray-700 transition-all duration-300 ease-in-out ${
                        isMobile
                          ? isActive
                            ? 'block mt-2'
                            : 'hidden'
                          : 'block'
                      }`}
                    >
                      {faq.answer}
                    </p>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
