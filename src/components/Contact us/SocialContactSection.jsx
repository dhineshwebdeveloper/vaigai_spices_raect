import { FaFacebookF, FaInstagram, FaWhatsapp, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const SocialContactSection = () => {
  const socialLinks = [
    {
      icon: <FaWhatsapp className="text-xl" />,
      href: "https://wa.me/919876543210",
      label: "WhatsApp",
      color: "bg-green-500",
      hoverColor: "hover:bg-green-600"
    },
    {
      icon: <FaInstagram className="text-xl" />,
      href: "https://www.instagram.com/vaigaispices",
      label: "Instagram",
      color: "bg-pink-500",
      hoverColor: "hover:bg-pink-600"
    },
    {
      icon: <FaFacebookF className="text-xl" />,
      href: "https://www.facebook.com/vaigaispices",
      label: "Facebook",
      color: "bg-blue-600",
      hoverColor: "hover:bg-blue-700"
    },
    {
      icon: <FaLinkedin className="text-xl" />,
      href: "https://www.linkedin.com/company/vaigaispices",
      label: "LinkedIn",
      color: "bg-blue-500",
      hoverColor: "hover:bg-blue-600"
    },
    {
      icon: <FaEnvelope className="text-xl" />,
      href: "mailto:contact@vaigaispices.com",
      label: "Email",
      color: "bg-red-500",
      hoverColor: "hover:bg-red-600"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-green-50 via-white to-green-50">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold text-green-800 mb-4">
            <span className="inline-block mr-2">🌿</span>
            Connect With Vaigai Spices
            <span className="inline-block ml-2">🌿</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Join our community for exclusive recipes, spice tips, and behind-the-scenes looks at our traditional production methods.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-12"
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              variants={itemVariants}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className={`
                ${link.color} ${link.hoverColor}
                w-14 h-14 rounded-full flex items-center justify-center
                text-white shadow-md transition-all duration-300
                hover:shadow-lg hover:-translate-y-1
                transform hover:scale-110
              `}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {link.icon}
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="bg-white p-6 rounded-xl shadow-sm max-w-2xl mx-auto"
        >
          <h3 className="text-xl font-semibold text-green-700 mb-3">Stay Updated</h3>
          <p className="text-gray-600 mb-4">
            Sign up for our newsletter to receive seasonal recipes and special offers
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-4 py-2 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button className="px-6 py-2 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors shadow-sm">
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialContactSection;