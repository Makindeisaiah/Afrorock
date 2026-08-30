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
} from 'lucide-react';
import heroLeft from './assets/hero-left.jpg';
import heroCenter from './assets/hero-center.jpg';
import heroRight from './assets/hero-right.jpg';
import category1 from './assets/category-1.jpg';
import category2 from './assets/category-2.jpg';
import category3 from './assets/category-3.jpg';
import category4 from './assets/category-4.jpg';

export default function App() {
  const [activeNav, setActiveNav] = useState('HOME');
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [cartCount, setCartCount] = useState(0);

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
      </main>
    </div>
  );
}

