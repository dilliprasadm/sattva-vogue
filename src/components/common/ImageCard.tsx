'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface ImageCardProps {
  image: string;
  title: string;
  tag?: string;
  subtitle?: string;
  btnText?: string;
  href?: string;
  className?: string;
  aspect?: string;
  overlayColor?: string;
}

export const ImageCard: React.FC<ImageCardProps> = ({
  image,
  title,
  tag,
  subtitle,
  btnText = 'Browse',
  href = '#',
  className = '',
  aspect = 'aspect-square',
  overlayColor = 'from-brand-burgundy/80 via-brand-burgundy/20 to-transparent',
}) => {
  return (
    <a
      href={href}
      className={`group relative block w-full overflow-hidden rounded-md shadow-card hover:shadow-premium transition-all duration-500 ${aspect} ${className}`}
    >
      {/* Background Image */}
      <Image
        src={image}
        alt={title}
        fill
        unoptimized
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
      />

      {/* Gradient Overlay */}
      <div
        className={`absolute inset-0 bg-gradient-to-t ${overlayColor} opacity-70 group-hover:opacity-85 transition-opacity duration-500`}
      />

      {/* Content Container */}
      <div className="absolute inset-0 p-8 flex flex-col justify-end text-brand-ivory z-10">
        {tag && (
          <span className="font-accent text-[10px] font-bold uppercase tracking-[0.2em] mb-2 opacity-80 block">
            {tag}
          </span>
        )}
        <h3 className="font-display text-headline-md md:text-3xl font-semibold mb-2 leading-tight">
          {title}
        </h3>
        {subtitle && (
          <p className="text-sm text-brand-ivory/80 font-body mb-6 line-clamp-2 max-w-sm">
            {subtitle}
          </p>
        )}

        <div className="inline-flex items-center gap-2 font-accent text-xs font-bold uppercase tracking-wider text-brand-ivory mt-2">
          <span>{btnText}</span>
          <motion.span
            animate={{ x: 0 }}
            whileHover={{ x: 4 }}
            transition={{ type: 'spring', stiffness: 300, damping: 15 }}
          >
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </motion.span>
        </div>
      </div>
    </a>
  );
};

export default ImageCard;
