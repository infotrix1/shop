import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronRight, ArrowLeft, ChevronDown, Grid, List } from 'lucide-react';
import { getProductsByCategory, categories } from '../data/products';

type SortOption = 'featured' | 'price-low' | 'price-high' | 'name-asc' | 'name-desc' | 'rating';
type ViewMode = 'grid' | 'list';

const CategoryPage: React.FC = () => {
  const { categoryName } = useParams<{ categoryName: string }>();
  const [sortBy, setSortBy] = useState<SortOption>('featured');
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [priceRange, setPriceRange] = useState<string[]>([]);
  const [availability, setAvailability] = useState<string[]>([]);
  
  const category = categories.find(
    cat => cat.name.toLowerCase() === categoryName?.toLowerCase()
  );
  
  let products = getProductsByCategory(category?.name || '');

  // Apply filters
  if (priceRange.length > 0 || availability.length > 0) {
    products = products.filter(product => {
      const price = product.discountPrice || product.price;
      const inStock = product.inStock;

      const matchesPrice = priceRange.length === 0 || priceRange.some(range => {
        switch (range) {
          case 'under-100':
            return price < 100;
          case '100-500':
            return price >= 100 && price <= 500;
          case '500-1000':
            return price >= 500 && price <= 1000;
          case 'over-1000':
            return price > 1000;
          default:
            return true;
        }
      });

      const matchesAvailability = availability.length === 0 || 
        (availability.includes('in-stock') && inStock) ||
        (availability.includes('out-of-stock') && !inStock);

      return matchesPrice && matchesAvailability;
    });
  }

  // Apply sorting
  products.sort((a, b) => {
    const priceA = a.discountPrice || a.price;
    const priceB = b.discountPrice || b.price;

    switch (sortBy) {
      case 'price-low':
        return priceA - priceB;
      case 'price-high':
        return priceB - priceA;
      case 'name-asc':
        return a.name.localeCompare(b.name);
      case 'name-desc':
        return b.name.localeCompare(a.name);
      case 'rating':
        return b.rating - a.rating;
      default:
        return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    }
  });

  if (!category) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="p-4">
          <h1 className="text-xl font-semibold text-gray-900 mb-4">Category Not Found</h1>
          <p className="text-gray-600 mb-6">
            The category you're looking for does not exist.
          </p>
          <Link 
            to="/" 
            className="inline-flex items-center text-blue-600"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Categories
          </Link>
        </div>
      </div>
    );
  }

  const handlePriceRangeChange = (range: string) => {
    setPriceRange(prev => 
      prev.includes(range) 
        ? prev.filter(r => r !== range)
        : [...prev, range]
    );
  };

  const handleAvailabilityChange = (option: string) => {
    setAvailability(prev =>
      prev.includes(option)
        ? prev.filter(o => o !== option)
        : [...prev, option]
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Header */}
      <div className="flex items-center p-4 bg-white border-b md:hidden">
        <Link to="/" className="mr-4">
          <ArrowLeft size={24} className="text-gray-600" />
        </Link>
        <h1 className="text-lg font-semibold">{category.name}</h1>
      </div>

      {/* Desktop Header */}
      <div className="hidden md:block bg-white border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-blue-600">Home</Link>
            <ChevronRight size={16} />
            <span className="font-medium text-gray-900">{category.name}</span>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mt-2">{category.name}</h1>
        </div>
      </div>

      {/* Sort and Filter Bar */}
      <div className="sticky top-0 z-20 flex justify-between p-4 bg-white border-b">
        <button 
          className="flex items-center text-gray-600"
          onClick={() => setIsSortOpen(!isSortOpen)}
        >
          <span>Sort</span>
          <ChevronDown size={20} className="ml-1" />
        </button>
        <button 
          className="flex items-center text-gray-600"
          onClick={() => setIsFilterOpen(!isFilterOpen)}
        >
          <span>Filter</span>
          <ChevronDown size={20} className="ml-1" />
        </button>

        {/* Desktop View Mode Toggle */}
        <div className="hidden md:flex items-center space-x-2">
          <button
            onClick={() => setViewMode('grid')}
            className={`p-2 rounded ${viewMode === 'grid' ? 'bg-blue-100 text-blue-600' : 'text-gray-600'}`}
          >
            <Grid size={20} />
          </button>
          <button
            onClick={() => setViewMode('list')}
            className={`p-2 rounded ${viewMode === 'list' ? 'bg-blue-100 text-blue-600' : 'text-gray-600'}`}
          >
            <List size={20} />
          </button>
        </div>
      </div>

      {/* Sort Modal */}
      {isSortOpen && (
        <div className="fixed inset-0 z-30 bg-black bg-opacity-50">
          <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-xl">
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-4">Sort By</h3>
              <div className="space-y-4">
                {[
                  { value: 'featured', label: 'Featured' },
                  { value: 'price-low', label: 'Price: Low to High' },
                  { value: 'price-high', label: 'Price: High to Low' },
                  { value: 'name-asc', label: 'Name: A to Z' },
                  { value: 'name-desc', label: 'Name: Z to A' },
                  { value: 'rating', label: 'Top Rated' }
                ].map(option => (
                  <button
                    key={option.value}
                    className={`w-full text-left py-2 px-4 rounded ${
                      sortBy === option.value ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
                    }`}
                    onClick={() => {
                      setSortBy(option.value as SortOption);
                      setIsSortOpen(false);
                    }}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
              <button
                className="w-full py-3 mt-4 text-center text-gray-600 border-t"
                onClick={() => setIsSortOpen(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Filter Modal */}
      {isFilterOpen && (
        <div className="fixed inset-0 z-30 bg-black bg-opacity-50">
          <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-xl max-h-[80vh] overflow-y-auto">
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-4">Filters</h3>
              
              <div className="mb-6">
                <h4 className="font-medium mb-3">Price Range</h4>
                <div className="space-y-2">
                  {[
                    { value: 'under-100', label: 'Under $100' },
                    { value: '100-500', label: '$100 - $500' },
                    { value: '500-1000', label: '$500 - $1000' },
                    { value: 'over-1000', label: 'Over $1000' }
                  ].map(range => (
                    <label key={range.value} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={priceRange.includes(range.value)}
                        onChange={() => handlePriceRangeChange(range.value)}
                        className="mr-2"
                      />
                      <span>{range.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-medium mb-3">Availability</h4>
                <div className="space-y-2">
                  {[
                    { value: 'in-stock', label: 'In Stock' },
                    { value: 'out-of-stock', label: 'Out of Stock' }
                  ].map(option => (
                    <label key={option.value} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={availability.includes(option.value)}
                        onChange={() => handleAvailabilityChange(option.value)}
                        className="mr-2"
                      />
                      <span>{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="flex space-x-4">
                <button
                  className="flex-1 py-3 text-center text-white bg-blue-600 rounded-lg"
                  onClick={() => setIsFilterOpen(false)}
                >
                  Apply Filters
                </button>
                <button
                  className="flex-1 py-3 text-center text-gray-600 border rounded-lg"
                  onClick={() => {
                    setPriceRange([]);
                    setAvailability([]);
                    setIsFilterOpen(false);
                  }}
                >
                  Reset
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Products Grid */}
      <div className="p-4">
        <div className={`grid ${
          viewMode === 'grid'
            ? 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
            : 'grid-cols-1'
        } gap-4`}>
          {products.map(product => (
            <Link 
              key={product.id}
              to={`/product/${product.id}`}
              className={`bg-white rounded-lg overflow-hidden shadow-sm ${
                viewMode === 'list' ? 'flex' : ''
              }`}
            >
              <div className={viewMode === 'list' ? 'w-1/3' : 'aspect-square'}>
                <img 
                  src={product.images[0]} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className={`p-3 ${viewMode === 'list' ? 'w-2/3' : ''}`}>
                <h3 className="text-sm font-medium text-gray-900 line-clamp-2">
                  {product.name}
                </h3>
                <p className="text-xs text-gray-500 mt-1">{product.category}</p>
                <div className="mt-2">
                  {product.discountPrice ? (
                    <>
                      <span className="text-sm font-semibold text-gray-900">
                        ${product.discountPrice.toFixed(2)}
                      </span>
                      <span className="ml-2 text-xs text-gray-500 line-through">
                        ${product.price.toFixed(2)}
                      </span>
                    </>
                  ) : (
                    <span className="text-sm font-semibold text-gray-900">
                      ${product.price.toFixed(2)}
                    </span>
                  )}
                </div>
                <div className="mt-1 text-xs text-gray-500">
                  {product.inStock ? 'In Stock' : 'Out of Stock'}
                </div>
                {viewMode === 'list' && (
                  <p className="mt-2 text-sm text-gray-600 line-clamp-2">
                    {product.description}
                  </p>
                )}
              </div>
            </Link>
          ))}
        </div>

        {products.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600">No products found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;