'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronRight,
  Search,
  Heart,
  ShoppingBag,
  SlidersHorizontal,
  ChevronDown,
  ArrowRight,
  Check,
  Star,
  Globe,
  Award,
  Truck
} from 'lucide-react';
import { AnnouncementBar } from '@/components/layout/AnnouncementBar';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import Container from '@/components/common/Container';
import FadeUp from '@/components/animations/FadeUp';
import Button from '@/components/common/Button';

// Shop All Product Interface
interface ShopProduct {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  hoverImage?: string;
  description: string;
  sizes: string[];
  colors: string[];
  isNew?: boolean;
  isBestSeller?: boolean;
}

const shopProducts: ShopProduct[] = [
  {
    id: 'sp-1',
    name: 'Amara Rose Set',
    category: 'Kurta Sets',
    price: 4250,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA_U9tR8QaLCf8xSu_muKVQnxBlT7fBhjFZmOjiWoK_7hDMyVVfbV6Kj63_5sEARRuV1IVs5lTWRy-oIYEdqBQWLHWhZnapZknlMh26H1iTCFzYBocAheqFipCv4HP5osy_a3U1FwQ00DACHdYlFfp2OYUkNWjtsTJgns94Bak8O1MF-pV6qJlQY8H61sscs1q38_DIVCfZmhyJwOJIijeyCOxMhUPFHI_fiWIrmJH1C9rHDNl1g3e0uQ',
    hoverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAU1FWWC9QbaXsqS38Cr4rgyXjCBQmnaM6vsHqD3E54lmw9kXozCv-L4r4QvmimI4HI6lIu8kKkko099k683-SsGPKNcIoEnzDsi-VooOWrPZ2aOI2pIDMKkPJyYnW0HhJ-VsrWPq_AvYxj_67k9BZ8qioZxd4OB3zN4-55hjAV3wMqVIAT_h1XclpzqMbel7Oh9_5u8EqcpGDydOgZyrTyHF-zt5UO2HVXv8owcIWYpyNEilyO3-qFhg',
    description: 'Pure cotton with hand-embroidered floral motifs.',
    sizes: ['S', 'M', 'L'],
    colors: ['Rose Pink'],
    isBestSeller: true
  },
  {
    id: 'sp-2',
    name: 'Midnight Silk Co-ord',
    category: 'Co-ord Sets',
    price: 6800,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB9ArTX6K4YHZz4DKcpBb7sFTyZ21z6wEMx761_YogiF80Kzl8NsLJ2KkWtF-HDJjgIyr78wIN5wd-FfBuHEVwpis-nOxa_0LewDEV6_n1c4kZW8colWcaS-p0sdlbgWKhlhb8ZBUEwncoob4xTULcRs66rEdPtNoABQkLDozBY1JvMl9Rw-HvIVwCJmKmsYyffRNgi9Dpkhc3wPn3W_mokycrk_Y7KnDYlUrYrPH75UwSNG02pD3IwTw',
    hoverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBauAgi5GOrUja65wUxSwdKwthl4kkc9EWKHk-7To622vyXcpPnB636lr-sdclbsYNS3d7ZZh9ZLc-ovLno4LRFD2Klz3CrCoWp-E52ojUSNEbQh6KvNABJ7xCZRlhnADeeivNqEju1s09qr6wr-GCvwRaRjLNSGQUde9FiyYa-Jq7NM8G7eAmBrW6dfgJb2QxfM8i2bs3VY4rrOAxB16cNsbTbLm0d-uJfwwKf01CHpaSeZ0bUNkV7mw',
    description: 'Contemporary silhouette in luxurious hand-loom silk.',
    sizes: ['M', 'L', 'XL'],
    colors: ['Midnight Navy'],
    isNew: true
  },
  {
    id: 'sp-3',
    name: 'The Ajmer Wrap',
    category: 'Dresses',
    price: 3950,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCnKIHjIt6Cu5nctd3a8Ghk-kq9gWujNWDTuNwMMjz2T7NA31kJRfLVKVF3hEFLjOINSsO_tf6ySiqWy0DrEPtrofqnC10gN7sN7lDkQZJqrmX5Mhb9bbERIcNsx8YPdCLJgCwIxOtGyf86g8dFSdkzRE01Azd95nb180AjSVa-sRQaRAGUdHaZpZk6kshc9HxIRU7bfpS995ow9G4ZptBktqcfExLpH8IBzLYhtmYheK-QZLPOvB8NYQ',
    hoverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBsMZa1V_5runTUVVddhetRzMptcWBcC6oJNgQkBPqHJegUYYqNomGKaNdsySHq54SIPnWytqDC5-f7OG-sPSytypXmHZXD42BXUPfajJyrZ87HReM4cU2pe6-Yragb7K085Gs15CoCIsbu9u0fNFf6fgRLWWcQR91R54HinKY3UNHwisPUSv9mPKm4p0B4A6fZZvfe31Rsk8t0YaN16P6g6z0NO7PFyJuSudKcktZQFr9Y8At6xyQTQQ',
    description: 'Breathable linen with signature block-printed accents.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Sage Green'],
    isBestSeller: true
  },
  {
    id: 'sp-4',
    name: 'Saffron Sky Tunic',
    category: 'Office Wear',
    price: 2400,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD9eA2cA0Yd8OaCRr8vBf6ikFLKJ-Ll04D1rHgEp3mXkLG6oEoe8tjWEOfph9c-kJKMlUf0VzOtOuZKi2gpGOvUW-X-25RoRI6_o2jDyCNV-IJM5dYgiaWffsR8vmnenmI6WHbgEPN_fqx2KK_2LYf9SyyEpwy6Dk_vuM6fFftl6CzwzWTZqihckfRz_gg9KxtVhcdrJIkqLyoTryN-kN19nAcuLKqBOLP5TR4UuH82kD56v9TtSZAlYQ',
    hoverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCfzDlcaaIYsB-FASqUnXk8j0OfSsDKVhWoeLhNGD3y538LsDUzeCTjPODf6aAmZlvuyDbJXu9jx9ADCZYE8jSzuWk3ZUpVXRM8l1SNcitH52DjchNRDqOZcUbD0RKWtk-bHU5R2b1YZDPssBvWLn8LMVzQ8JHFOyEFyqZ1_VDbw_QnSVe24cIQW8VOzEM_WDCGf-ZfFQNqrwdmN-5n7wbK8G_kuUHPyqlqI1kc2Ou6nrdIqExfoRxrjw',
    description: 'Easy-breeze cotton for a vibrant workday look.',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['Saffron Orange'],
    isNew: false
  },
  {
    id: 'sp-5',
    name: 'The Empress Silk Kurta Set',
    category: 'Kurta Sets',
    price: 8990,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAZVKRTjgwh0Utqp39eQ13uuIIaYP7gFzvgFM6tfTlFv-PfVg-Oefzf-SEVewGuHtezBW7ycsbPwAR7wR6XqKoZ1l7yvEF-sDkXGEi40EI5ZWxYNM4hM7mFUEvDWOpgzMwi5w0BGKjwXQ8g-EvkGcVIOD5pZDK728R8L_F44l00hgqPsAjUu9SDU7XqsgsDzVE_tH3yhSfYFW6WSM7A_wGSKVKXLkAbBIIgECuuivdkKt0pMnoY3xM6Ew',
    hoverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAdLZiRnL2M_T5VBhgZuLwvrhIDmGW3SRk0EK9UUUERPm2kGMP3c6O-YD1k7_O2K46ifZdWkXO8qBV1V88Al4b10MkdtCOKnwi4qHAab08klIHXAAC1caPlY_ANEksdV7LKf8NUbTNCMQqSTmcRYibWK6EnufVSbXxGod3lkYY5EMUL8w_cTIzCcA7cZWA0waW6UhjSd3ZFoqM9C5wJrLcK1yWawEOcuUX3ExhDObIw7EswjYFVB-HV7A',
    description: 'Exquisite mulberry silk set with signature block prints.',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Deep Magenta', 'Sand Beige', 'Light Pink'],
    isBestSeller: true,
    isNew: true
  },
  {
    id: 'sp-6',
    name: 'Slate Linen Set',
    category: 'Office Wear',
    price: 5200,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD2sJmmMCbj_sZFQj_aoRW0abeXRFWnw6cK4GIpOp-tTQx3glCcQ4n_bmmliDojwcD0keSV5gEQpSDFwMk_UwwCIRSo_CJZ_I3x65FoQ3TpFQtl-xobSF6-Ct_4t1TXf2Iwhfx-A3WPMzrnD4gt36Mr6ea_i2bTuM0Z29cj-HCrITzs50dJw18Ron6RDVgD9ZfVArWflWvBWgxqat2hqKQ9CQmDYrCxg_KeLLrsIMiu3BTh1pYmY7rTPw',
    hoverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCvLl7T4n9_tavrFN-0BTHvQKBmICk3HhBrJkF6j7MVOe-l0vhTd2GivoIA5YZunrSnW6iphHbYmOJh2oFkVnt35vNudXKPqz_VHOZhMvUn0Ftwf5VA8FeSxb-dzgK1EJaNioSJ1utb-nNhPSghvMBS0RWk345zFfwyfUTQSAfhZNfE6g1hAl9n5HEn3BdvxtSi7wq5ZXEnSGgmRIJgCOfnjXF6T9FMs6PYaPA6n6CgHfbDBe4G9vH3xw',
    description: 'Charcoal grey structured linen co-ord set.',
    sizes: ['S', 'M', 'L'],
    colors: ['Slate Grey']
  },
  {
    id: 'sp-7',
    name: 'Marigold Silk Scarf',
    category: 'Accessories',
    price: 1200,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBTZrRzuttgvYtMgh1-zYCYCX_YVksZrlnlOkJLhaWHqYgxa-oDbfU9uOm66h1QmBI4ZnMM2LLgIFiaS7Pp8PIaE8dtkeWSbH2qxJBPFcYROlEGoyznrLuZ4X1XQDNdG2iMlSQlBxC991nKtBgS2RpiElg9x318W0JygESBklrQMLQhaqaXFOLU5rVk8Roa8jlBi0gBiMr0ZrDEXqMrE9jAhV8ieftU1lr4Wn_LaF9gZed0x83JG6QJNA',
    description: 'Detailed high-end cream and pink floral printed silk scarf.',
    sizes: ['One Size'],
    colors: ['Marigold Yellow']
  },
  {
    id: 'sp-8',
    name: 'Classic Pearl Shirt',
    category: 'Essentials',
    price: 2800,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD1ZONYhg4j2FJ7e6bTJixyvVRsVjZsmO-SFCfu2dbKNwXflNhcn0H-m6enTVIfzmSQnYgVNxdWF50fPof02BCdig-0VwSn658yGenf0dU-7CcxxhHTvwMsg5ny2odQLBRu1Deplz1h-JqjYcnco-QyJHVnCIgMf4vgJALFfUlrGgcUAiIp03SiH5jPsh74_XZw9BLY_uoJfs1To75zojS5BQR3dkan8bWrvzcyLq1pI5zbw90WeZjEUA',
    description: 'Minimalist white cotton oversized shirt with delicate pearl buttons.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Ivory White']
  },
  {
    id: 'sp-9',
    name: 'Khadi Straight Pants',
    category: 'Bottoms',
    price: 1950,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDrJWFjUx07X_NGm05jyqq4mUHUIgj8UFapL6_YvqCEAjOkvIHCiHiZnb08GBJoKXVdlO0skUbR75gnWVzFg1BQOoCcHedJc0ISiGxGMfYcy0-1QI7cuy2ov-9ywJAlz_Wxjj6_8pXmN0mtRy7h3w63FNF3bEfladfrkuyd_YDQiXl3jupJdnyEQdGUAKqYoMu2_85i5-iRiDzzONw4D79-TWKwreV6rnP5QGlvzEi0tvUiFJ8scyh15w',
    description: 'Terracotta orange straight fit pants made from heavy khadi cotton.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Terracotta']
  }
];

