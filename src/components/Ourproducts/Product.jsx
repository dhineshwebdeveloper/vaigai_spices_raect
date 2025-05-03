import bgImage from '../../assets/images/Background.png'; // Use your extracted background image

const products = [
  { name: 'Cumin Seeds', image: '/images/cumin.png' },
  { name: 'Sesame Seeds', image: '/images/sesame.png' },
  { name: 'Fennel Seeds', image: '/images/fennel.png' },
  { name: 'Coriander Seeds', image: '/images/coriander.png' },
  { name: 'Groundnuts', image: '/images/groundnuts.png' },
  { name: 'Fenugreek Seeds', image: '/images/fenugreek.png' },
  { name: 'Flax Seeds', image: '/images/flax.png' },
  { name: 'Dill Seeds', image: '/images/dill.png' },
  { name: 'Psyllium Husk', image: '/images/psyllium.png' },
  { name: 'Mustard Seeds', image: '/images/mustard.png' },
];

function Products() {
  return (
    <div
      className="min-h-screen bg-cover bg-center py-16 px-4"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gray-800 animate-fadeIn">
          OUR PRODUCTS
        </h2>
        <p className="text-sm md:text-base text-gray-600 mb-10 animate-fadeIn delay-150">
          We at Shahh Overseas guarantee the quality of our service & Products. We always deliver more than expected.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white shadow-xl rounded-xl p-5 w-64 flex flex-col items-center transform transition duration-500 hover:scale-105 hover:shadow-2xl animate-slideUp"
              style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'both' }}
            >
              <img
                src={product.image}
                alt={product.name}
                className="h-28 object-contain mb-4 transition duration-300 hover:scale-110"
              />
              <h3 className="text-md font-semibold text-gray-700 text-center uppercase tracking-wide">
                {product.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
