import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import CategoryPage from './pages/CategoryPage';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';
import { LocationProvider } from './context/LocationContext';
import { useLocation } from './context/LocationContext';
import { LocationModal } from './components/location/LocationModal';

const AppContent: React.FC = () => {
  const { isLocationSet } = useLocation();
  const [showLocationModal, setShowLocationModal] = useState(!isLocationSet);

  useEffect(() => {
    if (!isLocationSet) {
      setShowLocationModal(true);
    }
  }, [isLocationSet]);

  if (!isLocationSet) {
    return (
      <LocationModal
        isOpen={showLocationModal}
        onClose={() => setShowLocationModal(false)}
      />
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-16 md:pt-16 pb-20 md:pb-0">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/category/:categoryName" element={<CategoryPage />} />
        </Routes>
      </main>
      <div className="md:block hidden">
        <Footer />
      </div>
    </div>
  );
};

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <LocationProvider>
          <Router>
            <AppContent />
          </Router>
        </LocationProvider>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;