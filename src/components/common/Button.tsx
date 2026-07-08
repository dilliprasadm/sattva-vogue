'use client';

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface ButtonProps extends HTMLMotionProps<'button'> {
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  children,
  className = '',
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-accent text-button uppercase tracking-[0.05em] px-8 py-4 rounded-sm transition-colors duration-300 font-semibold cursor-pointer outline-none';

  const variants = {
    primary: 'bg-brand-burgundy text-brand-ivory hover:bg-brand-rust',
    secondary: 'bg-brand-rust text-brand-ivory hover:bg-brand-burgundy',
    outline: 'border border-brand-charcoal text-brand-charcoal hover:bg-brand-charcoal hover:text-brand-ivory',
    text: 'text-brand-charcoal hover:text-brand-burgundy px-0 py-1 border-b border-transparent hover:border-brand-burgundy rounded-none',
  };

  return (
    <motion.button
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
