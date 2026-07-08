'use client';

import React from 'react';
import Image from 'next/image';
import Container from '../common/Container';
import Button from '../common/Button';
import FadeUp from '../animations/FadeUp';

export const FooterCTA: React.FC = () => {
  return (
    <section className="relative py-32 w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkQTD2rQZ6eBWvxbeDjHO2zFP9XV1-SLmTYW183mRaAQBM9MUt2JF4PV3KTObygO0ZwoD7HXUeGi4PLr1ZSLYOd1N8bJ896RhqqPO7bH3Zrcz5F-tMOmRkEElcklSCYq_6reQr_yOHbsX3gjgQLJ6iZz_iVWlL79zLvj15q2RfjL6zTZvNNH6uqWI4cF2Vfw_Ex_LlYvUHm8ekW5YqpH5fixvyt0MEwFMOa1p871GcT6yrcvtrNvRp-A"
          alt="Premium Cotton Ethnic Wear Banner"
          fill
          sizes="100vw"
          className="object-cover object-center brightness-75 scale-103"
        />
        {/* Color overlay */}
        <div className="absolute inset-0 bg-brand-charcoal/30 z-10" />
      </div>

      {/* Content wrapper */}
      <Container className="relative z-20 text-center flex flex-col items-center">
        <FadeUp delay={0.1}>
          <span className="font-accent text-xs font-bold uppercase tracking-[0.25em] text-brand-ivory mb-4 block">
            THE NEW CAPSULE
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-brand-ivory font-bold mb-8 leading-tight max-w-2xl">
            Comfortable Premium Ethnic Wear
          </h2>
          <p className="font-body text-brand-ivory/80 mb-10 max-w-md mx-auto italic leading-relaxed">
            Discover a collection that bridges traditional craftsmanship with modern design silhouettes.
          </p>
          <a href="#featured">
            <Button variant="outline" className="border-brand-ivory! text-brand-ivory! hover:bg-brand-ivory! hover:text-brand-charcoal!">
              Explore Lookbook
            </Button>
          </a>
        </FadeUp>
      </Container>
    </section>
  );
};

export default FooterCTA;
