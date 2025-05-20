import axios from 'axios';
import type { 
  Property, 
  Testimonial,
  BankPartner,
  PricingInput,
  PricingResult,
  Stats
} from '../types';

// Create axios instance with base URL
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  }
});

// API endpoints for properties
export const PropertyService = {
  getAll: async (): Promise<Property[]> => {
    const response = await api.get('/properties');
    return response.data.data;
  },
  
  getByType: async (type: string): Promise<Property[]> => {
    const response = await api.get(`/properties/type/${type}`);
    return response.data.data;
  },
  
  getById: async (id: number): Promise<Property> => {
    const response = await api.get(`/properties/${id}`);
    return response.data.data;
  },
  
  getFeatured: async (): Promise<Property[]> => {
    const response = await api.get('/properties/featured');
    return response.data.data;
  },
};

// API endpoints for testimonials
export const TestimonialService = {
  getAll: async (): Promise<Testimonial[]> => {
    const response = await api.get('/testimonials');
    return response.data.data;
  },
};

// API endpoints for bank partners
export const BankPartnerService = {
  getAll: async (): Promise<BankPartner[]> => {
    const response = await api.get('/bank-partners');
    return response.data.data;
  },
};

// API endpoints for pricing
export const PricingService = {
  calculatePrice: async (input: PricingInput): Promise<PricingResult> => {
    const response = await api.post('/pricing/calculate', input);
    return response.data.data;
  },
};

// API endpoints for stats
export const StatsService = {
  getStats: async (): Promise<Stats> => {
    const response = await api.get('/stats');
    return response.data.data;
  },
};

export default api; 