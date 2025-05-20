"use client";
import { useEffect } from 'react';
import Link from 'next/link';

export default function Footer() {
  useEffect(() => {
    // Set current year in the footer
    const yearElement = document.getElementById('currentYear');
    if (yearElement) {
      yearElement.textContent = new Date().getFullYear().toString();
    }
  }, []);

  return (
    <footer className="bg-primary text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div data-aos="fade-up" data-aos-delay="100">
            <h4 className="font-heading text-lg font-semibold text-white mb-4">Về Chúng Tôi</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-accent transition-colors">Giới thiệu</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Đội ngũ</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Tầm nhìn</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Tuyển dụng</a></li>
            </ul>
          </div>

          <div data-aos="fade-up" data-aos-delay="200">
            <h4 className="font-heading text-lg font-semibold text-white mb-4">Hỗ Trợ</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-accent transition-colors">Câu hỏi thường gặp</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Hướng dẫn sử dụng</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Chính sách bảo mật</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Điều khoản dịch vụ</a></li>
            </ul>
          </div>

          <div data-aos="fade-up" data-aos-delay="300">
            <h4 className="font-heading text-lg font-semibold text-white mb-4">Liên Hệ</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start">
                <i className="fas fa-map-marker-alt mt-1 mr-3 text-accent flex-shrink-0"></i>
                <p>123 Đường ABC, Quận XYZ, TP. Hồ Chí Minh</p>
              </div>
              <div className="flex items-center">
                <i className="fas fa-phone-alt mr-3 text-accent flex-shrink-0"></i>
                <p>Hotline: <a href="tel:19001234" className="hover:text-accent">1900 1234</a></p>
              </div>
              <div className="flex items-center">
                <i className="fas fa-envelope mr-3 text-accent flex-shrink-0"></i>
                <p>Email: <a href="mailto:support@giatrithuc.com.vn" className="hover:text-accent">support@giatrithuc.com.vn</a></p>
              </div>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-delay="400">
            <h4 className="font-heading text-lg font-semibold text-white mb-4">Kết Nối Với Chúng Tôi</h4>
            <div className="flex space-x-4 mb-4">
              <a href="#" aria-label="Facebook" className="bg-gray-700 hover:bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" aria-label="Twitter" className="bg-gray-700 hover:bg-sky-500 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" aria-label="Instagram" className="bg-gray-700 hover:bg-pink-500 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" aria-label="LinkedIn" className="bg-gray-700 hover:bg-blue-700 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
            <h4 className="font-heading text-lg font-semibold text-white mb-2 mt-6">Đăng ký nhận tin</h4>
            <form className="flex">
              <input type="email" placeholder="Email của bạn" className="w-full px-4 py-2 rounded-l-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-accent" />
              <button type="submit" className="bg-accent hover:bg-darkAccent text-white px-4 py-2 rounded-r-md font-semibold">Gửi</button>
            </form>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center text-sm">
          <p>© {new Date().getFullYear()} Giá Trị Thực. Bảo lưu mọi quyền.</p>
          <p>Một sản phẩm của Công Ty TNHH Công Nghệ XYZ</p>
        </div>
      </div>
    </footer>
  );
}