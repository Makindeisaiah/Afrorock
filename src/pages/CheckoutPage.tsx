import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  CreditCard,
  Lock,
  Truck,
  RotateCcw,
  Check,
  Trash2,
  Plus,
  Minus,
  ArrowLeft,
  ShieldCheck,
} from 'lucide-react';
import { CartItem, Product } from '../types';
import { products } from '../data/products';

interface CheckoutPageProps {
  cartItems: CartItem[];
  onUpdateQuantity: (productId: number, delta: number) => void;
  onRemoveItem: (productId: number) => void;
  onClearCart: () => void;
  onAddToCart: (product: Product) => void;
}

export const CheckoutPage: React.FC<CheckoutPageProps> = ({
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  onAddToCart,
}) => {
  // Customer Info Form State
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [apartment, setApartment] = useState('');
  const [city, setCity] = useState('');
  const [stateProvince, setStateProvince] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [country, setCountry] = useState('United States');

  // Shipping & Payment Options
  const [shippingMethod, setShippingMethod] = useState<'standard' | 'express'>('standard');
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'paypal'>('card');

  // Card details
  const [cardNumber, setCardNumber] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCvv, setCardCvv] = useState('');
  const [cardName, setCardName] = useState('');

  // Discount / Promo Code State
  const [discountCode, setDiscountCode] = useState('');
  const [discountApplied, setDiscountApplied] = useState(false);
  const [discountError, setDiscountError] = useState('');

  // Submission / Order Placed State
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');

  // Calculate Subtotal
  const parsePrice = (priceStr: string) => {
    const num = parseFloat(priceStr.replace(/[^0-9.]/g, ''));
    return isNaN(num) ? 100 : num;
  };

  const subtotal = cartItems.reduce((acc, item) => {
    return acc + parsePrice(item.product.price) * item.quantity;
  }, 0);

  const shippingCost = shippingMethod === 'express' ? 15 : 0;
  const discountAmount = discountApplied ? subtotal * 0.2 : 0; // 20% discount (e.g. AFRO20)
  const total = Math.max(0, subtotal - discountAmount + shippingCost);

  const handleApplyDiscount = (e: React.FormEvent) => {
    e.preventDefault();
    setDiscountError('');
    if (discountCode.trim().toUpperCase() === 'AFRO20' || discountCode.trim().toUpperCase() === 'HERITAGE') {
      setDiscountApplied(true);
      setDiscountError('');
    } else {
      setDiscountError('Invalid coupon code. Try AFRO20 for 20% off.');
    }
  };

  const handleFormatCardNumber = (val: string) => {
    const cleaned = val.replace(/\D/g, '').slice(0, 16);
    const parts = [];
    for (let i = 0; i < cleaned.length; i += 4) {
      parts.push(cleaned.substring(i, i + 4));
    }
    setCardNumber(parts.join(' '));
  };

  const handleFormatExpiry = (val: string) => {
    const cleaned = val.replace(/\D/g, '').slice(0, 4);
    if (cleaned.length >= 3) {
      setCardExpiry(`${cleaned.slice(0, 2)}/${cleaned.slice(2, 4)}`);
    } else {
      setCardExpiry(cleaned);
    }
  };

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (cartItems.length === 0) {
      alert('Your cart is empty. Please add an item to checkout.');
      return;
    }

    setIsProcessing(true);
    setTimeout(() => {
      const generatedOrder = `AFR-${Math.floor(10000 + Math.random() * 90000)}`;
      setOrderNumber(generatedOrder);
      setIsProcessing(false);
      setOrderComplete(true);
      onClearCart();
    }, 1500);
  };

  // ORDER COMPLETE CONFIRMATION VIEW
  if (orderComplete) {
    return (
      <div className="w-full min-h-[70vh] pt-36 sm:pt-44 pb-20 px-4 sm:px-6 md:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-6 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center border-2 border-emerald-500 shadow-sm"
          >
            <Check className="w-8 h-8 sm:w-10 sm:h-10 stroke-[2.5]" />
          </motion.div>

          <h1 className="font-['Playfair_Display',serif] text-3xl sm:text-4xl md:text-5xl font-normal text-black mb-3 tracking-tight">
            Order Confirmed!
          </h1>
          <p className="text-sm sm:text-base text-neutral-600 mb-2">
            Thank you for shopping with Afrorock, <span className="font-bold text-black">{firstName || 'Valued Customer'}</span>.
          </p>
          <p className="text-xs sm:text-sm text-neutral-500 mb-8">
            Order Reference: <span className="font-mono font-bold text-black text-sm sm:text-base">{orderNumber}</span>
          </p>

          {/* Receipt Card */}
          <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-6 text-left mb-8 space-y-4">
            <div className="border-b border-neutral-200 pb-3 flex justify-between items-center text-xs sm:text-sm">
              <span className="text-neutral-500 font-medium uppercase tracking-wider">Payment Status</span>
              <span className="font-bold text-emerald-700 bg-emerald-100/60 px-2.5 py-1 rounded-full text-xs">
                Paid Successfully (${total.toFixed(2)})
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div>
                <span className="text-neutral-400 uppercase tracking-wider block text-[11px] font-bold mb-1">
                  Delivery Address
                </span>
                <p className="font-medium text-black">{address || '14 Victoria Island'}</p>
                {apartment && <p className="text-neutral-600">{apartment}</p>}
                <p className="text-neutral-600">{city || 'Lagos'}, {stateProvince} {postalCode}</p>
                <p className="text-neutral-600">{country}</p>
              </div>

              <div>
                <span className="text-neutral-400 uppercase tracking-wider block text-[11px] font-bold mb-1">
                  Estimated Delivery
                </span>
                <p className="font-medium text-black">
                  {shippingMethod === 'express' ? '1 – 2 Business Days (Express)' : '3 – 5 Business Days (Standard)'}
                </p>
                <p className="text-neutral-600 text-xs mt-1">
                  Tracking number will be dispatched to <span className="font-semibold text-black">{email || 'your email'}</span>.
                </p>
              </div>
            </div>
          </div>

          <Link to="/shop">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="px-10 py-3.5 bg-black text-white text-sm sm:text-base font-semibold rounded-md sm:rounded-lg hover:bg-neutral-800 transition-colors cursor-pointer shadow-md"
            >
              Continue Shopping
            </motion.button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* ================= HERO HEADING ================= */}
      <section
        id="checkout-hero-section"
        className="w-full pt-32 sm:pt-36 md:pt-44 pb-8 px-4 sm:px-6 md:px-8"
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center space-x-2 text-xs sm:text-sm text-neutral-500 mb-4">
            <Link to="/shop" className="hover:text-black flex items-center space-x-1 transition-colors">
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Shop</span>
            </Link>
            <span>/</span>
            <span className="text-black font-semibold">Checkout</span>
          </div>

          <motion.h1
            id="checkout-heading"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="font-['Playfair_Display',serif] text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-black"
          >
            Checkout & Order Details
          </motion.h1>
          <p className="text-xs sm:text-sm text-neutral-600 mt-2">
            Please insert your shipping details and payment information to complete your order.
          </p>
        </div>
      </section>

      {/* Terracotta/Mustard Accent Gradient Divider */}
      <div className="w-full h-[3px] bg-gradient-to-r from-transparent via-amber-700/60 to-transparent" />

      {/* ================= MAIN CHECKOUT CONTENT (TWO COLUMNS) ================= */}
      <section
        id="checkout-main-section"
        className="w-full bg-white py-10 sm:py-14 md:py-16 px-4 sm:px-6 md:px-8 lg:px-12"
      >
        <div className="max-w-6xl mx-auto">
          <form onSubmit={handlePlaceOrder} className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            {/* ================= LEFT COLUMN: CUSTOMER INFO & PAYMENT (7 COLS) ================= */}
            <div className="lg:col-span-7 space-y-10">
              {/* Step 1: Contact Information */}
              <div id="section-contact-info" className="space-y-4">
                <div className="flex items-center justify-between border-b border-neutral-200 pb-2.5">
                  <h2 className="font-['Playfair_Display',serif] text-xl sm:text-2xl font-normal text-black">
                    1. Contact Information
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5 sm:col-span-2">
                    <label htmlFor="customer-email" className="text-xs font-bold uppercase tracking-wider text-black">
                      Email Address *
                    </label>
                    <input
                      id="customer-email"
                      type="email"
                      required
                      placeholder="your.email@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-2.5 text-sm bg-white border border-neutral-300 rounded-md sm:rounded-lg focus:outline-none focus:border-black transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5 sm:col-span-2">
                    <label htmlFor="customer-phone" className="text-xs font-bold uppercase tracking-wider text-black">
                      Phone Number *
                    </label>
                    <input
                      id="customer-phone"
                      type="tel"
                      required
                      placeholder="+1 (555) 000-0000"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-2.5 text-sm bg-white border border-neutral-300 rounded-md sm:rounded-lg focus:outline-none focus:border-black transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Step 2: Shipping Address */}
              <div id="section-shipping-address" className="space-y-4">
                <div className="border-b border-neutral-200 pb-2.5">
                  <h2 className="font-['Playfair_Display',serif] text-xl sm:text-2xl font-normal text-black">
                    2. Shipping Address
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="first-name" className="text-xs font-bold uppercase tracking-wider text-black">
                      First Name *
                    </label>
                    <input
                      id="first-name"
                      type="text"
                      required
                      placeholder="Jane"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="w-full px-4 py-2.5 text-sm bg-white border border-neutral-300 rounded-md sm:rounded-lg focus:outline-none focus:border-black transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="last-name" className="text-xs font-bold uppercase tracking-wider text-black">
                      Last Name *
                    </label>
                    <input
                      id="last-name"
                      type="text"
                      required
                      placeholder="Doe"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className="w-full px-4 py-2.5 text-sm bg-white border border-neutral-300 rounded-md sm:rounded-lg focus:outline-none focus:border-black transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5 sm:col-span-2">
                    <label htmlFor="street-address" className="text-xs font-bold uppercase tracking-wider text-black">
                      Street Address *
                    </label>
                    <input
                      id="street-address"
                      type="text"
                      required
                      placeholder="123 Culture Way"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="w-full px-4 py-2.5 text-sm bg-white border border-neutral-300 rounded-md sm:rounded-lg focus:outline-none focus:border-black transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5 sm:col-span-2">
                    <label htmlFor="apartment-suite" className="text-xs font-bold uppercase tracking-wider text-neutral-600">
                      Apartment, suite, unit (optional)
                    </label>
                    <input
                      id="apartment-suite"
                      type="text"
                      placeholder="Apt 4B"
                      value={apartment}
                      onChange={(e) => setApartment(e.target.value)}
                      className="w-full px-4 py-2.5 text-sm bg-white border border-neutral-300 rounded-md sm:rounded-lg focus:outline-none focus:border-black transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="city" className="text-xs font-bold uppercase tracking-wider text-black">
                      City *
                    </label>
                    <input
                      id="city"
                      type="text"
                      required
                      placeholder="New York"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="w-full px-4 py-2.5 text-sm bg-white border border-neutral-300 rounded-md sm:rounded-lg focus:outline-none focus:border-black transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="state-province" className="text-xs font-bold uppercase tracking-wider text-black">
                      State / Province *
                    </label>
                    <input
                      id="state-province"
                      type="text"
                      required
                      placeholder="NY"
                      value={stateProvince}
                      onChange={(e) => setStateProvince(e.target.value)}
                      className="w-full px-4 py-2.5 text-sm bg-white border border-neutral-300 rounded-md sm:rounded-lg focus:outline-none focus:border-black transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="postal-code" className="text-xs font-bold uppercase tracking-wider text-black">
                      Postal Code / ZIP *
                    </label>
                    <input
                      id="postal-code"
                      type="text"
                      required
                      placeholder="10001"
                      value={postalCode}
                      onChange={(e) => setPostalCode(e.target.value)}
                      className="w-full px-4 py-2.5 text-sm bg-white border border-neutral-300 rounded-md sm:rounded-lg focus:outline-none focus:border-black transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="country" className="text-xs font-bold uppercase tracking-wider text-black">
                      Country *
                    </label>
                    <select
                      id="country"
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      className="w-full px-4 py-2.5 text-sm bg-white border border-neutral-300 rounded-md sm:rounded-lg focus:outline-none focus:border-black transition-colors"
                    >
                      <option value="United States">United States</option>
                      <option value="United Kingdom">United Kingdom</option>
                      <option value="Nigeria">Nigeria</option>
                      <option value="Ghana">Ghana</option>
                      <option value="Canada">Canada</option>
                      <option value="France">France</option>
                      <option value="Germany">Germany</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Step 3: Shipping Method */}
              <div id="section-shipping-method" className="space-y-4">
                <div className="border-b border-neutral-200 pb-2.5">
                  <h2 className="font-['Playfair_Display',serif] text-xl sm:text-2xl font-normal text-black">
                    3. Delivery Option
                  </h2>
                </div>

                <div className="space-y-3">
                  {/* Standard Delivery */}
                  <label
                    className={`flex items-center justify-between p-4 border rounded-md sm:rounded-lg cursor-pointer transition-all ${
                      shippingMethod === 'standard'
                        ? 'border-black bg-neutral-50 ring-1 ring-black'
                        : 'border-neutral-300 hover:border-neutral-400'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <input
                        type="radio"
                        name="shippingOption"
                        checked={shippingMethod === 'standard'}
                        onChange={() => setShippingMethod('standard')}
                        className="w-4 h-4 text-black focus:ring-black accent-black"
                      />
                      <div>
                        <span className="font-bold text-sm text-black block">Standard Free Delivery</span>
                        <span className="text-xs text-neutral-500">3 – 5 business days (All orders)</span>
                      </div>
                    </div>
                    <span className="font-bold text-sm text-[#C59A27] uppercase">Free</span>
                  </label>

                  {/* Express Delivery */}
                  <label
                    className={`flex items-center justify-between p-4 border rounded-md sm:rounded-lg cursor-pointer transition-all ${
                      shippingMethod === 'express'
                        ? 'border-black bg-neutral-50 ring-1 ring-black'
                        : 'border-neutral-300 hover:border-neutral-400'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <input
                        type="radio"
                        name="shippingOption"
                        checked={shippingMethod === 'express'}
                        onChange={() => setShippingMethod('express')}
                        className="w-4 h-4 text-black focus:ring-black accent-black"
                      />
                      <div>
                        <span className="font-bold text-sm text-black block">Express Priority Courier</span>
                        <span className="text-xs text-neutral-500">1 – 2 business days expedited tracking</span>
                      </div>
                    </div>
                    <span className="font-bold text-sm text-black">$15.00</span>
                  </label>
                </div>
              </div>

              {/* Step 4: Payment Details */}
              <div id="section-payment" className="space-y-4">
                <div className="border-b border-neutral-200 pb-2.5 flex items-center justify-between">
                  <h2 className="font-['Playfair_Display',serif] text-xl sm:text-2xl font-normal text-black">
                    4. Payment
                  </h2>
                  <div className="flex items-center space-x-1.5 text-xs text-neutral-500">
                    <Lock className="w-3.5 h-3.5 text-neutral-600" />
                    <span>256-bit Encrypted</span>
                  </div>
                </div>

                {/* Payment Tabs: Credit Card / PayPal */}
                <div className="flex space-x-3">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    className={`flex-1 py-3 px-4 border rounded-md sm:rounded-lg text-xs sm:text-sm font-semibold flex items-center justify-center space-x-2 transition-all ${
                      paymentMethod === 'card'
                        ? 'border-black bg-black text-white'
                        : 'border-neutral-300 bg-white text-black hover:border-black'
                    }`}
                  >
                    <CreditCard className="w-4 h-4" />
                    <span>Credit / Debit Card</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('paypal')}
                    className={`flex-1 py-3 px-4 border rounded-md sm:rounded-lg text-xs sm:text-sm font-semibold flex items-center justify-center space-x-2 transition-all ${
                      paymentMethod === 'paypal'
                        ? 'border-black bg-black text-white'
                        : 'border-neutral-300 bg-white text-black hover:border-black'
                    }`}
                  >
                    <span className="italic font-bold">PayPal</span>
                  </button>
                </div>

                {paymentMethod === 'card' ? (
                  <div className="space-y-4 p-5 border border-neutral-200 rounded-lg bg-neutral-50/50">
                    <div className="space-y-1.5">
                      <label htmlFor="card-number" className="text-xs font-bold uppercase tracking-wider text-black">
                        Card Number *
                      </label>
                      <div className="relative">
                        <input
                          id="card-number"
                          type="text"
                          required
                          maxLength={19}
                          placeholder="4242 •••• •••• 4242"
                          value={cardNumber}
                          onChange={(e) => handleFormatCardNumber(e.target.value)}
                          className="w-full pl-4 pr-10 py-2.5 text-sm bg-white border border-neutral-300 rounded-md sm:rounded-lg focus:outline-none focus:border-black transition-colors font-mono"
                        />
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-neutral-400">
                          <CreditCard className="w-4 h-4" />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="card-name" className="text-xs font-bold uppercase tracking-wider text-black">
                        Cardholder Name *
                      </label>
                      <input
                        id="card-name"
                        type="text"
                        required
                        placeholder="Jane Doe"
                        value={cardName}
                        onChange={(e) => setCardName(e.target.value)}
                        className="w-full px-4 py-2.5 text-sm bg-white border border-neutral-300 rounded-md sm:rounded-lg focus:outline-none focus:border-black transition-colors"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label htmlFor="card-expiry" className="text-xs font-bold uppercase tracking-wider text-black">
                          Expiry Date *
                        </label>
                        <input
                          id="card-expiry"
                          type="text"
                          required
                          maxLength={5}
                          placeholder="MM/YY"
                          value={cardExpiry}
                          onChange={(e) => handleFormatExpiry(e.target.value)}
                          className="w-full px-4 py-2.5 text-sm bg-white border border-neutral-300 rounded-md sm:rounded-lg focus:outline-none focus:border-black transition-colors font-mono"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label htmlFor="card-cvv" className="text-xs font-bold uppercase tracking-wider text-black">
                          CVV / CVC *
                        </label>
                        <input
                          id="card-cvv"
                          type="password"
                          required
                          maxLength={4}
                          placeholder="123"
                          value={cardCvv}
                          onChange={(e) => setCardCvv(e.target.value.replace(/\D/g, '').slice(0, 4))}
                          className="w-full px-4 py-2.5 text-sm bg-white border border-neutral-300 rounded-md sm:rounded-lg focus:outline-none focus:border-black transition-colors font-mono"
                        />
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="p-6 border border-neutral-200 rounded-lg bg-neutral-50 text-center space-y-2">
                    <p className="text-sm text-neutral-700">
                      You will be directed to PayPal to authorize your payment of <span className="font-bold text-black">${total.toFixed(2)}</span>.
                    </p>
                    <p className="text-xs text-neutral-500">
                      Standard buyer protection and encrypted checkout applied automatically.
                    </p>
                  </div>
                )}
              </div>

              {/* Submit Payment Button */}
              <div className="pt-2">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.15 }}
                  id="btn-pay-now"
                  type="submit"
                  disabled={isProcessing || cartItems.length === 0}
                  className="w-full py-4 bg-[#b8336a] hover:bg-[#a5265a] disabled:bg-neutral-400 text-white text-base font-bold rounded-full transition-colors duration-200 shadow-md flex items-center justify-center space-x-2 cursor-pointer disabled:cursor-not-allowed"
                >
                  {isProcessing ? (
                    <span>Processing Secure Payment...</span>
                  ) : (
                    <>
                      <Lock className="w-4 h-4" />
                      <span>Pay ${total.toFixed(2)} & Complete Order</span>
                    </>
                  )}
                </motion.button>

                {/* Reassurance text */}
                <div className="mt-4 flex items-center justify-center space-x-6 text-xs text-neutral-500">
                  <span className="flex items-center space-x-1">
                    <Truck className="w-3.5 h-3.5" />
                    <span>Free Delivery</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>30 Days Return</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Secure Payment</span>
                  </span>
                </div>
              </div>
            </div>

            {/* ================= RIGHT COLUMN: ORDER SUMMARY & CART ITEMS (5 COLS) ================= */}
            <div className="lg:col-span-5">
              <div className="sticky top-28 bg-neutral-50 border border-neutral-200 rounded-xl p-5 sm:p-7 space-y-6">
                <div className="flex items-center justify-between border-b border-neutral-200 pb-4">
                  <h3 className="font-['Playfair_Display',serif] text-xl font-normal text-black">
                    Order Summary
                  </h3>
                  <span className="text-xs font-semibold text-neutral-500">
                    {cartItems.reduce((sum, item) => sum + item.quantity, 0)} {cartItems.length === 1 ? 'item' : 'items'}
                  </span>
                </div>

                {/* Items List */}
                {cartItems.length === 0 ? (
                  <div className="py-8 text-center space-y-4">
                    <p className="text-sm text-neutral-500">Your shopping bag is currently empty.</p>
                    <div className="space-y-2">
                      <p className="text-xs text-neutral-400">Quickly add a signature look to test:</p>
                      <button
                        type="button"
                        onClick={() => onAddToCart(products[0])}
                        className="px-4 py-2 bg-black text-white text-xs font-semibold rounded-md hover:bg-neutral-800 transition-colors cursor-pointer"
                      >
                        + Add African Print Crop Top ($100)
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4 max-h-[360px] overflow-y-auto pr-1 divide-y divide-neutral-200">
                    {cartItems.map((item) => (
                      <div key={item.product.id} className="pt-4 first:pt-0 flex items-center space-x-3.5">
                        {/* Thumbnail */}
                        <div className="w-16 h-20 rounded-md overflow-hidden bg-white border border-neutral-200 flex-shrink-0">
                          <img
                            src={item.product.img}
                            alt={item.product.name}
                            className="w-full h-full object-cover object-top"
                            referrerPolicy="no-referrer"
                          />
                        </div>

                        {/* Title & Category */}
                        <div className="flex-1 min-w-0">
                          <h4 className="font-bold text-sm text-black truncate">
                            {item.product.name}
                          </h4>
                          <span className="text-xs text-neutral-500 block mb-2">
                            {item.product.category}
                          </span>

                          {/* Stepper */}
                          <div className="flex items-center space-x-2">
                            <div className="flex items-center border border-neutral-300 rounded bg-white">
                              <button
                                type="button"
                                aria-label="Decrease quantity"
                                onClick={() => onUpdateQuantity(item.product.id, -1)}
                                className="p-1 hover:bg-neutral-100 text-neutral-700 transition-colors"
                              >
                                <Minus className="w-3 h-3" />
                              </button>
                              <span className="px-2 text-xs font-semibold text-black min-w-[20px] text-center">
                                {item.quantity}
                              </span>
                              <button
                                type="button"
                                aria-label="Increase quantity"
                                onClick={() => onUpdateQuantity(item.product.id, 1)}
                                className="p-1 hover:bg-neutral-100 text-neutral-700 transition-colors"
                              >
                                <Plus className="w-3 h-3" />
                              </button>
                            </div>

                            <button
                              type="button"
                              aria-label="Remove item"
                              onClick={() => onRemoveItem(item.product.id)}
                              className="text-neutral-400 hover:text-red-600 p-1 transition-colors"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>

                        {/* Price */}
                        <div className="text-right">
                          <span className="font-bold text-sm text-black block">
                            ${(parsePrice(item.product.price) * item.quantity).toFixed(2)}
                          </span>
                          <span className="text-[11px] text-neutral-400 block">
                            {item.product.price} each
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Promo Code Input */}
                <div className="pt-2 border-t border-neutral-200">
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      placeholder="Promo code (e.g. AFRO20)"
                      value={discountCode}
                      onChange={(e) => setDiscountCode(e.target.value)}
                      className="flex-1 px-3 py-2 text-xs sm:text-sm bg-white border border-neutral-300 rounded focus:outline-none focus:border-black uppercase"
                    />
                    <button
                      type="button"
                      onClick={handleApplyDiscount}
                      className="px-4 py-2 bg-neutral-900 hover:bg-black text-white text-xs font-semibold rounded transition-colors"
                    >
                      Apply
                    </button>
                  </div>
                  {discountApplied && (
                    <p className="text-xs text-emerald-700 mt-1.5 font-medium flex items-center space-x-1">
                      <Check className="w-3.5 h-3.5" />
                      <span>20% Discount applied!</span>
                    </p>
                  )}
                  {discountError && (
                    <p className="text-xs text-red-600 mt-1.5">{discountError}</p>
                  )}
                </div>

                {/* Calculation Breakdown */}
                <div className="border-t border-neutral-200 pt-4 space-y-2.5 text-xs sm:text-sm">
                  <div className="flex justify-between text-neutral-600">
                    <span>Subtotal</span>
                    <span className="font-medium text-black">${subtotal.toFixed(2)}</span>
                  </div>

                  {discountApplied && (
                    <div className="flex justify-between text-emerald-700 font-medium">
                      <span>Discount (20%)</span>
                      <span>-${discountAmount.toFixed(2)}</span>
                    </div>
                  )}

                  <div className="flex justify-between text-neutral-600">
                    <span>Shipping</span>
                    {shippingCost === 0 ? (
                      <span className="font-bold text-[#C59A27] uppercase text-xs">Free</span>
                    ) : (
                      <span className="font-medium text-black">$15.00</span>
                    )}
                  </div>

                  <div className="flex justify-between text-neutral-600">
                    <span>Estimated Tax</span>
                    <span className="font-medium text-black">$0.00</span>
                  </div>

                  <div className="border-t border-neutral-200 pt-3 flex justify-between items-center text-base sm:text-lg font-bold text-black">
                    <span>Total</span>
                    <span className="font-['Playfair_Display',serif] text-xl sm:text-2xl">
                      ${total.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};
