"use client";
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Properties() {
  const [activeTab, setActiveTab] = useState('all');

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };

  return (
    <section id="properties" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">Bất Động Sản Nổi Bật</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Khám phá các bất động sản đang được quan tâm nhất</p>
        </div>

        <div className="mb-8 flex justify-center" data-aos="fade-up">
          <div className="inline-flex rounded-md shadow-sm" role="tablist">
            <button 
              type="button" 
              className={`tab-btn px-6 py-2 text-sm font-medium rounded-l-lg border border-gray-200 hover:bg-gray-50 focus:z-10 focus:ring-2 focus:ring-primary ${activeTab === 'all' ? 'bg-primary text-white' : 'bg-white text-gray-700'}`} 
              onClick={() => handleTabClick('all')}
              role="tab" 
              aria-controls="all-tab" 
              aria-selected={activeTab === 'all'}
            >
              Tất cả
            </button>
            <button 
              type="button" 
              className={`tab-btn px-6 py-2 text-sm font-medium border-t border-b border-gray-200 hover:bg-gray-50 focus:z-10 focus:ring-2 focus:ring-primary ${activeTab === 'apartment' ? 'bg-primary text-white' : 'bg-white text-gray-700'}`} 
              onClick={() => handleTabClick('apartment')}
              role="tab" 
              aria-controls="apartment-tab" 
              aria-selected={activeTab === 'apartment'}
            >
              Căn hộ
            </button>
            <button 
              type="button" 
              className={`tab-btn px-6 py-2 text-sm font-medium border border-gray-200 hover:bg-gray-50 focus:z-10 focus:ring-2 focus:ring-primary ${activeTab === 'house' ? 'bg-primary text-white' : 'bg-white text-gray-700'}`} 
              onClick={() => handleTabClick('house')}
              role="tab" 
              aria-controls="house-tab" 
              aria-selected={activeTab === 'house'}
            >
              Nhà riêng
            </button>
            <button 
              type="button" 
              className={`tab-btn px-6 py-2 text-sm font-medium border-t border-b border-gray-200 hover:bg-gray-50 focus:z-10 focus:ring-2 focus:ring-primary ${activeTab === 'land' ? 'bg-primary text-white' : 'bg-white text-gray-700'}`} 
              onClick={() => handleTabClick('land')}
              role="tab" 
              aria-controls="land-tab" 
              aria-selected={activeTab === 'land'}
            >
              Đất nền
            </button>
            <button 
              type="button" 
              className={`tab-btn px-6 py-2 text-sm font-medium rounded-r-lg border border-gray-200 hover:bg-gray-50 focus:z-10 focus:ring-2 focus:ring-primary ${activeTab === 'villa' ? 'bg-primary text-white' : 'bg-white text-gray-700'}`} 
              onClick={() => handleTabClick('villa')}
              role="tab" 
              aria-controls="villa-tab" 
              aria-selected={activeTab === 'villa'}
            >
              Biệt thự
            </button>
          </div>
        </div>

        <div className={`tab-content ${activeTab === 'all' ? 'active' : ''}`} id="all-tab" role="tabpanel" aria-labelledby="all">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Property items */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg hover:scale-105 transition-transform" data-aos="fade-up" data-aos-delay="100">
              <div className="relative">
                <Image
                  src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2"
                  alt="Căn hộ cao cấp Quận 2"
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4 bg-accent text-white px-3 py-1 rounded-full text-xs font-semibold hover:scale-110 transition-transform">
                  Mới nhất
                </div>
                <div className="absolute bottom-4 right-4 bg-white/90 text-primary px-3 py-1 rounded-full text-sm font-semibold">
                  3.5 tỷ
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-lg text-gray-800 mb-2">Căn hộ cao cấp Quận 2</h3>
                <p className="text-gray-600 text-sm mb-4 flex items-center"><i className="fas fa-map-marker-alt text-accent mr-2"></i> 123 Đường Nguyễn Văn Linh, Quận 2, TP.HCM</p>
                <div className="flex justify-between text-sm text-gray-500 border-t border-gray-100 pt-4">
                  <span className="flex items-center"><i className="fas fa-bed text-accent mr-2"></i> 3 PN</span>
                  <span className="flex items-center"><i className="fas fa-bath text-accent mr-2"></i> 2 WC</span>
                  <span className="flex items-center"><i className="fas fa-ruler-combined text-accent mr-2"></i> 75 m²</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg hover:scale-105 transition-transform" data-aos="fade-up" data-aos-delay="200">
              <div className="relative">
                <Image
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
                  alt="Nhà phố mặt tiền Quận 7"
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold hover:scale-110 transition-transform">
                  Giá tốt
                </div>
                <div className="absolute bottom-4 right-4 bg-white/90 text-primary px-3 py-1 rounded-full text-sm font-semibold">
                  8.2 tỷ
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-lg text-gray-800 mb-2">Nhà phố mặt tiền Quận 7</h3>
                <p className="text-gray-600 text-sm mb-4 flex items-center"><i className="fas fa-map-marker-alt text-accent mr-2"></i> 456 Đường Nguyễn Lương Bằng, Quận 7, TP.HCM</p>
                <div className="flex justify-between text-sm text-gray-500 border-t border-gray-100 pt-4">
                  <span className="flex items-center"><i className="fas fa-bed text-accent mr-2"></i> 4 PN</span>
                  <span className="flex items-center"><i className="fas fa-bath text-accent mr-2"></i> 3 WC</span>
                  <span className="flex items-center"><i className="fas fa-ruler-combined text-accent mr-2"></i> 120 m²</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg hover:scale-105 transition-transform" data-aos="fade-up" data-aos-delay="300">
              <div className="relative">
                <Image
                  src="https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6"
                  alt="Đất nền phân lô Quận 9"
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold hover:scale-110 transition-transform">
                  Giao dịch nhanh
                </div>
                <div className="absolute bottom-4 right-4 bg-white/90 text-primary px-3 py-1 rounded-full text-sm font-semibold">
                  2.1 tỷ
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-lg text-gray-800 mb-2">Đất nền phân lô Quận 9</h3>
                <p className="text-gray-600 text-sm mb-4 flex items-center"><i className="fas fa-map-marker-alt text-accent mr-2"></i> 789 Đường Lê Văn Việt, Quận 9, TP.HCM</p>
                <div className="flex justify-between text-sm text-gray-500 border-t border-gray-100 pt-4">
                  <span className="flex items-center"><i className="fas fa-vector-square text-accent mr-2"></i> 100 m²</span>
                  <span className="flex items-center"><i className="fas fa-road text-accent mr-2"></i> Mặt tiền 8m</span>
                  <span className="flex items-center"><i className="fas fa-compass text-accent mr-2"></i> Đông Bắc</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Other tab content */}
        <div className={`tab-content ${activeTab === 'apartment' ? 'active' : ''}`} id="apartment-tab" role="tabpanel" aria-labelledby="apartment">
          <p className="text-center text-gray-600 py-8">Nội dung cho Căn hộ...</p>
        </div>
        <div className={`tab-content ${activeTab === 'house' ? 'active' : ''}`} id="house-tab" role="tabpanel" aria-labelledby="house">
          <p className="text-center text-gray-600 py-8">Nội dung cho Nhà riêng...</p>
        </div>
        <div className={`tab-content ${activeTab === 'land' ? 'active' : ''}`} id="land-tab" role="tabpanel" aria-labelledby="land">
          <p className="text-center text-gray-600 py-8">Nội dung cho Đất nền...</p>
        </div>
        <div className={`tab-content ${activeTab === 'villa' ? 'active' : ''}`} id="villa-tab" role="tabpanel" aria-labelledby="villa">
          <p className="text-center text-gray-600 py-8">Nội dung cho Biệt thự...</p>
        </div>

        <div className="text-center mt-12" data-aos="fade-up">
          <Link href="#" className="inline-block border-2 border-accent text-accent px-8 py-3 rounded-lg font-semibold hover:bg-accent hover:text-white transition-colors hover:shadow-lg hover:shadow-orange-500/30">
            Xem Tất Cả Bất Động Sản <i className="fas fa-arrow-right ml-2"></i>
          </Link>
        </div>
      </div>
    </section>
  );
} 