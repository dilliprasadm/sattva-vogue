import React from 'react';
import { Leaf, Sparkles, CheckCircle, Truck } from 'lucide-react';
import Container from '../common/Container';
import FadeUp from '../animations/FadeUp';

interface Pillar {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

const pillars: Pillar[] = [
  {
    icon: <Leaf className="w-8 h-8 text-brand-burgundy" />,
    title: 'Authentic Fabrics',
    desc: 'Sourced from local weavers, our cotton and linen blends are lightweight and natural.',
  },
  {
    icon: <Sparkles className="w-8 h-8 text-brand-burgundy" />,
    title: 'Carefully Detailed',
    desc: 'Stitch detailing, fine hand-prints, and subtle accents that elevate everyday looks.',
  },
  {
    icon: <CheckCircle className="w-8 h-8 text-brand-burgundy" />,
    title: 'Premium Comfort',
    desc: 'Designed with breathable, relaxed silhouettes that move with you all day long.',
  },
  {
    icon: <Truck className="w-8 h-8 text-brand-burgundy" />,
    title: 'Conscious Delivery',
    desc: 'Delivered in plastic-free packaging across India with care and speed.',
  },
];

export const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-us" className="py-20 bg-brand-beige/10">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {pillars.map((pillar, index) => (
            <FadeUp
              key={pillar.title}
              delay={index * 0.1}
              className="flex flex-col items-center"
            >
              <div className="w-16 h-16 bg-brand-burgundy/5 rounded-full flex items-center justify-center mb-6 shadow-sm">
                {pillar.icon}
              </div>
              <h3 className="font-display text-lg font-semibold text-brand-charcoal mb-3">
                {pillar.title}
              </h3>
              <p className="font-body text-sm text-brand-muted leading-relaxed max-w-[240px]">
                {pillar.desc}
              </p>
            </FadeUp>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default WhyChooseUs;
