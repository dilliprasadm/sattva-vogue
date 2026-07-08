'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Search, Heart, ShoppingBag, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { headerNavLinks } from '@/data/navigation';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`w-full z-40 transition-all duration-500 ${
          isScrolled
            ? 'fixed top-0 bg-brand-ivory/90 backdrop-blur-md shadow-card py-4'
            : 'absolute top-[41px] bg-transparent py-6'
        }`}
      >
        <div className="max-w-[1280px] mx-auto w-full px-6 flex justify-between items-center">
          {/* Brand Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 hover:opacity-85 transition-opacity"
          >
            <Image
              src="/logo.png"
              alt="Sattva Vogue Logo"
              width={40}
              height={40}
              unoptimized
              className="rounded-full"
            />
            <span className="font-display text-xl md:text-2xl italic font-semibold text-brand-burgundy tracking-wide">
              SATTVA VOGUE
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-10">
            {headerNavLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative font-accent text-xs font-bold uppercase tracking-widest text-brand-charcoal/70 hover:text-brand-burgundy transition-colors duration-300 pb-1 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-brand-burgundy transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Action Icons */}
          <div className="flex items-center gap-6 text-brand-charcoal">
            <button className="hover:text-brand-burgundy transition-colors duration-300 cursor-pointer outline-none">
              <Search className="w-5 h-5" />
            </button>
            <button className="hover:text-brand-burgundy transition-colors duration-300 cursor-pointer outline-none">
              <Heart className="w-5 h-5" />
            </button>
            <button className="relative hover:text-brand-burgundy transition-colors duration-300 cursor-pointer outline-none">
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-brand-burgundy" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden hover:text-brand-burgundy transition-colors duration-300 cursor-pointer outline-none"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-brand-charcoal/40 backdrop-blur-xs z-50 md:hidden"
            onClick={() => setMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="absolute right-0 top-0 bottom-0 w-4/5 max-w-sm bg-brand-ivory p-8 shadow-2xl flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-12">
                <Link
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-display text-xl italic font-semibold text-brand-burgundy hover:opacity-85 transition-opacity"
                >
                  Sattva Vogue
                </Link>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1 rounded-full hover:bg-brand-beige transition-colors text-brand-charcoal outline-none cursor-pointer"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <nav className="flex flex-col gap-6">
                {headerNavLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="font-accent text-sm font-bold uppercase tracking-widest text-brand-charcoal hover:text-brand-burgundy transition-colors pb-2 border-b border-brand-beige"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
