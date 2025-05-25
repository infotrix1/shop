import { Product, Category } from '../types';

export const categories: Category[] = [
  {
    id: '1',
    name: 'FMCG',
    description: 'Fast Moving Consumer Goods',
    image: 'https://images.pexels.com/photos/3962285/pexels-photo-3962285.jpeg',
    featured: true,
    subcategories: [
      {
        id: 'sub1',
        name: 'Butter/Margarine',
        image: 'https://images.pexels.com/photos/162712/egg-butter-food-eat-162712.jpeg'
      },
      {
        id: 'sub2',
        name: 'Cooking Oil',
        image: 'https://images.pexels.com/photos/4033325/pexels-photo-4033325.jpeg'
      },
      {
        id: 'sub3',
        name: 'Seasoning',
        image: 'https://images.pexels.com/photos/4198174/pexels-photo-4198174.jpeg'
      },
      {
        id: 'sub4',
        name: 'Sugar/Salt',
        image: 'https://images.pexels.com/photos/6937434/pexels-photo-6937434.jpeg'
      }
    ]
  },
  {
    id: '2',
    name: 'Beauty & Cosmetics',
    description: 'Personal care and beauty products',
    image: 'https://images.pexels.com/photos/2633986/pexels-photo-2633986.jpeg',
    featured: true
  },
  {
    id: '3',
    name: 'Fashion',
    description: 'Clothing and accessories',
    image: 'https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg',
    featured: true,
    comingSoon: true
  },
  {
    id: '4',
    name: 'Electronics',
    description: 'Electronic devices and accessories',
    image: 'https://images.pexels.com/photos/343457/pexels-photo-343457.jpeg',
    featured: false
  },
  {
    id: '5',
    name: 'Building & Construction',
    description: 'Construction materials and tools',
    image: 'https://images.pexels.com/photos/585418/pexels-photo-585418.jpeg',
    featured: false
  },
  {
    id: '6',
    name: 'Phones & Computers',
    description: 'Mobile devices and computing equipment',
    image: 'https://images.pexels.com/photos/1647976/pexels-photo-1647976.jpeg',
    featured: false
  }
];

export const products: Product[] = [
  {
    id: '1',
    name: 'Professional Laptop',
    description: 'High-performance laptop for business and professional use with long battery life and fast processing power.',
    price: 1299.99,
    discountPrice: 1199.99,
    images: [
      'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/459653/pexels-photo-459653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    category: 'Electronics',
    tags: ['laptop', 'computer', 'business', 'professional'],
    inStock: true,
    stockCount: 45,
    rating: 4.8,
    reviews: [
      {
        id: 'r1',
        userId: 'u1',
        userName: 'John Smith',
        rating: 5,
        comment: 'Excellent laptop for business use. Battery lasts all day!',
        date: '2023-08-15'
      },
      {
        id: 'r2',
        userId: 'u2',
        userName: 'Sarah Johnson',
        rating: 4.5,
        comment: 'Very fast and reliable. Great for multitasking.',
        date: '2023-07-28'
      }
    ],
    featured: true
  },
  {
    id: '2',
    name: 'Ergonomic Office Chair',
    description: 'Comfortable ergonomic chair designed for long hours of sitting with adjustable height and lumbar support.',
    price: 349.99,
    images: [
      'https://images.pexels.com/photos/1957478/pexels-photo-1957478.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/1957477/pexels-photo-1957477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    category: 'Furniture',
    tags: ['chair', 'ergonomic', 'office', 'furniture'],
    inStock: true,
    stockCount: 28,
    rating: 4.7,
    reviews: [
      {
        id: 'r3',
        userId: 'u3',
        userName: 'Michael Wong',
        rating: 5,
        comment: 'Best office chair I\'ve ever used. My back pain is gone!',
        date: '2023-09-05'
      }
    ],
    featured: true
  },
  {
    id: '3',
    name: 'Wireless Noise-Cancelling Headphones',
    description: 'Premium wireless headphones with active noise cancellation, perfect for focused work in busy environments.',
    price: 249.99,
    discountPrice: 199.99,
    images: [
      'https://images.pexels.com/photos/577769/pexels-photo-577769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    category: 'Electronics',
    tags: ['headphones', 'audio', 'wireless', 'noise-cancelling'],
    inStock: true,
    stockCount: 36,
    rating: 4.6,
    reviews: [
      {
        id: 'r4',
        userId: 'u4',
        userName: 'Emily Chen',
        rating: 4.5,
        comment: 'Great sound quality and the noise cancellation is impressive.',
        date: '2023-08-22'
      }
    ],
    featured: true
  },
  {
    id: '4',
    name: 'Premium Notebook Set',
    description: 'Set of 5 high-quality hardcover notebooks with acid-free paper, perfect for meetings and note-taking.',
    price: 39.99,
    images: [
      'https://images.pexels.com/photos/6867133/pexels-photo-6867133.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/6373298/pexels-photo-6373298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    category: 'Office Supplies',
    tags: ['notebook', 'stationery', 'office', 'writing'],
    inStock: true,
    stockCount: 120,
    rating: 4.3,
    reviews: [
      {
        id: 'r5',
        userId: 'u5',
        userName: 'David Miller',
        rating: 4,
        comment: 'Good quality paper and sturdy covers. Would buy again.',
        date: '2023-09-12'
      }
    ],
    featured: false
  },
  {
    id: '5',
    name: 'Smart Digital Whiteboard',
    description: 'Interactive digital whiteboard for collaborative meetings and presentations with cloud saving functionality.',
    price: 899.99,
    images: [
      'https://images.pexels.com/photos/8636588/pexels-photo-8636588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/6177645/pexels-photo-6177645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    category: 'Electronics',
    tags: ['whiteboard', 'digital', 'meetings', 'collaboration'],
    inStock: true,
    stockCount: 8,
    rating: 4.9,
    reviews: [
      {
        id: 'r6',
        userId: 'u6',
        userName: 'Jessica Taylor',
        rating: 5,
        comment: 'Transformed our meeting productivity. Worth every penny!',
        date: '2023-07-30'
      }
    ],
    featured: true
  },
  {
    id: '6',
    name: 'Professional Blazer',
    description: 'Tailored business blazer made from high-quality fabric with modern cut and comfortable fit.',
    price: 189.99,
    discountPrice: 159.99,
    images: [
      'https://images.pexels.com/photos/6626903/pexels-photo-6626903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/5699514/pexels-photo-5699514.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    category: 'Apparel',
    tags: ['blazer', 'clothing', 'professional', 'business'],
    inStock: true,
    stockCount: 25,
    rating: 4.4,
    reviews: [
      {
        id: 'r7',
        userId: 'u7',
        userName: 'Robert Johnson',
        rating: 4.5,
        comment: 'Great fit and excellent quality material. Very professional looking.',
        date: '2023-09-01'
      }
    ],
    featured: false
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};

export const searchProducts = (query: string): Product[] => {
  const searchTerm = query.toLowerCase();
  return products.filter(product => 
    product.name.toLowerCase().includes(searchTerm) || 
    product.description.toLowerCase().includes(searchTerm) || 
    product.tags.some(tag => tag.toLowerCase().includes(searchTerm))
  );
};