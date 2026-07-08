'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronRight,
  Star,
  Heart,
  Plus,
  Compass,
  Globe,
  Lock,
  Sparkles,
  Check,
  ChevronLeft
} from 'lucide-react';
import { AnnouncementBar } from '@/components/layout/AnnouncementBar';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import Container from '@/components/common/Container';
import FadeUp from '@/components/animations/FadeUp';
import Button from '@/components/common/Button';

// Main product images
const productImages = [
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAZVKRTjgwh0Utqp39eQ13uuIIaYP7gFzvgFM6tfTlFv-PfVg-Oefzf-SEVewGuHtezBW7ycsbPwAR7wR6XqKoZ1l7yvEF-sDkXGEi40EI5ZWxYNM4hM7mFUEvDWOpgzMwi5w0BGKjwXQ8g-EvkGcVIOD5pZDK728R8L_F44l00hgqPsAjUu9SDU7XqsgsDzVE_tH3yhSfYFW6WSM7A_wGSKVKXLkAbBIIgECuuivdkKt0pMnoY3xM6Ew',
    alt: 'Full body editorial of Empress Silk Kurta Set'
  },
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAdLZiRnL2M_T5VBhgZuLwvrhIDmGW3SRk0EK9UUUERPm2kGMP3c6O-YD1k7_O2K46ifZdWkXO8qBV1V88Al4b10MkdtCOKnwi4qHAab08klIHXAAC1caPlY_ANEksdV7LKf8NUbTNCMQqSTmcRYibWK6EnufVSbXxGod3lkYY5EMUL8w_cTIzCcA7cZWA0waW6UhjSd3ZFoqM9C5wJrLcK1yWawEOcuUX3ExhDObIw7EswjYFVB-HV7A',
    alt: 'Close up of gold hand block print details on magenta silk'
  },
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB9h1LTGP_Iwr6Nzm3b_kxPWP3h484giRmR_7tnPw-5VUTlGBnIPzlxv6S4ROs0gkwnVE5OQNNBzYU40qM8OSdIa1kPZr3pklQmHnlFAL3lS8lYGNRe4MswY-4nDo_tgK1NNfMM0RxqeAQbRTZAiif5QPc41WvNYTzXYwN9uelrMzEA_48x7G32W-U0l-OOgchN692hxkVyu6DLH5MWS54JqtKY735g2ESzjsmE7eU2vrMBZ8sV_NpNkw',
    alt: 'Emerald Green printed sleeve and hem details close up'
  },
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDPyOwwh1M-Sa4ortL6IrTc13HIn4U79V4YPaMBBzQl4ljdg5SmHWysxyX2unsP5flzqMtIJAKGPNoOgydtRMDeHq5mhOxhh5w-cCunU4qTnQtiX0Sz-n-_mo1sVyo-CXkb1s5vM1aU4ogGvWksig__AovzcgrZfSp1Nc3-F47an52fxOOXSh_z09wxn4tja_-c1jsWCJ0AkpnY5E30f8zbqkNuvw0a93hO5_RxAfEGXMpsYf35mjSTLg',
    alt: 'Model drape showcase back view'
  },
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB3I3xCW7VP4dXqHwN0S4VDJSjsJMEmtKNAd7qFa7rNlwRM7Eur3P9yxMg2j-gqiWj-arLC5SYSjHubYanMbaToR9rwcOLPpehRwcQOLyP1mJoMHLhCtjuRy1J_M1_IEHsWRedCRiPHs9JaDzv4mreiGpvYK6MHJSTWmgvtkTGugXbrXkQ45r3bQbr6kMxSnMCZMIu7KYu_w_NEYrUR-0QWp7P6Ge2Q2pfzmtby7pEznEnVLP0ER_4jIQ',
    alt: 'Detail shot of magenta raw silk weave'
  }
];

// Colors available
const colorSwatches = [
  { id: 'magenta', name: 'Deep Magenta', value: 'bg-brand-burgundy' },
  { id: 'sand', name: 'Sand Beige', value: 'bg-[#D2B48C]' },
  { id: 'pink', name: 'Light Pink', value: 'bg-[#FFB7C5]' }
];

// Sizes available
const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

