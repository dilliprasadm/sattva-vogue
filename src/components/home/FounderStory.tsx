'use client';

import React from 'react';
import Image from 'next/image';
import { founderData } from '@/data/founder';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import Button from '../common/Button';
import FadeUp from '../animations/FadeUp';

export const FounderStory: React.FC = () => {
  return (
    <section id="story" className="py-20 bg-brand-beige/30">
      <Container>
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Portrait Image Grid */}
          <div className="w-full lg:w-1/2 relative flex justify-center">
            <FadeUp delay={0.1} className="w-full max-w-[420px] relative">
              <div className="aspect-[4/5] rounded-lg overflow-hidden shadow-premium relative z-10 border-8 border-brand-ivory">
                <Image
                  src={founderData.portrait}
                  alt={`Portrait of ${founderData.name}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
              {/* Soft decorative shadow frame */}
              <div className="absolute -bottom-6 -right-6 w-full h-full border border-brand-burgundy/15 rounded-lg z-0 pointer-events-none" />
            </FadeUp>
          </div>

          {/* Founder Biography Column */}
          <div className="w-full lg:w-1/2">
            <FadeUp delay={0.3}>
              <SectionHeading
                title="Crafting Memories in Cloth"
                subtitle="MEET THE FOUNDER"
                className="mb-8!"
              />
              
              {/* Highlight Quote */}
              <div className="font-display text-lg md:text-xl text-brand-burgundy italic leading-relaxed mb-6 border-l-2 border-brand-rust pl-4">
                &ldquo;{founderData.quote}&rdquo;
              </div>

              {/* Bio paragraphs */}
              <div className="font-body text-sm text-brand-muted space-y-4 leading-relaxed max-w-lg mb-8">
                {founderData.paragraphs.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>

              {/* Signature quote block */}
              <div className="pt-6 border-t border-brand-charcoal/10 max-w-lg">
                <p className="font-display text-xl text-brand-charcoal italic mb-2">
                  &ldquo;{founderData.signatureQuote}&rdquo;
                </p>
                <p className="font-accent text-xs font-bold tracking-widest text-brand-burgundy">
                  — {founderData.name}, {founderData.role}
                </p>
              </div>

              <div className="mt-8">
                <Button variant="outline">
                  Read Her Journey
                </Button>
              </div>
            </FadeUp>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FounderStory;
