'use client';

import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { testimonialsData } from '@/data/testimonials';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import FadeUp from '../animations/FadeUp';

export const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const current = testimonialsData[activeIndex];

  return (
    <section id="testimonials" className="py-20 bg-brand-ivory overflow-hidden">
      <Container>
        <SectionHeading
          title="Customer Testimonials"
          subtitle="COMMUNITY VOICE"
          align="center"
        />

        <div className="max-w-3xl mx-auto relative px-12 mt-8">
          {/* Quote Icon */}
          <div className="absolute top-0 left-0 text-brand-burgundy/10 pointer-events-none transform -translate-y-8 select-none">
            <Quote className="w-16 h-16 fill-current" />
          </div>

          <div className="min-h-[220px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="text-center flex flex-col items-center"
              >
                {/* Star Ratings */}
                <div className="flex gap-1 mb-6 text-brand-rust">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                {/* Review Quote */}
                <blockquote className="font-display text-lg sm:text-xl md:text-2xl text-brand-charcoal font-medium leading-relaxed italic mb-8 max-w-2xl">
                  &ldquo;{current.quote}&rdquo;
                </blockquote>

                {/* Author Info */}
                <cite className="not-italic font-accent text-xs font-bold tracking-widest text-brand-burgundy uppercase block">
                  — {current.name}, {current.location}
                </cite>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 border border-brand-charcoal/10 rounded-full flex items-center justify-center hover:bg-brand-burgundy hover:text-brand-ivory transition-colors cursor-pointer outline-none"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 border border-brand-charcoal/10 rounded-full flex items-center justify-center hover:bg-brand-burgundy hover:text-brand-ivory transition-colors cursor-pointer outline-none"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Carousel Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonialsData.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setActiveIndex(idx)}
              className={`w-2 h-2 rounded-full transition-all duration-300 outline-none cursor-pointer ${
                activeIndex === idx ? 'w-6 bg-brand-burgundy' : 'bg-brand-charcoal/20'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
