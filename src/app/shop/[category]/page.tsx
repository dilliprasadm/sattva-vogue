'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import {
  ChevronRight,
  Search,
  Heart,
  ChevronDown,
  ArrowRight,
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

// Catalog Product Interface
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
    colors: ['Saffron Orange']
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

export default function CategoryShopPage() {
  const params = useParams();
  const categorySlug = params?.category as string;

  const [sortOption, setSortOption] = useState('Newest First');
  const [searchQuery, setSearchQuery] = useState('');
  const [favorites, setFavorites] = useState<string[]>([]);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const [sizeFilter, setSizeFilter] = useState<string | null>(null);
  const [colorFilter, setColorFilter] = useState<string | null>(null);
  const [priceFilter, setPriceFilter] = useState<string | null>(null);

  // Map category slug to display names and filter keywords
  let categoryDisplayName = 'Collection';
  let categoryFilterKey = '';

  if (categorySlug === 'kurta-sets') {
    categoryDisplayName = 'Kurta Sets';
    categoryFilterKey = 'Kurta Sets';
  } else if (categorySlug === 'coord-sets') {
    categoryDisplayName = 'Co-ord Sets';
    categoryFilterKey = 'Co-ord Sets';
  } else if (categorySlug === 'office-wear') {
    categoryDisplayName = 'Office Wear';
    categoryFilterKey = 'Office Wear';
  } else if (categorySlug === 'daily-wear') {
    categoryDisplayName = 'Daily Wear';
    categoryFilterKey = 'Bottoms'; // filters Bottoms / cotton pants
  } else if (categorySlug === 'summer-collection') {
    categoryDisplayName = 'Summer Cotton Collection';
    categoryFilterKey = 'Essentials'; // filters essentials
  }

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
      // 1. Category Filter by slug
      if (categoryFilterKey) {
        if (categorySlug === 'daily-wear') {
          // daily wear maps to Bottoms or Dresses
          if (product.category !== 'Bottoms' && product.category !== 'Dresses') return false;
        } else if (categorySlug === 'summer-collection') {
          // summer collection maps to Essentials or Accessories or Rose Set
          if (product.category !== 'Essentials' && product.category !== 'Accessories' && product.id !== 'sp-1') return false;
        } else if (product.category !== categoryFilterKey) {
          return false;
        }
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
      return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
    });

  return (
    <div className="flex flex-col min-h-screen bg-brand-ivory text-brand-charcoal">
      {/* Announcement Bar */}
      <AnnouncementBar />

      {/* Navigation Header */}
      <Header />

      <main className="flex-grow pt-24">
        
        {/* Hero Section */}
        <section className="relative h-[380px] flex items-center overflow-hidden border-b border-brand-charcoal/5 bg-brand-beige/25">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDw33LxiNmnuWs-8WOIwC8fVNm134ahBohSD4WAHLRwLRblOZxpGNTVSFNsnDoPyrXvsUc7VJmstPsah1rDPIQI7gOzzDZizae0E0EYq7RiWW8cGhQzKZQ2XhUTTr0BmXai5jCf4yZCaWbPbLO1TWIpS0u2pmGbxhnAl_PYXec1Dup5r4U9iWitWWN7nghPXCb030Cx-gpxtyC4eYOvboPhG0ZkNCn80UhJC_mNlJ0k_aDD9MCmXulzoA"
              alt="Category background banner"
              fill
              unoptimized
              className="object-cover opacity-85"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-ivory/60 via-brand-ivory/30 to-transparent" />
          </div>
          
          <Container className="relative z-10">
            <div className="max-w-xl">
              <nav className="flex items-center gap-2 mb-4 font-accent text-[10px] md:text-xs uppercase tracking-widest text-brand-muted">
                <Link href="/" className="hover:text-brand-burgundy transition-colors">Home</Link>
                <ChevronRight className="w-3.5 h-3.5 text-brand-charcoal/20" />
                <Link href="/shop" className="hover:text-brand-burgundy transition-colors">Shop</Link>
                <ChevronRight className="w-3.5 h-3.5 text-brand-charcoal/20" />
                <span className="text-brand-burgundy font-bold">{categoryDisplayName}</span>
              </nav>
              <h1 className="font-display text-4xl sm:text-5xl font-bold text-brand-burgundy mb-2 italic">
                {categoryDisplayName}
              </h1>
              <p className="font-body text-sm text-brand-muted leading-relaxed">
                Handcrafted block prints and premium textiles designed for everyday comfort and subtle sophistication.
              </p>
            </div>
          </Container>
        </section>

        {/* Category Info Header Banner */}
        <section className="bg-brand-ivory py-4 border-b border-brand-charcoal/5">
          <Container className="flex items-center gap-3">
            <Link href="/shop" className="px-5 py-2.5 rounded-full border border-brand-charcoal/10 text-brand-muted hover:border-brand-burgundy hover:text-brand-burgundy text-xs font-accent font-bold uppercase tracking-wider">
              ← Back to Shop All
            </Link>
          </Container>
        </section>

        {/* Sticky Filters */}
        <div className="sticky top-[80px] z-30 bg-brand-ivory/95 backdrop-blur-md border-b border-brand-charcoal/5">
          <Container className="py-4 flex flex-wrap justify-between items-center gap-4">
            
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

        {/* Product Grid */}
        <section className="py-16">
          <Container>
            
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20 bg-brand-beige/10 rounded-sm border border-brand-charcoal/5">
                <p className="font-display text-xl text-brand-muted mb-4 italic">No designs found in this collection category.</p>
                <Link
                  href="/shop"
                  className="text-brand-burgundy font-accent text-xs font-bold uppercase tracking-widest underline underline-offset-4"
                >
                  Explore All Collections
                </Link>
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
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          unoptimized
                          className={`object-cover transition-transform duration-700 ease-out group-hover:scale-103 ${
                            product.hoverImage ? 'transition-opacity duration-500 group-hover:opacity-0' : ''
                          }`}
                        />
                        {product.hoverImage && (
                          <Image
                            src={product.hoverImage}
                            alt={product.name}
                            fill
                            unoptimized
                            className="object-cover absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-103"
                          />
                        )}
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
                      </Link>

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

          </Container>
        </section>

        {/* Sattva Promise Section */}
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
                <h4 className="font-display text-lg font-bold text-brand-charcoal">Conscious Craft</h4>
                <p className="font-body text-sm text-brand-muted">Small batch production using eco-friendly dyes and ethically sourced fabrics.</p>
              </div>
              <div className="text-center px-4 space-y-4">
                <div className="w-16 h-16 bg-brand-burgundy/5 rounded-full flex items-center justify-center mx-auto text-brand-burgundy">
                  <Award className="w-7 h-7" />
                </div>
                <h4 className="font-display text-lg font-bold text-brand-charcoal">Timeless Quality</h4>
                <p className="font-body text-sm text-brand-muted">Designs that transcend seasons, crafted to last and be loved for years.</p>
              </div>
              <div className="text-center px-4 space-y-4">
                <div className="w-16 h-16 bg-brand-burgundy/5 rounded-full flex items-center justify-center mx-auto text-brand-burgundy">
                  <Truck className="w-7 h-7" />
                </div>
                <h4 className="font-display text-lg font-bold text-brand-charcoal">Global Delivery</h4>
                <p className="font-body text-sm text-brand-muted">Experience Rajasthani luxury anywhere in the world with reliable shipping.</p>
              </div>
            </div>
          </Container>
        </section>

      </main>

      <Footer />
    </div>
  );
}
