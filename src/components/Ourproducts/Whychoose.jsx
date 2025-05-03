import React from 'react';
import { CheckCircle } from 'lucide-react';
import Testtubemasala from '../../assets/images/testtubemasala.png';

const Whychoose = () => {
  const points = [
    "We deliver “QUALITY” – all our products are examined under the highest standards of quality control before delivery.",
    "Offering clients competitive quotes.",
    "Delivery on time.",
    "Experienced staff and management.",
    "Fulfilling clients' requirements is our main aim."
  ];

  return (
    <section className="w-full bg-white px-4 py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left: Image */}
        <div className="flex justify-center animate-fadeIn">
          <img
            src={Testtubemasala}
            alt="Spices"
            className="w-64 sm:w-80 md:w-96 lg:w-[400px] xl:w-[450px] object-contain drop-shadow-md"
          />
        </div>

        {/* Right: Text Content */}
        <div className="bg-[#f4fef4] rounded-2xl p-8 sm:p-10 md:p-12 shadow-lg animate-slideUp">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-green-800 uppercase mb-2">
              Why Choose Us
            </h2>
            <p className="text-gray-600 text-base md:text-lg">
              We ensure consistent quality, commitment, and client satisfaction.
            </p>
          </div>

          <ul className="space-y-6">
            {points.map((point, index) => (
              <li
                key={index}
                className="flex items-start gap-4 transform transition duration-300 hover:scale-[1.02] hover:bg-green-50 p-2 rounded-lg"
                style={{ animationDelay: `${index * 0.15}s`, animationFillMode: 'both' }}
              >
                <div className="min-w-[30px] min-h-[30px] rounded-full bg-green-100 flex items-center justify-center shadow-sm mt-1">
                  <CheckCircle className="text-green-600 w-5 h-5" />
                </div>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  {point}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Whychoose;
