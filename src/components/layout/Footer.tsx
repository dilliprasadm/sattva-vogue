'use client';

import React from 'react';
import Image from 'next/image';
import { Send, Mail } from 'lucide-react';
import Link from 'next/link';
import { footerCollections, footerAboutUs, footerAssistance } from '@/data/navigation';

export const Footer: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Visual only, no business logic
  };

  return (
    <footer className="bg-brand-beige/50 border-t border-brand-charcoal/10 text-brand-charcoal">
      {/* Top Footer Section */}
      <div className="max-w-[1280px] mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
        
        {/* Brand Summary Column */}
        <div className="lg:col-span-2 flex flex-col justify-between">
          <div>
            <Link href="/" className="flex items-center gap-3 mb-6 hover:opacity-85 transition-opacity">
              <Image
                src="/logo.png"
                alt="Sattva Vogue Logo"
                width={44}
                height={44}
                unoptimized
                className="rounded-full"
              />
              <span className="font-display text-2xl font-semibold italic text-brand-burgundy tracking-wide">
                SATTVA VOGUE
              </span>
            </Link>
            <p className="font-body text-sm text-brand-muted leading-relaxed mb-8 max-w-sm">
              Comfortable premium ethnic wear crafted with soul, designed for the modern woman seeking everyday elegance and heritage touchpoints.
            </p>
          </div>
          
          {/* Social Icons */}
          <div className="flex gap-4">
            <a
              href="#"
              aria-label="Instagram"
              className="w-10 h-10 rounded-full border border-brand-charcoal/15 flex items-center justify-center hover:border-brand-burgundy hover:text-brand-burgundy transition-all duration-300"
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
                className="w-4 h-4"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>
            <a
              href="#"
              aria-label="Email"
              className="w-10 h-10 rounded-full border border-brand-charcoal/15 flex items-center justify-center hover:border-brand-burgundy hover:text-brand-burgundy transition-all duration-300"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Collections Links */}
        <div>
          <h5 className="font-accent text-xs font-bold uppercase tracking-widest text-brand-burgundy mb-6">
            Collections
          </h5>
          <ul className="space-y-4 font-body text-sm text-brand-muted">
            {footerCollections.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="hover:text-brand-burgundy transition-colors duration-300">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* About Us Links */}
        <div>
          <h5 className="font-accent text-xs font-bold uppercase tracking-widest text-brand-burgundy mb-6">
            About Us
          </h5>
          <ul className="space-y-4 font-body text-sm text-brand-muted">
            {footerAboutUs.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="hover:text-brand-burgundy transition-colors duration-300">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Assistance & Newsletter Gateway */}
        <div>
          <h5 className="font-accent text-xs font-bold uppercase tracking-widest text-brand-burgundy mb-6">
            Assistance
          </h5>
          <ul className="space-y-4 font-body text-sm text-brand-muted">
            {footerAssistance.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="hover:text-brand-burgundy transition-colors duration-300">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* Bottom Footer Section */}
      <div className="border-t border-brand-charcoal/10 py-8 px-6 text-center">
        <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-accent text-brand-muted/75 tracking-wider uppercase">
          <p>© 2026 SATTVA VOGUE. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-brand-burgundy transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-brand-burgundy transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-burgundy transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
