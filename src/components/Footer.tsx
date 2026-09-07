import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { logoLetters } from './Header';

export const Footer: React.FC = () => {
  return (
    <motion.footer
      id="site-footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
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
              The best quality of African Print Dress with perfect design that suit our client.
            </p>
          </div>

          {/* Column 2: MENU */}
          <div id="footer-col-menu" className="space-y-3">
            <h4 className="text-xs sm:text-sm font-bold tracking-widest text-white uppercase">
              Menu
            </h4>
            <ul className="space-y-2 text-sm text-neutral-300 font-medium">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  HOME
                </Link>
              </li>
              <li>
                <Link to="/shop" className="hover:text-white transition-colors">
                  Product
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
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
              {/* Mastercard icon badge */}
              <div className="w-12 h-8 rounded bg-[#1e293b] flex items-center justify-center p-1 border border-neutral-700">
                <svg className="w-8 h-5" viewBox="0 0 38 24" fill="none">
                  <circle cx="15" cy="12" r="10" fill="#EB001B" />
                  <circle cx="23" cy="12" r="10" fill="#F79E1B" fillOpacity="0.8" />
                </svg>
              </div>

              {/* Visa icon badge */}
              <div className="w-12 h-8 rounded bg-[#1e293b] flex items-center justify-center p-1 border border-neutral-700">
                <span className="text-[13px] font-black italic tracking-tighter text-[#3b82f6]">
                  VISA
                </span>
              </div>

              {/* PayPal icon badge */}
              <div className="w-12 h-8 rounded bg-[#1e293b] flex items-center justify-center p-1 border border-neutral-700">
                <span className="text-[12px] font-bold italic text-[#38bdf8]">
                  P<span className="text-[#0284c7]">P</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Terracotta Accent Line */}
        <div className="pt-8 sm:pt-10 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-400 space-y-4 sm:space-y-0">
          <p id="footer-copyright">
            Afrorock &copy; 2026. All rights reserved.
          </p>
          <div className="flex items-center space-x-6">
            <span className="hover:text-white transition-colors cursor-pointer">
              English (US)
            </span>
            <span>&bull;</span>
            <span className="hover:text-white transition-colors cursor-pointer">
              USD ($)
            </span>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};
