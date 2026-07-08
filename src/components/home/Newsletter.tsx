'use client';

import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { motion } from 'framer-motion';
import Container from '../common/Container';
import FadeUp from '../animations/FadeUp';

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <section id="newsletter" className="py-20 bg-brand-ivory">
      <Container>
        <FadeUp delay={0.1}>
          <div className="bg-brand-beige rounded-md p-8 md:p-16 text-center relative overflow-hidden shadow-card max-w-[1120px] mx-auto">
            {/* Visual background details */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-burgundy/5 rounded-full -mr-32 -mt-32 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-burgundy/5 rounded-full -ml-32 -mb-32 pointer-events-none" />

            <div className="relative z-10 max-w-xl mx-auto flex flex-col items-center">
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-brand-charcoal mb-4 tracking-tight">
                Join the Inner Circle
              </h2>
              <p className="font-body text-sm md:text-base text-brand-muted mb-10 leading-relaxed max-w-md">
                Be the first to explore our limited drops and stories of the soil. Enjoy 10% off your first journey with us.
              </p>

              {subscribed ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="w-full bg-brand-ivory border border-brand-burgundy/20 py-4 px-6 rounded-sm text-brand-burgundy font-accent text-xs font-bold tracking-widest uppercase shadow-sm"
                >
                  Thank you for subscribing!
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="w-full flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="YOUR EMAIL ADDRESS"
                    className="flex-1 bg-brand-ivory border border-brand-charcoal/10 focus:border-brand-burgundy focus:outline-none px-6 py-4 font-accent text-xs font-bold tracking-widest rounded-sm placeholder:text-brand-muted/50 text-brand-charcoal"
                  />
                  <button
                    type="submit"
                    className="bg-brand-burgundy text-brand-ivory hover:bg-brand-rust px-10 py-4 rounded-sm font-accent text-xs font-bold uppercase tracking-widest transition-colors cursor-pointer outline-none shadow-sm flex items-center justify-center gap-2"
                  >
                    <span>Subscribe</span>
                    <Send className="w-4.5 h-4.5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </FadeUp>
      </Container>
    </section>
  );
};

export default Newsletter;
