'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Button from '../common/Button';
import FadeUp from '../animations/FadeUp';
import TextReveal from '../animations/TextReveal';

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
        {/* Soft elegant color overlay */}
        <div className="absolute inset-0 bg-brand-charcoal/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-ivory/50 via-transparent to-transparent" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-4xl px-margin-mobile flex flex-col items-center">
        <motion.span
          initial={{ opacity: 0, letterSpacing: '0.1em' }}
          animate={{ opacity: 1, letterSpacing: '0.25em' }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="font-accent text-xs font-bold uppercase text-brand-burgundy mb-4 tracking-[0.25em]"
        >
          Modern Everyday Fashion
        </motion.span>
        
        <TextReveal
          tag="h1"
          text="Grace in Every Thread"
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-brand-charcoal mb-6 leading-tight max-w-3xl"
        />

        <FadeUp delay={0.6}>
          <p className="font-body text-body-lg text-brand-charcoal/80 mb-10 max-w-xl mx-auto italic leading-relaxed">
            Comfortable premium ethnic wear and co-ord sets designed for contemporary elegance.
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
