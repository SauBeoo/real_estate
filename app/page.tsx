"use client";
import { useEffect } from 'react';
import Script from 'next/script';
import Header from '../components/Header';
import Hero from '../components/Hero';
import DreamBanner from '../components/DreamBanner';
import Properties from '../components/Properties';
import Pricing from '../components/Pricing';
import AiChat from '../components/AiChat';
import Testimonials from '../components/Testimonials';
import Process from '../components/Process';
import Cta from '../components/Cta';
import BankPartners from '../components/BankPartners';
import AppDownload from '../components/AppDownload';
import Footer from '../components/Footer';

export default function Home() {
  useEffect(() => {
    // Initialize AOS
    if (typeof window !== 'undefined') {
      const AOS = require('aos');
      AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true
      });
    }
  }, []);

  return (
    <>
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/js/all.min.js"
        strategy="lazyOnload"
      />
      <Script
        src="https://unpkg.com/aos@2.3.1/dist/aos.js"
        strategy="lazyOnload"
        onLoad={() => {
          // Re-initialize AOS after the script loads
          if (typeof window !== 'undefined' && window.AOS) {
            window.AOS.refresh();
          }
        }}
      />
      <main>
        <Header />
        <Hero />
        <DreamBanner />
        <Properties />
        <Pricing />
        <AiChat />
        <Testimonials />
        <Process />
        <Cta />
        <BankPartners />
        <AppDownload />
        <Footer />
      </main>
    </>
  );
}
