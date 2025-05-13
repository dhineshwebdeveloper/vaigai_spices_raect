import React from 'react';
import { MessageSquareHeart } from 'lucide-react';

const ContactIntro = () => {
  return (
    <section className="relative py-20 px-6 bg-gradient-to-br from-green-100 via-white to-green-50 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/bg-pattern.svg')] opacity-5 bg-cover bg-center pointer-events-none"></div>

      <div className="max-w-3xl mx-auto text-center animate-fade-up">
        <div className="flex justify-center mb-4">
          <MessageSquareHeart className="h-10 w-10 text-green-600 animate-bounce" />
        </div>
        <h2 className="text-4xl sm:text-5xl font-extrabold text-green-800 mb-4 drop-shadow-md">
          Let’s Connect With Us
        </h2>
        <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
          Have questions, partnership ideas, or spice orders in mind? We’re always excited to hear from you. Get in touch!
        </p>
      </div>
    </section>
  );
};

export default ContactIntro;
