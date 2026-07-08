'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Button from '../common/Button';
import FadeUp from '../animations/FadeUp';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image Wrapper */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAy9Yn_bvOC1abDWacQTv1zrlAeK7qXqIzD9aeI9Hw24-biltTlybj0DK4ycHcOIujnQSqypSPtIg8GebzdGEoRcVOU2KpxjC1aV3YeawsxXhcrdxydDBTOUYqBwAdIRD4xILKZgL8JbB58QRr_fvbJdTfqAG1QBmo2TmP8dpht_rXWwmxcNylvTf1czEmVO3q23cnFuG2dJMxXB_HYRp5vpB9FJutmt7BVmwTJdk4ZpUkitzRd0OwatQ"
          alt="Premium Cotton Co-ord set editorial lookbook"
          fill
          priority
          unoptimized
          sizes="100vw"
          className="object-cover object-center scale-105"
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-6 md:px-12 flex items-center justify-center lg:justify-end h-full pt-20">
        <div className="bg-brand-ivory/80 backdrop-blur-md p-8 sm:p-12 rounded-md border border-brand-charcoal/5 shadow-premium max-w-xl text-left flex flex-col items-start">
          <motion.span
            initial={{ opacity: 0, letterSpacing: '0.1em' }}
            animate={{ opacity: 1, letterSpacing: '0.25em' }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="font-accent text-xs font-bold uppercase text-brand-burgundy mb-5 tracking-[0.25em]"
          >
            Modern Everyday Fashion
          </motion.span>
          
          <FadeUp delay={0.3}>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-brand-charcoal mb-5 leading-[1.2] text-left">
              Grace in Every <br />
              <span className="italic text-brand-burgundy font-serif font-semibold">Thread</span>
            </h1>
          </FadeUp>

          <FadeUp delay={0.6}>
            <p className="font-body text-base text-brand-charcoal/80 mb-8 max-w-md text-left leading-relaxed">
              Comfortable premium ethnic wear and co-ord sets designed for contemporary everyday elegance.
            </p>
          </FadeUp>

          <FadeUp delay={0.8}>
            <a href="#products">
              <Button variant="primary" className="shadow-premium">
                Explore the Collection
              </Button>
            </a>
          </FadeUp>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer z-10"
      >
        <a href="#categories" aria-label="Scroll Down">
          <svg
            className="w-6 h-6 text-brand-burgundy opacity-60"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
