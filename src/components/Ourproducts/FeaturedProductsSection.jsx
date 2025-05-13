import React from "react";

const featuredProducts = [
  {
    name: "Organic Turmeric Powder",
    image: "/images/products/turmeric.jpg",
    benefits: "Boosts immunity and reduces inflammation.",
  },
  {
    name: "Premium Cumin Seeds",
    image: "/images/products/cumin.jpg",
    benefits: "Adds earthy aroma, aids digestion.",
  },
  {
    name: "Authentic Garam Masala",
    image: "/images/products/garammasala.jpg",
    benefits: "Perfect for curries with rich, complex flavor.",
  },
  {
    name: "Pure Red Chilli Powder",
    image: "/images/products/redchilli.jpg",
    benefits: "Spicy and vibrant, adds real heat.",
  },
  {
    name: "Whole Black Pepper",
    image: "/images/products/blackpepper.jpg",
    benefits: "Pungent, strong flavor with antioxidants.",
  },
  {
    name: "Coriander Powder",
    image: "/images/products/coriander.jpg",
    benefits: "Mild flavor, ideal for seasoning.",
  },
];

const FeaturedProductsSection = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-green-900 mb-6 animate-fade-up">
          Best Sellers & Featured Products
        </h2>
        <p className="text-gray-700 mb-12 max-w-2xl mx-auto animate-fade-up delay-100">
          Our most-loved spices—trusted by chefs, loved by homes. Carefully
          selected for quality and flavor.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 animate-fade-up delay-200">
          {featuredProducts.map((product, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow hover:shadow-xl transition duration-300 border border-green-100 overflow-hidden"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-56 object-cover rounded-t-2xl transition-transform duration-300 ease-in-out transform hover:scale-110"
              />

              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold text-green-800 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4">{product.benefits}</p>
                <button className="text-sm font-semibold text-green-600 hover:underline">
                  Enquire Now →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProductsSection;
