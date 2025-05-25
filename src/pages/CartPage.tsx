import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ArrowLeft, ShoppingCart } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { useCart } from '../context/CartContext';

const CartPage: React.FC = () => {
  const { state: cart, removeFromCart, updateQuantity, clearCart } = useCart();
  const { items, totalPrice } = cart;
  
  // Calculate shipping cost - free shipping over $500
  const shippingCost = totalPrice >= 500 ? 0 : 25;
  const taxRate = 0.08; // 8% tax rate
  const taxAmount = totalPrice * taxRate;
  const orderTotal = totalPrice + shippingCost + taxAmount;
  
  if (items.length === 0) {
    return (
      <div className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center py-16 max-w-md mx-auto">
            <div className="mb-6 w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto">
              <ShoppingCart size={32} className="text-gray-400" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Your Cart is Empty</h1>
            <p className="text-gray-600 mb-8">Looks like you haven't added any products to your cart yet.</p>
            <Link 
              to="/products" 
              className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="py-24">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>
        
        <div className="flex flex-col lg:flex-row lg:space-x-8">
          {/* Cart Items */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200 mb-6">
              <div className="hidden md:flex bg-gray-50 border-b border-gray-200 text-sm font-medium text-gray-500 uppercase tracking-wider">
                <div className="w-full md:w-2/5 px-6 py-3">Product</div>
                <div className="w-full md:w-1/5 px-4 py-3 text-center">Price</div>
                <div className="w-full md:w-1/5 px-4 py-3 text-center">Quantity</div>
                <div className="w-full md:w-1/5 px-4 py-3 text-center">Total</div>
              </div>
              
              {items.map((item) => {
                const { product, quantity } = item;
                const itemPrice = product.discountPrice || product.price;
                const itemTotal = itemPrice * quantity;
                
                return (
                  <div 
                    key={product.id} 
                    className="flex flex-col md:flex-row items-center py-6 px-4 md:px-0 border-b border-gray-200 last:border-none"
                  >
                    {/* Product info */}
                    <div className="w-full md:w-2/5 flex items-center px-2 md:px-6 mb-4 md:mb-0">
                      <div className="w-20 h-20 flex-shrink-0 bg-gray-100 rounded overflow-hidden mr-4">
                        <img 
                          src={product.images[0]} 
                          alt={product.name}
                          className="w-full h-full object-cover object-center"
                        />
                      </div>
                      <div>
                        <Link to={`/product/${product.id}`} className="text-gray-900 font-medium hover:text-blue-600">
                          {product.name}
                        </Link>
                        <p className="text-sm text-gray-500 mt-1">Category: {product.category}</p>
                      </div>
                    </div>
                    
                    {/* Price */}
                    <div className="w-full md:w-1/5 text-center md:px-4 mb-4 md:mb-0">
                      <span className="md:hidden inline-block text-gray-500 mr-1">Price:</span>
                      <span className="font-medium">${itemPrice.toFixed(2)}</span>
                      {product.discountPrice && (
                        <span className="block text-sm text-gray-500 line-through">${product.price.toFixed(2)}</span>
                      )}
                    </div>
                    
                    {/* Quantity */}
                    <div className="w-full md:w-1/5 flex items-center justify-center md:px-4 mb-4 md:mb-0">
                      <div className="flex items-center">
                        <button
                          onClick={() => updateQuantity(product.id, quantity - 1)}
                          disabled={quantity <= 1}
                          className="text-gray-500 hover:text-gray-700 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={16} />
                        </button>
                        <span className="mx-3 w-8 text-center">{quantity}</span>
                        <button
                          onClick={() => updateQuantity(product.id, quantity + 1)}
                          disabled={product.stockCount !== undefined && quantity >= product.stockCount}
                          className="text-gray-500 hover:text-gray-700 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
                          aria-label="Increase quantity"
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                    </div>
                    
                    {/* Total & Remove */}
                    <div className="w-full md:w-1/5 flex items-center justify-between md:justify-center px-2 md:px-4">
                      <div>
                        <span className="md:hidden inline-block text-gray-500 mr-1">Total:</span>
                        <span className="font-semibold">${itemTotal.toFixed(2)}</span>
                      </div>
                      <button
                        onClick={() => removeFromCart(product.id)}
                        className="text-gray-400 hover:text-red-500 transition-colors ml-4 focus:outline-none"
                        aria-label="Remove item"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <Link 
                to="/products" 
                className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
              >
                <ArrowLeft size={16} className="mr-1" />
                Continue Shopping
              </Link>
              
              <button 
                onClick={clearCart}
                className="text-red-600 hover:text-red-800 transition-colors"
              >
                Clear Cart
              </button>
            </div>
          </div>
          
          {/* Order Summary */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Order Summary</h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal ({cart.totalItems} items)</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span>{shippingCost === 0 ? 'Free' : `$${shippingCost.toFixed(2)}`}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Tax (8%)</span>
                  <span>${taxAmount.toFixed(2)}</span>
                </div>
                
                <div className="border-t border-gray-200 pt-3 mt-3">
                  <div className="flex justify-between font-semibold text-gray-900">
                    <span>Order Total</span>
                    <span>${orderTotal.toFixed(2)}</span>
                  </div>
                </div>
              </div>
              
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Enter promo code"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              
              <div className="space-y-4">
                <Link to="/checkout">
                  <Button fullWidth size="lg">
                    Proceed to Checkout
                  </Button>
                </Link>
                
                <div className="text-center text-sm text-gray-500">
                  <p>Secure Checkout</p>
                </div>
                
                <div className="flex justify-center space-x-2 mt-4">
                  <img src="https://via.placeholder.com/40x25" alt="Visa" className="h-6" />
                  <img src="https://via.placeholder.com/40x25" alt="Mastercard" className="h-6" />
                  <img src="https://via.placeholder.com/40x25" alt="PayPal" className="h-6" />
                  <img src="https://via.placeholder.com/40x25" alt="Amex" className="h-6" />
                </div>
              </div>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-4 mt-6 border border-blue-100">
              <div className="flex items-start">
                <ShoppingCart size={20} className="text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-blue-800 text-sm font-medium">Free shipping on orders over $500</p>
                  <p className="text-blue-600 text-xs mt-1">Add ${Math.max(0, 500 - totalPrice).toFixed(2)} more to qualify for free shipping.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;