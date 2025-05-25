import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Heart, Star } from 'lucide-react';
import { Product } from '../../types';
import { Button } from '../ui/Button';
import { useCart } from '../../context/CartContext';

interface ProductCardProps {
  product: Product;
  layout?: 'grid' | 'list';
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, layout = 'grid' }) => {
  const { addToCart } = useCart();
  const { id, name, description, price, discountPrice, images, rating, inStock } = product;
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
  };
  
  const displayPrice = discountPrice || price;
  const hasDiscount = discountPrice && discountPrice < price;
  
  if (layout === 'list') {
    return (
      <div className="group bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden border border-gray-200">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3 relative">
            <Link to={`/product/${id}`} className="block">
              <img
                src={images[0]}
                alt={name}
                className="w-full h-60 md:h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
              />
              {hasDiscount && (
                <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
                  {Math.round((1 - discountPrice / price) * 100)}% OFF
                </div>
              )}
            </Link>
          </div>
          
          <div className="p-4 md:w-2/3 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start">
                <Link to={`/product/${id}`}>
                  <h3 className="text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors">{name}</h3>
                </Link>
                <button className="text-gray-400 hover:text-red-500 transition-colors" aria-label="Add to wishlist">
                  <Heart size={20} />
                </button>
              </div>
              
              <div className="flex items-center mt-1 mb-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={`${
                        i < Math.floor(rating) 
                          ? 'text-yellow-400 fill-yellow-400' 
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-500 ml-1">({rating})</span>
              </div>
              
              <p className="text-gray-600 line-clamp-3 mb-4">{description}</p>
            </div>
            
            <div className="flex flex-wrap items-end justify-between mt-auto">
              <div>
                <div className="flex items-center">
                  {hasDiscount && (
                    <span className="text-gray-500 line-through mr-2">${price.toFixed(2)}</span>
                  )}
                  <span className="text-xl font-semibold text-gray-900">${displayPrice.toFixed(2)}</span>
                </div>
                
                <div className="text-sm text-gray-600 mt-1">
                  {inStock ? 'In Stock' : 'Out of Stock'}
                </div>
              </div>
              
              <div className="mt-2 sm:mt-0">
                <Button
                  onClick={handleAddToCart}
                  disabled={!inStock}
                  icon={<ShoppingCart size={18} />}
                >
                  Add to Cart
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="group bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden border border-gray-200">
      <div className="relative">
        <Link to={`/product/${id}`} className="block">
          <img
            src={images[0]}
            alt={name}
            className="w-full h-36 sm:h-48 object-cover object-center group-hover:scale-105 transition-transform duration-300"
          />
          {hasDiscount && (
            <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
              {Math.round((1 - discountPrice / price) * 100)}% OFF
            </div>
          )}
        </Link>
        <button 
          className="absolute top-2 right-2 text-gray-400 hover:text-red-500 transition-colors bg-white bg-opacity-70 hover:bg-opacity-100 rounded-full p-1.5"
          aria-label="Add to wishlist"
        >
          <Heart size={18} />
        </button>
      </div>
      
      <div className="p-3 sm:p-4">
        <Link to={`/product/${id}`}>
          <h3 className="text-sm sm:text-base font-medium text-gray-900 hover:text-blue-600 transition-colors line-clamp-1">{name}</h3>
        </Link>
        
        <div className="flex items-center mt-1 mb-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={12}
                className={`${
                  i < Math.floor(rating) 
                    ? 'text-yellow-400 fill-yellow-400' 
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-gray-500 ml-1">({rating})</span>
        </div>
        
        <div className="flex items-center justify-between mb-3">
          <div>
            {hasDiscount && (
              <span className="text-gray-500 text-sm line-through mr-1">${price.toFixed(2)}</span>
            )}
            <span className="text-base sm:text-lg font-semibold text-gray-900">${displayPrice.toFixed(2)}</span>
          </div>
          
          <div className="text-xs text-gray-600">
            {inStock ? 'In Stock' : 'Out of Stock'}
          </div>
        </div>
        
        <Button
          onClick={handleAddToCart}
          disabled={!inStock}
          fullWidth
          size="sm"
          icon={<ShoppingCart size={16} />}
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
};