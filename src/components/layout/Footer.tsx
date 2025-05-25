import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, CreditCard, Shield, Truck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Trust Icons Section */}
      <div className="border-b border-gray-800">
        <div className="container mx-auto py-8 px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center justify-center md:justify-start">
              <div className="mr-4 bg-gray-800 p-3 rounded-full">
                <Truck size={24} className="text-blue-500" />
              </div>
              <div>
                <h4 className="text-white font-semibold">Free Shipping</h4>
                <p className="text-sm">On orders over $500</p>
              </div>
            </div>
            
            <div className="flex items-center justify-center">
              <div className="mr-4 bg-gray-800 p-3 rounded-full">
                <Shield size={24} className="text-blue-500" />
              </div>
              <div>
                <h4 className="text-white font-semibold">Secure Payment</h4>
                <p className="text-sm">100% secure transactions</p>
              </div>
            </div>
            
            <div className="flex items-center justify-center md:justify-end">
              <div className="mr-4 bg-gray-800 p-3 rounded-full">
                <CreditCard size={24} className="text-blue-500" />
              </div>
              <div>
                <h4 className="text-white font-semibold">Flexible Payment</h4>
                <p className="text-sm">Multiple payment options</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Footer Content */}
      <div className="container mx-auto py-10 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About & Contact */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">WholeSale</h3>
            <p className="mb-4">Your one-stop shop for wholesale business supplies and equipment at competitive prices.</p>
            <address className="not-italic mb-6">
              <p>1234 Business Avenue</p>
              <p>New York, NY 10001</p>
              <p className="mt-2">Phone: (123) 456-7890</p>
              <p>Email: info@wholesale.com</p>
            </address>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-white transition-colors">All Products</Link>
              </li>
              <li>
                <Link to="/featured" className="hover:text-white transition-colors">Featured Products</Link>
              </li>
              <li>
                <Link to="/deals" className="hover:text-white transition-colors">Special Deals</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>
          
          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/account" className="hover:text-white transition-colors">My Account</Link>
              </li>
              <li>
                <Link to="/orders" className="hover:text-white transition-colors">Order Tracking</Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-white transition-colors">FAQs</Link>
              </li>
              <li>
                <Link to="/returns" className="hover:text-white transition-colors">Returns & Exchanges</Link>
              </li>
              <li>
                <Link to="/shipping" className="hover:text-white transition-colors">Shipping Policy</Link>
              </li>
              <li>
                <Link to="/support" className="hover:text-white transition-colors">Support Center</Link>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Newsletter</h3>
            <p className="mb-4">Subscribe to receive updates, promotions, and news about our products.</p>
            <form className="mb-4">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="px-4 py-2 w-full rounded-l-md text-gray-900 focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white rounded-r-md px-4 transition-colors"
                >
                  Subscribe
                </button>
              </div>
            </form>
            <div className="mt-6">
              <h4 className="text-white font-medium mb-2">We Accept</h4>
              <div className="flex space-x-2">
                <div className="bg-white p-1 rounded">
                  <img src="https://via.placeholder.com/30x20" alt="Visa" className="h-5" />
                </div>
                <div className="bg-white p-1 rounded">
                  <img src="https://via.placeholder.com/30x20" alt="Mastercard" className="h-5" />
                </div>
                <div className="bg-white p-1 rounded">
                  <img src="https://via.placeholder.com/30x20" alt="PayPal" className="h-5" />
                </div>
                <div className="bg-white p-1 rounded">
                  <img src="https://via.placeholder.com/30x20" alt="Amex" className="h-5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="bg-gray-950 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>© 2025 WholeSale. All rights reserved.</p>
            <div className="mt-2 md:mt-0">
              <Link to="/privacy" className="text-gray-400 hover:text-white mr-4 transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};