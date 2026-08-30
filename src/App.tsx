import React, { useState } from 'react';
import {
  Search,
  ShoppingBag,
  Instagram,
  Facebook,
  Twitter,
  Truck,
  RotateCcw,
  CreditCard,
  Headphones,
  Check,
  HelpCircle,
  Star,
} from 'lucide-react';
import heroLeft from './assets/hero-left.jpg';
import heroCenter from './assets/hero-center.jpg';
import heroRight from './assets/hero-right.jpg';
import category1 from './assets/category-1.jpg';
import category2 from './assets/category-2.jpg';
import category3 from './assets/category-3.jpg';
import category4 from './assets/category-4.jpg';
import product1 from './assets/product-1.jpg';
import product2 from './assets/product-2.jpg';
import product3 from './assets/product-3.jpg';
import product4 from './assets/product-4.jpg';
import product5 from './assets/product-5.jpg';
import product6 from './assets/product-6.jpg';
import product7 from './assets/product-7.jpg';
import product8 from './assets/product-8.jpg';
import aboutPhoto from './assets/about-photo.jpg';
import avatar1 from './assets/avatar-1.jpg';
import avatar2 from './assets/avatar-2.jpg';
import avatar3 from './assets/avatar-3.jpg';

export default function App() {
  const [activeNav, setActiveNav] = useState('HOME');
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [cartCount, setCartCount] = useState(0);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  // Afrorock logo letters with pastel gradient colors matching the brand identity
  const logoLetters = [
    { char: 'A', color: '#5296d5' },
    { char: 'f', color: '#689dd8' },
    { char: 'r', color: '#8893cb' },
    { char: 'o', color: '#a785b9' },
    { char: 'r', color: '#c7789f' },
    { char: 'o', color: '#d97287' },
    { char: 'c', color: '#dc746e' },
    { char: 'k', color: '#ce635f' },
  ];

  const navLinks = [
    { label: 'HOME', href: '#home' },
    { label: 'ABOUT US', href: '#about' },
    { label: 'SHOP', href: '#shop' },
    { label: 'BLOG', href: '#blog' },
    { label: 'CONTACT', href: '#contact' },
  ];

  return (
    <div id="afrorock-app" className="min-h-screen bg-white text-neutral-900 flex flex-col font-sans selection:bg-amber-100 selection:text-amber-900">
      {/* ================= TOP UTILITY BAR ================= */}
      <header id="utility-bar" className="w-full bg-white border-b border-transparent py-3 md:py-4 px-4 sm:px-6 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Far Left: Social Icons */}
          <div id="social-links" className="flex items-center space-x-3 sm:space-x-4 md:space-x-5 text-black">
            <a
              id="social-facebook"
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="p-1 hover:text-amber-600 transition-colors duration-200"
            >
              <Facebook className="w-4 h-4 fill-current stroke-none" />
            </a>

            {/* TikTok Icon */}
            <a
              id="social-tiktok"
              href="https://tiktok.com"
              target="_blank"
              rel="noreferrer"
              aria-label="TikTok"
              className="p-1 hover:text-amber-600 transition-colors duration-200"
            >
              <svg
                className="w-4 h-4 fill-current"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 3 15.68 6.34 6.34 0 0 0 9.34 22a6.34 6.34 0 0 0 6.34-6.32V8.58c1.39.99 3.08 1.57 4.91 1.62V6.75a4.77 4.77 0 0 1-1-.06z" />
              </svg>
            </a>

            <a
              id="social-instagram"
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="p-1 hover:text-amber-600 transition-colors duration-200"
            >
              <Instagram className="w-4 h-4 stroke-[2]" />
            </a>

            {/* X (formerly Twitter) Icon */}
            <a
              id="social-x"
              href="https://x.com"
              target="_blank"
              rel="noreferrer"
              aria-label="X (Twitter)"
              className="p-1 hover:text-amber-600 transition-colors duration-200"
            >
              <svg
                className="w-3.5 h-3.5 fill-current"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>

          {/* Center: Afrorock Logo */}
          <div id="brand-logo" className="text-center select-none">
            <a href="/" className="inline-flex items-center tracking-normal">
              <span className="font-['Fredoka',sans-serif] text-2xl sm:text-3xl md:text-[34px] font-medium tracking-tight">
                {logoLetters.map((item, idx) => (
                  <span
                    key={idx}
                    style={{ color: item.color }}
                    className="transition-transform duration-200 hover:scale-110 inline-block"
                  >
                    {item.char}
                  </span>
                ))}
              </span>
            </a>
          </div>

          {/* Far Right: Utility Icons */}
          <div id="user-actions" className="flex items-center space-x-3 sm:space-x-4 md:space-x-5 text-black">
            {/* Search Icon & Toggle */}
            <div className="relative">
              <button
                id="btn-search-toggle"
                onClick={() => setSearchOpen(!searchOpen)}
                aria-label="Search"
                className="p-1 hover:text-neutral-600 transition-colors duration-200 cursor-pointer"
              >
                <Search className="w-5 h-5 stroke-[1.75]" />
              </button>

              {searchOpen && (
                <div
                  id="search-dropdown"
                  className="absolute right-0 mt-2 w-64 sm:w-72 bg-white border border-neutral-200 rounded-lg shadow-xl p-2 z-50 animate-in fade-in zoom-in-95 duration-150"
                >
                  <div className="flex items-center px-2 py-1 bg-neutral-50 rounded border border-neutral-200">
                    <Search className="w-4 h-4 text-neutral-400 mr-2" />
                    <input
                      type="text"
                      placeholder="Search prints, dresses..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full bg-transparent text-xs sm:text-sm focus:outline-none text-neutral-900"
                      autoFocus
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Shopping Basket with red badge "0" */}
            <button
              id="btn-cart"
              onClick={() => setCartCount((prev) => (prev === 0 ? 1 : 0))}
              aria-label={`Shopping bag with ${cartCount} items`}
              className="relative p-1 hover:text-neutral-600 transition-colors duration-200 cursor-pointer"
            >
              {/* Basket/bag icon */}
              <ShoppingBag className="w-5 h-5 stroke-[1.75]" />
              <span
                id="cart-badge"
                className="absolute -top-1 -right-1 bg-[#E03B3B] text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center leading-none shadow-xs"
              >
                {cartCount}
              </span>
            </button>

            {/* Circular Profile Avatar */}
            <button
              id="btn-profile"
              aria-label="User Account"
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-neutral-100 hover:bg-neutral-200 border border-neutral-300 flex items-center justify-center text-neutral-700 transition-colors duration-200 cursor-pointer overflow-hidden"
            >
              <svg
                className="w-4 h-4 fill-current text-neutral-600"
                viewBox="0 0 24 24"
              >
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* ================= NAV BAR ================= */}
      <nav id="main-navigation" className="w-full bg-white border-b border-neutral-200 py-3 sm:py-4 px-4">
        <div className="max-w-4xl mx-auto flex items-center justify-center flex-wrap gap-x-6 sm:gap-x-10 md:gap-x-14 gap-y-2">
          {navLinks.map((link) => {
            const isActive = activeNav === link.label;
            return (
              <a
                key={link.label}
                id={`nav-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveNav(link.label);
                }}
                className={`text-xs sm:text-sm font-bold tracking-wider transition-colors duration-200 uppercase ${
                  isActive
                    ? 'text-[#C59A27]'
                    : 'text-black hover:text-neutral-600'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </div>
      </nav>

      {/* ================= MAIN CONTENT ================= */}
      <main className="flex-1 w-full">
        {/* ================= HERO SECTION ================= */}
        <section id="hero-section" className="w-full pt-10 sm:pt-14 md:pt-20 pb-8 md:pb-12 px-4 sm:px-6 md:px-8">
          <div className="max-w-6xl mx-auto text-center">
            {/* Two-Line Large Serif Heading */}
            <h1
              id="hero-heading"
              className="font-['Playfair_Display',serif] text-4xl sm:text-5xl md:text-6xl lg:text-[70px] font-normal tracking-tight leading-[1.08] text-black mb-5 md:mb-6"
            >
              African
              <br />
              Cultural Couture
            </h1>

            {/* Subheading / Description Paragraph */}
            <p
              id="hero-description"
              className="max-w-[750px] mx-auto text-xs sm:text-sm md:text-[15px] leading-relaxed text-neutral-800 font-normal px-2 mb-10 sm:mb-14 md:mb-16"
            >
              Heritage evokes the rich cultural legacy and traditional artistry of African fabrics, aligning with the store's focus on authentic prints and designs. It's concise, elegant, and sets a tone of pride and authenticity, which complements the stunning visuals of the models in vibrant outfits.
            </p>

            {/* 3-Image Collage Row */}
            <div
              id="hero-images-collage"
              className="flex flex-col md:flex-row items-center md:items-end justify-center gap-4 sm:gap-5 md:gap-6 lg:gap-8 max-w-5xl mx-auto"
            >
              {/* Left Image (shorter height, rounded corners) */}
              <div
                id="hero-image-left-container"
                className="w-full max-w-[340px] md:max-w-none md:flex-1 h-[360px] sm:h-[420px] md:h-[470px] lg:h-[510px] rounded-2xl overflow-hidden bg-neutral-100 shadow-xs"
              >
                <img
                  id="hero-image-left"
                  src={heroLeft}
                  alt="Model posing in yellow and black zigzag African print jumpsuit"
                  className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Center Image (noticeably TALLER than the sides, rounded corners, pops up) */}
              <div
                id="hero-image-center-container"
                className="w-full max-w-[340px] md:max-w-none md:flex-1 h-[440px] sm:h-[500px] md:h-[570px] lg:h-[620px] rounded-2xl overflow-hidden bg-neutral-100 shadow-sm"
              >
                <img
                  id="hero-image-center"
                  src={heroCenter}
                  alt="Model in vibrant royal blue and orange African circular print midi dress"
                  className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Right Image (shorter height matching left, rounded corners) */}
              <div
                id="hero-image-right-container"
                className="w-full max-w-[340px] md:max-w-none md:flex-1 h-[360px] sm:h-[420px] md:h-[470px] lg:h-[510px] rounded-2xl overflow-hidden bg-neutral-100 shadow-xs"
              >
                <img
                  id="hero-image-right"
                  src={heroRight}
                  alt="Model in emerald green and orange off-shoulder African print jumpsuit"
                  className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ================= BENEFITS STRIP ================= */}
        {/* Directly beneath hero images, no divider, feels part of hero */}
        <section
          id="benefits-strip"
          className="w-full pt-8 sm:pt-10 md:pt-14 pb-14 sm:pb-16 md:pb-20 px-4 sm:px-6 md:px-8"
        >
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-6 lg:gap-8">
            {/* 1. FREE DELIVERY */}
            <div id="benefit-free-delivery" className="flex flex-col items-center text-center group cursor-default">
              <div className="mb-2 text-black transition-transform duration-200 group-hover:-translate-y-0.5">
                <Truck className="w-8 h-8 sm:w-9 sm:h-9 stroke-[2.2]" />
              </div>
              <span className="font-extrabold text-[13px] sm:text-sm md:text-[14px] text-black tracking-wider uppercase">
                FREE DELIVERY
              </span>
            </div>

            {/* 2. 30 DAYS RETURN */}
            <div id="benefit-30-days-return" className="flex flex-col items-center text-center group cursor-default">
              <div className="mb-2 text-black transition-transform duration-200 group-hover:-translate-y-0.5">
                {/* Custom Crisp Return Icon (Package/Card with curved return arrow) */}
                <div className="w-8 h-8 sm:w-9 sm:h-9 relative flex items-center justify-center">
                  <svg
                    className="w-8 h-8 sm:w-9 sm:h-9 stroke-current text-black fill-none stroke-[2.2]"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="4" width="18" height="16" rx="2" fill="currentColor" />
                    <path
                      d="M15 14h-5l2-2m-2 2l2 2"
                      className="stroke-white stroke-[2.5]"
                      fill="none"
                    />
                  </svg>
                </div>
              </div>
              <span className="font-extrabold text-[13px] sm:text-sm md:text-[14px] text-black tracking-wider uppercase">
                30 DAYS RETURN
              </span>
            </div>

            {/* 3. SECURE PAYMENT */}
            <div id="benefit-secure-payment" className="flex flex-col items-center text-center group cursor-default">
              <div className="mb-2 text-black transition-transform duration-200 group-hover:-translate-y-0.5">
                {/* Credit card with checkmark */}
                <div className="w-8 h-8 sm:w-9 sm:h-9 relative flex items-center justify-center">
                  <svg
                    className="w-8 h-8 sm:w-9 sm:h-9 stroke-current text-black fill-none stroke-[2.2]"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="5" width="20" height="14" rx="2" />
                    <line x1="2" y1="10" x2="22" y2="10" />
                    <path d="M14 15l2 2 4-4" className="stroke-black stroke-[2.4]" />
                  </svg>
                </div>
              </div>
              <span className="font-extrabold text-[13px] sm:text-sm md:text-[14px] text-black tracking-wider uppercase">
                SECURE PAYMENT
              </span>
            </div>

            {/* 4. 24/7 SUPPORT */}
            <div id="benefit-247-support" className="flex flex-col items-center text-center group cursor-default">
              <div className="mb-2 text-black transition-transform duration-200 group-hover:-translate-y-0.5">
                {/* Headset with question mark */}
                <div className="w-8 h-8 sm:w-9 sm:h-9 relative flex items-center justify-center">
                  <svg
                    className="w-8 h-8 sm:w-9 sm:h-9 stroke-current text-black fill-none stroke-[2.2]"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 14h2a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2H3v7z" fill="currentColor" />
                    <path d="M19 14h2a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2v7z" fill="currentColor" />
                    <path d="M4 11V9a8 8 0 0 1 16 0v2" />
                    <path d="M12 8a2 2 0 0 1 2 2c0 1-2 2-2 3" className="stroke-[2.2]" />
                    <circle cx="12" cy="16.5" r="0.8" fill="currentColor" />
                  </svg>
                </div>
              </div>
              <span className="font-extrabold text-[13px] sm:text-sm md:text-[14px] text-black tracking-wider uppercase">
                24/7 SUPPORT
              </span>
            </div>
          </div>
        </section>

        {/* ================= CATEGORIES SECTION (PHASE 2) ================= */}
        <section
          id="categories-section"
          className="w-full pt-10 sm:pt-14 md:pt-16 pb-16 sm:pb-20 md:pb-24 px-4 sm:px-6 md:px-8 lg:px-12"
        >
          <div className="max-w-7xl mx-auto">
            {/* Section Heading */}
            <h2
              id="categories-heading"
              className="text-3xl sm:text-4xl md:text-[40px] font-bold text-black text-center tracking-tight mb-8 sm:mb-10 md:mb-12"
            >
              Categories
            </h2>

            {/* 4-Column Flush Tall Portrait Image Cards Grid */}
            <div
              id="categories-grid"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5"
            >
              {/* Category 1: Gown (Purple & Yellow Floral Ankara Dress) */}
              <div
                id="category-card-1"
                className="group relative overflow-hidden bg-neutral-100 aspect-[3/4.6] sm:aspect-[3/4.6] cursor-pointer"
              >
                <img
                  id="category-img-1"
                  src={category1}
                  alt="Gown"
                  className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent flex items-end justify-center pb-7 sm:pb-8 md:pb-9 px-4 pointer-events-none">
                  <span className="text-white text-xl sm:text-2xl font-bold tracking-wider uppercase text-center drop-shadow-sm">
                    Gown
                  </span>
                </div>
              </div>

              {/* Category 2: Gown (Blue & Gold Intricate Ankara Pattern Romper/Dress) */}
              <div
                id="category-card-2"
                className="group relative overflow-hidden bg-neutral-100 aspect-[3/4.6] sm:aspect-[3/4.6] cursor-pointer"
              >
                <img
                  id="category-img-2"
                  src={category2}
                  alt="Gown"
                  className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent flex items-end justify-center pb-7 sm:pb-8 md:pb-9 px-4 pointer-events-none">
                  <span className="text-white text-xl sm:text-2xl font-bold tracking-wider uppercase text-center drop-shadow-sm">
                    Gown
                  </span>
                </div>
              </div>

              {/* Category 3: Of-Shoulder (Blue & Orange Concentric Spiral Strapless Dress) */}
              <div
                id="category-card-3"
                className="group relative overflow-hidden bg-neutral-100 aspect-[3/4.6] sm:aspect-[3/4.6] cursor-pointer"
              >
                <img
                  id="category-img-3"
                  src={category3}
                  alt="Of-Shoulder"
                  className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent flex items-end justify-center pb-7 sm:pb-8 md:pb-9 px-4 pointer-events-none">
                  <span className="text-white text-xl sm:text-2xl font-bold tracking-wider uppercase text-center drop-shadow-sm">
                    Of-Shoulder
                  </span>
                </div>
              </div>

              {/* Category 4: Gown (Royal Blue One-Shoulder Layered Ruffle Dress) */}
              <div
                id="category-card-4"
                className="group relative overflow-hidden bg-neutral-100 aspect-[3/4.6] sm:aspect-[3/4.6] cursor-pointer"
              >
                <img
                  id="category-img-4"
                  src={category4}
                  alt="Gown"
                  className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent flex items-end justify-center pb-7 sm:pb-8 md:pb-9 px-4 pointer-events-none">
                  <span className="text-white text-xl sm:text-2xl font-bold tracking-wider uppercase text-center drop-shadow-sm">
                    Gown
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= PRODUCT SECTION (PHASE 3) ================= */}
        <section
          id="product-section"
          className="w-full pt-10 sm:pt-14 md:pt-16 pb-20 sm:pb-24 md:pb-28 px-4 sm:px-6 md:px-8 lg:px-12"
        >
          <div className="max-w-7xl mx-auto">
            {/* Section Heading */}
            <h2
              id="product-heading"
              className="text-3xl sm:text-4xl md:text-[40px] font-bold text-black text-center tracking-tight mb-10 sm:mb-12 md:mb-14"
            >
              Product
            </h2>

            {/* 8 Product Cards Grid (4 cols desktop, 2 cols tablet, 1 col mobile) */}
            <div
              id="product-grid"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 sm:gap-y-12"
            >
              {[
                { id: 1, img: product1, name: 'African Print Crop Top', price: '$100' },
                { id: 2, img: product2, name: 'African Print Crop Top', price: '$100' },
                { id: 3, img: product3, name: 'African Print Crop Top', price: '$100' },
                { id: 4, img: product4, name: 'African Print Crop Top', price: '$100' },
                { id: 5, img: product5, name: 'African Print Crop Top', price: '$100' },
                { id: 6, img: product6, name: 'African Print Crop Top', price: '$100' },
                { id: 7, img: product7, name: 'African Print Crop Top', price: '$100' },
                { id: 8, img: product8, name: 'African Print Crop Top', price: '$100' },
              ].map((prod) => (
                <div
                  key={prod.id}
                  id={`product-card-${prod.id}`}
                  className="flex flex-col items-center group"
                >
                  {/* Portrait Product Photo with rounded corners */}
                  <div className="w-full aspect-[3/4] overflow-hidden rounded-xl bg-neutral-100 mb-4 shadow-sm">
                    <img
                      id={`product-img-${prod.id}`}
                      src={prod.img}
                      alt={prod.name}
                      className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {/* Centered Text Stack */}
                  <div className="flex flex-col items-center text-center space-y-2 w-full">
                    {/* Product Name */}
                    <h3
                      id={`product-name-${prod.id}`}
                      className="text-base sm:text-lg font-bold text-black tracking-tight"
                    >
                      {prod.name}
                    </h3>

                    {/* 5 Filled Gold/Yellow Star Rating */}
                    <div
                      id={`product-rating-${prod.id}`}
                      className="flex items-center justify-center space-x-1"
                      aria-label="5 out of 5 stars"
                    >
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-amber-400 text-amber-400"
                        />
                      ))}
                    </div>

                    {/* Price */}
                    <p
                      id={`product-price-${prod.id}`}
                      className="text-lg sm:text-xl font-bold text-black"
                    >
                      {prod.price}
                    </p>

                    {/* Add To Cart Button */}
                    <button
                      id={`product-add-to-cart-${prod.id}`}
                      onClick={() => setCartCount((prev) => prev + 1)}
                      className="mt-1 w-full max-w-[170px] py-2.5 px-5 bg-black text-white text-sm font-semibold rounded-md sm:rounded-lg hover:bg-neutral-800 active:scale-95 transition-all shadow-sm cursor-pointer"
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* View All Button */}
            <div className="flex justify-center mt-12 sm:mt-14 md:mt-16">
              <button
                id="view-all-products-btn"
                className="px-10 py-3 border-2 border-black bg-white text-black text-sm sm:text-base font-semibold hover:bg-black hover:text-white transition-colors duration-200 cursor-pointer shadow-sm"
              >
                View All
              </button>
            </div>
          </div>
        </section>

        {/* ================= ABOUT US SECTION (PHASE 4) ================= */}
        <section
          id="about-us-section"
          className="w-full pt-10 sm:pt-14 md:pt-16 pb-16 sm:pb-20 md:pb-24 px-4 sm:px-6 md:px-8 lg:px-12 bg-white"
        >
          <div className="max-w-7xl mx-auto">
            {/* Section Heading */}
            <h2
              id="about-us-heading"
              className="text-3xl sm:text-4xl md:text-[40px] font-bold text-black text-center tracking-tight mb-10 sm:mb-12 md:mb-16"
            >
              About Us
            </h2>

            {/* 2-Column Responsive Layout */}
            <div
              id="about-us-content"
              className="flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-12 lg:gap-16"
            >
              {/* Left Column: Portrait Photo (~40% desktop) */}
              <div
                id="about-us-image-container"
                className="w-full lg:w-[42%] max-w-md lg:max-w-none flex-shrink-0"
              >
                <div className="w-full aspect-[3/4] overflow-hidden rounded-xl bg-neutral-100 shadow-md group">
                  <img
                    id="about-us-photo"
                    src={aboutPhoto}
                    alt="Afrorock model wearing emerald green and orange African print jumpsuit"
                    className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              {/* Right Column: Body Text Stack (~55% desktop) */}
              <div
                id="about-us-text-container"
                className="w-full lg:w-[55%] flex flex-col justify-center space-y-6 sm:space-y-8 text-black"
              >
                <p
                  id="about-us-paragraph-1"
                  className="text-base sm:text-lg md:text-[19px] font-bold leading-relaxed sm:leading-loose text-neutral-900"
                >
                  Afrorock Clothes is a captivating online store that beautifully
                  blends contemporary fashion with the rich heritage of African
                  culture. Our collection features a stunning array of garments
                  crafted from authentic African fabrics, reflecting the
                  vibrancy and diversity of the continent.
                </p>

                <p
                  id="about-us-paragraph-2"
                  className="text-base sm:text-lg md:text-[19px] font-bold leading-relaxed sm:leading-loose text-neutral-900"
                >
                  Our mission is to not only offer stylish clothing and
                  accessories but also to celebrate and promote African culture
                  through every thread and design. From intricately patterned
                  clothing to carefully curated African fabrics and accessories,
                  Afrorock is your gateway to embracing the elegance and soul of
                  African-inspired fashion.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= NEWSLETTER SECTION (PHASE 4) ================= */}
        <section
          id="newsletter-section"
          className="relative w-full overflow-hidden py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-[#095e6d]"
        >
          {/* African Wax Print Decorative Background Pattern (Teal base with orange/navy floral motifs & radiating linework) */}
          <div className="absolute inset-0 pointer-events-none opacity-90 overflow-hidden">
            <svg
              className="w-full h-full object-cover min-w-[800px] min-h-[300px]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 400"
              preserveAspectRatio="xMidYMid slice"
            >
              <defs>
                {/* Radial Gradient for stylized petals */}
                <radialGradient id="tealGrad" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#14b8a6" />
                  <stop offset="70%" stopColor="#0d7486" />
                  <stop offset="100%" stopColor="#08434f" />
                </radialGradient>
                <radialGradient id="orangeGrad" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#ff8c38" />
                  <stop offset="70%" stopColor="#ea580c" />
                  <stop offset="100%" stopColor="#9a3412" />
                </radialGradient>
                <radialGradient id="navyGrad" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#2e3b82" />
                  <stop offset="70%" stopColor="#1e2356" />
                  <stop offset="100%" stopColor="#0f122e" />
                </radialGradient>
              </defs>

              {/* Background solid deep teal */}
              <rect width="1200" height="400" fill="#085461" />

              {/* Radiating Fan Petals - Motif 1 Left Top */}
              <g transform="translate(100, 50)">
                <path d="M 0,0 C -60,-80 -120,40 -40,100 C 40,160 120,80 60,0 Z" fill="url(#tealGrad)" stroke="#05272e" strokeWidth="2.5" />
                <path d="M 0,0 L -80,-30 M 0,0 L -50,-70 M 0,0 L 20,-80 M 0,0 L 70,-40 M 0,0 L 80,20 M 0,0 L 40,80 M 0,0 L -30,80" stroke="#05272e" strokeWidth="1.5" strokeDasharray="3 3" />
                <circle cx="-10" cy="20" r="45" fill="url(#orangeGrad)" stroke="#05272e" strokeWidth="3" />
                <circle cx="-10" cy="20" r="18" fill="#1e2356" stroke="#ea580c" strokeWidth="2" />
              </g>

              {/* Radiating Fan Petals - Motif 2 Left Bottom */}
              <g transform="translate(250, 360)">
                <path d="M 0,0 C -120,-40 -100,-150 0,-140 C 100,-130 120,-30 0,0 Z" fill="url(#navyGrad)" stroke="#05272e" strokeWidth="3" />
                <circle cx="-40" cy="-60" r="60" fill="url(#orangeGrad)" stroke="#05272e" strokeWidth="3" />
                <circle cx="40" cy="-60" r="50" fill="url(#tealGrad)" stroke="#05272e" strokeWidth="2" />
                <path d="M 0,-60 L -70,-100 M 0,-60 L -30,-130 M 0,-60 L 30,-130 M 0,-60 L 70,-90" stroke="#05272e" strokeWidth="2" />
              </g>

              {/* Radiating Fan Petals - Motif 3 Center Top */}
              <g transform="translate(580, 40)">
                <circle cx="-60" cy="40" r="70" fill="url(#orangeGrad)" stroke="#05272e" strokeWidth="3" />
                <circle cx="60" cy="30" r="65" fill="url(#navyGrad)" stroke="#05272e" strokeWidth="3" />
                <circle cx="0" cy="90" r="50" fill="url(#tealGrad)" stroke="#05272e" strokeWidth="2" />
                <path d="M -60,40 L -120,0 M -60,40 L -90,-20 M 60,30 L 120,0 M 60,30 L 100,-20" stroke="#05272e" strokeWidth="1.5" />
              </g>

              {/* Radiating Fan Petals - Motif 4 Center Bottom */}
              <g transform="translate(680, 370)">
                <path d="M 0,0 C -80,-100 0,-180 80,-100 Z" fill="url(#tealGrad)" stroke="#05272e" strokeWidth="2" />
                <circle cx="-30" cy="-70" r="55" fill="url(#orangeGrad)" stroke="#05272e" strokeWidth="3" />
                <circle cx="50" cy="-60" r="50" fill="url(#navyGrad)" stroke="#05272e" strokeWidth="3" />
              </g>

              {/* Radiating Fan Petals - Motif 5 Right Top */}
              <g transform="translate(950, 70)">
                <circle cx="0" cy="0" r="80" fill="url(#navyGrad)" stroke="#05272e" strokeWidth="3" />
                <circle cx="-50" cy="40" r="55" fill="url(#tealGrad)" stroke="#05272e" strokeWidth="2" />
                <circle cx="40" cy="50" r="60" fill="url(#orangeGrad)" stroke="#05272e" strokeWidth="3" />
                <path d="M 0,0 L -60,-60 M 0,0 L 0,-80 M 0,0 L 60,-60" stroke="#05272e" strokeWidth="2" strokeDasharray="4 3" />
              </g>

              {/* Radiating Fan Petals - Motif 6 Right Bottom */}
              <g transform="translate(1120, 340)">
                <circle cx="-30" cy="-50" r="80" fill="url(#orangeGrad)" stroke="#05272e" strokeWidth="3" />
                <circle cx="40" cy="-60" r="60" fill="url(#tealGrad)" stroke="#05272e" strokeWidth="2" />
                <circle cx="-20" cy="-120" r="45" fill="url(#navyGrad)" stroke="#05272e" strokeWidth="3" />
              </g>
            </svg>
          </div>

          {/* Foreground Newsletter Content */}
          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center text-center">
            {/* Section Heading */}
            <h2
              id="newsletter-heading"
              className="text-2xl sm:text-3xl md:text-[32px] font-bold text-white tracking-tight drop-shadow-md mb-8 sm:mb-10"
            >
              Subscribe To Our News Letter
            </h2>

            {/* Rounded Pill-Shaped Input Group with White Border */}
            <form
              id="newsletter-form"
              onSubmit={(e) => {
                e.preventDefault();
                if (newsletterEmail.trim()) {
                  setSubscribed(true);
                  setNewsletterEmail('');
                  setTimeout(() => setSubscribed(false), 4000);
                }
              }}
              className="w-full max-w-xl"
            >
              <div
                id="newsletter-pill-container"
                className="flex flex-col sm:flex-row items-center border-2 border-white rounded-3xl sm:rounded-full p-1.5 sm:p-2 backdrop-blur-[2px] bg-black/10 transition-all duration-300 focus-within:ring-2 focus-within:ring-white"
              >
                {/* Left Side: Transparent text input */}
                <input
                  id="newsletter-email-input"
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Email Address"
                  className="w-full sm:flex-1 px-5 py-2.5 sm:py-3 bg-transparent text-white placeholder-white/80 text-sm sm:text-base focus:outline-none text-center sm:text-left"
                />

                {/* Right Side: Solid Pink/Magenta Button */}
                <button
                  id="newsletter-subscribe-btn"
                  type="submit"
                  className="w-full sm:w-auto mt-2 sm:mt-0 px-7 sm:px-9 py-2.5 sm:py-3 bg-[#b8336a] hover:bg-[#a5265a] text-white text-sm sm:text-base font-semibold rounded-full transition-all duration-200 active:scale-95 shadow-md flex items-center justify-center space-x-2 cursor-pointer flex-shrink-0"
                >
                  {subscribed ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Subscribed!</span>
                    </>
                  ) : (
                    <span>Subscribe</span>
                  )}
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* ================= TESTIMONIALS SECTION (PHASE 5) ================= */}
        <section
          id="testimonials-section"
          className="w-full pt-12 sm:pt-16 md:pt-20 pb-16 sm:pb-20 md:pb-24 px-4 sm:px-6 md:px-8 lg:px-12 bg-white"
        >
          <div className="max-w-7xl mx-auto">
            {/* Section Heading */}
            <h2
              id="testimonials-heading"
              className="text-3xl sm:text-4xl md:text-[40px] font-bold text-black text-center tracking-tight mb-10 sm:mb-14 md:mb-16"
            >
              Testimonials
            </h2>

            {/* 3-Column Testimonial Cards Grid */}
            <div
              id="testimonials-grid"
              className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8"
            >
              {/* Card 1: Aisha Kudirat (Lilac / Soft Purple) */}
              <div
                id="testimonial-card-1"
                className="flex flex-col justify-between rounded-2xl p-7 sm:p-8 md:p-9 shadow-sm transition-transform duration-300 hover:-translate-y-1 text-white bg-[#c59bc8]"
              >
                <div>
                  {/* 5 Centered Gold Stars */}
                  <div className="flex items-center justify-center space-x-1.5 mb-5 sm:mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-amber-300 text-amber-300 drop-shadow-sm"
                      />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-sm sm:text-[15px] md:text-base font-normal leading-relaxed sm:leading-loose text-white text-center sm:text-left mb-6 sm:mb-8">
                    Afrorock really exceeded my expectations! The African print
                    dress is a showstopper—such stunning patterns and vivid
                    colors that just light up the room. It’s well-made,
                    flattering, and I could tell it was crafted with care. Will
                    definitely be adding more Afrorock pieces to my wardrobe!
                  </p>
                </div>

                {/* Bottom Avatar & User Info */}
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
                      Lagos, Nigeria
                    </span>
                  </div>
                </div>
              </div>

              {/* Card 2: Shade Adeleke (Dusty Pink / Mauve Terracotta) */}
              <div
                id="testimonial-card-2"
                className="flex flex-col justify-between rounded-2xl p-7 sm:p-8 md:p-9 shadow-sm transition-transform duration-300 hover:-translate-y-1 text-white bg-[#ce9595]"
              >
                <div>
                  {/* 5 Centered Gold Stars */}
                  <div className="flex items-center justify-center space-x-1.5 mb-5 sm:mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-amber-300 text-amber-300 drop-shadow-sm"
                      />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-sm sm:text-[15px] md:text-base font-normal leading-relaxed sm:leading-loose text-white text-center sm:text-left mb-6 sm:mb-8">
                    I’m in love with my dress from Afrorock! The colors are
                    vibrant, and the fabric feels so comfortable yet durable.
                    It fits me perfectly, and I received so many compliments on
                    the unique African print! It’s a true blend of style and
                    culture. Afrorock, you have a loyal customer!
                  </p>
                </div>

                {/* Bottom Avatar & User Info */}
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
                      London, UK
                    </span>
                  </div>
                </div>
              </div>

              {/* Card 3: Grace Indo (Lilac / Soft Purple) */}
              <div
                id="testimonial-card-3"
                className="flex flex-col justify-between rounded-2xl p-7 sm:p-8 md:p-9 shadow-sm transition-transform duration-300 hover:-translate-y-1 text-white bg-[#c59bc8]"
              >
                <div>
                  {/* 5 Centered Gold Stars */}
                  <div className="flex items-center justify-center space-x-1.5 mb-5 sm:mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-amber-300 text-amber-300 drop-shadow-sm"
                      />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-sm sm:text-[15px] md:text-base font-normal leading-relaxed sm:leading-loose text-white text-center sm:text-left mb-6 sm:mb-8">
                    Afrorock really exceeded my expectations! The African print
                    dress is a showstopper—such stunning patterns and vivid
                    colors that just light up the room. It’s well-made,
                    flattering, and I could tell it was crafted with care. Will
                    definitely be adding more Afrorock pieces to my wardrobe!
                  </p>
                </div>

                {/* Bottom Avatar & User Info */}
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
              </div>
            </div>
          </div>
        </section>

        {/* ================= FOOTER (PHASE 5) ================= */}
        <footer
          id="site-footer"
          className="w-full bg-black text-white pt-14 sm:pt-16 md:pt-20 pb-10 sm:pb-12 px-4 sm:px-6 md:px-8 lg:px-12"
        >
          <div className="max-w-7xl mx-auto">
            {/* 5-Column Navigation Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 sm:gap-10 md:gap-12 pb-12 sm:pb-16 border-b border-neutral-800">
              {/* Column 1: Brand & Tagline */}
              <div id="footer-col-brand" className="space-y-4 sm:col-span-2 lg:col-span-1">
                {/* Afrorock Pastel Colored Logo */}
                <div className="flex items-center space-x-0.5 select-none">
                  {logoLetters.map((item, idx) => (
                    <span
                      key={idx}
                      className="text-2xl sm:text-3xl font-extrabold tracking-tight font-serif italic"
                      style={{ color: item.color }}
                    >
                      {item.char}
                    </span>
                  ))}
                </div>
                {/* Brand Tagline */}
                <p className="text-sm font-semibold text-white/90 leading-relaxed max-w-xs">
                  The best quality of African Print Dress with perfect design
                  that suit our client.
                </p>
              </div>

              {/* Column 2: MENU */}
              <div id="footer-col-menu" className="space-y-3">
                <h4 className="text-xs sm:text-sm font-bold tracking-widest text-white uppercase">
                  Menu
                </h4>
                <ul className="space-y-2 text-sm text-neutral-300 font-medium">
                  <li>
                    <a
                      href="#hero-section"
                      onClick={() => setActiveNav('HOME')}
                      className="hover:text-white transition-colors"
                    >
                      HOME
                    </a>
                  </li>
                  <li>
                    <a
                      href="#product-section"
                      onClick={() => setActiveNav('PRODUCT')}
                      className="hover:text-white transition-colors"
                    >
                      Product
                    </a>
                  </li>
                  <li>
                    <a
                      href="#about-us-section"
                      onClick={() => setActiveNav('ABOUT')}
                      className="hover:text-white transition-colors"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="#testimonials-section"
                      onClick={() => setActiveNav('BLOG')}
                      className="hover:text-white transition-colors"
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      href="#newsletter-section"
                      onClick={() => setActiveNav('CONTACT')}
                      className="hover:text-white transition-colors"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>

              {/* Column 3: LINKS */}
              <div id="footer-col-links" className="space-y-3">
                <h4 className="text-xs sm:text-sm font-bold tracking-widest text-white uppercase">
                  Links
                </h4>
                <ul className="space-y-2 text-sm text-neutral-300 font-medium uppercase">
                  <li>
                    <a href="#faq" className="hover:text-white transition-colors">
                      FAQ
                    </a>
                  </li>
                  <li>
                    <a href="#privacy" className="hover:text-white transition-colors">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#terms" className="hover:text-white transition-colors">
                      T&C
                    </a>
                  </li>
                </ul>
              </div>

              {/* Column 4: SOCIAL MEDIA */}
              <div id="footer-col-social" className="space-y-3">
                <h4 className="text-xs sm:text-sm font-bold tracking-widest text-white uppercase">
                  Social Media
                </h4>
                <ul className="space-y-2 text-sm text-neutral-300 font-medium uppercase">
                  <li>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white transition-colors"
                    >
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://tiktok.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white transition-colors"
                    >
                      TikTok
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white transition-colors"
                    >
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white transition-colors"
                    >
                      X
                    </a>
                  </li>
                </ul>
              </div>

              {/* Column 5: PAYMENT GATEWAY */}
              <div id="footer-col-payment" className="space-y-3">
                <h4 className="text-xs sm:text-sm font-bold tracking-widest text-white uppercase">
                  Payment Gateway
                </h4>
                {/* Payment Icons */}
                <div className="flex items-center space-x-3 pt-1">
                  {/* Mastercard Icon Badge */}
                  <div
                    className="flex items-center justify-center bg-black border border-neutral-700 rounded px-2 py-1 h-7"
                    title="Mastercard"
                  >
                    <div className="flex -space-x-1.5">
                      <div className="w-3.5 h-3.5 rounded-full bg-[#eb001b]" />
                      <div className="w-3.5 h-3.5 rounded-full bg-[#f79e1b] opacity-90" />
                    </div>
                  </div>

                  {/* Visa Icon Badge */}
                  <div
                    className="flex items-center justify-center bg-black border border-neutral-700 rounded px-2 py-1 h-7"
                    title="Visa"
                  >
                    <span className="text-xs font-black italic tracking-tighter text-[#1a1f71] bg-white px-1 rounded-sm">
                      VISA
                    </span>
                  </div>

                  {/* PayPal Icon Badge */}
                  <div
                    className="flex items-center justify-center bg-black border border-neutral-700 rounded px-2 py-1 h-7 space-x-1"
                    title="PayPal"
                  >
                    <span className="text-[11px] font-bold italic text-[#003087]">
                      Pay<span className="text-[#0079c1]">Pal</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Copyright centered */}
            <div className="pt-8 text-center">
              <p
                id="footer-copyright"
                className="text-xs sm:text-sm text-neutral-400 font-medium"
              >
                Afrorock (c) 2026
              </p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

