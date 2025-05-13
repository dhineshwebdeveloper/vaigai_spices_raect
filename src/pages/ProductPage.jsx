import React from "react";
import { useParams } from "react-router-dom";
import products from "../data/products.json";
import ContactCTA from "../components/Contact us/ContactCTA";
import OurProcess from "../components/About us/OurProcess";

const ProductPage = () => {
  const { productId } = useParams();
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return <div className="p-6 text-red-600 text-center">Product not found</div>;
  }

  return (
    <div className="w-full bg-[#F5FFF7] text-[#1B4332]">

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#D8F3DC] to-[#B7E4C7] py-24 px-6 text-center overflow-hidden">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 animate-fade-up">
          Discover the Power of <span className="text-[#2D6A4F]">{product.name}</span>
        </h1>
        <p className="text-lg text-[#40916C] max-w-2xl mx-auto animate-fade-up delay-200">
          Premium spices crafted with care to enhance your culinary experiences – naturally flavorful and pure.
        </p>
      </section>

      {/* Product Detail Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Product Image */}
          <div className="relative animate-fade-up">
            <img
              src={product.image}
              alt={product.name}
              className="rounded-3xl shadow-2xl border-4 border-[#95D5B2] object-cover w-full h-full"
            />
          </div>

          {/* Product Description */}
          <div className="animate-fade-up delay-200">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B4332] mb-4">
              Why Choose {product.name}?
            </h2>
            <p className="text-gray-700 text-lg mb-6">
              {product.description}
            </p>
            <div className="bg-[#D8F3DC] p-4 rounded-xl text-[#2D6A4F] shadow-md">
              <h3 className="text-xl font-semibold mb-2">Usage Tips:</h3>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>Perfect for everyday cooking</li>
                <li>Pairs well with Indian and international dishes</li>
                <li>Store in an airtight container for long-lasting freshness</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Sections */}
      <OurProcess />
      <ContactCTA />
    </div>
  );
};

export default ProductPage;
