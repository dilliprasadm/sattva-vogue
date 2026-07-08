'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronRight,
  ChevronLeft,
  Heart,
  Search,
  ChevronDown,
  SlidersHorizontal,
  Shirt,
  Wind,
  Sparkles,
  BadgeCheck,
  Star,
  ArrowRight,
  Send
} from 'lucide-react';
import { AnnouncementBar } from '@/components/layout/AnnouncementBar';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import Container from '@/components/common/Container';
import FadeUp from '@/components/animations/FadeUp';
import Button from '@/components/common/Button';

/* ──────────────────────── Co-ord Products Data ──────────────────────── */
interface CoordProduct {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  hoverImage: string;
  badge?: string;
  badgeColor?: string;
}

const coordProducts: CoordProduct[] = [
  {
    id: 'co-1',
    name: 'Indigo Breeze Linen Set',
    description: 'Relaxed fit, sustainable linen',
    price: 4250,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDGyxNQX50osySFPdfAf6mpHP5b8oosV9efFgoh69JGI1yZCOI2vHqdptrmqEl6G42fMO3ftmq3h31Z4I33B15NQGKLC4CQLLnk-k36zL-GPhjGK1DUMml3EnSgUU2vVTXv1VHsGRDuM_HY5RSLi6OXpjmSBtFBnOTre4Pmk5j06T4kHIQDuK1H_1XDSQNFKA4tf0F6-euh4EP93Orqx9lTFZoNAGRKQTzeSekt3ufV_9eLibZ2oQpysg',
    hoverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD9PJd3CVM3zjAnJecR2WQwlQAyRFnhn587AIWjp7JZcPRD9hqnRgYjavocn3hUDzcANQP7IR52ReR4al-kFf_JxnMv749Fvfh-ATq6gdegt4bQM37UFDParIxBw7V0CshLM9i6d7eO1yhY6x0GtiEukBfItnq9X0pgYQiUBBFSR5Mat9efkDvH0slXzPqy2ftzeHAeprSgtpGUJ3Y9232NCJEcja5aC4qY23MtPAJyH4_PBEhrypwopw',
  },
  {
    id: 'co-2',
    name: 'Ajmer Dawn Print Set',
    description: 'Organic cotton, hand block printed',
    price: 5400,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDRyLrur_bz1_RMALxhzpjUrEOks2if2YkaRHr5ner7P-N0YcRvDCnwBTtBmbPYlMhfICajcv4GvIzgoxg-xxabHrmxMZkrTkyuE52kIePVcvQoTDoQ21rS6b-7EezLs_MLfpzgHuKAJkmSV-61ydSZ-7c_zTadINICsnq4T27t3VvWBLlrMVOThw7Txb6vk1Kc7npqz33bzRFs10U82WR4B7BmTmQeUZwpcaLA9qqJNZxMWg35v-jhyw',
    hoverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDUHuObR2c4WYdy3DCtEZ-Vlnr_BJGnv-8FIwqOgAEzqLg1HTFbL_HsTtdDionv32ValAt30qjxlxnsk32aPabKczdHyveBMlB7gW-biVbISE6QV6niyjIsXjY3P1K73CtwOcyDAs_7s1AEpq0BZt0_VbXv_0nRkkcZOs3Ff1oVj2HfF0Vu5AeWEmmvV2zjG60KdCwxzn8Rs6U7GWC66zBKGJyzhyY-QvvGxPoVW2mgZrlCSfyDMW5JoA',
    badge: 'New Arrival',
    badgeColor: 'bg-brand-rust'
  },
  {
    id: 'co-3',
    name: 'Sandstone Structural Set',
    description: 'Luxe cotton-silk blend',
    price: 6800,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCOBKBGKEWHlQFpxKgo2rf82XhiBlgFQxRZ8IunQMEfy8I1XsGV9HWB6FwLema9vEH4ldFR6FKf0k8PEha9WIPvOHqiStbMd_TyCRgC-iw07ViuWbDPLsXXxNpigWqErNifsWcYR_OjZqdBT9myBPgZHVY2qNecoj6hcfubdU75yqsVamqfDvzZ6BN-OZqxcACUH5W_AIVCcdgNHbvx8x-YT246eUP3-WwVG1f2y8wg5i1rLqwzLL281Q',
    hoverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBwUqDo8ilOBPwtLQ4hfLDJBTtrIV_NOzWupS-EXbjRiNcbjAyQ7c8UIfOh0XmUJjzJrx4NtDAxVEHEB_84bDmi54Q1yQD8vveTTwrs8pvnzILIGNcmOG1ApatuqbjqYH1l5-dfEBhrscoGfH3DVcfJBlbhXzhmRWe2DKM8CtrlONcnHvptrUtJsAUtmabgnoydsaDi8N-fecFbMk3R5zuuY7RdQ8ZYxVMGJCHb-Yy-TihgFRuJ25tWJQ',
  },
  {
    id: 'co-4',
    name: 'Verdant Vest & Trouser Set',
    description: 'Breathable poplin cotton',
    price: 4900,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCkMLuMTufWdprH4_qTUZWvhnVt-Cg3kei_y53dERLoG-FvGyAkytJ2j6CouiHkJCOYwlwLoK7R9mQ_PG6m8-zOTHrgIgBjnXlRwW6zlxT8dSt4YrQsiZxxL_3kGrLsdUwMhNgeNXKSf0LJ5SOZ_nMNV-lc9JhlO_47fkwVsb2l_Nf9Vt41DpPQ4dhxv3HkndwTPN-79fSeYreW39zjKXi2L0DoytCMu5Y_gc0eWU9oRChWQy-ibDGMlA',
    hoverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA0iwGwYERugRCydXR5rlQhgGkZVKHYRO27JoQQk5q5aIGTUyjITVkqrJnAcTfUQ5O6zQmzR2I8K47_e1s5Scqri4XC7NKHmEHB5E7xb0CZ35fDp9GiwDiue_pu6SqeqHDASzJMszblyGd3nF2i5doRv1o_aAkkx0WLA2l9lcQ73d5G0iaC5JPY3JXIp_yIf6WJhN3lFXw7ETR2WzX5id27dFibRm921nD8o40GyimqOnvVV1OKSFswdA',
  },
];