// Details Tabs content
const tabs = [
  {
    id: 'description',
    label: 'Description',
    content: (
      <div className="space-y-4 font-body text-sm leading-relaxed text-brand-muted">
        <p>
          Inspired by the regal heritage of ancient empires, the Empress Silk Kurta Set is more than just clothing; it&apos;s a piece of art. Each garment is hand-printed by master artisans using traditional wooden blocks, ensuring that every set is unique.
        </p>
        <p>
          The silhouette is designed to provide a flattering, relaxed fit that transitions seamlessly from day events to evening soirées.
        </p>
        <ul className="list-disc pl-5 space-y-2 mt-4">
          <li>Long-line kurta with side slits</li>
          <li>Subtle gold leaf detailing around the neckline</li>
          <li>Matching tapered trousers with elasticated back</li>
          <li>Functional side pockets</li>
        </ul>
      </div>
    )
  },
  {
    id: 'fabric',
    label: 'Fabric',
    content: (
      <div className="space-y-4 font-body text-sm leading-relaxed text-brand-muted">
        <p>
          We source only the highest grade of mulberry silk from ethical suppliers. This natural fiber is prized for its incredible softness, breathability, and luxurious sheen.
        </p>
        <p>
          The dyes used are vegetable-based and eco-friendly, ensuring a gentle touch on your skin and the environment.
        </p>
      </div>
    )
  },
  {
    id: 'care',
    label: 'Care Instructions',
    content: (
      <div className="space-y-4 font-body text-sm leading-relaxed text-brand-muted">
        <p>
          To preserve the delicate nature of the silk and the hand-block prints, we recommend dry clean only.
        </p>
        <p>
          If needed, iron on the reverse side using a cool setting. Store in a breathable cotton bag away from direct sunlight.
        </p>
      </div>
    )
  },
  {
    id: 'shipping',
    label: 'Shipping',
    content: (
      <div className="space-y-4 font-body text-sm leading-relaxed text-brand-muted">
        <p>
          Domestic orders within India are processed within 24 hours and delivered within 3-5 business days.
        </p>
        <p>
          International shipping options are available at checkout, typically delivering in 7-10 business days. We offer a 14-day return window for unworn items in original packaging.
        </p>
      </div>
    )
  }
];

// Accessories (Complete the Look)
const accessories = [
  {
    id: 'acc-1',
    name: 'Organza Gold Dupatta',
    price: 2490,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBBc0uQoj7Z5ZmDT9TitjouPYrXtA2hNUPyBN5eJ8USJyXVdC3TTJ0NYTg84yrE5IcaSMH30nPxpCjbUrJsUTquaFLLniGZ210fNAwy_7Cd5gcs8e20CjeQ-9P3aoJD2WtA0d-JYrEIYUARrGwpvjraCuzNnMFptjwnbPc5G-UaxAUEUc79rQPH_7ZDbUqq3RGTTAf5zxODrRye9R1W0kNpiHhTeFGojrc8ioLlwvYccpDp9289Nx3R-A',
    alt: 'Organza Gold Dupatta'
  },
  {
    id: 'acc-2',
    name: 'Kundan Pearl Drops',
    price: 4200,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuClZzJ2Oz3oMwJJxp7GFr9wLnn9vyfe1Oh8DTScs-EfvPQ38vBXWRpjESeAuxVWeZze4Gb9mwyznL146b6qw7jrNXq0LpbjQy3dvHl2G162D3reAmj-88HlVUjLKJECU9WvSgAXnMQAIJfxX5S61ad_nQ8OjvrD9CDPV-nXxDxQXON5c7vmkxZpDyKApaFNiYurXQtntx-sb31EJRgNS9AvPaW-0XWdm6pcKtf77KQ0s-Asl6J_ytn5zw',
    alt: 'Kundan Pearl Drops Chandelier Earrings'
  },
  {
    id: 'acc-3',
    name: 'Zari Embroidered Juttis',
    price: 3150,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBNCZGV2nYweXnMJiQQnIVD3-8k8AyrgEa_HPxtL_mkgOkd6rCIsNBWJpoXMvdBJNfkIyC2FlXS5OmCzt9TcP0diAy8iTfeQuLrOm_A6lWz35PMzK2BsaN8JUo2zoPCVfulzYsREGJYuMTbN9yAn8-JPdiEUB59qBltoDVGQKCX8iYYleIDC2d5rvpjGJLiUGDTBvw06pSplxj5QMh6ks4U2oOCF3pR9PCtwmKaMpORhBx5GWTsi8Acpw',
    alt: 'Zari Embroidered Leather Juttis'
  },
  {
    id: 'acc-4',
    name: 'Royal Beaded Potli',
    price: 1890,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAd5ViV8sN6GSb3XpEbc3IJ89uXrNGS8X7YjQlPrHtOvRyA_oNUXb3ZgqSKfOn7CW0EN6ryzP96wWZX1p1qMoFJxiu6UokYX9ywhQX-KWl8OjhIWo703d2Aic42ocTF3u7YvSYRhq14sf00e-GViyeBckMcMjyqozmQirLpvXxtqW4fHVuFYOo-P2uoZ6bT5XZYZ7mHSDBkFB99Q1TUq0YCWDoHDyNdZ8zZ_MkCMOBIQ2RkdccTFuQrHA',
    alt: 'Royal Beaded Potli Bag in deep magenta'
  }
];

