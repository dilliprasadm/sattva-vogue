'use client';

import React from 'react';
import Image from 'next/image';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import Button from '../common/Button';
import FadeUp from '../animations/FadeUp';

export const OfficeWear: React.FC = () => {
  return (
    <section id="office-wear" className="py-20 bg-brand-beige/20">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Editorial Image */}
          <div className="lg:col-span-5 relative">
            <FadeUp delay={0.1}>
              <div className="relative aspect-[3/4] w-full rounded-md overflow-hidden shadow-premium">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCSQV2UBj3nFPT58EKLceOuBCLgPnQnUPXsueoQEQ2tqQQN8pb9XMSDArKjqi85VZ0FUWEjbcCHFI1pUs21RnGFBpZmcVRA7iRWRZ-_aP7ByNO-O2OrzE81-dcTmLQ-G6EaYdSLRkAQkBaw-cWl82CfFNO366_oKrS6173IWAoTjoi4beVSX_zS74Fxi5hxsQp23tTUQm_ONN7BkJCd6WD8plfLbhToa3TNj53sHMGJfvmVl9l92WsSg"
                  alt="Office Wear Collection"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover hover:scale-103 transition-transform duration-700"
                />
              </div>
            </FadeUp>
          </div>

          {/* Editorial Copy */}
          <div className="lg:col-start-7 lg:col-span-6 flex flex-col justify-center">
            <FadeUp delay={0.3}>
              <SectionHeading
                title="Structured Elegance for Your Daily Mission"
                subtitle="Office Wear Collection"
                className="mb-6!"
              />
              <div className="space-y-6 max-w-lg">
                <p className="font-body text-body-lg text-brand-charcoal leading-relaxed">
                  Comfortable premium ethnic wear and cotton co-ord sets designed to navigate busy workdays with ease.
                </p>
                <p className="font-body text-sm text-brand-muted leading-relaxed">
                  Our office wear range emphasizes structured cuts, subtle tones, and breathable fabrics. These sets ensure a sharp silhouette without compromising on the cooling comfort of fine premium cotton.
                </p>
                <div className="pt-4">
                  <a href="#products">
                    <Button variant="outline">
                      Shop Office Wear
                    </Button>
                  </a>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default OfficeWear;
