'use client';

import React from 'react';
import Image from 'next/image';
import { categoriesData, categoriesTitle, categoriesSubtitle } from '@/data/categories';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import FadeUp from '../animations/FadeUp';

export const Categories: React.FC = () => {
  return (
    <section id="categories" className="py-20 bg-brand-beige/25">
      <Container>
        <SectionHeading
          title={categoriesTitle}
          subtitle={categoriesSubtitle}
          align="center"
        />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {categoriesData.map((category, index) => (
            <FadeUp key={category.id} delay={index * 0.1} className="flex flex-col items-center">
              <a href={category.href} className="group flex flex-col items-center w-full max-w-[240px]">
                {/* Oval/Circular Image wrapper */}
                <div className="relative aspect-[3/4] w-full rounded-full overflow-hidden mb-6 border-4 border-brand-ivory shadow-card group-hover:border-brand-burgundy transition-all duration-500 ease-out">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    unoptimized
                    sizes="(max-width: 640px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-brand-burgundy/5 group-hover:bg-transparent transition-colors duration-300" />
                </div>

                <h3 className="font-display text-xl text-brand-charcoal font-semibold mb-1 group-hover:text-brand-burgundy transition-colors duration-300">
                  {category.name}
                </h3>
                <span className="font-accent text-[10px] font-bold tracking-widest text-brand-muted group-hover:text-brand-burgundy transition-colors duration-300">
                  EXPLORE
                </span>
              </a>
            </FadeUp>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Categories;
