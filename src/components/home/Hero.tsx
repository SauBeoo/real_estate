"use client";

import { useState } from 'react';
import Link from 'next/link';
import { FaSearch, FaHome, FaMapMarkerAlt, FaPlusCircle, FaPlayCircle } from 'react-icons/fa';

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [location, setLocation] = useState('');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Search submitted:', { searchQuery, propertyType, location });
    // Implement search logic or navigation
  };

  return (
    <section id="hero" className="pt-32 pb-20 md:pt-40 md:pb-28 relative overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed z-0"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), 
            url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80')`,
        }}
      />

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-16 h-16 rounded-full bg-[#FF7A00]/20 blur-xl animate-float"></div>
        <div className="absolute top-1/3 right-1/4 w-24 h-24 rounded-full bg-[#1A376A]/20 blur-xl animate-float" 
          style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 right-1/3 w-20 h-20 rounded-full bg-[#FF7A00]/20 blur-xl animate-float" 
          style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center" data-aos="fade-up" data-aos-duration="800">
        <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl mb-4 text-white">GIÁ TRỊ THỰC</h1>
        <p className="font-heading font-semibold text-xl sm:text-2xl lg:text-3xl mb-6 text-white">
          Minh Bạch - Chuẩn Xác - Thành Công
        </p>
        <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-10 text-gray-200">
          Nền tảng kết nối bất động sản trực tuyến, định giá tự động, hỗ trợ pháp lý minh bạch. 
          Giao dịch trực tiếp, không lo kê giá.
        </p>

        {/* Search Form */}
        <form
          id="search"
          className="bg-white/90 p-5 rounded-xl max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_auto] gap-4 items-center shadow-xl hover:shadow-2xl transition-shadow duration-300"
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="800"
          onSubmit={handleSearchSubmit}
        >
          <div className="relative">
            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Nhập địa chỉ, dự án, hoặc từ khóa..."
              className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#FF7A00] focus:ring-offset-2 focus:border-[#FF7A00] text-gray-700 transition-all duration-300 focus:shadow-md"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <div className="relative">
            <FaHome className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 hidden sm:block" />
            <select
              className="w-full pl-4 sm:pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#FF7A00] focus:ring-offset-2 focus:border-[#FF7A00] text-gray-700 transition-all duration-300 focus:shadow-md cursor-pointer"
              value={propertyType}
              onChange={(e) => setPropertyType(e.target.value)}
            >
              <option value="">Loại BĐS</option>
              <option value="can-ho">Căn hộ</option>
              <option value="nha-rieng">Nhà riêng</option>
              <option value="dat-nen">Đất nền</option>
              <option value="biet-thu">Biệt thự</option>
            </select>
          </div>
          
          <div className="relative">
            <FaMapMarkerAlt className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 hidden sm:block" />
            <select
              className="w-full pl-4 sm:pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#FF7A00] focus:ring-offset-2 focus:border-[#FF7A00] text-gray-700 transition-all duration-300 focus:shadow-md cursor-pointer"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            >
              <option value="">Khu vực</option>
              <option value="hcm">TP. HCM</option>
              <option value="hn">Hà Nội</option>
              <option value="dn">Đà Nẵng</option>
              <option value="khac">Khác</option>
            </select>
          </div>
          
          <button
            type="submit"
            className="bg-gradient-to-br from-[#FF7A00] to-[#E56D00] text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center hover:shadow-lg hover:shadow-orange-500/30 hover:-translate-y-0.5 transition-all"
          >
            <FaSearch className="mr-2" />
            Tìm Kiếm
          </button>
        </form>

        {/* Quick links */}
        <div 
          className="mt-8 flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-6 text-sm font-medium text-white" 
          data-aos="fade-up" 
          data-aos-delay="500"
        >
          <Link href="/post" className="hover:underline flex items-center hover:scale-105 transition-transform">
            <FaPlusCircle className="mr-2 text-[#FF7A00]" />
            Đăng Tin Ngay
          </Link>
          <Link href="/guide" className="hover:underline flex items-center hover:scale-105 transition-transform">
            <FaPlayCircle className="mr-2 text-[#FF7A00]" />
            Video Hướng Dẫn Mua Bán
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero; 