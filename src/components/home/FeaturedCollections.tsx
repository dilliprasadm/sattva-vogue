'use client';

import React from 'react';
import { featuredCollections, collectionsTitle, collectionsSubtitle } from '@/data/collections';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import ImageCard from '../common/ImageCard';
import FadeUp from '../animations/FadeUp';

export const FeaturedCollections: React.FC = () => {
  const largeCard = featuredCollections.find((col) => col.span === 'large');
  const smallCards = featuredCollections.filter((col) => col.span === 'small');

  return (
    <section id="featured" className="py-20 bg-brand-ivory">
      <Container>
        <SectionHeading
          title={collectionsTitle}
          subtitle={collectionsSubtitle}
          align="left"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Large Featured Card */}
          {largeCard && (
            <div className="lg:col-span-7 flex">
              <FadeUp className="w-full flex h-full" delay={0.1}>
                <ImageCard
                  image={largeCard.image}
                  title={largeCard.title}
                  tag={largeCard.tag}
                  aspect="aspect-[4/3] lg:aspect-auto"
                  className="h-full min-h-[500px]"
                />
              </FadeUp>
            </div>
          )}

          {/* Small Stack Cards */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            {smallCards.map((card, index) => (
              <FadeUp key={card.id} delay={0.2 + index * 0.1} className="flex-1 flex">
                <ImageCard
                  image={card.image}
                  title={card.title}
                  tag={card.tag}
                  aspect="aspect-[16/9] lg:aspect-auto"
                  className="h-full min-h-[240px]"
                />
              </FadeUp>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FeaturedCollections;
