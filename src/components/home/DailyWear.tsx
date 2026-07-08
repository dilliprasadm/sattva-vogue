'use client';

import React from 'react';
import Image from 'next/image';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import Button from '../common/Button';
import FadeUp from '../animations/FadeUp';
import Link from 'next/link';

export const DailyWear: React.FC = () => {
  return (
    <section id="daily-wear" className="py-20 bg-brand-ivory">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Editorial Copy */}
          <div className="lg:col-span-6 flex flex-col justify-center order-2 lg:order-1">
            <FadeUp delay={0.1}>
              <SectionHeading
                title="Effortless Luxury for Every Quiet Moment"
                subtitle="Daily Wear Collection"
                className="mb-6!"
              />
              <div className="space-y-6 max-w-lg">
                <p className="font-body text-body-lg text-brand-charcoal leading-relaxed">
                  Relaxed silhouette tunics and hand-printed cotton co-ord sets crafted for home loungewear and casual outings.
                </p>
                <p className="font-body text-sm text-brand-muted leading-relaxed">
                  Designed for ease, this capsule features soft textures, natural breathable cottons, and non-restrictive sizing. Simple, elegant cuts and subtle dye works create a comfortable everyday wear experience.
                </p>
                <div className="pt-4">
                  <Link href="/shop/daily-wear">
                    <Button variant="outline">
                      Explore Collection
                    </Button>
                  </Link>
                </div>
              </div>
            </FadeUp>
          </div>

          {/* Editorial Image */}
          <div className="lg:col-start-8 lg:col-span-5 relative order-1 lg:order-2">
            <FadeUp delay={0.3}>
              <div className="relative aspect-[3/4] w-full rounded-md overflow-hidden shadow-premium">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDccwpoB6Z9cyYYSvJVV1EwtFAVtiN8x0S_vKhiJcKcF3qcmOVhBbMGAp7R_ThzDef3rCb-B9-A1h5-vtVRQzSJeMyIrRsG3N5SOdpYJ4mgHqnnvufMkJFReU3pX7eVJhYoUPvKCKKMKt_uhlYKk0oI1N1P7xChWI1bnnpkfHSeYlKPFjy-NPT2sTv1Jr_GnMdd3JnhBLLCtOasxVY7N2-7vRwxIt9IF3yO1X_yi6WDUv5OYt6gcbC3fQ"
                  alt="Daily Wear Collection"
                  fill
                  unoptimized
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover hover:scale-103 transition-transform duration-700"
                />
              </div>
            </FadeUp>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default DailyWear;
