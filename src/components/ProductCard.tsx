import React from 'react';
import { motion } from 'framer-motion';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  index: number;
  onAddToCart: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  index,
  onAddToCart,
}) => {
  return (
    <motion.div
      id={`product-card-${product.id}`}
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: (index % 4) * 0.1,
        ease: 'easeOut',
      }}
      className="flex flex-col items-center group"
    >
      {/* Portrait Product Photo with rounded corners */}
      <div className="w-full aspect-[3/4.2] rounded-xl sm:rounded-2xl overflow-hidden bg-neutral-100 shadow-xs group-hover:shadow-md transition-all duration-300">
        <img
          id={`product-img-${product.id}`}
          src={product.img}
          alt={product.name}
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Product Info Block */}
      <div className="mt-3 sm:mt-4 text-center flex flex-col items-center space-y-1.5 sm:space-y-2 w-full">
        <h3
          id={`product-title-${product.id}`}
          className="font-bold text-sm sm:text-base md:text-[17px] text-black tracking-normal"
        >
          {product.name}
        </h3>

        {/* Price Tag */}
        <p
          id={`product-price-${product.id}`}
          className="text-sm sm:text-base text-neutral-800 font-normal"
        >
          {product.price}
        </p>

        {/* Add To Cart Button */}
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          transition={{ duration: 0.15 }}
          id={`product-add-to-cart-${product.id}`}
          onClick={() => onAddToCart(product)}
          className="mt-1 w-full max-w-[170px] py-2.5 px-5 bg-black text-white text-sm font-semibold rounded-md sm:rounded-lg hover:bg-neutral-800 transition-colors shadow-sm cursor-pointer"
        >
          Add To Cart
        </motion.button>
      </div>
    </motion.div>
  );
};
