'use client';

import React from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import {
  Sparkles,
  PenTool,
  Scissors,
  Sun,
  Wind,
  Ruler,
  ChevronRight,
  ArrowRight
} from 'lucide-react';
import { AnnouncementBar } from '@/components/layout/AnnouncementBar';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import Container from '@/components/common/Container';
import FadeUp from '@/components/animations/FadeUp';
import Button from '@/components/common/Button';

// Craft Pillars Data
interface Pillar {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  image: string;
  alt: string;
}

const pillars: Pillar[] = [
  {
    id: 'pillar-1',
    icon: <Sparkles className="w-8 h-8" />,
    title: 'Pure Cotton',
    description: 'Sourced sustainably from local farmers, our cotton provides a cloud-like softness that ages gracefully with every wash.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBwX1xeK4PLzZDa_rUHjWR5MyBNT7o3m-EWrOKmflOtZ-DIeXmWtm5jaNH9IYFzo96evalVaDssQ_FX7JbjNrD_fRm-i-ytBJiVH0Fajg4rEo7mdgR67NifvXkYVkjPSvGo-30PRuXoedngbo21pEq07agXbq3_XSaWZDET8sUQnfk7BEpB9pBSkZJf3nv165VO8QRDix_ZZmmzRfASs3IjVFHYjx0yQWEv1vo9zkCklOVtkkNq7vGonw',
    alt: 'Unprocessed raw cotton fibers glistening under soft golden hour light'
  },
  {
    id: 'pillar-2',
    icon: <PenTool className="w-8 h-8" />,
    title: 'Artisanal Embroidery',
    description: 'Intricate needlework passed down through generations, each stitch tells a story of the vibrant landscapes of Rajasthan.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAuvJlg23yqlsHUzK28leUot2qEiXHKIDMlelIG2czwJWGSwnGB-LMWD6RLyLKB89LI2kkm0g4jtx1lkS1vW4hwRF9Avyc76cxHZ558uMdmw1Ic4KqYIyXz0JYqVMsXS94JtB4SQRHNfLTS3mX0Ipl24kebXudhE5RCMeNtjtEJtlLW30Ias1DyODv2FgQVwUYYTzlRap0wBWUPgmun_HasyZKvkQLmqJ3l2_oaaovm1on0G2unD3drdw',
    alt: 'Macro view of delicate floral embroidery pattern being hand-stitched'
  },
  {
    id: 'pillar-3',
    icon: <Scissors className="w-8 h-8" />,
    title: 'Hand Finishing',
    description: 'No mass production here. Each edge is hand-finished to ensure a seamless fit and a bespoke feel that lasts a lifetime.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDImNUR3D6l4PJXZaz2FrpT__yaQc1mIUymD_aBMBn9olM157tg54UHRnmP537Fw89Ivpu_LRmcRMs7mubMlrajj3twHsTIFJdgKbKfmn8ikuggh9OjJbKeeFRjuIvrGhJcam28DV5_pr_aRn-9ZTsVepAkQCgF9nGIHgs6ef6x4yu2HorZLd8dNyrvL3gelgsnsnFHkbgfbGcxiJj0_OqbGzfxZTmq5y6IIOhSSTrMkM5z26BdNCSYeA',
    alt: 'Tailors hands carefully smoothing the hem of a garment in atelier'
  },
  {
    id: 'pillar-4',
    icon: <Sun className="w-8 h-8" />,
    title: 'Unmatched Comfort',
    description: 'Designed for the modern woman who refuses to sacrifice ease for elegance. Effortless drapes for all-day wear.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA0jA0jzKora3oEw9tR9SsvproeCbgar6XaamwtxWzcQrNAfjwyI-nrGdf606bly6GLVkqn9hELN2WYS5mINN-M3uCvEqb9fb3kXakAhwg2825j3Z1W4sn2CHDVLHIPe-6NYLhtOyiI6tkFFyOsZkuSB71E_zPuSWAkebcdIP5EzymvHFeHL2ntv-2CqpyVDF6BrgJZL874UNzWqLn_zE44hL4zy2jfCsmjSD-M51Fncxd-xv-VOiCo3Q',
    alt: 'Woman in flowing ivory cotton dress lounging in sunlit corner'
  },
  {
    id: 'pillar-5',
    icon: <Wind className="w-8 h-8" />,
    title: 'Natural Breathability',
    description: 'The porous nature of our weaves allows air to circulate, keeping you cool even in the heart of a Rajasthan summer.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC5loxsd_89TaWVLeQEi1WoMg3-Qfs8UJqAlZBcOVrW4BXLlqTV68Qm5emzskWNeMvejlocQiid-NeeeOky0VrnCYFq_8VTRNNUffxv959M6-kMfJJJaYghf2IHArPqHR5u8hbTp0u3vpBNCGIig6jdsJETgGylsKl09dt9NwOdUY0BMXdESYvfKepS_1zsb7Y-WUnU1-F6TtnVaqoTyXVKPYWmEekSWc8_MX0L9lBJg8sQdi5SH2HhUQ',
    alt: 'Abstract shot of light filtering through a loosely woven cotton scarf'
  },
  {
    id: 'pillar-6',
    icon: <Ruler className="w-8 h-8" />,
    title: 'Premium Stitching',
    description: 'Strength meets delicacy. Our reinforced stitching ensures structural integrity without adding bulk or rigidity.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBFqJoXPARi1yEoRVSFdw-MQSsMJefq7XUr0TpWpOBhsXImOX6xKgbFGsCtYJ5wzo9hvUM2r_1-KIdn2VN-5wNTOcBY5I-37Fc6_bnOjowMRZFTyvy07P6_44QN_PHkO-YA1dwlmyYXZ4T6FwwL1u5e8fr9Sm-8F-hC01K3nRji7kD51CkwmmzQ9RVvfUpLqC-MQpQ1BuWuRIvWpWDS8APvGfhzWElzf-jFCm7xV6PeTz_nlCZwEZkXIQ',
    alt: 'Detailed shot of a perfectly straight precise seam on magenta fabric'
  }
];

