"use client";

import Layout from '../components/layout/Layout';
import Hero from '../components/home/Hero';
import { useEffect, useState } from 'react';
import { PropertyService, TestimonialService, StatsService } from '../services/api';
import { Property, Testimonial, Stats } from '../types';

export default function Home() {
  const [featuredProperties, setFeaturedProperties] = useState<Property[]>([]);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        
        // For now, we'll use mock data until the backend is ready
        // In production, uncomment these lines to fetch from API
        /*
        const propertiesData = await PropertyService.getFeatured();
        const testimonialsData = await TestimonialService.getAll();
        const statsData = await StatsService.getStats();
        
        setFeaturedProperties(propertiesData);
        setTestimonials(testimonialsData);
        setStats(statsData);
        */
        
        // Mock data for development
        setFeaturedProperties([
          {
            id: 1,
            title: 'Căn hộ cao cấp Sunshine City',
            address: 'Quận 7, TP. Hồ Chí Minh',
            price: 2500000000,
            priceUnit: 'VND',
            type: 'apartment',
            features: {
              bedrooms: 2,
              bathrooms: 2,
              area: 75,
              direction: 'Đông Nam',
              floors: 15,
              furnished: true,
              parking: true,
              yearBuilt: 2022
            },
            images: ['https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3'],
            status: 'featured',
            description: 'Căn hộ cao cấp view sông thoáng mát, nội thất sang trọng',
            createdAt: '2023-05-15',
            updatedAt: '2023-05-15'
          },
          {
            id: 2,
            title: 'Biệt thự vườn The Riviera',
            address: 'Quận 2, TP. Hồ Chí Minh',
            price: 12000000000,
            priceUnit: 'VND',
            type: 'villa',
            features: {
              bedrooms: 4,
              bathrooms: 5,
              area: 350,
              direction: 'Đông Bắc',
              floors: 3,
              furnished: true,
              parking: true,
              yearBuilt: 2021
            },
            images: ['https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3'],
            status: 'featured',
            description: 'Biệt thự sang trọng với sân vườn rộng rãi, hồ bơi riêng',
            createdAt: '2023-04-10',
            updatedAt: '2023-04-10'
          }
        ]);
        
        setTestimonials([
          {
            id: 1,
            name: 'Nguyễn Văn A',
            avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
            role: 'Nhà đầu tư',
            comment: 'Tôi đã tìm được căn nhà ưng ý với giá hợp lý nhờ nền tảng Giá Trị Thực. Đặc biệt công cụ định giá tự động giúp tôi biết được giá trị thực của bất động sản.',
            rating: 5
          },
          {
            id: 2,
            name: 'Trần Thị B',
            avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
            role: 'Người mua nhà',
            comment: 'Tôi rất hài lòng với trải nghiệm mua nhà qua Giá Trị Thực. Thông tin minh bạch, đội ngũ hỗ trợ nhiệt tình và chuyên nghiệp.',
            rating: 4
          }
        ]);
        
        setStats({
          properties: 1500,
          happyClients: 850,
          cities: 12,
          support: '24/7'
        });
        
        setLoading(false);
      } catch (err) {
        console.error('Error fetching data:', err);
        setError('Có lỗi xảy ra khi tải dữ liệu. Vui lòng thử lại sau.');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <Layout>
      <Hero />
      {/* Other sections will be added here */}
    </Layout>
  );
} 