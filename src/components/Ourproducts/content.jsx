import React from 'react'
import spiceImage from '../../assets/images/spices.png'

const Content = () => {
  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-white px-4 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Image */}
        <div className="flex justify-center">
          <img
            src={spiceImage}
            alt="Spices"
            className="w-64 sm:w-80 md:w-96 lg:w-[400px] xl:w-[450px] object-contain"
          />
        </div>

        {/* Right: Text Content */}
        <div className="text-center md:text-left px-2">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-snug">
            SHETH OVERSEAS - GLOBAL SPICES EXPORTER & SUPPLIER
          </h1>
          <p className="mt-4 text-gray-600 text-sm sm:text-base md:text-[17px] lg:text-lg leading-relaxed">
            SHETH OVERSEAS is a leading Manufacturer, Exporter and Supplier of
            SPICES AND OIL SEEDS such as CUMIN SEEDS, SESAME SEEDS, FENNEL
            SEEDS, PEANUTS, and GROUNDNUTS etc. <br /><br />
            Based in the Spice City of India - UNJHA, We at Sheth Overseas
            directly procure spices and oil seeds from farmers and process at
            our Manufacturing Unit, which results into pure and clean quality
            of Final products. We always deliver more than expected.
          </p>

          <button className="mt-6 bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full text-sm font-medium shadow-md transition">
            READ MORE
          </button>
        </div>
      </div>
    </section>
  )
}

export default Content
