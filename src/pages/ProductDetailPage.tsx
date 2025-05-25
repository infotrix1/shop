import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, Heart, Share2, Star, 
  Minus, Plus, ShoppingCart, ChevronDown,
  Info, Truck, Shield, ArrowRight
} from 'lucide-react';
import { getProductById } from '../data/products';
import { useCart } from '../context/CartContext';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = getProductById(id || '');
  const { addToCart } = useCart();
  
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [activeTab, setActiveTab] = useState<'description' | 'specifications' | 'reviews'>('description');
  
  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="p-4">
          <h1 className="text-xl font-semibold text-gray-900 mb-4">Product Not Found</h1>
          <Link 
            to="/" 
            className="inline-flex items-center text-blue-600"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Home
          </Link>
        </div>
      </div>
    );
  }
  
  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-4 bg-white border-b">
        <Link to={`/category/${product.category.toLowerCase()}`} className="text-gray-600">
          <ArrowLeft size={24} />
        </Link>
        <div className="flex space-x-4">
          <button className="text-gray-600 hover:text-gray-900">
            <Share2 size={24} />
          </button>
          <button className="text-gray-600 hover:text-red-500">
            <Heart size={24} />
          </button>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:block pt-8">
        <div className="container mx-auto px-4">
          <div className="flex gap-8">
            {/* Image Gallery */}
            <div className="w-1/2">
              <div className="aspect-square bg-white rounded-lg overflow-hidden">
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-contain"
                />
              </div>
              {product.images.length > 1 && (
                <div className="flex gap-4 mt-4">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`w-20 h-20 rounded-lg overflow-hidden border-2 ${
                        selectedImage === index ? 'border-blue-500' : 'border-transparent'
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${product.name} view ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="w-1/2">
              <h1 className="text-2xl font-bold text-gray-900 mb-2">{product.name}</h1>
              
              <div className="flex items-center mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className={`${
                        i < Math.floor(product.rating) 
                          ? 'text-yellow-400 fill-yellow-400' 
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-600">
                  {product.rating} ({product.reviews.length} reviews)
                </span>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline">
                  {product.discountPrice && (
                    <span className="text-gray-500 line-through text-lg mr-2">
                      ${product.price.toFixed(2)}
                    </span>
                  )}
                  <span className="text-3xl font-bold text-gray-900">
                    ${(product.discountPrice || product.price).toFixed(2)}
                  </span>
                </div>
                
                <p className="mt-2 text-sm text-gray-600">
                  {product.inStock ? (
                    <span className="text-green-600">In Stock</span>
                  ) : (
                    <span className="text-red-600">Out of Stock</span>
                  )}
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="font-medium text-gray-900 mb-2">Description</h3>
                  <p className="text-gray-600">{product.description}</p>
                </div>

                <div>
                  <h3 className="font-medium text-gray-900 mb-2">Quantity</h3>
                  <div className="flex items-center border rounded-lg w-fit">
                    <button
                      onClick={() => quantity > 1 && setQuantity(q => q - 1)}
                      className="p-3 text-gray-600 hover:text-gray-900"
                      disabled={quantity <= 1}
                    >
                      <Minus size={20} />
                    </button>
                    <span className="px-6 py-3 text-gray-900">{quantity}</span>
                    <button
                      onClick={() => setQuantity(q => q + 1)}
                      className="p-3 text-gray-600 hover:text-gray-900"
                      disabled={!product.inStock}
                    >
                      <Plus size={20} />
                    </button>
                  </div>
                </div>

                <button
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                  className="w-full bg-blue-600 text-white py-4 rounded-lg font-medium flex items-center justify-center disabled:bg-gray-400 hover:bg-blue-700"
                >
                  <ShoppingCart size={20} className="mr-2" />
                  Add to Cart
                </button>
              </div>

              <div className="mt-8 space-y-4">
                <div className="flex items-center text-gray-600">
                  <Truck className="w-5 h-5 mr-3" />
                  <span>Free shipping on orders over $500</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Shield className="w-5 h-5 mr-3" />
                  <span>1 year warranty</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Info className="w-5 h-5 mr-3" />
                  <span>30-day return policy</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden mt-16">
        {/* Product Images */}
        <div className="relative aspect-square bg-white">
          <img
            src={product.images[selectedImage]}
            alt={product.name}
            className="w-full h-full object-contain"
          />
          {product.discountPrice && (
            <div className="absolute top-4 left-4 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
              {Math.round((1 - product.discountPrice / product.price) * 100)}% OFF
            </div>
          )}
        </div>
        
        {product.images.length > 1 && (
          <div className="flex gap-2 p-4 overflow-x-auto">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden border-2 ${
                  selectedImage === index ? 'border-blue-500' : 'border-transparent'
                }`}
              >
                <img
                  src={image}
                  alt={`${product.name} view ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        )}

        {/* Product Info */}
        <div className="p-4 bg-white">
          <h1 className="text-xl font-semibold text-gray-900">{product.name}</h1>
          
          <div className="flex items-center mt-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  className={`${
                    i < Math.floor(product.rating) 
                      ? 'text-yellow-400 fill-yellow-400' 
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="ml-2 text-sm text-gray-600">
              {product.rating} ({product.reviews.length} reviews)
            </span>
          </div>

          <div className="mt-4">
            <div className="flex items-baseline">
              {product.discountPrice && (
                <span className="text-gray-500 line-through text-sm mr-2">
                  ${product.price.toFixed(2)}
                </span>
              )}
              <span className="text-2xl font-bold text-gray-900">
                ${(product.discountPrice || product.price).toFixed(2)}
              </span>
            </div>
            
            <p className="mt-1 text-sm text-gray-600">
              {product.inStock ? (
                <span className="text-green-600">In Stock</span>
              ) : (
                <span className="text-red-600">Out of Stock</span>
              )}
            </p>
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-2 bg-white">
          <div className="flex border-b">
            {(['description', 'specifications', 'reviews'] as const).map((tab) => (
              <button
                key={tab}
                className={`flex-1 py-3 text-sm font-medium ${
                  activeTab === tab
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-600'
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          <div className="p-4">
            {activeTab === 'description' && (
              <p className="text-gray-600 text-sm">{product.description}</p>
            )}
            {activeTab === 'specifications' && (
              <div className="space-y-4">
                <div className="flex justify-between py-2 border-b">
                  <span className="text-gray-600">Brand</span>
                  <span className="font-medium">Generic</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-gray-600">Category</span>
                  <span className="font-medium">{product.category}</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-gray-600">Tags</span>
                  <span className="font-medium">{product.tags.join(', ')}</span>
                </div>
              </div>
            )}
            {activeTab === 'reviews' && (
              <div className="space-y-4">
                {product.reviews.map(review => (
                  <div key={review.id} className="border-b pb-4">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{review.userName}</span>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={14}
                            className={`${
                              i < Math.floor(review.rating) 
                                ? 'text-yellow-400 fill-yellow-400' 
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm mt-2">{review.comment}</p>
                    <span className="text-gray-500 text-xs mt-1">{review.date}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Shipping Info */}
        <div className="mt-2 p-4 bg-white space-y-4">
          <div className="flex items-center text-gray-600">
            <Truck className="w-5 h-5 mr-3" />
            <span className="text-sm">Free shipping on orders over $500</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Shield className="w-5 h-5 mr-3" />
            <span className="text-sm">1 year warranty</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Info className="w-5 h-5 mr-3" />
            <span className="text-sm">30-day return policy</span>
          </div>
        </div>
      </div>

      {/* Mobile Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t md:hidden">
        <div className="flex items-center justify-between">
          <div className="flex items-center border rounded-lg">
            <button
              onClick={() => quantity > 1 && setQuantity(q => q - 1)}
              className="p-2 text-gray-600"
              disabled={quantity <= 1}
            >
              <Minus size={20} />
            </button>
            <span className="px-4 py-2 text-gray-900">{quantity}</span>
            <button
              onClick={() => setQuantity(q => q + 1)}
              className="p-2 text-gray-600"
              disabled={!product.inStock}
            >
              <Plus size={20} />
            </button>
          </div>
          
          <button
            onClick={handleAddToCart}
            disabled={!product.inStock}
            className="flex-1 ml-4 bg-blue-600 text-white py-3 px-6 rounded-lg font-medium flex items-center justify-center disabled:bg-gray-400"
          >
            <ShoppingCart size={20} className="mr-2" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;