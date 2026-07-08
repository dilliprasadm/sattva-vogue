'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, Check } from 'lucide-react';
import { AnnouncementBar } from '@/components/layout/AnnouncementBar';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import Container from '@/components/common/Container';
import FadeUp from '@/components/animations/FadeUp';
import Button from '@/components/common/Button';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setIsSent(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setIsSent(false), 3000);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-brand-ivory text-brand-charcoal">
      {/* 1. Announcement Bar */}
      <AnnouncementBar />

      {/* 2. Navigation Header */}
      <Header />

      <main className="flex-grow pt-24 pb-20">
        
        {/* Header Title */}
        <section className="py-12 md:py-16 text-center">
          <Container>
            <FadeUp delay={0.1}>
              <span className="font-accent text-xs font-bold uppercase tracking-[0.2em] text-brand-rust block mb-3">
                Get In Touch
              </span>
            </FadeUp>
            
            <FadeUp delay={0.15}>
              <h1 className="font-display text-4xl sm:text-5xl font-bold text-brand-burgundy mb-6 italic">
                Contact Us
              </h1>
            </FadeUp>

            <FadeUp delay={0.2}>
              <p className="font-body text-base text-brand-muted max-w-xl mx-auto leading-relaxed">
                Whether you have a question about sizing, fabrics, or want to collaborate, we would love to hear from you.
              </p>
            </FadeUp>
          </Container>
        </section>

        {/* Contact Layout */}
        <section className="pb-16">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
              
              {/* Left Column: Details */}
              <div className="lg:col-span-5 space-y-8">
                <FadeUp delay={0.25} className="space-y-6">
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-brand-burgundy/5 flex items-center justify-center text-brand-burgundy flex-shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-display text-base font-bold text-brand-charcoal mb-1">Our Studio</h4>
                      <p className="font-body text-sm text-brand-muted leading-relaxed">
                        Sattva Vogue Creative House<br />
                        Prithviraj Marg, near Ana Sagar Lake,<br />
                        Ajmer, Rajasthan - 305001, India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-brand-burgundy/5 flex items-center justify-center text-brand-burgundy flex-shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-display text-base font-bold text-brand-charcoal mb-1">Call/WhatsApp Us</h4>
                      <p className="font-body text-sm text-brand-muted">
                        +91 98765 43210
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-brand-burgundy/5 flex items-center justify-center text-brand-burgundy flex-shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-display text-base font-bold text-brand-charcoal mb-1">Email Care</h4>
                      <p className="font-body text-sm text-brand-muted">
                        support@sattvavogue.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-brand-burgundy/5 flex items-center justify-center text-brand-burgundy flex-shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-display text-base font-bold text-brand-charcoal mb-1">Studio Hours</h4>
                      <p className="font-body text-sm text-brand-muted">
                        Monday - Saturday: 10:00 AM - 7:00 PM IST
                      </p>
                    </div>
                  </div>

                </FadeUp>
              </div>

              {/* Right Column: Form */}
              <div className="lg:col-span-7 bg-brand-beige/20 p-8 rounded-sm border border-brand-charcoal/5">
                <FadeUp delay={0.3}>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    
                    <div>
                      <label className="font-accent text-xs font-bold uppercase tracking-widest text-brand-muted block mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Ananya Sharma"
                        className="w-full bg-brand-ivory border border-brand-charcoal/15 focus:border-brand-burgundy rounded-xs p-3.5 text-sm outline-none font-body"
                      />
                    </div>

                    <div>
                      <label className="font-accent text-xs font-bold uppercase tracking-widest text-brand-muted block mb-2">
                        Your Email
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="ananya@example.com"
                        className="w-full bg-brand-ivory border border-brand-charcoal/15 focus:border-brand-burgundy rounded-xs p-3.5 text-sm outline-none font-body"
                      />
                    </div>

                    <div>
                      <label className="font-accent text-xs font-bold uppercase tracking-widest text-brand-muted block mb-2">
                        Your Message
                      </label>
                      <textarea
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="How can we help you?"
                        className="w-full bg-brand-ivory border border-brand-charcoal/15 focus:border-brand-burgundy rounded-xs p-3.5 text-sm outline-none font-body resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      variant="primary"
                      className="w-full text-center py-4 rounded-sm tracking-widest uppercase font-accent text-xs"
                    >
                      {isSent ? (
                        <span className="flex items-center justify-center gap-2">
                          <Check className="w-4 h-4" /> Message Sent
                        </span>
                      ) : (
                        <span className="flex items-center justify-center gap-2">
                          <Send className="w-4 h-4" /> Send Message
                        </span>
                      )}
                    </Button>

                  </form>
                </FadeUp>
              </div>

            </div>
          </Container>
        </section>

      </main>

      {/* 3. Page Footer */}
      <Footer />
    </div>
  );
}
