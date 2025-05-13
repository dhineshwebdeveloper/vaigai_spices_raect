import React from "react";
import heroImage from "../../assets/images/hero_home.jpg"; // Replace with your actual path
import { NavLink } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative bg-green-100 overflow-hidden text-gray-800 py-24 px-6 md:px-12">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Spices Background"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 to-green-50/70"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center animate-fade-up">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-green-800 mb-6 leading-tight">
          Bringing the Authentic Taste of India to the World
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
          Embarking on a flavorful journey, Vaigai Spices brings you the essence
          of authentic Indian spices crafted with care and innovation. As a new
          entrant in the spice world, we are driven by passion, purity, and a
          promise to deliver exceptional taste in every blend.
        </p>

        <div className="flex justify-center gap-4">
          <NavLink to="/OurProducts">
          <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition-all duration-300">
            Explore Products
          </button>
          </NavLink>
          <NavLink to="/contact">
          <button className="border border-green-600 hover:bg-green-600 hover:text-white text-green-700 font-semibold px-6 py-3 rounded-lg shadow-md transition-all duration-300">
            Contact Us
          </button>
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
