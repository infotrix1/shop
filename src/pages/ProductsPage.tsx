import React from 'react';
import { ProductGrid } from '../components/products/ProductGrid';
import { products } from '../data/products';

const ProductsPage: React.FC = () => {
  return (
    <div className="py-24">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">All Products</h1>
          <p className="mt-2 text-gray-600">Browse our complete collection of wholesale products for your business</p>
        </div>
        
        <ProductGrid products={products} />
      </div>
    </div>
  );
};

export default ProductsPage;