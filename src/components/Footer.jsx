import React from "react";
import { NavLink } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import vaigai_logo from "../assets/images/vaigai_spices_logo.jpeg";

const Footer = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const staggerContainer = {
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  return (
    <footer className="relative text-white bg-transparent pt-20 overflow-hidden">
      {/* Background SVG Wave with animation */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full bg-cover bg-center pb-10"
        style={{
          backgroundImage: `url('data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 309"><defs><linearGradient id="gradient-1" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" style="stop-color:%23CCD5BB;stop-opacity:1"/><stop offset="100%" style="stop-color:%23CCD5BB;stop-opacity:0.7"/></linearGradient><linearGradient id="gradient-2" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" style="stop-color:%23CCD5BB;stop-opacity:0.7"/><stop offset="100%" style="stop-color:%23CCD5BB;stop-opacity:0.5"/></linearGradient><linearGradient id="gradient-3" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" style="stop-color:%23CCD5BB;stop-opacity:0.5"/><stop offset="100%" style="stop-color:%23CCD5BB;stop-opacity:0.3"/></linearGradient></defs><g clip-path="url(%23clip0_365_247)"><path d="M0 34.6293L34.4 42.3543C68.8 50.2125 137.6 65.6625 206.08 75.2522C274.72 84.8418 342.88 88.3047 411.52 80.3134C480 72.322 548.8 52.8763 617.28 33.697C685.92 14.6509 754.08 -3.99567 822.72 1.33191C891.2 6.6595 960 35.9612 1028.48 43.6862C1097.12 51.5444 1165.28 37.6927 1233.92 42.2211C1302.4 46.6164 1371.2 69.2586 1405.6 80.5798L1440 91.9009V309H1405.6C1371.2 309 1302.4 309 1233.92 309C1165.28 309 1097.12 309 1028.48 309C960 309 891.2 309 822.72 309C754.08 309 685.92 309 617.28 309C548.8 309 480 309 411.52 309C342.88 309 274.72 309 206.08 309C137.6 309 68.8 309 34.4 309H0V34.6293Z" fill="url(%23gradient-1)"/><path d="M0 125.198L34.4 118.272C68.8 111.48 137.6 97.628 206.08 89.6366C274.72 81.6452 342.88 79.5142 411.52 87.9052C480 96.2961 548.8 115.475 617.28 124.932C685.92 134.522 754.08 134.522 822.72 120.936C891.2 107.484 960 80.3134 1028.48 68.1931C1097.12 55.9397 1165.28 58.6034 1233.92 68.9922C1302.4 79.5142 1371.2 97.628 1405.6 106.818L1440 115.875V309H1405.6C1371.2 309 1302.4 309 1233.92 309C1165.28 309 1097.12 309 1028.48 309C960 309 891.2 309 822.72 309C754.08 309 685.92 309 617.28 309C548.8 309 480 309 411.52 309C342.88 309 274.72 309 206.08 309C137.6 309 68.8 309 34.4 309H0V125.198Z" fill="url(%23gradient-2)"/><path d="M0 191.793L34.4 198.186C68.8 204.712 137.6 217.499 206.08 211.106C274.72 204.712 342.88 178.874 411.52 174.745C480 170.483 548.8 187.797 617.28 192.459C685.92 197.121 754.08 189.129 822.72 181.138C891.2 173.147 960 165.155 1028.48 172.747C1097.12 180.206 1165.28 203.381 1233.92 203.514C1302.4 203.78 1371.2 181.138 1405.6 169.817L1440 158.496V309H1405.6C1371.2 309 1302.4 309 1233.92 309C1165.28 309 1097.12 309 1028.48 309C960 309 891.2 309 822.72 309C754.08 309 685.92 309 617.28 309C548.8 309 480 309 411.52 309C342.88 309 274.72 309 206.08 309C137.6 309 68.8 309 34.4 309H0V191.793Z" fill="url(%23gradient-3)"/></g><defs><clipPath id="clip0_365_247"><rect width="1440" height="309" fill="white"/></clipPath></defs></svg>')`,
        }}
      >
        {/* Main Content */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-10 flex flex-col md:flex-row flex-wrap justify-between gap-y-10 text-gray-800"
        >
          {/* Logo and About */}
          <motion.div 
            variants={fadeInUp}
            className="w-full sm:w-[45%] md:w-[25%] mt-3.5"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <img
                src={vaigai_logo}
                alt="Vaigai Spices Logo"
                width={120}
                height={120}
                className="mb-4 md:mt-7 rounded-full shadow-lg border-4 border-white hover:shadow-xl transition-all duration-300"
              />
            </motion.div>
            <p className="text-sm leading-relaxed">
              <strong className="text-yellow-700 font-semibold">Vaigai Spices</strong> — Bringing the authentic taste of
              Indian spices to kitchens around the world through trusted import
              and export excellence.
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.div 
            variants={fadeInUp}
            className="w-full sm:w-[45%] md:w-[18%]"
          >
            <h4 className="text-yellow-600 text-lg font-bold mb-4 relative inline-block">
              Navigation
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-500 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                ["Home", "/"],
                ["About Us", "/about"],
                ["Our Products", "/OurProducts"],
                ["Quality", "/quality"],
                ["Harvest Chart", "/Harvestchart"],
                ["Contact Us", "/contact"],
              ].map(([label, path]) => (
                <li key={label}>
                  <NavLink
                    to={path}
                    className={({ isActive }) => 
                      `relative block py-1 pl-2 hover:text-yellow-600 transition-all duration-200 ${isActive ? 'text-yellow-600 font-medium' : 'text-gray-700'}`
                    }
                  >
                    <span className="absolute left-0 top-1/2 h-1 w-1 rounded-full bg-yellow-500 transform -translate-y-1/2 opacity-0 transition-all duration-200 group-hover:opacity-100"></span>
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Products */}
          <motion.div 
            variants={fadeInUp}
            className="w-full sm:w-[45%] md:w-[18%]"
          >
            <h4 className="text-yellow-600 text-lg font-bold mb-4">Our Products</h4>
            <ul className="space-y-3">
              {[
                { name: "Turmeric Powder", id: "turmeric-powder" },
                { name: "Red Chilli Powder", id: "red-chilli-powder" },
                { name: "Coriander Powder", id: "coriander-powder" },
                { name: "Black Pepper", id: "black-pepper" },
                { name: "Fennel Seeds", id: "fennel-seeds" },
                { name: "Cumin Seeds", id: "cumin-seeds" },
              ].map((item) => (
                <li key={item.id}>
                  <NavLink
                    to={`/OurProducts/${item.id}`}
                    className="block py-1 pl-2 text-gray-700 hover:text-yellow-600 transition-all duration-200 hover:pl-3 border-l-2 border-transparent hover:border-yellow-500"
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div 
            variants={fadeInUp}
            className="w-full sm:w-[45%] md:w-[28%] text-sm"
          >
            <h4 className="text-yellow-600 text-lg font-bold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <p className="font-bold text-gray-800">VAIGAI SPICES</p>
              <p className="leading-relaxed">
                Nangavalli Main Road,
                <br />
                Opp to Pooja Clinic,
                <br />
                Tharamangalam, Omalur Taluk, Salem
              </p>
              
              <div className="flex items-start mt-3">
                <FaPhoneAlt className="text-yellow-600 mt-1 mr-2 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Phone:</p>
                  <a href="tel:+919840605676" className="block hover:text-yellow-600 transition">+91 9840605676</a>
                  <a href="tel:+919994595899" className="block hover:text-yellow-600 transition">+91 9994595899</a>
                </div>
              </div>
              
              <div className="flex items-start">
                <FaEnvelope className="text-yellow-600 mt-1 mr-2 flex-shrink-0" />
                <a
                  href="mailto:info@vaigaispices.com"
                  className="hover:text-yellow-600 transition underline"
                >
                  info@vaigaispices.com
                </a>
              </div>
              
              <div className="pt-2">
                <a 
                  href="https://wa.me/919840605676" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-green-600 text-white px-3 py-1 rounded-full text-sm hover:bg-green-700 transition"
                >
                  <FaWhatsapp className="mr-2" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            variants={fadeInUp}
            className="w-full sm:w-[45%] md:w-[10%]"
          >
            <h4 className="text-yellow-600 text-lg font-bold mb-4">Follow Us</h4>
            <div className="flex gap-3">
              <motion.a
                href="#"
                whileHover={{ y: -3 }}
                className="w-10 h-10 bg-white text-blue-600 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white shadow-md hover:shadow-lg transition-all"
                aria-label="Facebook"
              >
                <FaFacebookF size={16} />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ y: -3 }}
                className="w-10 h-10 bg-white text-pink-600 rounded-full flex items-center justify-center hover:bg-pink-600 hover:text-white shadow-md hover:shadow-lg transition-all"
                aria-label="Instagram"
              >
                <FaInstagram size={16} />
              </motion.a>
            </div>
            
            <div className="mt-6">
              <h5 className="text-gray-700 font-semibold mb-2">Newsletter</h5>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="px-3 py-2 text-sm border border-gray-300 rounded-l focus:outline-none focus:ring-1 focus:ring-yellow-500 w-full"
                />
                <button className="bg-yellow-600 text-white px-3 py-2 text-sm rounded-r hover:bg-yellow-700 transition">
                  Join
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Footer Bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center text-sm text-gray-800 border-t border-gray-300 bg-[#CFD7BF] py-5"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          &copy; {new Date().getFullYear()} VAIGAI SPICES. All rights reserved.{" "}
          <span className="text-yellow-700">Designed by</span>{" "}
          <a
            href="https://www.linkedin.com/in/dhineshwebdeveloper"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-700 font-medium hover:underline"
          >
            Dhinesh
          </a>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;