/* ──────────────────────── Style Inspiration Data ──────────────────────── */
const styleInspirations = [
  {
    id: 'si-1',
    title: 'Office Ready',
    description: 'Pair with a structured blazer and loafers for a powerful presence.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDw0wgGfni74-cvwV1mDc4Q66sKIun9Lbi6kQzrNxAKJ8FEfH808fXdnE0DTh_Su4QHiTUccBktncIdMahkLFyTUeupOlYAU9FnfQPNIouBSOhL8huip_hjrlezj_uk69Eq-y3h3MXsvauJqXUtnXg0jzIKYdE9r6NU8lwwcGKloIcn0BrygMU4NBrvOMujXSGOchO8xRpULTsHjyy-Lf8cRLYqss-gIvEdm_i79j2q2FPBBXO2Ztnosw',
  },
  {
    id: 'si-2',
    title: 'Weekend Casual',
    description: 'Effortless style with woven flats and your favorite tote.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD-Cu1G4VHZLgsStCkqPFbaGU5JFVR0ndIBqVylUCUIFaRO3X18upSqETqgtseVsihe9f-PJlUp2-rAOzsUE_SPqvEYEK4n7uBb9_GiDzsrdCaSNSgIWVIKLEBqc0PPggDBEi8gzyiiOntGQNnBdKwsDU_LJNjKfFjhiY4PDdEDCmIbYw3Id_O6keDShwQz4vp-SoSp2eneAEBJnQJuZG3Y_LVCPvPCn0fDSoy9bPbkM3Xl-44tpZCSMA',
  },
  {
    id: 'si-3',
    title: 'Travel Luxe',
    description: 'The ultimate comfortable travel uniform that keeps you elegant.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDaBpnM9rzqFLm8EdNMxLz0xjVcvA_ao8X0dN8MCPE9XCyIlqjroyOJw4MM82W6LJO6fA6CI3Kqgfg0K50qbcVibQxOnZ934WUevIrN7eI_q1JFjceMncOlG3ZwslUyQ5oLeYSxe-nn3WlsnK1XVCqQFvsaveEFVUV4UH545SAv5lXzBsAKx_rn4EsX0in8bdyJUBM-o5MIEWMJGtkuUf8xowUVJf-FDLJ35-unYE5bwW59a4EQi6V3Rw',
  },
];

