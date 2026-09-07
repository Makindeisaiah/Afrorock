import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { products } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { Product } from '../types';

interface ShopPageProps {
  onAddToCart: (product: Product) => void;
}

export const ShopPage: React.FC<ShopPageProps> = ({ onAddToCart }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Gown', 'Crop Top', 'Off-Shoulder'];

  const filteredProducts =
    selectedCategory === 'All'
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="w-full">
      {/* ================= HERO SECTION ================= */}
      <section
        id="shop-hero-section"
        className="w-full pt-32 sm:pt-36 md:pt-44 pb-10 md:pb-12 px-4 sm:px-6 md:px-8"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            id="shop-hero-heading"
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="font-['Playfair_Display',serif] text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-black mb-5 md:mb-6"
          >
            The Collection
          </motion.h1>

          <motion.p
            id="shop-hero-description"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
            className="max-w-[700px] mx-auto text-sm sm:text-base md:text-[17px] leading-relaxed text-neutral-800 font-normal px-2"
          >
            Discover handcrafted African cultural couture. Each piece honors traditional artistry, bold Ankara prints, and bespoke modern tailoring.
          </motion.p>
        </div>
      </section>

      {/* Terracotta/Mustard Accent Gradient Divider */}
      <div className="w-full h-[3px] bg-gradient-to-r from-transparent via-amber-700/60 to-transparent" />

      {/* ================= FILTER BUTTONS & PRODUCTS GRID ================= */}
      <section
        id="shop-products-section"
        className="w-full bg-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-12"
      >
        <div className="max-w-7xl mx-auto">
          {/* Simple Filter Buttons Bar */}
          <div
            id="shop-filter-bar"
            className="flex items-center justify-center flex-wrap gap-2.5 sm:gap-3 mb-12 sm:mb-16"
          >
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <motion.button
                  key={cat}
                  id={`filter-btn-${cat.toLowerCase().replace(/\s+/g, '-')}`}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.15 }}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-6 py-2 sm:py-2.5 rounded-md sm:rounded-lg text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-black text-white shadow-sm'
                      : 'border border-neutral-300 bg-white text-black hover:border-black'
                  }`}
                >
                  {cat}
                </motion.button>
              );
            })}
          </div>

          {/* Product Grid */}
          <div
            id="shop-grid"
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8"
          >
            {filteredProducts.map((prod, idx) => (
              <ProductCard
                key={prod.id}
                product={prod}
                index={idx}
                onAddToCart={onAddToCart}
              />
            ))}
          </div>

          {/* Empty state fallback (if needed) */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-20 text-neutral-500">
              <p className="text-base">No pieces found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
