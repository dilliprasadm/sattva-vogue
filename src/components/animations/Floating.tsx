'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface FloatingProps {
  children: React.ReactNode;
  duration?: number;
  yOffset?: number;
  className?: string;
}

export const Floating: React.FC<FloatingProps> = ({
  children,
  duration = 3,
  yOffset = 10,
  className = '',
}) => {
  return (
    <motion.div
      animate={{
        y: [0, -yOffset, 0],
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'easeInOut',
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
export default Floating;