/* ──────────────────────── Customer Reviews ──────────────────────── */
const reviews = [
  {
    id: 'cr-1',
    quote: 'The most comfortable set I own! I wore it for my flight to Jaipur and felt so elegant yet relaxed. The cotton is incredibly soft.',
    author: 'Ananya M.',
    tag: 'Verified Buyer',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCO3LVAUPgEiyNsMYeJOeDfDae-tar7uSRltTu22f6pDoQhB7Zwkb_F7sugW6_T-s0xMpZ6trEhmEp8u9DsSFFHFtMltTiH7KjE6VV6q6ppxFsy_hvKdM6R-4sYOiBEjw3vlEzIKBB5PmYiUvAxavjD7eQtk_HVuSJcdORZIHNyO6MO_IGX_Sj66COxcVgPqFXJLXbA6AvZihn2aWlPkNzrynZN19EJf_E3iAmdvyso1An7Gn-e5YyDrA',
  },
  {
    id: 'cr-2',
    quote: 'The fit is perfection. It\'s so hard to find sets that flatter without being too tight. SATTVA VOGUE nailed it with the Sandstone set.',
    author: 'Priya S.',
    tag: 'Verified Buyer',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAISEahBHEtAXbFbmfViJ1UkEqyAURj67uxlK5Xtwm13rwp2B7NaYBXjHDeK590m6JDcDcoocZeaVwFwO7rOzS4eYRz2FFRbrBISCcgiUBBeuU4OcO-9hR1lHz_JhIHFFZUIS3eKZY50fQrl9d3_kodNn4qESXua3ZWbgn35dgo8tylAhDWTX1MgxLf1OvJwnGHEhCfh4aW1KpuCeDGwTX3AP9i2sfOmpDK5rvdUODtJhfglpbQbeoHsA',
  },
  {
    id: 'cr-3',
    quote: 'Beautiful prints and great quality. I get compliments every time I wear my Ajmer Dawn set. It really feels like a piece of art.',
    author: 'Meera K.',
    tag: 'Verified Buyer',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC-YHPGjZ8dKVW-M9-3t44TWINjXqezIOsCDKPsqOAqpnpRCn3dt-nVJo496FAcehs0Y71GnSJfdjFSIOm4_zE4hPCApN_g7JvbVQ6tuaF5ha2NlglgPAd75l_4Zc_bmZLsvSlbEcJgSF2hjNdBs92b4Z7Hrx1-y4tijFIfnRigmIffebPI-ZgP8t8H4I-opun-zOk7V9ZK49TdmI9d14_3AaxrcTdFenzCEG5Mknv8lBTP7ADUWHVQBA',
  },
];

