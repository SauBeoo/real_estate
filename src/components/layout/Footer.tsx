"use client";

import Link from 'next/link';
import { useState } from 'react';
import { 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedinIn, 
  FaMapMarkerAlt, 
  FaPhoneAlt, 
  FaEnvelope 
} from 'react-icons/fa';

const Footer = () => {
  const [email, setEmail] = useState('');
  const currentYear = new Date().getFullYear();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic to handle newsletter subscription
    console.log('Newsletter subscription:', email);
    setEmail('');
    // Display success message or integrate with API
  };

  return (
    <footer className="bg-[#1A376A] text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About Us Column */}
          <div data-aos="fade-up" data-aos-delay="100">
            <h4 className="font-heading text-lg font-semibold text-white mb-4">Về Chúng Tôi</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-[#FF7A00] transition-colors">Giới thiệu</Link></li>
              <li><Link href="/team" className="hover:text-[#FF7A00] transition-colors">Đội ngũ</Link></li>
              <li><Link href="/vision" className="hover:text-[#FF7A00] transition-colors">Tầm nhìn</Link></li>
              <li><Link href="/careers" className="hover:text-[#FF7A00] transition-colors">Tuyển dụng</Link></li>
            </ul>
          </div>

          {/* Support Column */}
          <div data-aos="fade-up" data-aos-delay="200">
            <h4 className="font-heading text-lg font-semibold text-white mb-4">Hỗ Trợ</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/faq" className="hover:text-[#FF7A00] transition-colors">Câu hỏi thường gặp</Link></li>
              <li><Link href="/guide" className="hover:text-[#FF7A00] transition-colors">Hướng dẫn sử dụng</Link></li>
              <li><Link href="/privacy" className="hover:text-[#FF7A00] transition-colors">Chính sách bảo mật</Link></li>
              <li><Link href="/terms" className="hover:text-[#FF7A00] transition-colors">Điều khoản dịch vụ</Link></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div data-aos="fade-up" data-aos-delay="300">
            <h4 className="font-heading text-lg font-semibold text-white mb-4">Liên Hệ</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-3 text-[#FF7A00] flex-shrink-0" />
                <p>123 Đường ABC, Quận XYZ, TP. Hồ Chí Minh</p>
              </div>
              <div className="flex items-center">
                <FaPhoneAlt className="mr-3 text-[#FF7A00] flex-shrink-0" />
                <p>Hotline: <a href="tel:19001234" className="hover:text-[#FF7A00]">1900 1234</a></p>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="mr-3 text-[#FF7A00] flex-shrink-0" />
                <p>Email: <a href="mailto:support@giatrithuc.com.vn" className="hover:text-[#FF7A00]">support@giatrithuc.com.vn</a></p>
              </div>
            </div>
          </div>

          {/* Social & Newsletter Column */}
          <div data-aos="fade-up" data-aos-delay="400">
            <h4 className="font-heading text-lg font-semibold text-white mb-4">Kết Nối Với Chúng Tôi</h4>
            <div className="flex space-x-4 mb-4">
              <a href="https://facebook.com" aria-label="Facebook" className="bg-gray-700 hover:bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                <FaFacebookF />
              </a>
              <a href="https://twitter.com" aria-label="Twitter" className="bg-gray-700 hover:bg-sky-500 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                <FaTwitter />
              </a>
              <a href="https://instagram.com" aria-label="Instagram" className="bg-gray-700 hover:bg-pink-500 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                <FaInstagram />
              </a>
              <a href="https://linkedin.com" aria-label="LinkedIn" className="bg-gray-700 hover:bg-blue-700 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                <FaLinkedinIn />
              </a>
            </div>
            
            <h4 className="font-heading text-lg font-semibold text-white mb-2 mt-6">Đăng ký nhận tin</h4>
            <form className="flex" onSubmit={handleSubmit}>
              <input 
                type="email" 
                placeholder="Email của bạn" 
                className="w-full px-4 py-2 rounded-l-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#FF7A00]"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button 
                type="submit" 
                className="bg-[#FF7A00] hover:bg-[#E56D00] text-white px-4 py-2 rounded-r-md font-semibold"
              >
                Gửi
              </button>
            </form>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-700 pt-8 text-center text-sm">
          <p>© {currentYear} Giá Trị Thực. Bảo lưu mọi quyền.</p>
          <p>Một sản phẩm của Công Ty TNHH Công Nghệ XYZ</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 