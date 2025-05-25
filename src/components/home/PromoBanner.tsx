import React from 'react';
import { Link } from 'react-router-dom';
import { Truck, ShieldCheck, Clock, CreditCard } from 'lucide-react';

export const PromoBanner: React.FC = () => {
  return (
    <section className="bg-gray-900 text-white py-16 hidden md:block">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-block px-4 py-1 bg-blue-600 text-white text-sm font-semibold rounded-full mb-4">
              Special Offer
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get 15% Off Your First Order
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Sign up for our newsletter and get an exclusive discount on your first purchase. Stock up on all your business essentials and save.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/register" 
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors"
              >
                Sign Up Now
              </Link>
              <Link 
                to="/products" 
                className="px-6 py-3 bg-transparent border border-white hover:bg-white hover:text-gray-900 text-white font-medium rounded-md transition-colors"
              >
                Browse Products
              </Link>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="bg-blue-600 p-3 rounded-full inline-block mb-4">
                <Truck size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Free Shipping</h3>
              <p className="text-gray-300">
                On all orders over $500. Fast delivery to your doorstep.
              </p>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="bg-blue-600 p-3 rounded-full inline-block mb-4">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Guarantee</h3>
              <p className="text-gray-300">
                Premium products with 30-day money-back guarantee.
              </p>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="bg-blue-600 p-3 rounded-full inline-block mb-4">
                <Clock size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-300">
                Our customer service team is always here to help you.
              </p>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="bg-blue-600 p-3 rounded-full inline-block mb-4">
                <CreditCard size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure Payment</h3>
              <p className="text-gray-300">
                Multiple payment options with encrypted transactions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};