"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`bg-white fixed top-0 left-0 w-full z-50 ${scrolled ? 'shadow-md' : 'shadow-sm'} transition-all duration-300`}>
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="font-heading text-2xl lg:text-3xl font-bold hover:scale-105 transition-transform">
          <span className="gradient-text">GIÁ TRỊ THỰC</span>
        </Link>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            id="mobile-menu-button"
            aria-label={isOpen ? "Đóng menu" : "Mở menu"}
            aria-expanded={isOpen}
            className="text-gray-800 focus:outline-none hover:scale-110 transition-transform"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>

        {/* Main Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          <Link href="#hero" className="nav-link font-medium text-gray-700 hover:text-primary">Trang Chủ</Link>
          <Link href="#search" className="nav-link font-medium text-gray-700 hover:text-primary">Tìm Kiếm</Link>
          <Link href="#dream-banner" className="nav-link font-medium text-gray-700 hover:text-primary">Ước Mơ</Link>
          <Link href="#properties" className="nav-link font-medium text-gray-700 hover:text-primary">Bất Động Sản</Link>
          <Link href="#pricing" className="nav-link font-medium text-gray-700 hover:text-primary">Định Giá</Link>
          <Link href="#testimonials" className="nav-link font-medium text-gray-700 hover:text-primary">Đánh Giá</Link>
        </nav>

        {/* Right Side */}
        <div className="hidden lg:flex items-center space-x-6">
          <Link href="#ai-chat" className="bg-gradient-to-br from-accent to-darkAccent text-white px-6 py-2.5 rounded-lg font-semibold flex items-center hover:shadow-lg hover:shadow-orange-500/30 hover:-translate-y-0.5 transition-all">
            <i className="fas fa-comment-dots mr-2"></i>Chat với AI
          </Link>
          <div className="text-gray-700 font-medium">
            <Link href="#" className="hover:text-accent transition-colors">Đăng Nhập</Link>
            <span className="mx-2 text-gray-300">|</span>
            <Link href="#" className="text-primary border-2 border-primary px-4 py-1.5 rounded-lg hover:bg-primary hover:text-white transition-colors">Đăng Ký</Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div id="mobile-menu" className={`mobile-menu lg:hidden bg-white w-full shadow-lg ${isOpen ? 'open' : ''}`}>
        <div className="px-4 py-3 space-y-2">
          <Link href="#hero" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">Trang Chủ</Link>
          <Link href="#search" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">Tìm Kiếm</Link>
          <Link href="#dream-banner" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">Ước Mơ</Link>
          <Link href="#properties" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">Bất Động Sản</Link>
          <Link href="#pricing" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">Định Giá</Link>
          <Link href="#testimonials" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">Đánh Giá</Link>
          <div className="pt-2 border-t border-gray-100 space-y-3">
            <Link href="#ai-chat" className="block w-full text-center bg-gradient-to-br from-accent to-darkAccent text-white px-4 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-orange-500/30">
              <i className="fas fa-comment-dots mr-2"></i>Chat với AI
            </Link>
            <Link href="#" className="block text-center text-primary border-2 border-primary px-4 py-2 rounded-lg hover:bg-primary hover:text-white transition-colors">Đăng Ký</Link>
            <Link href="#" className="block text-center text-gray-700 hover:text-accent transition-colors">Đăng Nhập</Link>
          </div>
        </div>
      </div>
    </header>
  );
} 