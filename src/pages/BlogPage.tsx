import React from 'react';
import { motion } from 'framer-motion';
import { blogPosts } from '../data/products';

export const BlogPage: React.FC = () => {
  return (
    <div className="w-full">
      {/* ================= HERO SECTION ================= */}
      <section
        id="blog-hero-section"
        className="w-full pt-32 sm:pt-36 md:pt-44 pb-10 md:pb-12 px-4 sm:px-6 md:px-8"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            id="blog-hero-heading"
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="font-['Playfair_Display',serif] text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-black mb-5 md:mb-6"
          >
            The Afrorock Journal
          </motion.h1>

          <motion.p
            id="blog-hero-description"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
            className="max-w-[700px] mx-auto text-sm sm:text-base md:text-[17px] leading-relaxed text-neutral-800 font-normal px-2"
          >
            Chronicles of African textile history, styling narratives, and celebrations of ancestral craft.
          </motion.p>
        </div>
      </section>

      {/* Terracotta/Mustard Accent Gradient Divider */}
      <div className="w-full h-[3px] bg-gradient-to-r from-transparent via-amber-700/60 to-transparent" />

      {/* ================= BLOG POST PREVIEWS ================= */}
      <section
        id="blog-posts-section"
        className="w-full bg-white py-14 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-12"
      >
        <div className="max-w-6xl mx-auto">
          {/* 2-Column Grid of 4 Blog Post Preview Cards */}
          <div
            id="blog-grid"
            className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12 md:gap-14"
          >
            {blogPosts.map((post, idx) => (
              <motion.article
                key={post.id}
                id={`blog-card-${post.id}`}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: 'easeOut' }}
                className="flex flex-col group cursor-pointer"
              >
                {/* Image Container with matching rounded corners */}
                <div className="w-full aspect-[16/10] rounded-xl sm:rounded-2xl overflow-hidden bg-neutral-100 shadow-xs mb-5">
                  <img
                    id={`blog-img-${post.id}`}
                    src={post.img}
                    alt={post.title}
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Plain Date Only - No fake avatars or meta-dots */}
                <span
                  id={`blog-date-${post.id}`}
                  className="text-xs sm:text-sm text-neutral-500 font-medium mb-2"
                >
                  {post.date}
                </span>

                {/* Title */}
                <h2
                  id={`blog-title-${post.id}`}
                  className="font-['Playfair_Display',serif] text-xl sm:text-2xl font-normal text-black group-hover:text-[#C59A27] transition-colors duration-200 leading-snug mb-2.5"
                >
                  {post.title}
                </h2>

                {/* One-Line Excerpt */}
                <p
                  id={`blog-excerpt-${post.id}`}
                  className="text-sm sm:text-[15px] text-neutral-700 font-normal leading-relaxed mb-4 line-clamp-2"
                >
                  {post.excerpt}
                </p>

                {/* Read More Link */}
                <div className="pt-1">
                  <span
                    id={`blog-read-more-${post.id}`}
                    className="text-xs sm:text-sm font-bold uppercase tracking-wider text-black group-hover:text-[#C59A27] transition-colors inline-flex items-center space-x-1"
                  >
                    <span>Read More</span>
                    <span aria-hidden="true">&rarr;</span>
                  </span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
