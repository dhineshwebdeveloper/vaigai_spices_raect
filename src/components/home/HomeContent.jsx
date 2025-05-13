import React from 'react'
import spices_export from '../../assets/images/spices_export.png'


const HomeContent = () => {
  return (
<section
  className="relative w-full flex items-center justify-center bg-cover bg-center px-4 py-12"
>

  {/* Content */}
  <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center z-10 animate-fade-in-up">
    
    {/* Left: Text Content */}
    <div className="text-center md:text-left px-2 text-black">
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-snug transition duration-700 ease-in-out transform hover:scale-105">
      Indian Spices Exporter
      </h1>
      <p className="mt-4 text-sm sm:text-base md:text-[17px] lg:text-lg leading-relaxed text-gray-500">
      <b> Vaigai Spices,</b> a renowned blended spices manufacturer in India, is a trusted and respected exporter, wholesaler, and 
      manufacturer of a wide range of Indian spices and blended seasonings globally, offering both whole and powdered products.
<br /><br />
     <b>At Vaigai Spices,</b> we add the value of our services to an extensive range of Indian Spices. As a leading wholesale supplier
      of spices in India, Vaigai Spices has been successfully exporting high-quality organic spices since 1999, leveraging its 
      extensive expertise and in-depth knowledge gained over the years in the spice industry. We specialize in shipping full
       containers of single products and mixed loads of different spices. We are also one of the most trusted partners for
        private labelling and have in-house facilities from developing design to final product packaging
      </p>

   
    </div>

    {/* Right: Image */}
    <div className="flex justify-center">
      <img
        src={spices_export}
        alt="Spices"
        className="w-64 sm:w-80 md:w-96 lg:w-[400px] xl:w-[450px] object-contain drop-shadow-lg transition-transform duration-700 transform hover:scale-105"
      />
    </div>
  </div>
</section>

  )
}

export default HomeContent