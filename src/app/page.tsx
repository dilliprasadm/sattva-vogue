import React from 'react';

// Layout components
import AnnouncementBar from '@/components/layout/AnnouncementBar';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FloatingWhatsApp from '@/components/layout/FloatingWhatsApp';
import BackToTop from '@/components/layout/BackToTop';

// Homepage sections
import Hero from '@/components/home/Hero';
import Categories from '@/components/home/Categories';
import FeaturedCollections from '@/components/home/FeaturedCollections';
import NewArrivals from '@/components/home/NewArrivals';
import BestSellers from '@/components/home/BestSellers';
import OfficeWear from '@/components/home/OfficeWear';
import DailyWear from '@/components/home/DailyWear';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import FounderStory from '@/components/home/FounderStory';
import Testimonials from '@/components/home/Testimonials';
import InstagramGallery from '@/components/home/InstagramGallery';
import Newsletter from '@/components/home/Newsletter';
import FooterCTA from '@/components/home/FooterCTA';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Announcement Bar */}
      <AnnouncementBar />

      {/* 2. Navigation Header */}
      <Header />

      <main className="flex-grow">
        {/* 3. Hero Section */}
        <Hero />

        {/* 4. Shop by Category */}
        <Categories />

        {/* 5. Featured Collection */}
        <FeaturedCollections />

        {/* 6. New Arrivals */}
        <NewArrivals />

        {/* 7. Best Sellers */}
        <BestSellers />

        {/* 8. Office Wear Collection */}
        <OfficeWear />

        {/* 9. Daily Wear Collection */}
        <DailyWear />

        {/* 10. Why Choose Sattva Vogue */}
        <WhyChooseUs />

        {/* 11. Meet Surbhi (Founder Story) */}
        <FounderStory />

        {/* 12. Customer Testimonials */}
        <Testimonials />

        {/* 13. Instagram Gallery */}
        <InstagramGallery />

        {/* 14. Newsletter Gateway */}
        <Newsletter />

        {/* 15. Footer CTA Banner */}
        <FooterCTA />
      </main>

      {/* 16. Footer */}
      <Footer />

      {/* Floating Interactive Elements */}
      <FloatingWhatsApp />
      <BackToTop />
    </div>
  );
}
