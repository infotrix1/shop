import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../../data/products';

export const FeaturedCategories: React.FC = () => {
  const featuredCategories = categories.filter(category => category.featured);
  
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900">Shop By Category</h2>
          <p className="mt-2 text-lg text-gray-600">Find everything your business needs in one place</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredCategories.map(category => (
            <Link 
              key={category.id}
              to={`/category/${category.name.toLowerCase()}`}
              className="group relative overflow-hidden rounded-lg shadow-lg h-60"
            >
              <img 
                src={category.image} 
                alt={category.name} 
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-80"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-bold text-white">{category.name}</h3>
                <p className="text-gray-200 mt-1">{category.description}</p>
                <span className="inline-block mt-3 text-white font-medium group-hover:underline">
                  Shop Now
                </span>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <Link 
            to="/categories" 
            className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors"
          >
            View All Categories
          </Link>
        </div>
      </div>
    </section>
  );
};