// Testimonials
const reviewsData = [
  {
    id: 'rev-1',
    author: 'Anjali S.',
    location: 'Mumbai',
    quote: 'The quality of the silk is unmatched. I wore it for a family wedding and received so many compliments. Truly feels like a royal piece.',
    rating: 5
  },
  {
    id: 'rev-2',
    author: 'Priya M.',
    location: 'London',
    quote: 'Fast shipping and lovely packaging. The magenta color is even more vibrant in person. Fits perfectly according to the size guide.',
    rating: 5
  },
  {
    id: 'rev-3',
    author: 'Meera K.',
    location: 'Delhi',
    quote: 'A masterpiece of hand-block printing. You can really see the artisanal effort in the alignment of the patterns.',
    rating: 5
  }
];

export default function ProductDetailsPage() {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState('magenta');
  const [selectedSize, setSelectedSize] = useState('S');
  const [activeTab, setActiveTab] = useState('description');
  const [isFavorite, setIsFavorite] = useState(false);
  
  // Interactive Cart feedback states
  const [cartStatus, setCartStatus] = useState<'idle' | 'adding' | 'success'>('idle');
  const [buyStatus, setBuyStatus] = useState<'idle' | 'processing'>('idle');

  const handleAddToCart = () => {
    setCartStatus('adding');
    setTimeout(() => {
      setCartStatus('success');
      setTimeout(() => setCartStatus('idle'), 2000);
    }, 1200); // simulate quick adding
  };

  const handleBuyNow = () => {
    setBuyStatus('processing');
    setTimeout(() => {
      setBuyStatus('idle');
      alert('Checkout flow triggered! (Visual demonstration only)');
    }, 1200);
  };

  return (
    <div className="flex flex-col min-h-screen bg-brand-ivory">
      {/* 1. Announcement Bar */}
      <AnnouncementBar />

      {/* 2. Navigation Header */}
      <Header />

      <main className="flex-grow pt-24 pb-20">
        
        {/* Breadcrumb Navigation */}
        <div className="border-b border-brand-charcoal/5 bg-brand-beige/10">
          <Container className="py-4">
            <ol className="flex items-center space-x-2 font-accent text-[10px] md:text-xs uppercase tracking-wider text-brand-muted">
              <li>
                <a href="/" className="hover:text-brand-burgundy transition-colors">Home</a>
              </li>
              <li className="flex items-center space-x-1">
                <ChevronRight className="w-3 h-3 text-brand-charcoal/20" />
                <a href="#products" className="hover:text-brand-burgundy transition-colors">Shop</a>
              </li>
              <li className="flex items-center space-x-1">
                <ChevronRight className="w-3 h-3 text-brand-charcoal/20" />
                <a href="#" className="hover:text-brand-burgundy transition-colors">Kurta Sets</a>
              </li>
              <li className="flex items-center space-x-1">
                <ChevronRight className="w-3 h-3 text-brand-charcoal/20" />
                <span className="text-brand-burgundy font-bold">The Empress Silk Kurta Set</span>
              </li>
            </ol>
          </Container>
        </div>

        {/* Product Hero Layout */}
        <section className="py-12 md:py-16">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
              
              {/* Left Column: Gallery */}
              <div className="lg:col-span-7 flex flex-col-reverse md:flex-row gap-5 h-fit">
                
                {/* Thumbnails Stack */}
                <div className="flex md:flex-col gap-3 overflow-x-auto no-scrollbar md:overflow-visible">
                  {productImages.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`relative w-20 h-24 flex-shrink-0 rounded-sm overflow-hidden border-2 transition-all duration-300 ${
                        activeImageIndex === idx
                          ? 'border-brand-burgundy shadow-sm'
                          : 'border-brand-charcoal/10 hover:border-brand-burgundy/50'
                      }`}
                    >
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        unoptimized
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>

                {/* Active Image Display */}
                <div className="flex-grow aspect-[3/4] relative bg-brand-beige rounded-sm overflow-hidden shadow-premium group">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeImageIndex}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 w-full h-full"
                    >
                      <Image
                        src={productImages[activeImageIndex].src}
                        alt={productImages[activeImageIndex].alt}
                        fill
                        unoptimized
                        priority
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                    </motion.div>
                  </AnimatePresence>

                  {/* Favorite Toggle Button */}
                  <button
                    onClick={() => setIsFavorite(!isFavorite)}
                    className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-brand-ivory/80 backdrop-blur-xs flex items-center justify-center text-brand-charcoal hover:bg-brand-ivory transition-colors shadow-sm outline-none cursor-pointer"
                  >
                    <Heart
                      className={`w-5 h-5 transition-colors duration-300 ${
                        isFavorite ? 'fill-brand-burgundy text-brand-burgundy' : 'text-brand-charcoal'
                      }`}
                    />
                  </button>
                </div>
              </div>

              {/* Right Column: Information Panel */}
              <div className="lg:col-span-5 flex flex-col justify-start">
                <FadeUp delay={0.1}>
                  <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-brand-burgundy leading-tight mb-4">
                    The Empress Silk Kurta Set
                  </h1>
                </FadeUp>
                
                <FadeUp delay={0.15}>
                  <p className="font-display text-2xl font-semibold text-brand-charcoal mb-6">
                    ₹8,990
                  </p>
                </FadeUp>

                <FadeUp delay={0.2}>
                  <p className="font-body text-base text-brand-muted leading-relaxed mb-8">
                    Exquisitely crafted from the finest mulberry silk, this set features intricate hand-block prints that tell a story of heritage and luxury. Designed for the modern woman who values both tradition and effortless elegance.
                  </p>
                </FadeUp>

                {/* Color and Size Selectors */}
                <div className="space-y-8 mb-10">
                  
                  {/* Color Swatches */}
                  <FadeUp delay={0.25}>
                    <div className="flex flex-col">
                      <span className="font-accent text-xs font-bold uppercase tracking-widest text-brand-muted block mb-3">
                        Color: {colorSwatches.find(c => c.id === selectedColor)?.name}
                      </span>
                      <div className="flex items-center space-x-4">
                        {colorSwatches.map((color) => (
                          <button
                            key={color.id}
                            onClick={() => setSelectedColor(color.id)}
                            className={`w-9 h-9 rounded-full ${color.value} transition-all duration-300 border-2 cursor-pointer ${
                              selectedColor === color.id
                                ? 'border-brand-burgundy ring-offset-2 ring-1 ring-brand-burgundy'
                                : 'border-transparent hover:border-brand-charcoal/30'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </FadeUp>

                  {/* Size Selector */}
                  <FadeUp delay={0.3}>
                    <div className="flex flex-col">
                      <div className="flex justify-between items-center mb-3">
                        <span className="font-accent text-xs font-bold uppercase tracking-widest text-brand-muted">
                          Select Size
                        </span>
                        <button className="text-brand-burgundy font-accent text-xs font-bold uppercase tracking-wider underline underline-offset-4 hover:text-brand-rust transition-colors cursor-pointer bg-transparent border-none">
                          Size Guide
                        </button>
                      </div>
                      <div className="grid grid-cols-6 gap-2">
                        {sizes.map((size) => (
                          <button
                            key={size}
                            onClick={() => setSelectedSize(size)}
                            className={`py-3 text-center border font-accent text-xs font-semibold uppercase transition-all duration-300 rounded-sm cursor-pointer ${
                              selectedSize === size
                                ? 'border-brand-burgundy text-brand-burgundy bg-brand-burgundy/5 border-2'
                                : 'border-brand-charcoal/10 text-brand-muted hover:border-brand-burgundy hover:text-brand-burgundy'
                            }`}
                          >
                            {size}
                          </button>
                        ))}
                      </div>
                    </div>
                  </FadeUp>
                </div>

                {/* Call-to-action buttons */}
                <FadeUp delay={0.35} className="flex flex-col space-y-4">
                  <Button
                    onClick={handleAddToCart}
                    disabled={cartStatus === 'adding'}
                    variant="primary"
                    className="w-full text-center py-4.5 rounded-sm tracking-wider uppercase"
                  >
                    {cartStatus === 'idle' && 'Add to Cart'}
                    {cartStatus === 'adding' && 'Adding to Cart...'}
                    {cartStatus === 'success' && (
                      <span className="flex items-center justify-center gap-2">
                        <Check className="w-4 h-4" /> Added Successfully
                      </span>
                    )}
                  </Button>
                  
                  <Button
                    onClick={handleBuyNow}
                    disabled={buyStatus === 'processing'}
                    variant="outline"
                    className="w-full text-center py-4.5 rounded-sm tracking-wider uppercase border-brand-burgundy text-brand-burgundy hover:bg-brand-burgundy hover:text-brand-ivory"
                  >
                    {buyStatus === 'processing' ? 'Processing...' : 'Buy Now'}
                  </Button>
                </FadeUp>
              </div>

            </div>
          </Container>
        </section>

        {/* Product Trust Value Pillars */}
        <section className="bg-brand-beige/30 border-y border-brand-charcoal/5 py-12 mb-16">
          <Container>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              
              <div className="flex flex-col items-center text-center p-4">
                <div className="w-12 h-12 rounded-full bg-brand-burgundy/5 flex items-center justify-center text-brand-burgundy mb-4">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="font-accent text-xs font-bold uppercase tracking-wider text-brand-charcoal mb-2">
                  Premium Silk
                </h3>
                <p className="font-body text-xs text-brand-muted">
                  100% natural mulberry silk
                </p>
              </div>

              <div className="flex flex-col items-center text-center p-4">
                <div className="w-12 h-12 rounded-full bg-brand-burgundy/5 flex items-center justify-center text-brand-burgundy mb-4">
                  <Compass className="w-6 h-6" />
                </div>
                <h3 className="font-accent text-xs font-bold uppercase tracking-wider text-brand-charcoal mb-2">
                  Comfort Fit
                </h3>
                <p className="font-body text-xs text-brand-muted">
                  Tailored for ease of movement
                </p>
              </div>

              <div className="flex flex-col items-center text-center p-4">
                <div className="w-12 h-12 rounded-full bg-brand-burgundy/5 flex items-center justify-center text-brand-burgundy mb-4">
                  <Globe className="w-6 h-6" />
                </div>
                <h3 className="font-accent text-xs font-bold uppercase tracking-wider text-brand-charcoal mb-2">
                  Worldwide Shipping
                </h3>
                <p className="font-body text-xs text-brand-muted">
                  Arrives in 5-7 business days
                </p>
              </div>

              <div className="flex flex-col items-center text-center p-4">
                <div className="w-12 h-12 rounded-full bg-brand-burgundy/5 flex items-center justify-center text-brand-burgundy mb-4">
                  <Lock className="w-6 h-6" />
                </div>
                <h3 className="font-accent text-xs font-bold uppercase tracking-wider text-brand-charcoal mb-2">
                  Secure Payments
                </h3>
                <p className="font-body text-xs text-brand-muted">
                  100% encrypted transactions
                </p>
              </div>

            </div>
          </Container>
        </section>

        {/* Tabbed Product Details */}
        <section className="py-12 max-w-[900px] mx-auto px-6 mb-16">
          <div className="flex border-b border-brand-charcoal/10 mb-8 overflow-x-auto no-scrollbar">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-8 py-4 font-accent text-xs font-bold uppercase tracking-widest transition-all whitespace-nowrap cursor-pointer ${
                  activeTab === tab.id
                    ? 'text-brand-burgundy border-b-2 border-brand-burgundy'
                    : 'text-brand-muted hover:text-brand-burgundy'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="min-h-[200px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
              >
                {tabs.find(t => t.id === activeTab)?.content}
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* Fabric Storytelling Section */}
        <section className="flex flex-col lg:flex-row w-full h-[600px] border-y border-brand-charcoal/5 bg-brand-ivory overflow-hidden mb-20">
          <div className="lg:w-1/2 h-1/2 lg:h-full relative overflow-hidden group">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAaQa_bqsVgjdd0TuEt1H9y8fSd37zIqZeKQtCT99aKJFkbKe06kVUtjxqoSpOUm5BjJxs46X2G8Y5MffTZiBmGMOYm7EOPE-o3MQvXoEmQIjUGrCC-fuOF2SULU7Iw237WarOgnunc5lrD9GlsHGcpq1fBs9NE4bBb5uH91jos0lWVxwrkR4k1DImPz3eXSpl27nWr1yJpCw8yAlgRzPc0Xpm6bBcUwbpmHD_9wLtt0ImY3rnXGaSJzQ"
              alt="Artisanal block printing macro details"
              fill
              unoptimized
              className="object-cover group-hover:scale-103 transition-transform duration-1000 ease-out"
            />
          </div>
          <div className="lg:w-1/2 h-1/2 lg:h-full bg-brand-burgundy flex flex-col justify-center px-8 sm:px-12 md:px-16 lg:px-20 text-brand-ivory py-8 lg:py-0">
            <span className="font-accent text-[10px] md:text-xs font-bold uppercase tracking-widest mb-4 opacity-80 block text-brand-beige">
              The Craft
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Soul in Every Stitch
            </h2>
            <p className="font-body text-base opacity-90 leading-relaxed mb-8 max-w-xl">
              Our artisans spend over 48 hours on a single piece, carving blocks from teak wood and pressing them by hand to create the intricate patterns you see. It&apos;s a rhythm of passion that has been passed down through generations.
            </p>
            <div className="relative w-full h-32 md:h-40 rounded-sm overflow-hidden border border-brand-ivory/20 shadow-md">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVNZb7OcPRQzwZSXhYaIlRRGsvMeVMU2_b-yBW21QeoPb86dVMR17McPel7nKhe2LmCcufDZuRwZSfnLYh9ZoiyM7gil1vWURTGfNZtH1-_WeUKGneiyUgMzGMTXhXkBIcxs8UJoHUxOVaSbyoPQQ7YPEsbK0x9gIlSlOJiKr0Ozcirhdvn2tOFP9IWJiplphRCWiLg3bZ_6hzxsdgP5bSmDnrdSTiPo3nu5L_qC1-zwiM58CuIwlRVw"
                alt="Artisan hands carving block printing details"
                fill
                unoptimized
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Complete the Look Section */}
        <section className="py-12 max-w-[1280px] mx-auto px-6 overflow-hidden mb-20">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-brand-burgundy text-center mb-12">
            Complete The Look
          </h2>
          <div className="flex space-x-6 overflow-x-auto no-scrollbar pb-6">
            {accessories.map((acc) => (
              <div key={acc.id} className="min-w-[260px] md:min-w-[280px] flex flex-col group cursor-pointer">
                <div className="aspect-[3/4] overflow-hidden mb-4 relative bg-brand-beige rounded-sm">
                  <Image
                    src={acc.image}
                    alt={acc.name}
                    fill
                    unoptimized
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <button className="absolute bottom-4 right-4 w-9 h-9 bg-brand-ivory/95 rounded-full flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-transform outline-none cursor-pointer">
                    <Plus className="w-5 h-5 text-brand-burgundy" />
                  </button>
                </div>
                <p className="font-accent text-xs font-bold uppercase tracking-wider text-brand-charcoal mb-1">
                  {acc.name}
                </p>
                <p className="font-body text-sm text-brand-muted">
                  ₹{acc.price.toLocaleString('en-IN')}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Customer Impressions (Testimonials) */}
        <section className="bg-brand-beige/40 py-16 border-t border-brand-charcoal/5">
          <Container>
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
              <div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-brand-burgundy mb-3">
                  Customer Impressions
                </h2>
                <div className="flex items-center space-x-3">
                  <div className="flex text-brand-rust">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="font-body text-sm text-brand-muted">
                    4.9 Based on 124 reviews
                  </span>
                </div>
              </div>
              <Button
                variant="outline"
                className="border-brand-burgundy text-brand-burgundy hover:bg-brand-burgundy hover:text-brand-ivory px-6 py-2.5 text-xs font-bold"
              >
                Write a Review
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {reviewsData.map((rev) => (
                <div
                  key={rev.id}
                  className="bg-brand-ivory p-6 md:p-8 rounded-sm shadow-sm border border-brand-charcoal/5 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex text-brand-rust">
                        {[...Array(rev.rating)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-current" />
                        ))}
                      </div>
                      <span className="text-[10px] font-accent font-bold uppercase tracking-wider bg-brand-burgundy/10 text-brand-burgundy px-2 py-0.5 rounded-full">
                        Verified
                      </span>
                    </div>
                    <p className="font-body text-sm text-brand-charcoal italic mb-6 leading-relaxed">
                      &ldquo;{rev.quote}&rdquo;
                    </p>
                  </div>
                  <p className="font-accent text-xs font-bold uppercase tracking-wider text-brand-muted">
                    &mdash; {rev.author}, {rev.location}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>

      </main>

      {/* 3. Page Footer */}
      <Footer />
    </div>
  );
}
