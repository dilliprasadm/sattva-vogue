'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';

interface TextRevealProps {
  text: string;
  delay?: number;
  className?: string;
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span';
}

export const TextReveal: React.FC<TextRevealProps> = ({
  text,
  delay = 0,
  className = '',
  tag = 'h2',
}) => {
  const words = text.split(' ');

  const containerVariants: Variants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.05,
        delayChildren: delay,
      },
    },
  };

  const wordVariants: Variants = {
    initial: { y: '100%' },
    animate: {
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1], // premium ease out
      },
    },
  };

  const Component = tag;

  return (
    <Component className={`overflow-hidden block ${className}`}>
      <motion.span
        variants={containerVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: '-50px' }}
        className="inline-flex flex-wrap"
      >
        {words.map((word, i) => (
          <span key={i} className="relative overflow-hidden mr-[0.25em] pb-[0.05em] inline-block">
            <motion.span variants={wordVariants} className="inline-block">
              {word}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Component>
  );
};
export default TextReveal;
