import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setTimeout(() => {
        setFormData({ name: '', email: '', message: '' });
        setSubmitted(false);
      }, 5000);
    }
  };

  return (
    <div className="w-full">
      {/* ================= HERO SECTION ================= */}
      <section
        id="contact-hero-section"
        className="w-full pt-32 sm:pt-36 md:pt-44 pb-10 md:pb-12 px-4 sm:px-6 md:px-8"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            id="contact-hero-heading"
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="font-['Playfair_Display',serif] text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-black mb-5 md:mb-6"
          >
            Get in Touch
          </motion.h1>

          <motion.p
            id="contact-hero-description"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
            className="max-w-[700px] mx-auto text-sm sm:text-base md:text-[17px] leading-relaxed text-neutral-800 font-normal px-2"
          >
            Whether you have questions regarding bespoke fittings, styling advice, or shipping inquiries, our atelier team is always here to assist.
          </motion.p>
        </div>
      </section>

      {/* Terracotta/Mustard Accent Gradient Divider */}
      <div className="w-full h-[3px] bg-gradient-to-r from-transparent via-amber-700/60 to-transparent" />

      {/* ================= CONTACT CONTENT SECTION (TWO-COLUMN TEXT-FORWARD) ================= */}
      <section
        id="contact-content-section"
        className="w-full bg-white py-14 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-12"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 lg:gap-20">
            {/* Left Column: Contact Form (7 cols) */}
            <motion.div
              id="contact-form-container"
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="lg:col-span-7 flex flex-col"
            >
              <h2 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-normal text-black mb-3">
                Send a Message
              </h2>
              <p className="text-sm sm:text-base text-neutral-600 mb-8">
                Fill out the details below and we will respond within 24 hours.
              </p>

              {submitted ? (
                <div
                  id="contact-success-message"
                  className="p-6 bg-neutral-50 border border-neutral-200 rounded-lg text-black space-y-2"
                >
                  <div className="flex items-center space-x-2 text-emerald-700 font-semibold">
                    <Check className="w-5 h-5" />
                    <span>Message Received</span>
                  </div>
                  <p className="text-sm text-neutral-700">
                    Thank you for reaching out to Afrorock. A member of our client care atelier will be in touch shortly.
                  </p>
                </div>
              ) : (
                <form
                  id="contact-form"
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  {/* Name Field */}
                  <div className="flex flex-col space-y-2">
                    <label
                      htmlFor="contact-name"
                      className="text-xs sm:text-sm font-bold uppercase tracking-wider text-black"
                    >
                      Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-4 py-3 text-sm text-black placeholder:text-neutral-400 bg-white border border-neutral-300 rounded-md sm:rounded-lg focus:outline-none focus:border-black transition-colors"
                    />
                  </div>

                  {/* Email Field */}
                  <div className="flex flex-col space-y-2">
                    <label
                      htmlFor="contact-email"
                      className="text-xs sm:text-sm font-bold uppercase tracking-wider text-black"
                    >
                      Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-3 text-sm text-black placeholder:text-neutral-400 bg-white border border-neutral-300 rounded-md sm:rounded-lg focus:outline-none focus:border-black transition-colors"
                    />
                  </div>

                  {/* Message Field */}
                  <div className="flex flex-col space-y-2">
                    <label
                      htmlFor="contact-message"
                      className="text-xs sm:text-sm font-bold uppercase tracking-wider text-black"
                    >
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      rows={5}
                      placeholder="How can our atelier assist you?"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-4 py-3 text-sm text-black placeholder:text-neutral-400 bg-white border border-neutral-300 rounded-md sm:rounded-lg focus:outline-none focus:border-black transition-colors resize-y"
                    />
                  </div>

                  {/* Submit Button styled like existing pink or black button */}
                  <div>
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      transition={{ duration: 0.15 }}
                      id="contact-submit-btn"
                      type="submit"
                      className="w-full sm:w-auto px-8 py-3.5 bg-[#b8336a] hover:bg-[#a5265a] text-white text-sm sm:text-base font-semibold rounded-full transition-colors duration-200 shadow-md cursor-pointer"
                    >
                      Send Message
                    </motion.button>
                  </div>
                </form>
              )}
            </motion.div>

            {/* Right Column: Quiet Text-Forward Contact Details (5 cols) - No Boxed Cards */}
            <motion.div
              id="contact-details-container"
              initial={{ x: 30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
              className="lg:col-span-5 flex flex-col justify-start space-y-10 lg:pl-6 lg:border-l lg:border-neutral-200"
            >
              <div>
                <h2 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-normal text-black mb-3">
                  Atelier & Support
                </h2>
                <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                  We welcome private client consultations and custom fitting requests by appointment.
                </p>
              </div>

              {/* Email Detail */}
              <div className="space-y-1">
                <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#C59A27] block">
                  Email
                </span>
                <a
                  href="mailto:hello@afrorock.com"
                  className="text-base sm:text-lg font-normal text-black hover:text-amber-700 transition-colors"
                >
                  hello@afrorock.com
                </a>
                <p className="text-xs text-neutral-500">
                  For press inquiries: press@afrorock.com
                </p>
              </div>

              {/* Phone Detail */}
              <div className="space-y-1">
                <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#C59A27] block">
                  Phone
                </span>
                <p className="text-base sm:text-lg font-normal text-black">
                  +234 801 234 5678 (Lagos)
                </p>
                <p className="text-base sm:text-lg font-normal text-black">
                  +44 20 7946 0912 (London)
                </p>
              </div>

              {/* Locations */}
              <div className="space-y-1">
                <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#C59A27] block">
                  Locations
                </span>
                <p className="text-sm sm:text-base text-neutral-800">
                  14 Victoria Island Boulevard, Lagos, Nigeria
                </p>
                <p className="text-sm sm:text-base text-neutral-800">
                  72 Covent Garden Walk, London, United Kingdom
                </p>
              </div>

              {/* Atelier Hours */}
              <div className="space-y-1">
                <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#C59A27] block">
                  Atelier Hours
                </span>
                <p className="text-sm sm:text-base text-neutral-800">
                  Monday – Friday: 9:00 AM – 6:00 PM
                </p>
                <p className="text-sm sm:text-base text-neutral-800">
                  Saturday: 10:00 AM – 4:00 PM
                </p>
                <p className="text-xs text-neutral-500">
                  Closed on Sundays and national holidays.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};
