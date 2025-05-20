"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaCommentDots, FaSearch, FaHome, FaMapMarkerAlt, FaPlusCircle, FaPlayCircle } from 'react-icons/fa';
import { NavLink } from '../../types';

const navLinks: NavLink[] = [
  { label: 'Trang Chủ', href: '/' },
  { label: 'Tìm Kiếm', href: '#search' },
  { label: 'Ước Mơ', href: '#dream-banner' },
  { label: 'Bất Động Sản', href: '#properties' },
  { label: 'Định Giá', href: '#pricing' },
  { label: 'Đánh Giá', href: '#testimonials' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header 
      className={`bg-white fixed top-0 left-0 w-full z-50 transition-all duration-300 
        ${isScrolled ? 'shadow-md py-2' : 'shadow-sm py-3'}`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="font-heading text-2xl lg:text-3xl font-bold hover:scale-105 transition-transform">
          <span className="bg-gradient-to-r from-[#1A376A] to-[#FF7A00] bg-clip-text text-transparent">
            GIÁ TRỊ THỰC
          </span>
        </Link>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button 
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? "Đóng menu" : "Mở menu"} 
            aria-expanded={isMobileMenuOpen}
            className="text-gray-800 focus:outline-none hover:scale-110 transition-transform"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>

        {/* Main Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              className={`relative font-medium hover:text-[#1A376A] transition-colors
                after:content-[''] after:absolute after:w-0 after:h-[3px] after:bottom-[-5px] after:left-0 
                after:bg-[#FF7A00] after:transition-all after:duration-300 after:ease-in-out after:rounded-md
                hover:after:w-full
                ${pathname === link.href ? 'text-[#1A376A] after:w-full' : 'text-gray-700'}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right Side */}
        <div className="hidden lg:flex items-center space-x-6">
          <Link 
            href="#ai-chat" 
            className="bg-gradient-to-br from-[#FF7A00] to-[#E56D00] text-white px-6 py-2.5 rounded-lg font-semibold flex items-center hover:shadow-lg hover:shadow-orange-500/30 hover:-translate-y-0.5 transition-all"
          >
            <FaCommentDots className="mr-2" />Chat với AI
          </Link>
          <div className="text-gray-700 font-medium">
            <Link href="/login" className="hover:text-[#FF7A00] transition-colors">Đăng Nhập</Link>
            <span className="mx-2 text-gray-300">|</span>
            <Link 
              href="/register" 
              className="text-[#1A376A] border-2 border-[#1A376A] px-4 py-1.5 rounded-lg hover:bg-[#1A376A] hover:text-white transition-colors"
            >
              Đăng Ký
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`lg:hidden bg-white w-full shadow-lg overflow-hidden transition-[max-height] duration-500 ease-in-out
          ${isMobileMenuOpen ? 'max-h-[1000px]' : 'max-h-0'}`}
      >
        <div className="px-4 py-3 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-2 border-t border-gray-100 space-y-3">
            <Link
              href="#ai-chat"
              className="block w-full text-center bg-gradient-to-br from-[#FF7A00] to-[#E56D00] text-white px-4 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-orange-500/30"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <FaCommentDots className="inline-block mr-2" />Chat với AI
            </Link>
            <Link
              href="/register"
              className="block text-center text-[#1A376A] border-2 border-[#1A376A] px-4 py-2 rounded-lg hover:bg-[#1A376A] hover:text-white transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Đăng Ký
            </Link>
            <Link
              href="/login"
              className="block text-center text-gray-700 hover:text-[#FF7A00] transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Đăng Nhập
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 