/* ──────────────────────── Instagram Grid ──────────────────────── */
const instagramImages = [
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCqEmYXihnG_D8RC9noUKmToaE1Lrkgawpn5EVI38m7URpJuSBQNdopfc5OqyUlWd6HEwuqQlU5gFPJoGWt_cMmPj1bky5ftfttsVK_Zn8iYY8Elc1UijANRavOKAj_NTuH_THEhJpwCV0LnDhetweh3oXYyHPGg6kKABtR6r8oDHHLhL7qPBwbmaD-MX4_80PPAkxzqDv9S6YWxb1xaZ8LYPRSsaB62nSG6Qv0BKDbWrLYDSGJJ4_40Q',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBNBFOx777baPJaGeqoBeSIEgdhR3zgKniADt6WZrM84X3Tzrf15tcmpKzyS8ZPTjHmBSlbmbe5MXs8_9x2zFuJ4n4wcfewgeFiJxi19cLfDhkEuA-Ee0fZgL1kef6iedvVxPByb7UYRKeYoAPnW86C6onXFXEM1sZvb5V6s5L3YyJaj3inrme7uwqWuakPubFXHtA-ewv2sH_q6jsaWji2BCiNQDvFwbhMRHGJ6RwrimYRPbM7A75vOg',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuD6TMUbYd47YBP1QEXZfFrGbkW5rHjRzO2EsJBic4rDk3ERyW26TIJfYBp7YWHMqzGSgThB8R6QvmmCjQGyokSReHq6ZGCQC3nER4gjBlrBZOxrUI2anth3e9bsM2ZH77FbRcHDL3dYniuy818DrjCNIYRNCCONGos3nHlk8HS3qnQAcSCax91m2jUYO1MwMeAPkvffQcABJFEQfJLsXJnZlGvf6XIC22v3I48kaujWyI007NewOUk9Rg',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuA3xwsZAeN6xsh1A_Q4RfRo4tw8sh2VqWFrLLMoUftddH6iwcnmKLmqHj-9elGzWTzi7wb2TPRDB068ujmZj1mK81CLGS-SrMkpaHv_fGySH7IbEPJU6j50P0cbsWEjG4v5LkWN6cGzClbN4NYAy1r1YALKFpdScAqcDN8_SCTdUf4m22D2BnWQVricyRcz7ZypHdH91K-mTAiGDS7venr184h8ndbJpiHitiXHrLJAngJlKiGGJNSHEg',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuD2u49Qjgpm1lu1i0A2NJRoXajHPFv0LoyJHhdqmsknzVkMeiAPyHutFIXdeEJLeDcgTcM1iWWRkAtFGGHo2Tu96NI1hsK3JizKwD6Oe8fuVyQ-kwF899RtcXzEQ_RBoB0BbCpI-NjqfwSp0DonvQw7Uuxsehszl1_kTnHuVxA1ikqiKt6mDqGVNzKyT-dSTZjtGsOUAu_89DEcC2IfKsZj1ptDtWTOQ3fjc3lDpzXqE1LdFmiSLuAJrQ',
];

/* ══════════════════════════════════════════════════════════════════════ */

