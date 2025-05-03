import React from "react";

// Dummy array with image imports (replace with your actual image paths)
import img1 from "/images/cumin.png";
import img2 from "/images/sesame.png";
import img3 from "/images/fennel.png";
import img4 from "/images/coriander.png";
import img5 from "/images/groundnuts.png";
import img6 from "/images/fenugreek.png";
import img7 from "/images/flax.png";
import img8 from "/images/dill.png";
import img9 from "/images/psyllium.png";
import img10 from "/images/mustard.png";

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

const ProductSlider = () => {
  // Duplicate images for infinite scroll effect
  const loopImages = [...images, ...images];

  return (
    <section className="w-full bg-[#CCD5BB] py-10 overflow-hidden ">
      <div className="relative">
        <div className="flex gap-10 whitespace-nowrap w-max custom-scroll ">
          {loopImages.map((img, idx) => (
            <div
              key={idx}
              className="min-w-[120px] sm:min-w-[140px] md:min-w-[160px] lg:min-w-[180px] xl:min-w-[200px] flex justify-center items-center"
            >
              <img
                src={img}
                alt={`product-${idx}`}
                className="h-20 sm:h-24 md:h-28 object-contain hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSlider;