export default function StoryPage() {
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 500], [0, 50]);

  return (
    <div className="flex flex-col min-h-screen bg-brand-ivory text-brand-charcoal select-none">
      {/* 1. Announcement Bar */}
      <AnnouncementBar />

      {/* 2. Navigation Header */}
      <Header />

      <main className="flex-grow pt-24">
        
        {/* Breadcrumbs */}
        <div className="border-b border-brand-charcoal/5 bg-brand-beige/10">
          <Container className="py-4">
            <ol className="flex items-center space-x-2 font-accent text-[10px] md:text-xs uppercase tracking-wider text-brand-muted">
              <li>
                <Link href="/" className="hover:text-brand-burgundy transition-colors">Home</Link>
              </li>
              <li className="flex items-center space-x-1">
                <ChevronRight className="w-3 h-3 text-brand-charcoal/20" />
                <span className="text-brand-burgundy font-bold">Our Story</span>
              </li>
            </ol>
          </Container>
        </div>

        {/* Hero Section */}
        <section className="py-16 md:py-24">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              <div className="lg:col-span-5 space-y-6">
                <FadeUp delay={0.1}>
                  <span className="font-accent text-xs font-bold uppercase tracking-[0.2em] text-brand-rust block">
                    The Art of the Thread
                  </span>
                </FadeUp>

                <FadeUp delay={0.15}>
                  <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-brand-charcoal">
                    Woven Poetry of the <span className="italic text-brand-burgundy font-normal">Aravalli Ranges</span>
                  </h2>
                </FadeUp>

                <FadeUp delay={0.2}>
                  <p className="font-body text-base md:text-lg text-brand-muted leading-relaxed max-w-md">
                    Every garment at Sattva Vogue begins as a silent dialogue between the artisan and the fabric. It is a slow, rhythmic process that transforms raw organic cotton into a canvas of heritage and modern comfort.
                  </p>
                </FadeUp>
              </div>

              <div className="lg:col-span-7 relative group">
                <FadeUp delay={0.3} className="aspect-[4/5] md:aspect-[16/10] overflow-hidden rounded-md bg-brand-beige shadow-premium border border-brand-charcoal/5 relative">
                  <motion.div style={{ y: yParallax }} className="absolute inset-0 w-full h-[120%] -top-[10%]">
                    <Image
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCHZXg-vT_mknbXviCKrWNdDZxUE5q4TM89u7JYnjUHXfpZwu0McUeip6V3JBpLYFr24Ff6y0Gkf_kMS4qVCg9FEpuayKoGKriaw-yL0RdueoXrlBVP9b5TBKACCIzK3QDpCtZfBI1bjORMlN7Dah0-ztVyn1_UGjKTQuq-FdXQ1xOezWwd35pdr0v1sC_hgkRnDzgMijHtmJzzj5kgKuy-N6_kcl9ha57VpRvd4t-29-zvkHns1jZBQ"
                      alt="Organic hand-spun cotton weave textures closeup"
                      fill
                      unoptimized
                      priority
                      className="object-cover"
                    />
                  </motion.div>
                </FadeUp>

                <FadeUp
                  delay={0.4}
                  className="absolute -bottom-4 -left-4 bg-brand-ivory p-6 rounded-sm shadow-premium border border-brand-charcoal/5 hidden md:block"
                >
                  <p className="font-accent text-xs font-bold text-brand-burgundy tracking-widest mb-1">
                    AJMER, RAJASTHAN
                  </p>
                  <p className="font-body text-sm italic text-brand-muted">
                    Est. 2024
                  </p>
                </FadeUp>
              </div>

            </div>
          </Container>
        </section>

        {/* The Six Pillars Bento Section */}
        <section className="bg-brand-beige/35 border-y border-brand-charcoal/5 py-24 mb-16">
          <Container>
            <div className="text-center mb-16">
              <FadeUp delay={0.1}>
                <h3 className="font-display text-3xl md:text-4xl font-bold text-brand-charcoal">
                  The Six Pillars of Craft
                </h3>
              </FadeUp>
              <FadeUp delay={0.15}>
                <div className="w-16 h-[2px] bg-brand-burgundy mx-auto mt-4" />
              </FadeUp>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pillars.map((pillar, index) => (
                <FadeUp
                  key={pillar.id}
                  delay={index * 0.1}
                  className="bg-brand-ivory p-8 rounded-sm border border-brand-charcoal/5 flex flex-col items-center text-center hover:bg-brand-beige/20 hover:shadow-premium hover:-translate-y-1 transition-all duration-500 group"
                >
                  <div className="w-16 h-16 rounded-full bg-brand-burgundy/5 flex items-center justify-center text-brand-burgundy mb-6 group-hover:scale-110 transition-transform duration-500">
                    {pillar.icon}
                  </div>
                  <h4 className="font-display text-xl font-bold text-brand-charcoal mb-3">
                    {pillar.title}
                  </h4>
                  <p className="font-body text-sm text-brand-muted leading-relaxed mb-8 flex-grow">
                    {pillar.description}
                  </p>
                  <div className="w-full aspect-video overflow-hidden rounded-sm relative bg-brand-beige">
                    <Image
                      src={pillar.image}
                      alt={pillar.alt}
                      fill
                      unoptimized
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </div>
                </FadeUp>
              ))}
            </div>
          </Container>
        </section>

        {/* Founder's Note Section */}
        <section className="py-20 relative">
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/4 h-px bg-brand-charcoal/10 hidden lg:block" />
          
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              <div className="lg:col-span-4 flex justify-center lg:justify-start">
                <div className="relative">
                  <FadeUp
                    delay={0.1}
                    className="w-64 h-64 rounded-full overflow-hidden border border-brand-burgundy p-1 shadow-premium bg-brand-ivory relative"
                  >
                    <Image
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDps6trngTwmCIc87cupI68F57ZE6kgbnt--bCXaCEjubqeFiHyqQlWZ7oUN26epgoAf04wYgY-LMTZ-q8afZoINe-YvM3mGyH-QFJrPLhAIgH4qDBhJagr5BIWSMERJedBcfAnnV1S7354R4sLWohCqN3RLM3GXyhM0pj2LG6FQgP6gE_Ig8tlKqu_MRNyjgxVZvHqt6ju-V8XSO87Dw-OyVC-YnZxbvuMOu4LxIhhptiMATDolGLYGg"
                      alt="Sattva Vogue Founder portrait"
                      fill
                      unoptimized
                      className="object-cover rounded-full p-1"
                    />
                  </FadeUp>
                  <FadeUp
                    delay={0.2}
                    className="absolute -bottom-2 right-4 bg-brand-rust text-brand-ivory px-4 py-1.5 rounded-full font-accent text-[10px] font-bold tracking-widest uppercase shadow-md"
                  >
                    The Founder
                  </FadeUp>
                </div>
              </div>

              <div className="lg:col-span-8 space-y-6">
                <FadeUp delay={0.2}>
                  <span className="font-accent text-xs font-bold uppercase tracking-widest text-brand-burgundy block">
                    A Note from Ajmer
                  </span>
                </FadeUp>
                
                <FadeUp delay={0.25}>
                  <h3 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-brand-charcoal leading-tight">
                    &ldquo;Crafting more than just apparel; we are preserving a way of life.&rdquo;
                  </h3>
                </FadeUp>

                <FadeUp delay={0.3}>
                  <p className="font-body text-base text-brand-muted leading-relaxed italic">
                    Rajasthan&apos;s soul lies in its textiles. Growing up in the heart of Ajmer, I witnessed the patience of weavers who spent days perfecting a single meter of cloth. Sattva Vogue is my tribute to their silent dedication. We don&apos;t believe in trends; we believe in the timeless elegance of a thread well-spun and a pattern well-intended.
                  </p>
                </FadeUp>

                <FadeUp delay={0.35} className="flex items-center space-x-3">
                  <div className="h-[1px] w-12 bg-brand-burgundy" />
                  <p className="font-accent text-xs font-bold text-brand-burgundy uppercase tracking-widest">
                    Sattva Vogue Creative Director
                  </p>
                </FadeUp>
              </div>

            </div>
          </Container>
        </section>

        {/* Signature Scroll CTA Banner */}
        <section className="w-full bg-brand-burgundy text-brand-ivory py-16 text-center">
          <Container>
            <FadeUp delay={0.1}>
              <h4 className="font-display text-3xl md:text-4xl font-bold mb-8">
                Experience the Collection
              </h4>
            </FadeUp>
            
            <FadeUp delay={0.2} className="flex justify-center">
              <Link href="/shop" className="inline-block">
                <Button
                  variant="outline"
                  className="bg-brand-ivory text-brand-burgundy hover:bg-brand-rust hover:text-brand-ivory border-transparent px-10 py-4.5 rounded-full font-accent text-xs font-bold tracking-widest uppercase transition-all duration-300 shadow-lg flex items-center gap-2 group cursor-pointer"
                >
                  <span>Explore Collection</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </FadeUp>
          </Container>
        </section>

      </main>

      {/* 3. Page Footer */}
      <Footer />
    </div>
  );
}