export default function CoordSetsPage() {
  const [favorites, setFavorites] = useState<string[]>([]);
  const reviewsRef = useRef<HTMLDivElement>(null);

  const toggleFavorite = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setFavorites(prev =>
      prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
    );
  };

  const scrollReviews = (direction: 'left' | 'right') => {
    if (!reviewsRef.current) return;
    const amount = direction === 'left' ? -420 : 420;
    reviewsRef.current.scrollBy({ left: amount, behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col min-h-screen bg-brand-ivory text-brand-charcoal">
      <AnnouncementBar />
      <Header />

      <main className="flex-grow pt-24">
        
        {/* ────────── 1. Editorial Hero Banner ────────── */}
        <section className="relative h-[600px] md:h-[760px] w-full overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAuhblsFSUIVNsWrun7aznZMYQTvHZGOlCxC0nScIq2qANHnS6VsnWNPafzpI903SAlnHVZ8n3GldG-sIPj3utZOln-lSIu_6M86vxtgo5SFUfkKXY5TQAvPEom9c-6q9e4gHs0n7YE1QjOroLE5d3lblf_-aOpAqZjBbLGFfNucB89JEIoddNtHGrxKBZrdM6IZJsSkLKj6LPlnY1VxiW2AaYIEjd802DPYVF7rPM5sB_68N5eLFbw1g"
              alt="Professional South Asian model wearing a luxurious ivory cotton co-ord set in a sun-drenched minimalist courtyard"
              fill
              unoptimized
              priority
              className="object-cover object-center scale-105"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-transparent to-transparent" />

          <Container className="relative z-10 h-full flex flex-col justify-center items-start text-brand-ivory">
            <FadeUp delay={0.1}>
              <span className="font-accent text-xs font-bold uppercase tracking-[0.3em] mb-4 text-brand-beige/90">
                SS&apos;24 Collection
              </span>
            </FadeUp>
            <FadeUp delay={0.2}>
              <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[84px] font-bold leading-tight mb-6">
                Co-ord Sets
              </h1>
            </FadeUp>
            <FadeUp delay={0.3}>
              <p className="font-body text-base md:text-lg max-w-xl mb-10 text-brand-beige/90 leading-relaxed">
                Effortlessly coordinated styles designed for comfort, confidence, and everyday elegance. Crafted from the finest hand-woven cottons.
              </p>
            </FadeUp>
            <FadeUp delay={0.4}>
              <Link
                href="#collection"
                className="bg-brand-ivory text-brand-burgundy px-10 py-4 font-accent text-xs font-bold uppercase tracking-widest hover:bg-brand-burgundy hover:text-brand-ivory transition-all duration-300"
              >
                Shop the Collection
              </Link>
            </FadeUp>
          </Container>
        </section>

        {/* ────────── 2. Breadcrumbs ────────── */}
        <div className="border-b border-brand-charcoal/5">
          <Container className="py-6">
            <ol className="flex items-center gap-2 font-accent text-[10px] md:text-xs uppercase tracking-widest text-brand-muted">
              <li><Link href="/" className="hover:text-brand-burgundy transition-colors">Home</Link></li>
              <li><ChevronRight className="w-3.5 h-3.5 text-brand-charcoal/20" /></li>
              <li><Link href="/shop" className="hover:text-brand-burgundy transition-colors">Shop</Link></li>
              <li><ChevronRight className="w-3.5 h-3.5 text-brand-charcoal/20" /></li>
              <li className="text-brand-burgundy font-bold">Co-ord Sets</li>
            </ol>
          </Container>
        </div>

        {/* ────────── 3. Collection Introduction ────────── */}
        <section className="py-16">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <FadeUp delay={0.1}>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-brand-burgundy mb-6 italic">
                The Harmony of Two
              </h2>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p className="font-body text-base md:text-lg text-brand-muted leading-relaxed">
                Discover the beauty of effortless dressing with our curated Co-ord Sets. Inspired by the architectural lines of Rajasthan and reimagined for the modern woman, each set balances breathable, natural fabrics with contemporary silhouettes that transition seamlessly from sunrise meetings to sunset soirées.
              </p>
            </FadeUp>
          </div>
        </section>

        {/* ────────── 4. Sticky Filter & Sort Bar ────────── */}
        <div className="sticky top-[80px] z-30 bg-brand-ivory/95 backdrop-blur-md border-y border-brand-charcoal/5">
          <Container className="h-16 flex items-center justify-between">
            <div className="flex items-center gap-8 overflow-x-auto no-scrollbar">
              <button className="flex items-center gap-2 font-accent text-xs font-bold uppercase tracking-widest text-brand-charcoal hover:text-brand-burgundy transition-colors cursor-pointer">
                <SlidersHorizontal className="w-4 h-4" />
                <span>Filters</span>
              </button>
              <div className="hidden md:flex items-center gap-6">
                {['Size', 'Color', 'Fabric', 'Price'].map(filter => (
                  <button
                    key={filter}
                    className="font-accent text-xs font-bold uppercase tracking-widest text-brand-muted hover:text-brand-burgundy transition-colors cursor-pointer"
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="hidden md:inline font-accent text-xs font-bold uppercase tracking-widest text-brand-muted">
                {coordProducts.length} Products
              </span>
              <div className="flex items-center gap-2 font-accent text-xs font-bold uppercase tracking-widest text-brand-charcoal border-l border-brand-charcoal/10 pl-4 cursor-pointer">
                <span>Sort By</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </div>
            </div>
          </Container>
        </div>

        {/* ────────── 5. Product Grid ────────── */}
        <section className="py-16" id="collection">
          <Container>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-12">
              {coordProducts.map((product, index) => {
                const isFav = favorites.includes(product.id);
                return (
                  <FadeUp
                    key={product.id}
                    delay={index * 0.1}
                    className="group"
                  >
                    <Link href="/product/empress-silk-kurta-set" className="block">
                      <div className="relative aspect-[3/4] overflow-hidden mb-4 bg-brand-beige">
                        {/* Base Image */}
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          unoptimized
                          className="object-cover transition-opacity duration-500 group-hover:opacity-0"
                        />
                        {/* Hover Image */}
                        <Image
                          src={product.hoverImage}
                          alt={`${product.name} detail`}
                          fill
                          unoptimized
                          className="object-cover absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        />

                        {/* Favorite Button */}
                        <button
                          onClick={(e) => toggleFavorite(product.id, e)}
                          className="absolute top-4 right-4 z-10 text-brand-muted hover:text-brand-burgundy transition-colors cursor-pointer"
                        >
                          <Heart
                            className={`w-5 h-5 ${isFav ? 'fill-brand-burgundy text-brand-burgundy' : ''}`}
                          />
                        </button>

                        {/* Badge */}
                        {product.badge && (
                          <span className={`absolute top-4 left-4 z-10 ${product.badgeColor || 'bg-brand-burgundy'} text-brand-ivory px-3 py-1 text-[10px] uppercase tracking-widest font-accent font-bold`}>
                            {product.badge}
                          </span>
                        )}

                        {/* Category Tag */}
                        {!product.badge && (
                          <div className="absolute bottom-4 left-4 bg-brand-ivory/90 px-3 py-1 text-[10px] uppercase tracking-widest font-accent font-bold text-brand-burgundy">
                            Co-ord Set
                          </div>
                        )}
                      </div>

                      <h3 className="font-body text-sm md:text-base font-semibold text-brand-charcoal group-hover:text-brand-burgundy transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-brand-muted text-xs md:text-sm mb-2">{product.description}</p>
                      <p className="font-body text-sm md:text-base text-brand-burgundy font-semibold">
                        ₹{product.price.toLocaleString('en-IN')}
                      </p>
                    </Link>
                  </FadeUp>
                );
              })}
            </div>
          </Container>
        </section>

        {/* ────────── 6. Editorial Storytelling Banner ────────── */}
        <section className="w-full h-[500px] overflow-hidden relative group mb-16">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMxUajDAZvsw9EynPoq4Lb7eJj5eDWdl6TCWBeP5Bqw7vgRexVkezk4PbvjXDm33WRL-dSNVXActx4_b68rHzQDf0PZyNsYPn-C-mWHvYLSK-MRrklt922_KpabAL4uXdBTESA6nqw5r0JEuRJ3FaXAHuvzAanyk24-hrnMnFnaIGmAM_yNZB7x_XLZP1kwvWPCkCmKHCPCQrzzJ9lXCkL0xlWwFrvJXKROIlQarSXWz53VC2-yQZKSg"
              alt="Woman walking through a rustic Rajasthani village street wearing a flowing white linen co-ord set"
              fill
              unoptimized
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-brand-burgundy/20 group-hover:bg-brand-burgundy/30 transition-all duration-700" />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-brand-ivory p-6 text-center">
            <FadeUp delay={0.1}>
              <h2 className="font-display text-3xl md:text-5xl font-bold mb-6 italic">
                The Art of Effortless Dressing
              </h2>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p className="font-body text-base md:text-lg max-w-2xl mb-8 opacity-90 leading-relaxed">
                From morning meetings to evening sunsets, our sets are designed to simplify your life without compromising on style.
              </p>
            </FadeUp>
            <FadeUp delay={0.3}>
              <Link
                href="/shop"
                className="border border-brand-ivory px-8 py-3 font-accent text-xs font-bold uppercase tracking-widest hover:bg-brand-ivory hover:text-brand-burgundy transition-all duration-300"
              >
                Discover More
              </Link>
            </FadeUp>
          </div>
        </section>

        {/* ────────── 7. Style Inspiration Lookbook ────────── */}
        <section className="py-16">
          <Container>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-6">
              <FadeUp delay={0.1}>
                <div>
                  <span className="font-accent text-xs font-bold uppercase tracking-widest text-brand-burgundy block mb-2">Lookbook</span>
                  <h2 className="font-display text-2xl md:text-3xl font-bold italic">Style Inspiration</h2>
                </div>
              </FadeUp>
              <FadeUp delay={0.15}>
                <p className="hidden md:block font-body text-sm text-brand-muted max-w-sm">
                  How to wear your SATTVA VOGUE co-ords for every occasion in your calendar.
                </p>
              </FadeUp>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {styleInspirations.map((item, index) => (
                <FadeUp key={item.id} delay={index * 0.15} className="relative aspect-[4/5] overflow-hidden group">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    unoptimized
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8">
                    <h4 className="font-display text-xl md:text-2xl font-bold text-brand-ivory mb-2">{item.title}</h4>
                    <p className="font-body text-sm text-brand-ivory/80">{item.description}</p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </Container>
        </section>

        {/* ────────── 8. Why Choose Our Co-ords ────────── */}
        <section className="bg-brand-beige/30 border-y border-brand-charcoal/5 py-20 mb-16">
          <Container>
            <FadeUp delay={0.1}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                {[
                  { icon: <Shirt className="w-8 h-8" />, title: 'Comfort Fit', desc: 'Tailored for freedom of movement and daily ease.' },
                  { icon: <Wind className="w-8 h-8" />, title: 'Breathable', desc: 'Natural fibers that keep you cool in every season.' },
                  { icon: <Sparkles className="w-8 h-8" />, title: 'Easy to Style', desc: 'Infinite combinations from two simple pieces.' },
                  { icon: <BadgeCheck className="w-8 h-8" />, title: 'Premium Finish', desc: 'Meticulous stitching and high-quality artisanal hardware.' },
                ].map((pillar, i) => (
                  <div
                    key={i}
                    className={`text-center p-6 ${i < 3 ? 'border-r border-brand-charcoal/5' : ''}`}
                  >
                    <div className="text-brand-burgundy mb-4 flex justify-center">{pillar.icon}</div>
                    <h4 className="font-accent text-xs font-bold uppercase tracking-widest text-brand-charcoal mb-2">
                      {pillar.title}
                    </h4>
                    <p className="font-body text-xs text-brand-muted">{pillar.desc}</p>
                  </div>
                ))}
              </div>
            </FadeUp>
          </Container>
        </section>

        {/* ────────── 9. Customer Stories ────────── */}
        <section className="py-16 overflow-hidden">
          <Container>
            <FadeUp delay={0.1}>
              <h2 className="font-display text-2xl md:text-3xl font-bold italic text-center mb-12">
                Loved by You
              </h2>
            </FadeUp>

            <div className="relative">
              {/* Scroll buttons */}
              <button
                onClick={() => scrollReviews('left')}
                className="absolute -left-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-brand-ivory shadow-premium border border-brand-charcoal/5 flex items-center justify-center hover:bg-brand-burgundy hover:text-brand-ivory transition-colors cursor-pointer hidden md:flex"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scrollReviews('right')}
                className="absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-brand-ivory shadow-premium border border-brand-charcoal/5 flex items-center justify-center hover:bg-brand-burgundy hover:text-brand-ivory transition-colors cursor-pointer hidden md:flex"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              <div
                ref={reviewsRef}
                className="flex gap-8 overflow-x-auto pb-6 no-scrollbar scroll-smooth"
              >
                {reviews.map((review) => (
                  <div
                    key={review.id}
                    className="min-w-[300px] md:min-w-[400px] bg-brand-ivory p-8 shadow-sm border border-brand-charcoal/5 flex-shrink-0"
                  >
                    {/* Stars */}
                    <div className="flex items-center gap-1 mb-4 text-brand-rust">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <p className="font-body text-sm italic text-brand-charcoal mb-6 leading-relaxed">
                      &ldquo;{review.quote}&rdquo;
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full overflow-hidden relative">
                        <Image
                          src={review.avatar}
                          alt={review.author}
                          fill
                          unoptimized
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-accent text-xs font-bold uppercase tracking-widest text-brand-charcoal">
                          {review.author}
                        </p>
                        <p className="text-[10px] text-brand-muted uppercase tracking-wider">{review.tag}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* ────────── 10. Instagram Gallery ────────── */}
        <section className="py-16">
          <div className="max-w-[1280px] mx-auto px-6 mb-8 flex flex-col items-center text-center">
            <FadeUp delay={0.1}>
              <h2 className="font-display text-2xl md:text-3xl font-bold italic mb-2">Spotted in Sattva</h2>
            </FadeUp>
            <FadeUp delay={0.15}>
              <p className="font-body text-sm text-brand-muted mb-4">Tag us @SattvaVogue to be featured.</p>
            </FadeUp>
            <FadeUp delay={0.2}>
              <Link href="/journal" className="font-accent text-xs font-bold text-brand-burgundy uppercase tracking-[0.2em] border-b border-brand-burgundy/30 pb-1 hover:border-brand-burgundy transition-colors">
                Shop Instagram
              </Link>
            </FadeUp>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-1">
            {instagramImages.map((img, i) => (
              <FadeUp key={i} delay={i * 0.08} className="aspect-square relative group overflow-hidden">
                <Image
                  src={img}
                  alt={`Sattva Vogue co-ord customer look ${i + 1}`}
                  fill
                  unoptimized
                  className="object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Heart className="w-8 h-8 text-brand-ivory" />
                </div>
              </FadeUp>
            ))}
          </div>
        </section>

        {/* ────────── 11. Newsletter ────────── */}
        <section className="border-t border-brand-charcoal/5 py-20">
          <Container>
            <FadeUp delay={0.1}>
              <div className="flex flex-col md:flex-row justify-between items-center gap-12">
                <div className="text-center md:text-left">
                  <h3 className="font-display text-2xl md:text-3xl font-bold italic text-brand-burgundy mb-2">
                    The Vogue Circle
                  </h3>
                  <p className="font-body text-sm text-brand-muted">
                    Join our inner circle for early access, exclusive offers, and the latest in Rajasthani craft.
                  </p>
                </div>
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="w-full md:w-auto flex flex-col md:flex-row gap-4"
                >
                  <input
                    type="email"
                    placeholder="ENTER YOUR EMAIL"
                    className="bg-transparent border-b border-brand-charcoal/20 focus:border-brand-burgundy px-2 py-4 outline-none font-accent text-xs uppercase tracking-widest text-brand-charcoal min-w-[300px]"
                  />
                  <Button
                    type="submit"
                    variant="primary"
                    className="px-8 py-4 tracking-widest uppercase"
                  >
                    Subscribe
                  </Button>
                </form>
              </div>
            </FadeUp>
          </Container>
        </section>

      </main>

      <Footer />
    </div>
  );
}
