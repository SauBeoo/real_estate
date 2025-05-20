"use client";
import { useEffect } from 'react';

export default function DreamBanner() {
  useEffect(() => {
    // Add random floating bubbles dynamically
    const dreamBanner = document.querySelector('.dream-banner');
    if (dreamBanner) {
      for (let i = 0; i < 8; i++) {
        const bubble = document.createElement('div');
        bubble.className = 'dream-bubble absolute rounded-full';

        // Random size between 10px and 40px
        const size = Math.floor(Math.random() * 30) + 10;
        bubble.style.width = `${size}px`;
        bubble.style.height = `${size}px`;

        // Random position
        bubble.style.top = `${Math.floor(Math.random() * 80) + 10}%`;
        bubble.style.left = `${Math.floor(Math.random() * 80) + 10}%`;

        // Random animation delay
        bubble.style.animationDelay = `${Math.floor(Math.random() * 10)}s`;

        // Random opacity
        bubble.style.opacity = (Math.random() * 0.1 + 0.05).toString();

        dreamBanner.appendChild(bubble);
      }
    }
  }, []);

  return (
    <section id="dream-banner" className="dream-banner py-24 md:py-32 relative overflow-hidden">
      {/* Floating elements */}
      <div className="dream-bubble w-24 h-24 top-1/4 left-1/4" style={{ animationDelay: "0s" }}></div>
      <div className="dream-bubble w-36 h-36 top-1/3 right-1/4" style={{ animationDelay: "2s" }}></div>
      <div className="dream-bubble w-28 h-28 bottom-1/4 left-1/3" style={{ animationDelay: "4s" }}></div>
      <div className="dream-bubble w-20 h-20 bottom-1/3 right-1/3" style={{ animationDelay: "6s" }}></div>

      {/* House silhouette */}
      <div className="dream-house"></div>

      {/* Content container */}
      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Main heading with simple animation */}
        <h2 className="dream-text font-heading font-bold text-4xl md:text-6xl lg:text-7xl mb-8 text-white" data-aos="fade-up" data-aos-delay="100">
          <span className="text-underline-animation">
            Biến ước mơ nhà đất thành hiện thực
          </span>
        </h2>

        {/* Subheading */}
        <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-10 leading-relaxed" data-aos="fade-up" data-aos-delay="200">
          Khám phá ngôi nhà mơ ước của bạn với nền tảng bất động sản minh bạch hàng đầu.
          Chúng tôi đồng hành cùng bạn trên hành trình tìm kiếm tổ ấm hoàn hảo.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-6" data-aos="fade-up" data-aos-delay="300">
          <a href="#properties" className="dream-btn bg-white text-primary px-10 py-4 rounded-full font-semibold hover:bg-gray-100 hover:shadow-xl transition-all duration-300 flex items-center justify-center">
            <i className="fas fa-home mr-3 text-lg"></i>
            <span>Khám phá ngay</span>
          </a>
          <a href="#ai-chat" className="dream-btn bg-accent text-white px-10 py-4 rounded-full font-semibold hover:bg-darkAccent hover:shadow-xl transition-all duration-300 flex items-center justify-center">
            <i className="fas fa-comments mr-3 text-lg"></i>
            <span>Tư vấn miễn phí</span>
          </a>
        </div>

        {/* Stats row */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto" data-aos="fade-up" data-aos-delay="400">
          <div className="stat-card bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:border-white/40">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">10,000+</div>
            <div className="text-sm md:text-base text-white/80">Bất động sản</div>
          </div>
          <div className="stat-card bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:border-white/40">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">5,000+</div>
            <div className="text-sm md:text-base text-white/80">Khách hàng hài lòng</div>
          </div>
          <div className="stat-card bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:border-white/40">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">20+</div>
            <div className="text-sm md:text-base text-white/80">Tỉnh thành</div>
          </div>
          <div className="stat-card bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:border-white/40">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">24/7</div>
            <div className="text-sm md:text-base text-white/80">Hỗ trợ khách hàng</div>
          </div>
        </div>
      </div>

      {/* Wave effect at bottom - continuous animation */}
      <div className="dream-wave"></div>
    </section>
  );
} 