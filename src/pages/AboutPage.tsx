import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import aboutPhoto from '../assets/about-photo.jpg';
import { teamMembers } from '../data/products';

export const AboutPage: React.FC = () => {
  return (
    <div className="w-full">
      {/* ================= HERO SECTION ================= */}
      <section
        id="about-hero-section"
        className="w-full pt-32 sm:pt-36 md:pt-44 pb-12 md:pb-16 px-4 sm:px-6 md:px-8"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            id="about-hero-heading"
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="font-['Playfair_Display',serif] text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-black mb-5 md:mb-6"
          >
            About Afrorock
          </motion.h1>

          <motion.p
            id="about-hero-description"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
            className="max-w-[700px] mx-auto text-sm sm:text-base md:text-[17px] leading-relaxed text-neutral-800 font-normal px-2"
          >
            Heritage evokes the rich cultural legacy and traditional artistry of African fabrics. We design authentic prints and modern silhouettes that celebrate identity, pride, and timeless grace.
          </motion.p>
        </div>
      </section>

      {/* Terracotta/Mustard Accent Gradient Divider */}
      <div className="w-full h-[3px] bg-gradient-to-r from-transparent via-amber-700/60 to-transparent" />

      {/* ================= EXPANDED STORY & ARTISAN CRAFT ================= */}
      <section
        id="about-narrative-section"
        className="w-full bg-white py-14 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-12"
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10 sm:gap-14 lg:gap-16">
            {/* Left Column: Reused Portrait Photo with same rounded corners */}
            <motion.div
              id="about-photo-container"
              initial={{ x: -40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="w-full lg:w-[45%] max-w-md lg:max-w-none flex-shrink-0"
            >
              <div className="w-full aspect-[3/4] overflow-hidden rounded-xl bg-neutral-100 shadow-md">
                <img
                  id="about-artisan-photo"
                  src={aboutPhoto}
                  alt="Afrorock artisan model in cultural African print attire"
                  className="w-full h-full object-cover object-center"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>

            {/* Right Column: Expanded Story Block */}
            <motion.div
              id="about-story-text"
              initial={{ x: 40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
              className="w-full lg:w-[52%] flex flex-col justify-center space-y-6 text-black"
            >
              <h2 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl md:text-4xl font-normal text-black tracking-tight">
                Our Story & Heritage
              </h2>

              <p className="text-base sm:text-lg leading-relaxed font-normal text-neutral-900">
                At Afrorock, we celebrate the rich cultural heritage of Africa
                through vibrant prints and designs. Our collection features
                traditional yet modern pieces, designed to empower you with
                pride and elegance. From casual wear to special occasion
                attire, our designs are made with passion and purpose.
              </p>

              <p className="text-base sm:text-lg leading-relaxed font-normal text-neutral-900">
                Our textiles trace centuries of visual storytelling. Every motif
                and color palette carries deep significance—representing royal
                heritage, celebrations of harvest, and spiritual lineage. We partner
                closely with textile artisans across West Africa, preserving hand-dyed
                batik and wax print techniques while infusing tailored, modern lines.
              </p>

              <p className="text-base sm:text-lg leading-relaxed font-normal text-neutral-900">
                Join us in embracing the beauty of African fashion. Explore our
                collection today and discover pieces that speak to your soul.
                Afrorock is your gateway to embracing the elegance and soul of
                African-inspired fashion.
              </p>

              <div className="pt-3">
                <Link to="/shop">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="px-8 py-3 bg-black text-white text-sm sm:text-base font-semibold rounded-md sm:rounded-lg hover:bg-neutral-800 transition-colors cursor-pointer shadow-sm"
                  >
                    View The Collection
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Terracotta/Mustard Accent Gradient Divider */}
      <div className="w-full h-[3px] bg-gradient-to-r from-amber-700 via-rose-600 to-amber-700 opacity-75" />

      {/* ================= OUR TEAM / LEADERSHIP (TEXT-ONLY MINIMAL) ================= */}
      <section
        id="about-team-section"
        className="w-full bg-white py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 lg:px-12"
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2
              id="team-heading"
              className="font-['Playfair_Display',serif] text-3xl sm:text-4xl md:text-5xl font-normal text-black tracking-tight"
            >
              Our Team
            </h2>
            <p className="max-w-2xl mx-auto mt-4 text-sm sm:text-base text-neutral-700 font-normal leading-relaxed">
              The creative stewards and textile masters who guide Afrorock from loom to modern couture.
            </p>
          </div>

          {/* 3-Column Minimal Text-Only Layout - No Fake Stock Photos */}
          <div
            id="team-grid"
            className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12"
          >
            {teamMembers.map((member, idx) => (
              <motion.div
                key={member.name}
                id={`team-member-${idx + 1}`}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15, ease: 'easeOut' }}
                className="flex flex-col border-t-2 border-black pt-6"
              >
                <span className="text-xs sm:text-sm font-bold tracking-wider text-[#C59A27] uppercase mb-1">
                  {member.role}
                </span>
                <h3 className="font-['Playfair_Display',serif] text-xl sm:text-2xl font-normal text-black mb-3">
                  {member.name}
                </h3>
                <p className="text-sm sm:text-[15px] leading-relaxed text-neutral-800 font-normal">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
