'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Play,
  Heart,
  ShoppingBag,
  Sparkles,
  Check,
  Send,
  Plus
} from 'lucide-react';
import { AnnouncementBar } from '@/components/layout/AnnouncementBar';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import Container from '@/components/common/Container';
import FadeUp from '@/components/animations/FadeUp';
import Button from '@/components/common/Button';

// Gallery Posts Interface
interface GalleryPost {
  id: string;
  type: 'editorial' | 'reel' | 'ugc' | 'portrait' | 'flatlay';
  image: string;
  alt: string;
  title?: string;
  tag?: string;
  hasPlayIcon?: boolean;
  isVideo?: boolean;
  isLiked?: boolean;
  likesCount?: number;
  username?: string;
  userAvatar?: string;
  badge?: string;
}

// Masonry Gallery Data
const initialGalleryPosts: GalleryPost[] = [
  {
    id: 'post-1',
    type: 'editorial',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCJbMRM4RzNqxsWNQ4s7-LyoUUnMCNHSGOpeGt0Lz81FwoYpcU3i6-PwDYUm_xoDb2Ft78lsqczQXYDIbAktyWeobLAv9OFKPYxGWjfC_CYtDGAIYc4jfZ_p_kGIG_iuw0fB9KlzWcljyS6hV7G-enu1mMVMh6XyRsWVIxuyVg3U-Y6uN1-lhDIj0U2NCUEf6hptzzh2l2eQ2UaIdYsXFtud10C7Ug4teIBoS3GLqOszMTbDrTQ6p0_bg',
    alt: 'Magenta silk kurta set against Rajasthani sandstone walls',
    title: 'The Ajmer Edit',
    tag: 'Editorial'
  },
  {
    id: 'post-2',
    type: 'reel',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCNRgjrB4fw2V6rxI_aFVxQ_HVpnKGUV6tvhB9C9QM36xPO7Dc7mP0YTjXkoSE2O1FX3Ni1fopx5XVz47B9f38OepJzhKj-A7nLUEnmtuFSwYLiA-o11LbjoALCUnpmplJJBI02IkrCD-sJGioPzFkLSLFaWz_9KRJbVV1bbt_lmGnkuOx3Dzv0yKXcaZ-1c1L9RsVjb7XbH_5MFKK_I9v-IYjPfS3LgWeUqyz544wrWq9SYuFK68-IWQ',
    alt: 'Twirling woman in sunset orange lehenga blurred motion effect',
    tag: 'Behind the Seams',
    isVideo: true,
    hasPlayIcon: true
  },
  {
    id: 'post-3',
    type: 'ugc',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDHsHOWLgVYzf_rz9iBAXWktFoeip_u1b745s6h8Us-IlWlYJ8Ieh8gSuXvOLPewuUkzSgE16L-1-gwHjuImYIHX2ljiLCKRqPMqhvFFxpLLJ9zTU3eesdlcnpWMG8yeL5Zl2bX08JPvokeKyqblrRevH8s7DlQ5ujvuUV32DdnrPSqIrfdba_1kLoiRdafhXTjQUy2YPH_Dp54YF3LcwEUsPqGLQrgdQMrxJTNaN7IMcb2NdpGG-OX8A',
    alt: 'Candid lifestyle portrait of a woman in white cotton co-ord set having tea at cafe',
    username: '@ananya_travels',
    userAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB_WRrhF0_TyUAXJyNWT10cPXBW2mAJsZ3Pd0r0UeKmTrHvvkDcMVoSoliqlDpY_3DLjOAIcpe3VCq8gdpaCATsG6aiCOjLMalxmfe74Ezzq3cRD1ujCXwhUz7EUYDQYjnL2ChV_1B7jzFziANLLVbZVmgimkyl3Mu-S-gvvprb-OutH4nkBuLU6J0NS7iZm339WeFuOpn0tjXiEw9mMRYGE3yW68g64UGwaiVCF-U2aKPeynmdwg_1iQ',
    isLiked: false,
    likesCount: 142
  },
  {
    id: 'post-4',
    type: 'portrait',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCUNz3k9NtpUbXe1pxRO4kbTTAWNMv2UqfUI4oIIqWh--4nhzK_c87fllm5gpq8jPrZsgdB4MOxprLgI7i54mdKUKniU8ObjbTPMcOVb0ol0T6NnTVOmQ8N3l5wR0v5LnbgfHCKjnMXLcd3FTAnPgKk1jvsjfG5iaTP34NsUnrUA991xAzIo7K30qiyHHMPLfI1DnXxCRAh2lDY232smhmZuAN0ZgIuEDxv_XAmMhxnvs4f4V4Sb0rw9w',
    alt: 'Cream linen bandhgala jacket portrait against orange-magenta gradient background',
    badge: 'New Arrival'
  },
  {
    id: 'post-5',
    type: 'flatlay',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDASG3S_EP4AAImX4kuTJxI24-EYw7ADDgFWScPJxf6zpA0DDBYL1tDLBJLit9qLSoXk5S7zTtLT-KpVRtvH-8nShxjlZZwQC-YxE5vvoAeiKnHO16n-gei7yuZnpOdSxO0qLeyIdmiFwiqf_1vEE0P_cq8_v-F3OOypo4WAfFO2feQlvgWEXbgJU18Fygzv76xpkp8z4JsR4SsTJX93V9fQ0i9B5PgLHjXcYh52z8iUSTCEnXsJRTO8Q',
    alt: 'Minimalist flat lay of Sattva Vogue bags and silk scarves on textured ivory stone pedestal',
    tag: 'Shop the Look'
  },
  {
    id: 'post-6',
    type: 'reel',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAHLIEs4jtGDOGeLXyqQ2F8al8L2mmzeXgoSLXyXfcDGpkQWrgOYb70kBGt1dY3d2aU6tdfTn-0qQuVuJcVmNUcSj74fYEXN0Jb4_M-PLqtRRa0-dG7kWZBYdMLZGJSCep117Ap2R9PKcTWRENeyM0Xf4Fwo4KIiD_DmNDQbAfuDtRm-s6xW6AWbEINiGOcRurRrX4qfZo-rSuWgFVvT1YX_x0juTOYUQgMvWdBHJo0N39wsw55fgZbDg',
    alt: 'Jaipur streets at dusk with Hawa Mahal backdrop and figure in flowing cape',
    tag: 'Jaipur Dusk',
    isVideo: true,
    hasPlayIcon: true
  },
  {
    id: 'post-7',
    type: 'ugc',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBYZe1SlQ_cJrck_GgWT-NzIjAq5yoZ_lsur46Bn0HV6gAuu4LDWgPjh0jOT3CSn-zm4l8HXkZh2HgGnzEGcEOW-WsFsBKtYlnaDJMWm2fjojQqTexPyKEBlvrJ3KW3HvdtThMNz0BRI0grsAensbORSiGJjoCnANk3_shSFNgc2DNyr2k_trUl2KTVtZqCfphu1-2U6yhVD3K3XjesnUGj2qHXI5vrnrCUj1PAYNmS5BTEgv77VvfDeQ',
    alt: 'Mirror selfie of a woman wearing navy blue block print kurta set in ivory room',
    username: '@the_modern_rajput',
    userAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuABz_c4UAAakFz_LrzCAPfWb2xSWYUWfpo7khdux8UbFM-l0oehJvTs-Co4K0N_gcsOyfUfHBV6Ga8NTG3qAliqEuGpiGnvxVAGfwz7Gnoap_l7_7uuxCKzhi4w5QIl3sjcVGJTx7LT76-EDOydwxSy63_jBXkWlZ2ijXEcUODlNhDo30tlavanKDxNbc4EXI6vL_SufMjZLlasf-CNlVA_A_UzU5SltzfLzco2_IZ6eC7CLOrBU6EB0A',
    isLiked: true,
    likesCount: 89
  }
];

