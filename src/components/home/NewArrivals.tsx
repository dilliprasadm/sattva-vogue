'use client';

import React from 'react';
import { newArrivalsProducts } from '@/data/products';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import ProductCard from '../common/ProductCard';
import FadeUp from '../animations/FadeUp';
import Button from '../common/Button';
import Link from 'next/link';

export const NewArrivals: React.FC = () => {
  return (
    <section id="new-arrivals" className="py-20 bg-brand-beige/10">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <SectionHeading
            title="New Arrivals"
            subtitle="The Summer Edit"
            className="mb-0!"
          />
          <FadeUp delay={0.2}>
            <Link href="/shop">
              <Button variant="text">Shop Collection</Button>
            </Link>
          </FadeUp>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newArrivalsProducts.map((product, index) => (
            <FadeUp key={product.id} delay={index * 0.15}>
              <ProductCard product={product} />
            </FadeUp>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default NewArrivals;
