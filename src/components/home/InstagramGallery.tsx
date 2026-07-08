'use client';

import React from 'react';
import Image from 'next/image';
import { Play } from 'lucide-react';
import { instagramData, instagramTitle, instagramHashtag } from '@/data/instagram';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import FadeUp from '../animations/FadeUp';

export const InstagramGallery: React.FC = () => {
  return (
    <section id="instagram" className="py-20 bg-brand-beige/10">
      <Container className="mb-12">
        <SectionHeading
          title={instagramTitle}
          subtitle={`Share your look with ${instagramHashtag}`}
          align="center"
          className="mb-0!"
        />
      </Container>

      {/* Grid wrapper */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-2 max-w-[1600px] mx-auto px-2">
        {instagramData.map((post, index) => (
          <FadeUp
            key={post.id}
            delay={index * 0.08}
            className="relative aspect-square overflow-hidden group rounded-sm shadow-sm cursor-pointer"
          >
            {/* UGC Image */}
            <Image
              src={post.image}
              alt={post.alt}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />

            {/* Hover overlay icon state */}
            <div className="absolute inset-0 bg-brand-charcoal/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
              {post.isVideo ? (
                <div className="w-12 h-12 rounded-full border border-brand-ivory flex items-center justify-center text-brand-ivory hover:scale-110 transition-transform">
                  <Play className="w-5 h-5 fill-brand-ivory text-transparent translate-x-[2px]" />
                </div>
              ) : (
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
                  className="w-8 h-8 text-brand-ivory"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              )}
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  );
};

export default InstagramGallery;
