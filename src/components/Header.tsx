import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Search,
  ShoppingBag,
  Instagram,
  Facebook,
} from 'lucide-react';

interface HeaderProps {
  cartCount: number;
  setCartCount: React.Dispatch<React.SetStateAction<number>>;
}

export const logoLetters = [
  { char: 'A', color: '#5296d5' },
  { char: 'f', color: '#689dd8' },
  { char: 'r', color: '#8893cb' },
  { char: 'o', color: '#a785b9' },
  { char: 'r', color: '#c7789f' },
  { char: 'o', color: '#d97287' },
  { char: 'c', color: '#dc746e' },
  { char: 'k', color: '#ce635f' },
];

export const Header: React.FC<HeaderProps> = ({ cartCount, setCartCount }) => {
  const location = useLocation();
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const navLinks = [
    { label: 'HOME', path: '/' },
    { label: 'ABOUT US', path: '/about' },
    { label: 'SHOP', path: '/shop' },
    { label: 'BLOG', path: '/blog' },
    { label: 'CONTACT', path: '/contact' },
  ];

  return (
    <motion.header
      id="site-header"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed top-0 left-0 w-full bg-white z-50 shadow-xs"
    >
      {/* ================= TOP UTILITY BAR ================= */}
      <div id="utility-bar" className="w-full bg-white border-b border-neutral-100 py-3 md:py-4 px-4 sm:px-6 md:px-12 lg:px-16">
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
            <Link to="/" className="inline-flex items-center tracking-normal">
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
            </Link>
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

            {/* Shopping Basket with red badge - Links to Checkout page */}
            <Link
              to="/checkout"
              id="btn-cart"
              aria-label={`Shopping bag with ${cartCount} items - Proceed to Checkout`}
              className="relative p-1 hover:text-neutral-600 transition-colors duration-200 cursor-pointer"
            >
              <ShoppingBag className="w-5 h-5 stroke-[1.75]" />
              <span
                id="cart-badge"
                className="absolute -top-1 -right-1 bg-[#E03B3B] text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center leading-none shadow-xs"
              >
                {cartCount}
              </span>
            </Link>

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
      </div>

      {/* ================= NAV BAR ================= */}
      <nav id="main-navigation" className="w-full bg-white border-b border-neutral-200 py-3 sm:py-4 px-4">
        <div className="max-w-4xl mx-auto flex items-center justify-center flex-wrap gap-x-6 sm:gap-x-10 md:gap-x-14 gap-y-2">
          {navLinks.map((link) => {
            const isActive =
              link.path === '/'
                ? location.pathname === '/'
                : location.pathname.startsWith(link.path);

            return (
              <Link
                key={link.label}
                id={`nav-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                to={link.path}
                className={`text-xs sm:text-sm font-bold tracking-wider transition-colors duration-200 uppercase ${
                  isActive
                    ? 'text-[#C59A27]'
                    : 'text-black hover:text-neutral-600'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </nav>
    </motion.header>
  );
};
