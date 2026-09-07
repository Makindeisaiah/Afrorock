import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Truck,
  RotateCcw,
  CreditCard,
  Headphones,
  Check,
  HelpCircle,
  Star,
} from 'lucide-react';
import heroLeft from '../assets/hero-left.jpg';
import heroCenter from '../assets/hero-center.jpg';
import heroRight from '../assets/hero-right.jpg';
import category1 from '../assets/category-1.jpg';
import category2 from '../assets/category-2.jpg';
import category3 from '../assets/category-3.jpg';
import category4 from '../assets/category-4.jpg';
import aboutPhoto from '../assets/about-photo.jpg';
import avatar1 from '../assets/avatar-1.jpg';
import avatar2 from '../assets/avatar-2.jpg';
import avatar3 from '../assets/avatar-3.jpg';
import { products } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { Product } from '../types';

interface HomePageProps {
  onAddToCart: (product: Product) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onAddToCart }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setNewsletterEmail('');
        setSubscribed(false);
      }, 4000);
    }
  };

  return (
    <div className="w-full">
      {/* ================= HERO SECTION (PHASE 2) ================= */}
      <section id="hero-section" className="w-full pt-32 sm:pt-36 md:pt-44 pb-8 md:pb-12 px-4 sm:px-6 md:px-8">
        <div className="max-w-6xl mx-auto text-center">
          {/* Two-Line Large Serif Heading */}
          <motion.h1
            id="hero-heading"
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="font-['Playfair_Display',serif] text-4xl sm:text-5xl md:text-6xl lg:text-[70px] font-normal tracking-tight leading-[1.08] text-black mb-5 md:mb-6"
          >
            African
            <br />
            Cultural Couture
          </motion.h1>

          {/* Subheading / Description Paragraph */}
          <motion.p
            id="hero-description"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
            className="max-w-[750px] mx-auto text-xs sm:text-sm md:text-[15px] leading-relaxed text-neutral-800 font-normal px-2 mb-10 sm:mb-14 md:mb-16"
          >
            Heritage evokes the rich cultural legacy and traditional artistry of African fabrics, aligning with the store's focus on authentic prints and designs. It's concise, elegant, and sets a tone of pride and authenticity, which complements the stunning visuals of the models in vibrant outfits.
          </motion.p>

          {/* 3-Image Collage Row */}
          <div
            id="hero-image-collage"
            className="flex flex-col md:flex-row items-center md:items-end justify-center gap-4 sm:gap-5 md:gap-6 lg:gap-8 max-w-5xl mx-auto"
          >
            {/* Left Image (shorter height, rounded corners) */}
            <motion.div
              id="hero-image-left-container"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.25, ease: 'easeOut' }}
              className="w-full max-w-[340px] md:max-w-none md:flex-1 h-[360px] sm:h-[420px] md:h-[470px] lg:h-[510px] rounded-2xl overflow-hidden bg-neutral-100 shadow-xs"
            >
              <img
                id="hero-image-left"
                src={heroLeft}
                alt="Model in vivid Ankara off-shoulder dress"
                className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            {/* Center Image (noticeably TALLER than the sides, rounded corners, pops up) */}
            <motion.div
              id="hero-image-center-container"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
              className="w-full max-w-[340px] md:max-w-none md:flex-1 h-[440px] sm:h-[500px] md:h-[570px] lg:h-[620px] rounded-2xl overflow-hidden bg-neutral-100 shadow-sm"
            >
              <img
                id="hero-image-center"
                src={heroCenter}
                alt="Statement African Cultural Couture centerpiece gown"
                className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            {/* Right Image (shorter height matching left, rounded corners) */}
            <motion.div
              id="hero-image-right-container"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.25, ease: 'easeOut' }}
              className="w-full max-w-[340px] md:max-w-none md:flex-1 h-[360px] sm:h-[420px] md:h-[470px] lg:h-[510px] rounded-2xl overflow-hidden bg-neutral-100 shadow-xs"
            >
              <img
                id="hero-image-right"
                src={heroRight}
                alt="African print contemporary tailored fashion dress"
                className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= BENEFIT / ASSURANCE STRIP (PHASE 2) ================= */}
      <section
        id="benefits-assurance-section"
        className="w-full bg-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 border-t border-neutral-100"
      >
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-6 lg:gap-8">
          {/* 1. FREE DELIVERY */}
          <motion.div
            id="benefit-free-delivery"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0, ease: 'easeOut' }}
            className="flex flex-col items-center text-center group cursor-default"
          >
            <div className="mb-2 text-black transition-transform duration-200 group-hover:-translate-y-0.5">
              <Truck className="w-8 h-8 sm:w-9 sm:h-9 stroke-[2.2]" />
            </div>
            <span className="font-extrabold text-[13px] sm:text-sm md:text-[14px] text-black tracking-wider uppercase">
              FREE DELIVERY
            </span>
          </motion.div>

          {/* 2. 30 DAYS RETURN */}
          <motion.div
            id="benefit-30-days-return"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
            className="flex flex-col items-center text-center group cursor-default"
          >
            <div className="mb-2 text-black transition-transform duration-200 group-hover:-translate-y-0.5">
              <div className="w-8 h-8 sm:w-9 sm:h-9 relative flex items-center justify-center">
                <div className="w-6 h-6 border-2 border-black rounded-sm flex items-center justify-center">
                  <RotateCcw className="w-3.5 h-3.5 text-black stroke-[2.8]" />
                </div>
              </div>
            </div>
            <span className="font-extrabold text-[13px] sm:text-sm md:text-[14px] text-black tracking-wider uppercase">
              30 DAYS RETURN
            </span>
          </motion.div>

          {/* 3. SECURE PAYMENT */}
          <motion.div
            id="benefit-secure-payment"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
            className="flex flex-col items-center text-center group cursor-default"
          >
            <div className="mb-2 text-black transition-transform duration-200 group-hover:-translate-y-0.5">
              <div className="w-8 h-8 sm:w-9 sm:h-9 relative flex items-center justify-center">
                <CreditCard className="w-8 h-8 sm:w-9 sm:h-9 text-black stroke-[2.2]" />
                <div className="absolute -bottom-0.5 -right-0.5 bg-white rounded-full p-0.5 shadow-xs">
                  <Check className="w-3.5 h-3.5 text-black stroke-[3.5]" />
                </div>
              </div>
            </div>
            <span className="font-extrabold text-[13px] sm:text-sm md:text-[14px] text-black tracking-wider uppercase">
              SECURE PAYMENT
            </span>
          </motion.div>

          {/* 4. 24/7 SUPPORT */}
          <motion.div
            id="benefit-247-support"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}
            className="flex flex-col items-center text-center group cursor-default"
          >
            <div className="mb-2 text-black transition-transform duration-200 group-hover:-translate-y-0.5">
              <div className="w-8 h-8 sm:w-9 sm:h-9 relative flex items-center justify-center">
                <Headphones className="w-8 h-8 sm:w-9 sm:h-9 text-black stroke-[2.2]" />
                <div className="absolute -top-1 -right-1 bg-white rounded-full shadow-xs">
                  <HelpCircle className="w-3.5 h-3.5 text-black stroke-[2.8]" />
                </div>
              </div>
            </div>
            <span className="font-extrabold text-[13px] sm:text-sm md:text-[14px] text-black tracking-wider uppercase">
              24/7 SUPPORT
            </span>
          </motion.div>
        </div>
      </section>

      {/* Terracotta/Mustard Accent Gradient Divider */}
      <div className="w-full h-[3px] bg-gradient-to-r from-transparent via-amber-700/60 to-transparent" />

      {/* ================= CATEGORIES SECTION (PHASE 3) ================= */}
      <section
        id="categories-section"
        className="w-full bg-white py-14 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-12"
      >
        <div className="max-w-7xl mx-auto">
          {/* Section Heading */}
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2
              id="categories-heading"
              className="font-['Playfair_Display',serif] text-3xl sm:text-4xl md:text-5xl font-normal text-black tracking-tight"
            >
              New Category
            </h2>
          </div>

          {/* 4 Portrait Category Cards Grid */}
          <div
            id="categories-grid"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5"
          >
            {/* Category 1 */}
            <motion.div
              id="category-card-1"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0, ease: 'easeOut' }}
              className="group relative overflow-hidden bg-neutral-100 aspect-[3/4.6] cursor-pointer"
            >
              <img
                id="category-img-1"
                src={category1}
                alt="Gown collection"
                className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent flex items-end justify-center p-6 pb-8">
                <span className="font-['Playfair_Display',serif] text-2xl sm:text-3xl text-white font-normal tracking-wide">
                  Gown
                </span>
              </div>
            </motion.div>

            {/* Category 2 */}
            <motion.div
              id="category-card-2"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
              className="group relative overflow-hidden bg-neutral-100 aspect-[3/4.6] cursor-pointer"
            >
              <img
                id="category-img-2"
                src={category2}
                alt="Gown collection"
                className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent flex items-end justify-center p-6 pb-8">
                <span className="font-['Playfair_Display',serif] text-2xl sm:text-3xl text-white font-normal tracking-wide">
                  Gown
                </span>
              </div>
            </motion.div>

            {/* Category 3 */}
            <motion.div
              id="category-card-3"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
              className="group relative overflow-hidden bg-neutral-100 aspect-[3/4.6] cursor-pointer"
            >
              <img
                id="category-img-3"
                src={category3}
                alt="Off-Shoulder collection"
                className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent flex items-end justify-center p-6 pb-8">
                <span className="font-['Playfair_Display',serif] text-2xl sm:text-3xl text-white font-normal tracking-wide">
                  Of-Shoulder
                </span>
              </div>
            </motion.div>

            {/* Category 4 */}
            <motion.div
              id="category-card-4"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}
              className="group relative overflow-hidden bg-neutral-100 aspect-[3/4.6] cursor-pointer"
            >
              <img
                id="category-img-4"
                src={category4}
                alt="Gown collection"
                className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent flex items-end justify-center p-6 pb-8">
                <span className="font-['Playfair_Display',serif] text-2xl sm:text-3xl text-white font-normal tracking-wide">
                  Gown
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= PRODUCT SECTION (PHASE 3) ================= */}
      <section
        id="product-section"
        className="w-full bg-white py-14 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-12 border-t border-neutral-100"
      >
        <div className="max-w-7xl mx-auto">
          {/* Section Heading */}
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2
              id="product-heading"
              className="font-['Playfair_Display',serif] text-3xl sm:text-4xl md:text-5xl font-normal text-black tracking-tight"
            >
              Our Product
            </h2>
          </div>

          {/* 8 Product Cards Grid */}
          <div
            id="products-grid"
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8"
          >
            {products.map((prod, idx) => (
              <ProductCard
                key={prod.id}
                product={prod}
                index={idx}
                onAddToCart={onAddToCart}
              />
            ))}
          </div>

          {/* View All Products Button linking to Shop */}
          <div className="flex justify-center mt-12 sm:mt-14 md:mt-16">
            <Link to="/shop">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.15 }}
                id="view-all-products-btn"
                className="px-10 py-3 border-2 border-black bg-white text-black text-sm sm:text-base font-semibold hover:bg-black hover:text-white transition-colors duration-200 cursor-pointer shadow-sm"
              >
                View All Products
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      {/* ================= ABOUT US SECTION TEASER (PHASE 4) ================= */}
      <section
        id="about-us-section"
        className="w-full bg-white py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 lg:px-12 border-t border-neutral-100"
      >
        <div className="max-w-6xl mx-auto">
          {/* Section Heading */}
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <h2
              id="about-us-heading"
              className="font-['Playfair_Display',serif] text-3xl sm:text-4xl md:text-5xl font-normal text-black tracking-tight"
            >
              About Us
            </h2>
          </div>

          {/* Two-Column Side-by-Side Layout */}
          <div
            id="about-us-content"
            className="flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-12 lg:gap-16"
          >
            {/* Left Column: Portrait Photo */}
            <motion.div
              id="about-us-image-container"
              initial={{ x: -40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="w-full lg:w-[42%] max-w-md lg:max-w-none flex-shrink-0"
            >
              <div className="w-full aspect-[3/4] overflow-hidden rounded-xl bg-neutral-100 shadow-md group">
                <img
                  id="about-us-photo"
                  src={aboutPhoto}
                  alt="Afrorock artisan model in cultural African print attire"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>

            {/* Right Column: Body Text Stack */}
            <motion.div
              id="about-us-text-container"
              initial={{ x: 40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
              className="w-full lg:w-[55%] flex flex-col justify-center space-y-6 sm:space-y-8 text-black"
            >
              <p
                id="about-us-paragraph-1"
                className="text-base sm:text-lg md:text-[19px] leading-relaxed font-normal text-neutral-900"
              >
                At Afrorock, we celebrate the rich cultural heritage of Africa
                through vibrant prints and designs. Our collection features
                traditional yet modern pieces, designed to empower you with
                pride and elegance. From casual wear to special occasion
                attire, our designs are made with passion and purpose.
              </p>

              <p
                id="about-us-paragraph-2"
                className="text-base sm:text-lg md:text-[19px] leading-relaxed font-normal text-neutral-900"
              >
                Join us in embracing the beauty of African fashion. Explore our
                collection today and discover pieces that speak to your soul.
                Afrorock is your gateway to embracing the elegance and soul of
                African-inspired fashion.
              </p>

              <div className="pt-2">
                <Link to="/about">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="px-8 py-2.5 border border-black bg-white text-black text-sm font-semibold hover:bg-black hover:text-white transition-colors cursor-pointer"
                  >
                    Read Our Full Story
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Terracotta/Mustard Accent Gradient Divider */}
      <div className="w-full h-[3px] bg-gradient-to-r from-amber-700 via-rose-600 to-amber-700 opacity-75" />

      {/* ================= NEWSLETTER BANNER (PHASE 4) ================= */}
      <section
        id="newsletter-section"
        className="w-full bg-[#111111] text-white py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 relative overflow-hidden"
      >
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-amber-600/30 blur-3xl" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-[#b8336a]/30 blur-3xl" />
        </div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="relative z-10 max-w-3xl mx-auto flex flex-col items-center text-center"
        >
          <h2
            id="newsletter-heading"
            className="font-['Playfair_Display',serif] text-2xl sm:text-3xl md:text-4xl font-normal text-white mb-4 tracking-tight"
          >
            Subscribe To Our Newsletter
          </h2>

          <p
            id="newsletter-description"
            className="text-xs sm:text-sm md:text-base text-neutral-300 font-normal max-w-xl mb-8 sm:mb-10 leading-relaxed px-2"
          >
            Subscribe to our newsletter and unlock your special 20% discount on
            your first order of authentic African couture.
          </p>

          <form
            id="newsletter-form"
            onSubmit={handleSubscribe}
            className="w-full max-w-xl"
          >
            <div
              id="newsletter-input-container"
              className="flex flex-col sm:flex-row items-center bg-white rounded-full p-1.5 sm:p-2 shadow-2xl border border-neutral-700/50"
            >
              <input
                id="newsletter-email-input"
                type="email"
                required
                placeholder="Enter your email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                className="w-full px-5 py-2.5 sm:py-3 text-sm sm:text-base text-black placeholder:text-neutral-400 bg-transparent focus:outline-none rounded-full"
              />

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.15 }}
                id="newsletter-subscribe-btn"
                type="submit"
                className="w-full sm:w-auto mt-2 sm:mt-0 px-7 sm:px-9 py-2.5 sm:py-3 bg-[#b8336a] hover:bg-[#a5265a] text-white text-sm sm:text-base font-semibold rounded-full transition-colors duration-200 shadow-md flex items-center justify-center space-x-2 cursor-pointer flex-shrink-0"
              >
                {subscribed ? (
                  <>
                    <Check className="w-4 h-4 text-white" />
                    <span>Subscribed!</span>
                  </>
                ) : (
                  <span>Subscribe</span>
                )}
              </motion.button>
            </div>
          </form>
        </motion.div>
      </section>

      {/* ================= TESTIMONIALS SECTION (PHASE 5) ================= */}
      <section
        id="testimonials-section"
        className="w-full bg-white py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 lg:px-12 border-t border-neutral-100"
      >
        <div className="max-w-7xl mx-auto">
          {/* Section Heading */}
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <h2
              id="testimonials-heading"
              className="font-['Playfair_Display',serif] text-3xl sm:text-4xl md:text-5xl font-normal text-black tracking-tight"
            >
              Testimonials
            </h2>
          </div>

          {/* 3 Testimonial Cards Grid */}
          <div
            id="testimonials-grid"
            className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8"
          >
            {/* Card 1: Aisha Kudirat */}
            <motion.div
              id="testimonial-card-1"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0, ease: 'easeOut' }}
              className="flex flex-col justify-between rounded-2xl p-7 sm:p-8 md:p-9 shadow-sm transition-transform duration-300 hover:-translate-y-1 text-white bg-[#c59bc8]"
            >
              <div>
                <div className="flex items-center space-x-1 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 sm:w-5 sm:h-5 fill-amber-300 text-amber-300"
                    />
                  ))}
                </div>
                <p className="text-sm sm:text-[15px] md:text-base font-normal leading-relaxed sm:leading-loose text-white text-center sm:text-left mb-6 sm:mb-8">
                  I absolutely love this African print dress! The colors are so
                  vibrant, and the fabric feels high-quality. It fits
                  beautifully and easily transitions from day to night. I’ve
                  received endless compliments. Highly recommend to anyone
                  looking to add something bold and elegant to their wardrobe.
                </p>
              </div>
              <div className="flex items-center space-x-4 pt-2">
                <img
                  id="testimonial-avatar-1"
                  src={avatar1}
                  alt="Aisha Kudirat"
                  className="w-12 h-12 sm:w-13 sm:h-13 rounded-full object-cover border-2 border-white/80 shadow-sm flex-shrink-0"
                  referrerPolicy="no-referrer"
                />
                <div className="flex flex-col">
                  <span className="text-base sm:text-lg font-bold text-white leading-tight">
                    Aisha Kudirat
                  </span>
                  <span className="text-xs sm:text-sm text-white/90 font-medium">
                    London, UK
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Card 2: Shade Adeleke */}
            <motion.div
              id="testimonial-card-2"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
              className="flex flex-col justify-between rounded-2xl p-7 sm:p-8 md:p-9 shadow-sm transition-transform duration-300 hover:-translate-y-1 text-white bg-[#ce9595]"
            >
              <div>
                <div className="flex items-center space-x-1 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 sm:w-5 sm:h-5 fill-amber-300 text-amber-300"
                    />
                  ))}
                </div>
                <p className="text-sm sm:text-[15px] md:text-base font-normal leading-relaxed sm:leading-loose text-white text-center sm:text-left mb-6 sm:mb-8">
                  This dress is everything I hoped for and more! The African
                  pattern is unique and rich in detail, and the cut is super
                  flattering. It’s comfortable, breathable, and truly makes a
                  statement. Every time I wear it, I feel connected to something
                  special.
                </p>
              </div>
              <div className="flex items-center space-x-4 pt-2">
                <img
                  id="testimonial-avatar-2"
                  src={avatar2}
                  alt="Shade Adeleke"
                  className="w-12 h-12 sm:w-13 sm:h-13 rounded-full object-cover border-2 border-white/80 shadow-sm flex-shrink-0"
                  referrerPolicy="no-referrer"
                />
                <div className="flex flex-col">
                  <span className="text-base sm:text-lg font-bold text-white leading-tight">
                    Shade Adeleke
                  </span>
                  <span className="text-xs sm:text-sm text-white/90 font-medium">
                    New York, USA
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Card 3: Grace Indo */}
            <motion.div
              id="testimonial-card-3"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
              className="flex flex-col justify-between rounded-2xl p-7 sm:p-8 md:p-9 shadow-sm transition-transform duration-300 hover:-translate-y-1 text-white bg-[#c59bc8]"
            >
              <div>
                <div className="flex items-center space-x-1 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 sm:w-5 sm:h-5 fill-amber-300 text-amber-300"
                    />
                  ))}
                </div>
                <p className="text-sm sm:text-[15px] md:text-base font-normal leading-relaxed sm:leading-loose text-white text-center sm:text-left mb-6 sm:mb-8">
                  Afrorock really exceeded my expectations! The African print
                  dress is a showstopper—such stunning patterns and vivid
                  colors that just light up the room. It’s well-made,
                  flattering, and I could tell it was crafted with care. Will
                  definitely be adding more Afrorock pieces to my wardrobe!
                </p>
              </div>
              <div className="flex items-center space-x-4 pt-2">
                <img
                  id="testimonial-avatar-3"
                  src={avatar3}
                  alt="Grace Indo"
                  className="w-12 h-12 sm:w-13 sm:h-13 rounded-full object-cover border-2 border-white/80 shadow-sm flex-shrink-0"
                  referrerPolicy="no-referrer"
                />
                <div className="flex flex-col">
                  <span className="text-base sm:text-lg font-bold text-white leading-tight">
                    Grace Indo
                  </span>
                  <span className="text-xs sm:text-sm text-white/90 font-medium">
                    Paris, France
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};
