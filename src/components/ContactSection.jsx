import React from 'react';

const ContactSection = () => {
  return (
    <section className="min-h-screen bg-green-50 flex items-center justify-center p-6">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-xl p-10">
        
        {/* Quote */}
        <div className="mb-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800">
            "Spice up your life with every contact – Let's talk!"
          </h2>
        </div>

        {/* Form */}
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="p-4 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-4 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            className="p-4 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <textarea
            rows="5"
            placeholder="Your Message"
            className="p-4 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-green-500"
          ></textarea>
          <button
            type="submit"
            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
          >
            Send Message
          </button>
        </form>

        {/* Brand */}
        <div className="mt-10 text-center text-sm text-gray-500">
          Powered by <span className="font-semibold text-green-700">Vaigai Spices</span>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
