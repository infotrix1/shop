import React, { useState } from 'react';
import { ProductCard } from './ProductCard';
import { Product } from '../../types';
import { ChevronDown, ChevronUp, List, Grid } from 'lucide-react';

interface ProductGridProps {
  products: Product[];
  title?: string;
}

type SortOption = 'featured' | 'price-low' | 'price-high' | 'name-asc' | 'name-desc' | 'rating';

export const ProductGrid: React.FC<ProductGridProps> = ({ products, title }) => {
  const [sortBy, setSortBy] = useState<SortOption>('featured');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  const sortedProducts = [...products].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return (a.discountPrice || a.price) - (b.discountPrice || b.price);
      case 'price-high':
        return (b.discountPrice || b.price) - (a.discountPrice || a.price);
      case 'name-asc':
        return a.name.localeCompare(b.name);
      case 'name-desc':
        return b.name.localeCompare(a.name);
      case 'rating':
        return b.rating - a.rating;
      case 'featured':
      default:
        return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    }
  });
  
  return (
    <div>
      {title && (
        <h2 className="text-2xl font-bold mb-6">{title}</h2>
      )}
      
      <div className="bg-gray-50 rounded-lg p-4 mb-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center">
            <span className="mr-2 text-gray-700">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
              className="bg-white border border-gray-300 text-gray-700 py-1.5 px-3 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name-asc">Name: A to Z</option>
              <option value="name-desc">Name: Z to A</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>
          
          <div className="hidden md:flex items-center">
            <span className="mr-2 text-gray-700">View:</span>
            <div className="flex border border-gray-300 rounded-md overflow-hidden">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-1.5 ${
                  viewMode === 'grid' ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'
                }`}
                aria-label="Grid view"
              >
                <Grid size={20} />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-1.5 ${
                  viewMode === 'list' ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'
                }`}
                aria-label="List view"
              >
                <List size={20} />
              </button>
            </div>
          </div>
          
          <button
            className="md:hidden flex items-center text-gray-700 bg-white px-3 py-1.5 rounded-md border border-gray-300"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
          >
            Filters
            {isFilterOpen ? <ChevronUp size={16} className="ml-1" /> : <ChevronDown size={16} className="ml-1" />}
          </button>
        </div>
        
        {/* Mobile Filters (expandable) */}
        {isFilterOpen && (
          <div className="mt-4 md:hidden border-t border-gray-200 pt-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium mb-2">Price Range</h4>
                <div className="space-y-1">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span>Under $100</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span>$100 - $500</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span>$500 - $1000</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span>Over $1000</span>
                  </label>
                </div>
              </div>
              <div>
                <h4 className="font-medium mb-2">Availability</h4>
                <div className="space-y-1">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span>In Stock</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span>Out of Stock</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      
      <div className="flex">
        {/* Desktop Sidebar Filters */}
        <div className="hidden md:block w-1/5 pr-6">
          <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-200">
            <h3 className="font-semibold text-gray-800 mb-4 pb-2 border-b">Filters</h3>
            
            <div className="mb-5">
              <h4 className="font-medium mb-2">Price Range</h4>
              <div className="space-y-1">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span>Under $100</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span>$100 - $500</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span>$500 - $1000</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span>Over $1000</span>
                </label>
              </div>
            </div>
            
            <div className="mb-5">
              <h4 className="font-medium mb-2">Availability</h4>
              <div className="space-y-1">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span>In Stock</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span>Out of Stock</span>
                </label>
              </div>
            </div>
            
            <div className="mb-5">
              <h4 className="font-medium mb-2">Rating</h4>
              <div className="space-y-1">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span>4+ Stars</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span>3+ Stars</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span>2+ Stars</span>
                </label>
              </div>
            </div>
            
            <button className="w-full py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-md transition-colors text-sm">
              Reset Filters
            </button>
          </div>
        </div>
        
        {/* Product Grid */}
        <div className={`${viewMode === 'grid' ? 'md:w-4/5' : 'w-full'}`}>
          {sortedProducts.length === 0 ? (
            <div className="text-center py-12 bg-gray-50 rounded-lg">
              <p className="text-lg text-gray-600">No products found.</p>
            </div>
          ) : viewMode === 'grid' ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {sortedProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {sortedProducts.map(product => (
                <ProductCard key={product.id} product={product} layout="list" />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};