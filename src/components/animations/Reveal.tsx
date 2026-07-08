'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  direction?: 'left' | 'right' | 'up' | 'down';
  className?: string;
  overlayColor?: string;
}

export const Reveal: React.FC<RevealProps> = ({
  children,
  delay = 0,
  duration = 0.6,
  direction = 'left',
  className = '',
  overlayColor = 'bg-brand-burgundy',
}) => {
  // Configs for the overlay slider
  const sliderVariants: Variants = {
    initial: {
      left: direction === 'left' ? 0 : 'auto',
      right: direction === 'right' ? 0 : 'auto',
      width: '0%',
    },
    animate: {
      width: ['0%', '100%', '0%'],
      left: direction === 'left' ? ['0%', '0%', '100%'] : 'auto',
      right: direction === 'right' ? ['0%', '0%', '100%'] : 'auto',
      transition: {
        duration: duration + 0.2,
        delay: delay,
        ease: [0.76, 0, 0.24, 1], // Ease in/out
      },
    },
  };

  const contentVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        delay: delay + duration * 0.5,
        duration: 0.2,
      },
    },
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Content wrapper */}
      <motion.div
        variants={contentVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: '-50px' }}
      >
        {children}
      </motion.div>

      {/* Slide overlay */}
      <motion.div
        variants={sliderVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: '-50px' }}
        className={`absolute top-0 bottom-0 z-20 ${overlayColor}`}
        style={{ originX: direction === 'left' ? 0 : 1 }}
      />
    </div>
  );
};
export default Reveal;