export default function JournalPage() {
  const [posts, setPosts] = useState<GalleryPost[]>(initialGalleryPosts);
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  // Toggle UGC post like button
  const toggleLike = (postId: string) => {
    setPosts(prev =>
      prev.map(post => {
        if (post.id === postId) {
          const isLiked = !post.isLiked;
          return {
            ...post,
            isLiked,
            likesCount: (post.likesCount || 0) + (isLiked ? 1 : -1)
          };
        }
        return post;
      })
    );
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-brand-ivory text-brand-charcoal">
      {/* 1. Announcement Bar */}
      <AnnouncementBar />

      {/* 2. Navigation Header */}
      <Header />

      <main className="flex-grow pt-24">
        
        {/* Editorial Journal Page Header */}
        <header className="max-w-[1280px] mx-auto px-6 md:px-12 py-16 text-center">
          <FadeUp delay={0.1}>
            <span className="font-accent text-xs font-bold uppercase tracking-[0.25em] text-brand-burgundy block mb-4">
              Community & Style
            </span>
          </FadeUp>
          
          <FadeUp delay={0.15}>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-brand-charcoal mb-6">
              Spotted in Sattva
            </h1>
          </FadeUp>

          <FadeUp delay={0.2}>
            <p className="font-body text-base md:text-lg text-brand-muted max-w-2xl mx-auto italic leading-relaxed mb-10">
              A tapestry of modern Rajasthan, woven by our community. Discover how our signature silhouettes are styled across the globe.
            </p>
          </FadeUp>

          <FadeUp delay={0.25} className="flex justify-center">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-2 px-8 py-4 bg-brand-burgundy text-brand-ivory rounded-full overflow-hidden shadow-md transition-all duration-500 hover:shadow-premium hover:-translate-y-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
              <span className="font-accent text-xs font-bold uppercase tracking-widest">
                Follow @sattvavogue
              </span>
              <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </a>
          </FadeUp>
        </header>

        {/* Instagram Masonry Grid Section */}
        <section className="max-w-[1280px] mx-auto px-6 md:px-12 pb-24">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            
            {posts.map((post, index) => {
              // Custom height classes for editorial lookbooks to create nice masonry stagger
              let heightClass = 'h-auto';
              if (post.type === 'reel') heightClass = 'aspect-[9/16]';
              if (post.type === 'flatlay' || post.type === 'ugc') heightClass = 'aspect-square';

              return (
                <FadeUp
                  key={post.id}
                  delay={index * 0.05}
                  className="break-inside-avoid relative bg-brand-beige/25 rounded-md overflow-hidden border border-brand-charcoal/5 shadow-sm hover:shadow-premium transition-all duration-500 hover:-translate-y-2 group cursor-pointer"
                >
                  <div className={`relative w-full overflow-hidden ${heightClass}`}>
                    
                    {/* Media Render */}
                    <Image
                      src={post.image}
                      alt={post.alt}
                      fill={post.type !== 'editorial' && post.type !== 'portrait'}
                      width={post.type === 'editorial' || post.type === 'portrait' ? 600 : undefined}
                      height={post.type === 'editorial' || post.type === 'portrait' ? 800 : undefined}
                      unoptimized
                      priority={index < 3}
                      className="object-cover w-full h-full transition-transform duration-1000 ease-out group-hover:scale-103"
                    />

                    {/* Overlay Details on Hover */}
                    {post.type === 'editorial' && (
                      <div className="absolute inset-0 bg-brand-burgundy/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6 z-10">
                        <div className="text-brand-ivory text-left">
                          <p className="font-accent text-xs font-bold uppercase tracking-wider mb-1">
                            {post.tag}: {post.title}
                          </p>
                          <p className="font-body text-xs opacity-85">
                            View Collection
                          </p>
                        </div>
                      </div>
                    )}

                    {/* New Arrival Badge */}
                    {post.type === 'portrait' && post.badge && (
                      <div className="absolute top-4 right-4 bg-brand-ivory/80 backdrop-blur-md px-3 py-1 rounded-full text-[9px] font-accent font-bold uppercase text-brand-burgundy tracking-widest shadow-sm z-10">
                        {post.badge}
                      </div>
                    )}

                    {/* Flatlay Overlay */}
                    {post.type === 'flatlay' && (
                      <div className="absolute inset-0 bg-brand-charcoal/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-brand-ivory gap-2 z-10">
                        <ShoppingBag className="w-6 h-6 animate-pulse" />
                        <span className="font-accent text-xs font-bold uppercase tracking-widest">
                          {post.tag}
                        </span>
                      </div>
                    )}

                    {/* Play Video Trigger Overlay */}
                    {post.hasPlayIcon && (
                      <div className="absolute inset-0 z-10 flex items-center justify-center">
                        <div className="w-14 h-14 rounded-full bg-brand-ivory/20 backdrop-blur-md flex items-center justify-center border border-brand-ivory/30 group-hover:scale-110 transition-transform duration-300">
                          <Play className="w-6 h-6 fill-brand-ivory text-transparent translate-x-[2px]" />
                        </div>
                      </div>
                    )}

                    {/* Reel Tag */}
                    {post.isVideo && (
                      <div className="absolute bottom-4 left-4 z-20 text-brand-ivory flex items-center gap-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="w-4 h-4"
                        >
                          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                        </svg>
                        <span className="text-[10px] font-accent font-bold uppercase tracking-wider">
                          {post.tag}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* UGC Header/Footer Info */}
                  {post.type === 'ugc' && (
                    <div className="flex items-center justify-between p-4 bg-brand-ivory border-t border-brand-charcoal/5">
                      <div className="flex items-center gap-2">
                        {post.userAvatar && (
                          <div className="w-8 h-8 rounded-full border border-brand-burgundy/10 overflow-hidden relative">
                            <Image
                              src={post.userAvatar}
                              alt={post.username || 'user avatar'}
                              fill
                              unoptimized
                              className="object-cover"
                            />
                          </div>
                        )}
                        <span className="text-xs font-semibold text-brand-burgundy font-accent">
                          {post.username}
                        </span>
                      </div>

                      {/* UGC Likes Interaction */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleLike(post.id);
                        }}
                        className="flex items-center gap-1 text-brand-burgundy hover:scale-105 active:scale-95 transition-transform outline-none cursor-pointer"
                      >
                        <Heart
                          className={`w-4 h-4 transition-colors ${
                            post.isLiked ? 'fill-brand-burgundy text-brand-burgundy' : 'text-brand-burgundy/40'
                          }`}
                        />
                        <span className="text-[10px] font-accent font-bold text-brand-muted">
                          {post.likesCount}
                        </span>
                      </button>
                    </div>
                  )}

                </FadeUp>
              );
            })}

          </div>
        </section>

        {/* Vogue Circle Newsletter Section */}
        <section className="bg-brand-beige/50 border-y border-brand-charcoal/5 py-20">
          <Container>
            <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <FadeUp delay={0.1}>
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-burgundy mb-4">
                    Join the Vogue Circle
                  </h2>
                </FadeUp>

                <FadeUp delay={0.2}>
                  <p className="font-body text-base text-brand-muted leading-relaxed mb-8 max-w-md">
                    Subscribe to receive early collection accesses (like The Ajmer Edit), sustainability logs, and details on exclusive community studio events.
                  </p>
                </FadeUp>

                <FadeUp delay={0.3}>
                  <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                    <div className="flex-grow border-b border-brand-charcoal/20 focus-within:border-brand-burgundy transition-colors py-2 flex items-center">
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Your Email Address"
                        className="bg-transparent border-none focus:ring-0 w-full py-1 text-sm outline-none placeholder:text-brand-muted/40 font-body"
                      />
                    </div>
                    
                    <Button
                      type="submit"
                      variant="primary"
                      className="px-8 py-3.5 tracking-wider uppercase font-accent text-xs rounded-sm shadow-sm"
                    >
                      {subscribed ? (
                        <span className="flex items-center gap-2">
                          <Check className="w-3.5 h-3.5" /> Subscribed
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <Send className="w-3.5 h-3.5" /> Join
                        </span>
                      )}
                    </Button>
                  </form>
                </FadeUp>
              </div>

              {/* Storytelling Image Block */}
              <FadeUp delay={0.4} className="relative aspect-video rounded-md overflow-hidden shadow-premium group">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDA-dDYp9yX_mq4cu0Nu1jTiU4L5gItmyu3kfM8oTkHl9T0B045EKDgwgaKGYZd2x4Y6haqKwPg8vhtLBWiugYnh6W2bkvCpxgBkZ2RLI9flH_hu6_h48YKOfUcM48DfSczap2PFGHccolVt4bX65wuMUs8zV3d_vHNdwkrMs9VLBH59FW6rOf353cSutR-F2QCLe6xn9Dzbz-BPw2vZSbxeyoGm4g4WwRlSmBBUZ8jtFEQagY__U1gtw"
                  alt="Ajmer stitching studio workshop showcase"
                  fill
                  unoptimized
                  className="object-cover group-hover:scale-103 transition-transform duration-1000 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/40 to-transparent" />
              </FadeUp>

            </div>
          </Container>
        </section>

      </main>

      {/* 3. Page Footer */}
      <Footer />
    </div>
  );
}
