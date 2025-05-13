import React from "react";
import herohomeImg from "../../assets/images/hero_home.jpg";
import { NavLink } from "react-router-dom";
const HeroSection = () => {
  return (
    <section
      className="relative bg-cover bg-center min-h-screen flex items-center justify-center"
      style={{ backgroundImage: `url(${herohomeImg})` }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 to-black/40 backdrop-blur-sm"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl text-white">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight drop-shadow-lg">
          Taste the <span className="text-yellow-400">Tradition</span>
          <br />
          with Vaigai Spices
        </h1>

        <p className="mt-6 text-lg md:text-xl text-gray-200">
          Bringing you the finest quality Indian spices
          <br className="hidden md:block" />
          that awaken your senses and elevate your cooking.
        </p>

        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <NavLink
            to="/OurProducts"
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 px-6 rounded-full transition shadow-lg"
          >
            <button>Explore Products</button>
          </NavLink>
          <NavLink
          to="/about"
          className="border border-yellow-400 hover:bg-yellow-400 hover:text-black text-white font-semibold py-3 px-6 rounded-full transition">
          <button>
            Learn More
          </button>
          </NavLink>
          
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
