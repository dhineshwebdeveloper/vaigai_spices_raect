import { FaChevronDown } from 'react-icons/fa';
import { useState } from 'react';

const faqs = [
  {
    question: "How do I place a bulk order?",
    answer: "You can reach out through our contact form or WhatsApp for wholesale and bulk inquiries. We'll get back to you within 24 hours."
  },
  {
    question: "Do you offer international shipping?",
    answer: "Yes! We currently ship selected products internationally. Please contact us for more info."
  },
  {
    question: "Are your spices organic?",
    answer: "Most of our spices are naturally grown. We are working toward full organic certification for all varieties."
  }
];

const ContactFAQBlock = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 px-6 bg-yellow-50 rounded-xl shadow-inner mt-12 animate-fade-up">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-yellow-800 mb-6">🧂 Frequently Asked Questions</h2>
        <p className="text-gray-600 mb-8">Here are some quick answers. Need more help? <a href="/faq" className="text-green-700 font-semibold underline">Visit our FAQ page</a>.</p>

        <div className="text-left space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white border border-yellow-100 rounded-lg shadow-sm p-4">
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center text-lg font-medium text-yellow-900 focus:outline-none"
              >
                {faq.question}
                <FaChevronDown className={`transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} />
              </button>
              {openIndex === index && (
                <p className="mt-2 text-gray-700 text-sm transition-all duration-300">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactFAQBlock;
