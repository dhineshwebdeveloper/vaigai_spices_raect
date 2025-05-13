import { FaPhoneAlt, FaEnvelopeOpenText } from 'react-icons/fa';

const ContactCTA = () => {
  return (
    <section className="bg-gradient-to-r from-yellow-100 to-yellow-200 py-14 px-6 rounded-xl shadow-xl text-center mt-12 animate-fade-up">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-yellow-900 mb-4">Looking for Bulk Orders or Private Labeling?</h2>
        <p className="text-gray-800 text-lg mb-8">
          We're excited to collaborate with distributors, chefs, and businesses. Reach out and let's spice things up together!
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="tel:+919123456789"
            className="inline-flex items-center justify-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-full shadow-md transition duration-300"
          >
            <FaPhoneAlt className="mr-2" />
            Call Us Now
          </a>
          <a
            href="mailto:info@vaigaispices.com"
            className="inline-flex items-center justify-center px-6 py-3 bg-yellow-600 hover:bg-yellow-700 text-white font-semibold rounded-full shadow-md transition duration-300"
          >
            <FaEnvelopeOpenText className="mr-2" />
            Send an Email
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
