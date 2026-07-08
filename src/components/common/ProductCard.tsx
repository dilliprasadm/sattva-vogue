'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Product } from '@/data/products';
import Badge from './Badge';

interface ProductCardProps {
  product: Product;
  className?: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, className = '' }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`group flex flex-col w-full ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image Section */}
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-brand-beige rounded-sm mb-5">
        <Image
          src={product.image}
          alt={product.name}
          fill
          unoptimized
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Favorite Icon */}
        <button
          onClick={() => setIsFavorite(!isFavorite)}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-brand-ivory/80 backdrop-blur-xs flex items-center justify-center text-brand-charcoal hover:bg-brand-ivory transition-colors shadow-sm outline-none cursor-pointer"
        >
          <Heart
            className={`w-[18px] h-[18px] transition-colors duration-300 ${
              isFavorite ? 'fill-brand-burgundy text-brand-burgundy' : 'text-brand-charcoal hover:text-brand-burgundy'
            }`}
          />
        </button>

        {/* Top Badges */}
        {product.badge && (
          <div className="absolute top-4 left-4 z-10">
            <Badge label={product.badge} type={product.badgeType || 'primary'} />
          </div>
        )}

        {/* Quick Add Overlay */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-brand-charcoal/40 to-transparent z-10 flex justify-center"
            >
              <button className="w-full bg-brand-ivory hover:bg-brand-burgundy hover:text-brand-ivory text-brand-charcoal py-3 rounded-xs font-accent text-xs font-bold uppercase tracking-widest transition-colors shadow-sm cursor-pointer outline-none">
                Quick View
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Product Information */}
      <div className="flex justify-between items-start">
        <div className="flex flex-col">
          <span className="font-accent text-[10px] text-brand-burgundy uppercase tracking-widest font-semibold mb-1">
            {product.category}
          </span>
          <h3 className="font-body text-body-md font-medium text-brand-charcoal group-hover:text-brand-burgundy transition-colors duration-300">
            {product.name}
          </h3>
          <p className="font-body text-xs text-brand-muted mt-1 italic line-clamp-1">
            {product.description}
          </p>
        </div>
        <span className="font-accent text-sm font-semibold text-brand-charcoal ml-4">
          ₹{product.price.toLocaleString('en-IN')}
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
