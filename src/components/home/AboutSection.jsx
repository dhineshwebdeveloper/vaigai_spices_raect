import React from "react";
import BackgroundImage from "../../assets/images/backgrount_image.png"; // Ensure correct path

const AboutSection = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-24 px-6"
      style={{
        backgroundImage: `url(${BackgroundImage})`,
      }}
    >
      <div className="absolute inset-0 z-0"></div>

      <div className="relative z-10 max-w-6xl mx-auto text-[#1F3B1F] animate-on-scroll animate-fade-up">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center border-b-4 border-green-500 w-fit mx-auto pb-2 mb-14">
          About Vaigai Spices
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="p-6 rounded-xl bg-white bg-opacity-80 shadow-md border border-green-100 animate-on-scroll animate-fade-up">
            <h3 className="text-2xl font-semibold text-green-900 my-2">
              Who We Are
            </h3>
            <p className="text-lg leading-relaxed text-gray-800">
              At Vaigai Spices, we blend tradition with innovation. Backed by
              decades of expertise, we are committed to crafting flavorful,
              aromatic, and authentic spice blends that meet global quality
              standards. From farm to table, our mission is to deliver purity in
              every pinch.
            </p>
          </div>

          {/* Right Column */}
          <div className="p-6 rounded-xl bg-white bg-opacity-80 shadow-md border border-green-100 animate-on-scroll animate-fade-left delay-200">
            <h3 className="text-2xl font-semibold text-green-900 my-2">
              What We Do
            </h3>
            <p className="text-lg leading-relaxed text-gray-800">
              We go beyond manufacturing — we partner with businesses to provide
              customized spice solutions. Whether it’s bulk shipments, private
              labeling, or custom packaging, our integrated facilities ensure
              excellence at every stage of production and delivery.
            </p>
          </div>    
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
