export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  discountPrice?: number;
  images: string[];
  category: string;
  tags: string[];
  inStock: boolean;
  stockCount?: number;
  rating: number;
  reviews: Review[];
  featured?: boolean;
}

export interface Review {
  id: string;
  userId: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  isLoggedIn: boolean;
}

export interface Subcategory {
  id: string;
  name: string;
  image: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
  featured?: boolean;
  comingSoon?: boolean;
  subcategories?: Subcategory[];
}