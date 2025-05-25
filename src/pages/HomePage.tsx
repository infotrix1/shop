import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { categories } from '../data/products';
import { HeroSection } from '../components/home/HeroSection';
import { FeaturedCategories } from '../components/home/FeaturedCategories';
import { FeaturedProducts } from '../components/home/FeaturedProducts';
import { PromoBanner } from '../components/home/PromoBanner';
import { Testimonials } from '../components/home/Testimonials';

const HomePage: React.FC = () => {
  return (
    <div className="pb-16 md:pb-0">
      {/* Mobile View */}
      <div className="md:hidden">
        <HeroSection />
        <FeaturedProducts />
      </div>

      {/* Desktop View */}
      <div className="hidden md:block">
        <HeroSection />
        <FeaturedCategories />
        <FeaturedProducts />
        <PromoBanner />
        <Testimonials />
      </div>
    </div>
  );
};

export default HomePage;