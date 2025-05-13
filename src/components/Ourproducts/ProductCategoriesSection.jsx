import React from 'react';
import {
  Leaf,
  Flame,
  PackageOpen,
  ShoppingBag,
  Globe,
  Boxes,
} from 'lucide-react';

const categories = [
  {
    icon: <Leaf className="w-8 h-8 text-green-600" />,
    title: 'Organic Spices',
    description: 'Grown without chemicals, perfect for health-conscious cooking.',
  },
  {
    icon: <Flame className="w-8 h-8 text-green-500" />,
    title: 'Blended/Masala Spices',
    description: 'Expertly mixed spices for authentic Indian recipes.',
  },
  {
    icon: <PackageOpen className="w-8 h-8 text-green-700" />,
    title: 'Whole Spices',
    description: 'Unprocessed, aromatic spices packed with natural oils.',
  },
  {
    icon: <ShoppingBag className="w-8 h-8 text-green-500" />,
    title: 'Ground Spices',
    description: 'Finely ground spices ready for instant use.',
  },
  {
    icon: <Boxes className="w-8 h-8 text-green-600" />,
    title: 'Export Packs / Bulk Spices',
    description: 'High-volume packs crafted for export and food industries.',
  },
  {
    icon: <Globe className="w-8 h-8 text-green-500" />,
    title: 'Private Label Options',
    description: 'Custom spice packaging with your branding.',
  },
];

const ProductCategoriesSection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-green-900 mb-6 animate-fade-up">
          Explore Our Product Categories
        </h2>
        <p className="text-gray-700 mb-12 max-w-2xl mx-auto animate-fade-up delay-100">
          Discover a wide variety of spice types — from organic to custom blends — to suit every cooking style and business need.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-up delay-200">
          {categories.map((category, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-md border border-green-100 p-6 text-left hover:shadow-xl transition duration-300 transform hover:-translate-y-1"
            >
              <div className="mb-4">{category.icon}</div>
              <h3 className="text-xl font-semibold text-green-800 mb-2">{category.title}</h3>
              <p className="text-gray-600">{category.description}</p>
              <button className="mt-4 text-sm font-semibold text-green-600 hover:underline">
                View Products →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategoriesSection;
