import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingCart, User, Menu, X, Home, Grid, MapPin } from 'lucide-react';
import { Button } from '../ui/Button';
import { useCart } from '../../context/CartContext';
import { useAuth } from '../../context/AuthContext';
import { useLocation as useUserLocation } from '../../context/LocationContext';
import { LocationModal } from '../location/LocationModal';
import { categories } from '../../data/products';

export const Header: React.FC = () => {
  const { state: cart } = useCart();
  const { user, isAuthenticated, logout } = useAuth();
  const { location } = useUserLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showLocationModal, setShowLocationModal] = useState(false);
  const locationPath = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <>
      {/* Desktop Header */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white shadow-md py-2' 
            : 'bg-transparent py-4'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo - Hidden on Mobile */}
            <Link to="/" className="hidden md:flex items-center">
              <span className="text-2xl font-bold text-blue-600">WholeSale</span>
            </Link>
            
            {/* Location Bar - Mobile */}
            <div className="md:hidden w-full">
              <button
                onClick={() => setShowLocationModal(true)}
                className="w-full py-2 px-4 bg-gray-50 rounded-lg text-left flex items-center text-gray-700"
              >
                <MapPin size={18} className="mr-2 text-blue-600" />
                <span className="text-sm truncate flex-1">
                  {location ? `${location.city}, ${location.state}` : 'Select Location'}
                </span>
              </button>
            </div>
            
            {/* Location Selector - Desktop */}
            <button
              onClick={() => setShowLocationModal(true)}
              className="hidden md:flex items-center text-gray-700 hover:text-blue-600 ml-6"
            >
              <MapPin size={20} className="mr-1" />
              <span className="text-sm truncate max-w-[200px]">
                {location ? `${location.city}, ${location.state}` : 'Select Location'}
              </span>
            </button>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-6">
              <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium">
                Home
              </Link>
              <div className="relative group">
                <button className="text-gray-700 hover:text-blue-600 font-medium flex items-center">
                  Categories
                </button>
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  {categories.map(category => (
                    <Link 
                      key={category.id}
                      to={`/category/${category.name.toLowerCase()}`}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              </div>
              <Link to="/products" className="text-gray-700 hover:text-blue-600 font-medium">
                All Products
              </Link>
              <Link to="/about" className="text-gray-700 hover:text-blue-600 font-medium">
                About Us
              </Link>
              <Link to="/contact" className="text-gray-700 hover:text-blue-600 font-medium">
                Contact
              </Link>
            </nav>
            
            {/* Search, Cart and User actions - Desktop Only */}
            <div className="hidden md:flex items-center space-x-4">
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="pl-3 pr-10 py-1.5 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button 
                  type="submit" 
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-blue-600"
                >
                  <Search size={18} />
                </button>
              </form>
              
              <Link 
                to="/cart" 
                className="relative text-gray-700 hover:text-blue-600 transition-colors"
              >
                <ShoppingCart size={24} />
                {cart.totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {cart.totalItems}
                  </span>
                )}
              </Link>
              
              {isAuthenticated ? (
                <div className="relative group">
                  <button className="flex items-center text-gray-700 hover:text-blue-600">
                    <User size={24} />
                  </button>
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    <div className="px-4 py-2 text-sm text-gray-700 border-b border-gray-100">
                      Signed in as <span className="font-medium">{user?.name}</span>
                    </div>
                    <Link 
                      to="/account" 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Your Account
                    </Link>
                    <Link 
                      to="/orders" 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Your Orders
                    </Link>
                    <button 
                      onClick={logout}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Sign Out
                    </button>
                  </div>
                </div>
              ) : (
                <Link to="/login">
                  <Button size="sm" variant="outline">
                    Sign In
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
        <div className="grid grid-cols-5 h-16">
          <Link 
            to="/" 
            className={`flex flex-col items-center justify-center ${
              locationPath.pathname === '/' ? 'text-blue-600' : 'text-gray-600'
            }`}
          >
            <Home size={24} />
            <span className="text-xs mt-1">Home</span>
          </Link>
          
          <Link 
            to="/products" 
            className={`flex flex-col items-center justify-center ${
              locationPath.pathname === '/products' ? 'text-blue-600' : 'text-gray-600'
            }`}
          >
            <Grid size={24} />
            <span className="text-xs mt-1">Products</span>
          </Link>
          
          <button 
            onClick={() => setIsMobileMenuOpen(true)}
            className="flex flex-col items-center justify-center text-gray-600"
          >
            <Search size={24} />
            <span className="text-xs mt-1">Search</span>
          </button>
          
          <Link 
            to="/cart" 
            className={`flex flex-col items-center justify-center relative ${
              locationPath.pathname === '/cart' ? 'text-blue-600' : 'text-gray-600'
            }`}
          >
            <ShoppingCart size={24} />
            <span className="text-xs mt-1">Cart</span>
            {cart.totalItems > 0 && (
              <span className="absolute top-1 right-6 bg-blue-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {cart.totalItems}
              </span>
            )}
          </Link>
          
          <Link 
            to={isAuthenticated ? '/account' : '/login'} 
            className={`flex flex-col items-center justify-center ${
              locationPath.pathname === '/account' || locationPath.pathname === '/login' 
                ? 'text-blue-600' 
                : 'text-gray-600'
            }`}
          >
            <User size={24} />
            <span className="text-xs mt-1">Account</span>
          </Link>
        </div>
      </nav>

      {/* Mobile Search Modal */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden">
          <div className="bg-white p-4 h-full">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Search Products</h2>
              <button onClick={() => setIsMobileMenuOpen(false)}>
                <X size={24} />
              </button>
            </div>
            <form onSubmit={handleSearch} className="mb-4">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </form>
            <div className="space-y-2">
              <h3 className="font-medium text-gray-900">Categories</h3>
              {categories.map(category => (
                <Link
                  key={category.id}
                  to={`/category/${category.name.toLowerCase()}`}
                  className="block py-2 text-gray-600"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {category.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Location Modal */}
      <LocationModal
        isOpen={showLocationModal}
        onClose={() => setShowLocationModal(false)}
      />
    </>
  );
};