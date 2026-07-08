'use client';

import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { bestSellersProducts } from '@/data/products';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import ProductCard from '../common/ProductCard';
import FadeUp from '../animations/FadeUp';

export const BestSellers: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      // Scroll 1 card on mobile, 2 cards on desktop (320px card + 32px gap = 352px)
      const scrollAmount = clientWidth < 640 ? 312 : 352 * 2;
      scrollRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="best-sellers" className="py-20 bg-brand-ivory overflow-hidden">
      <Container>
        <div className="flex justify-between items-end mb-12">
          <SectionHeading
            title="Best Sellers"
            subtitle="Hand-picked for You"
            className="mb-0!"
          />
          
          {/* Scroll Buttons */}
          <div className="flex gap-4">
            <button
              onClick={() => scroll('left')}
              className="w-12 h-12 rounded-full border border-brand-charcoal/10 flex items-center justify-center hover:bg-brand-burgundy hover:text-brand-ivory hover:border-brand-burgundy transition-all cursor-pointer outline-none shadow-sm"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-12 h-12 rounded-full border border-brand-charcoal/10 flex items-center justify-center hover:bg-brand-burgundy hover:text-brand-ivory hover:border-brand-burgundy transition-all cursor-pointer outline-none shadow-sm"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </Container>

      {/* Horizontal Scroller */}
      <div className="pl-6 md:pl-[40px] lg:pl-[80px] pr-6">
        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto pb-8 scroll-smooth no-scrollbar"
        >
          {bestSellersProducts.map((product, index) => (
            <div key={product.id} className="min-w-[280px] sm:min-w-[320px] max-w-[320px]">
              <FadeUp delay={index * 0.1}>
                <ProductCard product={product} />
              </FadeUp>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