// Collections filter tabs
const categories = [
  'All Collections',
  'Kurta Sets',
  'Co-ord Sets',
  'Office Wear',
  'Bottoms',
  'Accessories'
];

export default function ShopAllPage() {
  const [selectedCategory, setSelectedCategory] = useState('All Collections');
  const [sortOption, setSortOption] = useState('Newest First');
  const [searchQuery, setSearchQuery] = useState('');
  const [favorites, setFavorites] = useState<string[]>([]);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  
  const [sizeFilter, setSizeFilter] = useState<string | null>(null);
  const [colorFilter, setColorFilter] = useState<string | null>(null);
  const [priceFilter, setPriceFilter] = useState<string | null>(null);

  // Toggle favorite status
  const toggleFavorite = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setFavorites(prev =>
      prev.includes(id) ? prev.filter(fId => fId !== id) : [...prev, id]
    );
  };

  const handleDropdownToggle = (dropdown: string) => {
    setActiveDropdown(prev => (prev === dropdown ? null : dropdown));
  };

  // Filter and sort logic
  const filteredProducts = shopProducts
    .filter(product => {
      // 1. Category Filter
      if (selectedCategory !== 'All Collections' && product.category !== selectedCategory) {
        return false;
      }
      // 2. Search Query Filter
      if (searchQuery && !product.name.toLowerCase().includes(searchQuery.toLowerCase())) {
        return false;
      }
      // 3. Size Filter
      if (sizeFilter && !product.sizes.includes(sizeFilter)) {
        return false;
      }
      // 4. Color Filter
      if (colorFilter && !product.colors.includes(colorFilter)) {
        return false;
      }
      // 5. Price Filter
      if (priceFilter) {
        if (priceFilter === 'Under ₹3000' && product.price >= 3000) return false;
        if (priceFilter === '₹3000 - ₹6000' && (product.price < 3000 || product.price > 6000)) return false;
        if (priceFilter === 'Over ₹6000' && product.price <= 6000) return false;
      }
      return true;
    })
    .sort((a, b) => {
      if (sortOption === 'Price: Low to High') return a.price - b.price;
      if (sortOption === 'Price: High to Low') return b.price - a.price;
      if (sortOption === 'Best Sellers') return (b.isBestSeller ? 1 : 0) - (a.isBestSeller ? 1 : 0);
      // 'Newest First' (default)
      return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
    });

  return (
    <div className="flex flex-col min-h-screen bg-brand-ivory text-brand-charcoal">
      {/* 1. Announcement Bar */}
      <AnnouncementBar />

      {/* 2. Navigation Header */}
      <Header />

      <main className="flex-grow pt-24">
        
        {/* Editorial Hero Banner */}
        <section className="relative h-[480px] md:h-[540px] flex items-center overflow-hidden border-b border-brand-charcoal/5 bg-brand-beige/25">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDw33LxiNmnuWs-8WOIwC8fVNm134ahBohSD4WAHLRwLRblOZxpGNTVSFNsnDoPyrXvsUc7VJmstPsah1rDPIQI7gOzzDZizae0E0EYq7RiWW8cGhQzKZQ2XhUTTr0BmXai5jCf4yZCaWbPbLO1TWIpS0u2pmGbxhnAl_PYXec1Dup5r4U9iWitWWN7nghPXCb030Cx-gpxtyC4eYOvboPhG0ZkNCn80UhJC_mNlJ0k_aDD9MCmXulzoA"
              alt="High-end Rajasthani editorial background banner"
              fill
              unoptimized
              className="object-cover object-center opacity-85"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-ivory/60 via-brand-ivory/30 to-transparent" />
          </div>
          
          <Container className="relative z-10">
            <div className="max-w-xl">
              <nav className="flex items-center gap-2 mb-6 font-accent text-[10px] md:text-xs uppercase tracking-widest text-brand-muted">
                <Link href="/" className="hover:text-brand-burgundy transition-colors">Home</Link>
                <ChevronRight className="w-3.5 h-3.5 text-brand-charcoal/20" />
                <span className="text-brand-burgundy font-bold">Shop</span>
              </nav>
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-brand-burgundy mb-4 italic leading-tight">
                Shop All
              </h1>
              <p className="font-body text-base text-brand-muted leading-relaxed">
                Discover a curated collection where traditional Rajasthani craftsmanship meets contemporary silhouettes. Designed for the modern woman who values everyday elegance and soulful luxury.
              </p>
            </div>
          </Container>
        </section>

        {/* Category Filter Chips */}
        <section className="bg-brand-ivory py-6 border-b border-brand-charcoal/5">
          <Container className="flex items-center gap-3 overflow-x-auto no-scrollbar scroll-smooth">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-2.5 rounded-full border text-xs font-accent font-bold uppercase tracking-wider whitespace-nowrap transition-all duration-300 cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-brand-burgundy border-brand-burgundy text-brand-ivory shadow-sm'
                    : 'border-brand-charcoal/10 text-brand-muted hover:border-brand-burgundy hover:text-brand-burgundy'
                }`}
              >
                {cat}
              </button>
            ))}
          </Container>
        </section>

        {/* Sticky Filter & Sort Bar */}
        <div className="sticky top-[80px] z-30 bg-brand-ivory/95 backdrop-blur-md border-b border-brand-charcoal/5">
          <Container className="py-4 flex flex-wrap justify-between items-center gap-4">
            
            {/* Filter Dropdowns */}
            <div className="flex items-center gap-8 relative z-20">
              
              {/* Size Dropdown */}
              <div className="relative">
                <button
                  onClick={() => handleDropdownToggle('size')}
                  className="flex items-center gap-1 font-accent text-xs font-bold uppercase tracking-widest text-brand-muted hover:text-brand-burgundy transition-colors cursor-pointer"
                >
                  Size {sizeFilter ? `: ${sizeFilter}` : ''} <ChevronDown className="w-3.5 h-3.5" />
                </button>
                {activeDropdown === 'size' && (
                  <div className="absolute top-full left-0 mt-3 w-40 bg-brand-ivory border border-brand-charcoal/10 shadow-premium rounded-sm p-2 flex flex-col gap-1">
                    {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map(sz => (
                      <button
                        key={sz}
                        onClick={() => {
                          setSizeFilter(sizeFilter === sz ? null : sz);
                          setActiveDropdown(null);
                        }}
                        className={`text-left px-3 py-2 text-xs font-accent tracking-wider rounded-xs hover:bg-brand-beige/50 ${
                          sizeFilter === sz ? 'text-brand-burgundy font-bold' : 'text-brand-muted'
                        }`}
                      >
                        {sz}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Color Dropdown */}
              <div className="relative">
                <button
                  onClick={() => handleDropdownToggle('color')}
                  className="flex items-center gap-1 font-accent text-xs font-bold uppercase tracking-widest text-brand-muted hover:text-brand-burgundy transition-colors cursor-pointer"
                >
                  Color {colorFilter ? `: ${colorFilter}` : ''} <ChevronDown className="w-3.5 h-3.5" />
                </button>
                {activeDropdown === 'color' && (
                  <div className="absolute top-full left-0 mt-3 w-48 bg-brand-ivory border border-brand-charcoal/10 shadow-premium rounded-sm p-2 flex flex-col gap-1">
                    {['Deep Magenta', 'Midnight Navy', 'Sage Green', 'Saffron Orange', 'Slate Grey', 'Ivory White'].map(col => (
                      <button
                        key={col}
                        onClick={() => {
                          setColorFilter(colorFilter === col ? null : col);
                          setActiveDropdown(null);
                        }}
                        className={`text-left px-3 py-2 text-xs font-accent tracking-wider rounded-xs hover:bg-brand-beige/50 ${
                          colorFilter === col ? 'text-brand-burgundy font-bold' : 'text-brand-muted'
                        }`}
                      >
                        {col}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Price Dropdown */}
              <div className="relative">
                <button
                  onClick={() => handleDropdownToggle('price')}
                  className="flex items-center gap-1 font-accent text-xs font-bold uppercase tracking-widest text-brand-muted hover:text-brand-burgundy transition-colors cursor-pointer"
                >
                  Price {priceFilter ? `: ${priceFilter}` : ''} <ChevronDown className="w-3.5 h-3.5" />
                </button>
                {activeDropdown === 'price' && (
                  <div className="absolute top-full left-0 mt-3 w-48 bg-brand-ivory border border-brand-charcoal/10 shadow-premium rounded-sm p-2 flex flex-col gap-1">
                    {['Under ₹3000', '₹3000 - ₹6000', 'Over ₹6000'].map(prc => (
                      <button
                        key={prc}
                        onClick={() => {
                          setPriceFilter(priceFilter === prc ? null : prc);
                          setActiveDropdown(null);
                        }}
                        className={`text-left px-3 py-2 text-xs font-accent tracking-wider rounded-xs hover:bg-brand-beige/50 ${
                          priceFilter === prc ? 'text-brand-burgundy font-bold' : 'text-brand-muted'
                        }`}
                      >
                        {prc}
                      </button>
                    ))}
                  </div>
                )}
              </div>

            </div>

            {/* Search Input & Sorting Selector */}
            <div className="flex items-center gap-6">
              <div className="relative hidden sm:block">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search product..."
                  className="bg-transparent border-b border-brand-charcoal/20 focus:border-brand-burgundy outline-none py-1 pl-1 pr-8 text-sm transition-all w-48 focus:w-64 font-body"
                />
                <Search className="w-4 h-4 absolute right-0 top-2 text-brand-muted" />
              </div>

              <div className="flex items-center gap-2 font-accent text-xs text-brand-muted">
                <span>Sort by:</span>
                <select
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                  className="bg-transparent border-none focus:ring-0 font-bold text-brand-burgundy cursor-pointer outline-none font-accent uppercase tracking-wider"
                >
                  <option value="Newest First">Newest First</option>
                  <option value="Price: Low to High">Price: Low to High</option>
                  <option value="Price: High to Low">Price: High to Low</option>
                  <option value="Best Sellers">Best Sellers</option>
                </select>
              </div>
            </div>

          </Container>
        </div>

        {/* Product Grid Section */}
        <section className="py-16">
          <Container>
            
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20 bg-brand-beige/10 rounded-sm border border-brand-charcoal/5">
                <p className="font-display text-xl text-brand-muted mb-4 italic">No designs found matching your selection.</p>
                <button
                  onClick={() => {
                    setSizeFilter(null);
                    setColorFilter(null);
                    setPriceFilter(null);
                    setSearchQuery('');
                    setSelectedCategory('All Collections');
                  }}
                  className="text-brand-burgundy font-accent text-xs font-bold uppercase tracking-widest underline underline-offset-4"
                >
                  Clear All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                {filteredProducts.map((product, index) => {
                  const isFav = favorites.includes(product.id);
                  const detailRoute = product.id === 'sp-5' 
                    ? '/product/empress-silk-kurta-set' 
                    : `/product/empress-silk-kurta-set`;

                  return (
                    <FadeUp
                      key={product.id}
                      delay={(index % 3) * 0.08}
                      className="group flex flex-col w-full relative"
                    >
                      <Link href={detailRoute} className="relative aspect-[3/4] w-full overflow-hidden bg-brand-beige rounded-sm mb-5 shadow-sm">
                        
                        {/* Base Product Image */}
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          unoptimized
                          className={`object-cover transition-transform duration-700 ease-out group-hover:scale-103 ${
                            product.hoverImage ? 'transition-opacity duration-500 group-hover:opacity-0' : ''
                          }`}
                        />

                        {/* Hover Action Product Image */}
                        {product.hoverImage && (
                          <Image
                            src={product.hoverImage}
                            alt={`${product.name} alternate view`}
                            fill
                            unoptimized
                            className="object-cover absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-103"
                          />
                        )}

                        {/* Favorite Button Toggle */}
                        <button
                          onClick={(e) => toggleFavorite(product.id, e)}
                          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-brand-ivory/80 backdrop-blur-xs flex items-center justify-center text-brand-charcoal hover:bg-brand-ivory transition-all shadow-sm outline-none cursor-pointer group-hover:opacity-100 opacity-0 md:opacity-0 group-hover:translate-y-0 translate-y-2 duration-300"
                        >
                          <Heart
                            className={`w-[18px] h-[18px] transition-colors ${
                              isFav ? 'fill-brand-burgundy text-brand-burgundy' : 'text-brand-charcoal'
                            }`}
                          />
                        </button>

                        {/* Small badges */}
                        {(product.isNew || product.isBestSeller) && (
                          <div className="absolute top-4 left-4 z-10 flex flex-col gap-1">
                            {product.isNew && (
                              <span className="bg-brand-burgundy text-brand-ivory font-accent text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-sm shadow-sm">
                                New
                              </span>
                            )}
                            {product.isBestSeller && (
                              <span className="bg-brand-rust text-brand-ivory font-accent text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-sm shadow-sm">
                                Best Seller
                              </span>
                            )}
                          </div>
                        )}
                      </Link>

                      {/* Product Information */}
                      <Link href={detailRoute} className="flex justify-between items-start cursor-pointer w-full">
                        <div className="flex flex-col">
                          <span className="font-accent text-[10px] text-brand-burgundy uppercase tracking-widest font-semibold mb-1">
                            {product.category}
                          </span>
                          <h3 className="font-body text-base font-medium text-brand-charcoal group-hover:text-brand-burgundy transition-colors duration-300">
                            {product.name}
                          </h3>
                          <p className="font-body text-xs text-brand-muted mt-1 italic line-clamp-1">
                            {product.description}
                          </p>
                        </div>
                        <span className="font-accent text-sm font-semibold text-brand-charcoal ml-4">
                          ₹{product.price.toLocaleString('en-IN')}
                        </span>
                      </Link>
                    </FadeUp>
                  );
                })}
              </div>
            )}

            {/* Editorial Collection Highlight Section */}
            <FadeUp delay={0.2} className="my-24 relative overflow-hidden rounded-md h-[400px] shadow-premium">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjOmNT2NnN1MLl-U5i5OsHnbqL4BJENUSXxYvpO7D4tS6oCedc9TS1L9KYlQkSetXcYR0ggJd10q2DHh_PXjkSSxOpjM6WOf1qioyxD4R3_Jel_Lna8-xo_gMEeDNGiRUS0aEO_Uwcf1lHPpa9zm1OhlP5PYRiGZ6ZiO9OSHaX4vqWDaPhE9tm00lF6_lTTXO2HOg63sbecP5GIFn6kE868TScEXfeTDn6a9Grxs6DeZPG3F_AFKHn_g"
                alt="Models walking in Thar desert at sunset sunset rose tones"
                fill
                unoptimized
                className="object-cover"
              />
              <div className="absolute inset-0 bg-brand-charcoal/40 flex flex-col items-center justify-center text-center px-6 text-brand-ivory">
                <span className="font-accent text-xs font-bold uppercase tracking-[0.3em] mb-4 text-brand-beige">
                  Seasonal Story
                </span>
                <h2 className="font-display text-4xl sm:text-5xl font-bold mb-6 italic">
                  The Desert Bloom
                </h2>
                <p className="font-body text-base max-w-2xl mb-8 opacity-90 leading-relaxed">
                  Embrace the spirit of the dunes with lightweight silks and artisanal prints inspired by the resilient flora of Rajasthan.
                </p>
                <Link
                  href="/#featured"
                  className="bg-brand-ivory text-brand-burgundy px-10 py-4.5 rounded-full font-accent text-xs font-bold tracking-widest uppercase hover:bg-brand-burgundy hover:text-brand-ivory transition-colors duration-300 shadow-md"
                >
                  Explore The Edit
                </Link>
              </div>
            </FadeUp>

            {/* Load More Button */}
            {filteredProducts.length > 0 && (
              <div className="mt-12 flex justify-center">
                <button className="group flex items-center gap-3 text-brand-burgundy hover:text-brand-rust font-accent text-xs font-bold uppercase tracking-widest transition-colors cursor-pointer bg-transparent border-none">
                  <span>Load More Designs</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            )}

          </Container>
        </section>

        {/* Value Promises */}
        <section className="bg-brand-beige/35 border-y border-brand-charcoal/5 py-20 mb-16">
          <Container>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-brand-burgundy text-center mb-16">
              The Sattva Promise
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              
              <div className="text-center px-4 space-y-4">
                <div className="w-16 h-16 bg-brand-burgundy/5 rounded-full flex items-center justify-center mx-auto text-brand-burgundy">
                  <Globe className="w-7 h-7" />
                </div>
                <h4 className="font-display text-lg font-bold text-brand-charcoal">
                  Conscious Craft
                </h4>
                <p className="font-body text-sm text-brand-muted leading-relaxed">
                  Small batch production using eco-friendly dyes and ethically sourced fabrics.
                </p>
              </div>

              <div className="text-center px-4 space-y-4">
                <div className="w-16 h-16 bg-brand-burgundy/5 rounded-full flex items-center justify-center mx-auto text-brand-burgundy">
                  <Award className="w-7 h-7" />
                </div>
                <h4 className="font-display text-lg font-bold text-brand-charcoal">
                  Timeless Quality
                </h4>
                <p className="font-body text-sm text-brand-muted leading-relaxed">
                  Designs that transcend seasons, crafted to last and be loved for years.
                </p>
              </div>

              <div className="text-center px-4 space-y-4">
                <div className="w-16 h-16 bg-brand-burgundy/5 rounded-full flex items-center justify-center mx-auto text-brand-burgundy">
                  <Truck className="w-7 h-7" />
                </div>
                <h4 className="font-display text-lg font-bold text-brand-charcoal">
                  Global Delivery
                </h4>
                <p className="font-body text-sm text-brand-muted leading-relaxed">
                  Experience Rajasthani luxury anywhere in the world with reliable shipping.
                </p>
              </div>

            </div>
          </Container>
        </section>

        {/* Instagram Spotted In Sattva Section */}
        <section className="py-16">
          <Container>
            <div className="flex justify-between items-end mb-10 gap-4">
              <div>
                <span className="text-brand-burgundy font-accent text-xs font-bold uppercase tracking-widest block mb-2">
                  Social Feed
                </span>
                <h2 className="font-display text-3xl font-bold text-brand-charcoal italic">
                  #SattvaInVogue
                </h2>
              </div>
              <Link href="/journal" className="text-brand-muted hover:text-brand-burgundy underline underline-offset-4 font-accent text-xs font-bold uppercase tracking-wider">
                Follow us @sattvavogue
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
              {[
                'https://lh3.googleusercontent.com/aida-public/AB6AXuCCTcyAmNZA678I6b1gA3VNe1yrxirKvZB-F5y8DWhUS2MmsL4H4cGJXmrw5AzC0D8uuIhnEknKWTJz0tA3SARLWLAaYOunEcCECBR6nG1c3nOywTVol0u5eLomhypjLfRQ62LMZ4pkYZxO9rkP82_-7-t_9pntUOIsUuN4Lh5Y4aKxztmHgSEvkYxaLP6AWIuYAV3oCcMs8uKUN9DRM_dMf5o-vKa2GnEyV64oQILtkPOOpC1M-CkehQ',
                'https://lh3.googleusercontent.com/aida-public/AB6AXuA96x1F6R5pb7XqgPsCHCi6fOT4SkfEkrUGetBVr0UXslJ0Q9Ctr2MyX-8EJ0G-RB8C6HaKSEkAeydFtPbeNn-q8sA3i21K6Zm3QWXCegGmOkxeqFnqNCNexs8KicO8Aa2TbJRx8RmWUd36YykoTw86GPfuQAiCA8QZGERbbm9zj0Vc04Z4QO9IZFNuXsdb1MyxXsJrA92RnQHyprKh2Ogqj5lCcMU3tU6NIC1YycH8sb180cmbgw9jTw',
                'https://lh3.googleusercontent.com/aida-public/AB6AXuCggR7HDD8tIuVuDg5sXT7PFaAk87TJcGy8qum6L-qHug87Gz8WTIL2-mNLHqNo0wEeq3rd2lE6dd0dgy2wMW8ozsja4WW4ZjwozBgnrTouYIHmAm1jZeXhnvW3bxwyKuDN14rITiQM-cPAlRD1T-dPbPg-nmqfVxyiAzH-secRI-l6kzx2C7So53g6KmwjzoQkF4kBt6uDZbY88wmLGS5pbfjsRCD8ne1bFiC1BjDicesqfjwa9Yr8Lg',
                'https://lh3.googleusercontent.com/aida-public/AB6AXuAqOCd3moNSoNF-TCG8L-6Hjq_9tpFvGFKLpTcNYMvARemSyo3Lzq_ObskO8RT9IOfWyt83xLA-9fcxnklnRU4mJOlJxzBpP8CSnisxaxh0ruqixO5T2mEO1_UgekfZ7Vv10hcAPrm0yDG3DIY3aUQB_Ot0SnK-W4_ptMbLwv8CIKw_Paw7o49fiD6OQWc216fF3XwyDpDM04j7KJ75_uRdSFG710qTJUa1OeRrpWeLOT1y5byIXFjZwg',
                'https://lh3.googleusercontent.com/aida-public/AB6AXuB--vc77xe-uTAorb4254sAM4YqYm55XyGe0IrORDi11MVD63As8OZ8Ft3_HqSGZhGFiPmHPF-SILpWzUlexi94ip6ZnMge8gQjyWhG7S1XiwHcKAjjIo5tYZYhwuxWA3nCdOihVZSL6tO0MwcFT9Ox93RoRhVIxek5An9tpuDhzSxRP7n8MKg2iKvUeGXNKDoFACuZ_SJs7WAnUH5GErcqeSO_bIpMzUvEj6DCTw2-1S-gGtFftkMU2g',
                'https://lh3.googleusercontent.com/aida-public/AB6AXuBx-7r_WqYkp-deFjXQo7gVNDJAAzgWpKLWAQRS9FydhozAdg7CYcjTsP3-VuOlannXRrQJ7dKWQbeFVi8tJ375UWPtOtfdRz23w6j0EE5gSbjVA0_AzQJdjIvAZDQREF2meqMyYQ9wkGNH5fsdYbB8XRks20ZEdNxvuyCRwDVngmGSCIfVQqA5yLSPff0VVED2K-8iOCuWFBbwLwNHiDZipBTL_wGgMn5pRc3Rb8YPAMoKup5QAjUNYg'
              ].map((imgUrl, i) => (
                <div key={i} className="aspect-square relative overflow-hidden rounded-sm group bg-brand-beige">
                  <Image
                    src={imgUrl}
                    alt={`Sattva Vogue Spotted look detail ${i + 1}`}
                    fill
                    unoptimized
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
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
