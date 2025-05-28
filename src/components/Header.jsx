// Header.jsx
import React, { useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import vaigai_logo from "../assets/images/vaigai_spices_logo.jpeg";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const productsRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      setMobileSubmenuOpen(false);
    }
  };

  const toggleMobileSubmenu = () => {
    setMobileSubmenuOpen(!mobileSubmenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  useEffect(() => {
    setIsOpen(false);
    setMobileSubmenuOpen(false);
  }, [location]);

  const products = [
    { name: "Turmeric Powder", id: "turmeric-powder" },
    { name: "Red Chilli Powder", id: "red-chilli-powder" },
    { name: "Coriander Powder", id: "coriander-powder" },
    { name: "Black Pepper", id: "black-pepper" },
    { name: "Fennel Seeds", id: "fennel-seeds" },
    { name: "Cumin Seeds", id: "cumin-seeds" },
  ];

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/Quality", label: "Quality" },
    { path: "/Harvestchart", label: "Harvest Chart" },
    { path: "/contact", label: "Contact Us" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ease-in-out ${
        scrolled ? "bg-white shadow-lg py-2" : "bg-[#FDF6EE] shadow-md py-4"
      }`}
    >
      <div className="container mx-auto px-4 xl:px-12 lg:px-8 md:px-6">
        <div className="flex items-center justify-between relative">
          {/* Logo Section */}
          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.img
              src={vaigai_logo}
              alt="Vaigai Spices"
              className="w-10 h-10 rounded-full border-2 border-[#8E5B3C]"
              whileHover={{ rotate: 10, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
            <h1 className="text-[#8E5B3C] text-lg font-bold font-serif">
              Vaigai Spices
            </h1>
          </motion.div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center lg:gap-8 md:gap-4 font-medium">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md transition-colors duration-200 ${
                    isActive
                      ? "text-[#8E5B3C] font-semibold bg-[#f4e4d9]"
                      : "text-[#252525] hover:text-[#8E5B3C] hover:bg-[#f4e4d9]/50"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}

            {/* Products Dropdown */}
            <motion.div
              className="relative group"
              whileHover={{ scale: 1.05 }}
              ref={productsRef}
            >
              <NavLink
                to="/OurProducts"
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md flex items-center gap-1 transition-colors duration-200 ${
                    isActive
                      ? "text-[#8E5B3C] font-semibold bg-[#f4e4d9]"
                      : "text-[#252525] hover:text-[#8E5B3C] hover:bg-[#f4e4d9]/50"
                  }`
                }
              >
                Our Products
                <ChevronDown className="w-4 h-4 mt-0.5 group-hover:rotate-180 transition-transform" />
              </NavLink>

              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 0, y: -10 }}
                whileHover={{ opacity: 1, y: 0 }}
                className="absolute right-0 top-full bg-white border border-[#f4e4d9] rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out z-50 mt-1 w-56 overflow-hidden"
              >
                <ul className="flex flex-col">
                  {products.map((item) => (
                    <motion.li
                      key={item.id}
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <NavLink
                        to={`/OurProducts/${item.id}`}
                        className="block px-4 py-3 hover:bg-[#f4e4d9] text-[#333] hover:text-[#8E5B3C] transition-all border-b border-[#f4e4d9] last:border-b-0"
                      >
                        {item.name}
                      </NavLink>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-[#252525] p-2 rounded-md hover:bg-[#f4e4d9] transition-colors"
            onClick={toggleMenu}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </motion.button>
        </div>

        {/* Mobile Nav Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white overflow-hidden"
            >
              <ul className="flex flex-col gap-1 font-medium py-3">
                {navLinks.map((link) => (
                  <motion.li
                    key={link.path}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <NavLink
                      to={link.path}
                      className={({ isActive }) =>
                        `block px-4 py-3 rounded-md mx-2 ${
                          isActive
                            ? "text-[#8E5B3C] font-semibold bg-[#f4e4d9]"
                            : "text-[#252525] hover:text-[#8E5B3C] hover:bg-[#f4e4d9]/50"
                        }`
                      }
                    >
                      {link.label}
                    </NavLink>
                  </motion.li>
                ))}

                {/* Mobile Products Dropdown */}
                <motion.li
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  <button
                    onClick={toggleMobileSubmenu}
                    className={`w-full px-4 py-3 rounded-md mx-2 flex items-center justify-between ${
                      mobileSubmenuOpen
                        ? "text-[#8E5B3C] font-semibold bg-[#f4e4d9]"
                        : "text-[#252525] hover:text-[#8E5B3C] hover:bg-[#f4e4d9]/50"
                    }`}
                  >
                    Our Products
                    {mobileSubmenuOpen ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </button>

                  <AnimatePresence>
                    {mobileSubmenuOpen && (
                      <motion.ul
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="pl-6"
                      >
                        <motion.li>
                          <NavLink
                            to="/OurProducts"
                            className="block px-4 py-2 rounded-md text-[#333] hover:text-[#8E5B3C] hover:bg-[#f4e4d9]/50 font-medium"
                          >
                            View All Products
                          </NavLink>
                        </motion.li>
                        {products.map((item) => (
                          <motion.li
                            key={item.id}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.2 }}
                          >
                            <NavLink
                              to={`/OurProducts/${item.id}`}
                              className="block px-4 py-2 rounded-md text-[#333] hover:text-[#8E5B3C] hover:bg-[#f4e4d9]/50"
                            >
                              {item.name}
                            </NavLink>
                          </motion.li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </motion.li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
