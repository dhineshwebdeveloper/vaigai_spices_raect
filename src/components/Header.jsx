import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import vaigai_logo from "../assets/images/vaigai_spices_logo.jpeg";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-[#FDF6EE] shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 xl:px-12 lg:px-8 md:px-6 py-4 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <img
            src={vaigai_logo}
            alt="Vaigai Spices"
            className="w-10 h-10 rounded-full"
          />
          <h1 className="text-[#8E5B3C] text-lg font-bold">Vaigai Spices</h1>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex lg:gap-10 md:gap-5 font-medium">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-[#7B7B7B] font-semibold"
                : "text-[#252525] hover:text-[#7B7B7B] transition-all"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-[#7B7B7B] font-semibold"
                : "text-[#252525] hover:text-[#7B7B7B] transition-all"
            }
          >
            About Us
          </NavLink>
          <NavLink
            to="/OurProducts"
            className={({ isActive }) =>
              isActive
                ? "text-[#7B7B7B] font-semibold"
                : "text-[#252525] hover:text-[#7B7B7B] transition-all"
            }
          >
            Our Products
          </NavLink>
          <NavLink
            to="/Quality"
            className={({ isActive }) =>
              isActive
                ? "text-[#7B7B7B] font-semibold"
                : "text-[#252525] hover:text-[#7B7B7B] transition-all"
            }
          >
            Quality
          </NavLink>
          <NavLink
            to="/Harvestchart"
            className={({ isActive }) =>
              isActive
                ? "text-[#7B7B7B] font-semibold"
                : "text-[#252525] hover:text-[#7B7B7B] transition-all"
            }
          >
            Harvest chart
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-[#7B7B7B] font-semibold"
                : "text-[#252525] hover:text-[#7B7B7B] transition-all"
            }
          >
            Contact Us
          </NavLink>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-[#252525]" onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#FDF6EE] px-4 pb-4">
          <ul className="flex flex-col gap-3 font-medium">
            <NavLink
              to="/"
              onClick={toggleMenu}
              className={({ isActive }) =>
                isActive
                  ? "text-[#7B7B7B] font-semibold"
                  : "text-[#252525] hover:text-[#7B7B7B]"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              onClick={toggleMenu}
              className={({ isActive }) =>
                isActive
                  ? "text-[#7B7B7B] font-semibold"
                  : "text-[#252525] hover:text-[#7B7B7B]"
              }
            >
              About
            </NavLink>
            <NavLink
              to="/Quality"
              onClick={toggleMenu}
              className={({ isActive }) =>
                isActive
                  ? "text-[#7B7B7B] font-semibold"
                  : "text-[#252525] hover:text-[#7B7B7B]"
              }
            >
              Quality
            </NavLink>
            <NavLink
              to="/OurProducts"
              onClick={toggleMenu}
              className={({ isActive }) =>
                isActive
                  ? "text-[#7B7B7B] font-semibold"
                  : "text-[#252525] hover:text-[#7B7B7B]"
              }
            >
              OurProducts
            </NavLink>
            <NavLink
              to="/contact"
              onClick={toggleMenu}
              className={({ isActive }) =>
                isActive
                  ? "text-[#7B7B7B] font-semibold"
                  : "text-[#252525] hover:text-[#7B7B7B]"
              }
            >
              Contact
            </NavLink>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
