import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, ArrowRight } from 'lucide-react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ShopPage } from './pages/ShopPage';
import { BlogPage } from './pages/BlogPage';
import { ContactPage } from './pages/ContactPage';
import { CheckoutPage } from './pages/CheckoutPage';
import { CartItem, Product } from './types';

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleAddToCart = (product: Product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });

    setToastMessage(`Added "${product.name}" to your bag`);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  const handleUpdateQuantity = (productId: number, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.product.id === productId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter((item): item is CartItem => item !== null)
    );
  };

  const handleRemoveItem = (productId: number) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const totalCartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div
        id="afrorock-app"
        className="min-h-screen bg-white text-neutral-900 flex flex-col font-sans selection:bg-amber-100 selection:text-amber-900"
      >
        {/* Fixed Header & Navigation shared on all pages */}
        <Header cartCount={totalCartCount} setCartCount={() => {}} />

        {/* Floating Cart Notification Toast */}
        <AnimatePresence>
          {toastMessage && (
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="fixed bottom-6 right-6 z-50 max-w-sm bg-black text-white p-4 rounded-xl shadow-2xl border border-neutral-800 flex items-center space-x-3"
            >
              <div className="w-8 h-8 rounded-full bg-[#b8336a] flex items-center justify-center flex-shrink-0">
                <ShoppingBag className="w-4 h-4 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs sm:text-sm font-medium text-white truncate">
                  {toastMessage}
                </p>
                <Link
                  to="/checkout"
                  onClick={() => setToastMessage(null)}
                  className="text-xs text-[#C59A27] hover:underline font-bold inline-flex items-center space-x-1 mt-0.5"
                >
                  <span>Proceed to Checkout</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Routed Content */}
        <main className="flex-1 w-full">
          <Routes>
            <Route path="/" element={<HomePage onAddToCart={handleAddToCart} />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/shop" element={<ShopPage onAddToCart={handleAddToCart} />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route
              path="/checkout"
              element={
                <CheckoutPage
                  cartItems={cartItems}
                  onUpdateQuantity={handleUpdateQuantity}
                  onRemoveItem={handleRemoveItem}
                  onClearCart={handleClearCart}
                  onAddToCart={handleAddToCart}
                />
              }
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Global Footer shared on all pages */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}
