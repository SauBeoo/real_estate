// Common Types for Real Estate Application

export interface Property {
  id: number;
  title: string;
  address: string;
  price: number;
  priceUnit: string;
  type: PropertyType;
  features: PropertyFeatures;
  images: string[];
  status: PropertyStatus;
  description: string;
  createdAt: string;
  updatedAt: string;
}

export type PropertyType = 'apartment' | 'house' | 'land' | 'villa';

export interface PropertyFeatures {
  bedrooms?: number;
  bathrooms?: number;
  area: number;
  frontWidth?: number;
  direction?: string;
  floors?: number;
  furnished?: boolean;
  parking?: boolean;
  yearBuilt?: number;
}

export type PropertyStatus = 'new' | 'good-price' | 'quick-sale' | 'featured';

export interface Testimonial {
  id: number;
  name: string;
  avatar: string;
  role: string;
  comment: string;
  rating: number;
}

export interface BankPartner {
  id: number;
  name: string;
  logo: string;
}

export interface PricingInput {
  propertyType: PropertyType;
  address: string;
  area: number;
  bedrooms?: number;
}

export interface PricingResult {
  marketRangeLow: number;
  marketRangeHigh: number;
  suggestedPrice: number;
  pricePerSquareMeter: number;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface MenuItem {
  label: string;
  href: string;
  icon?: string;
}

export interface Stats {
  properties: number;
  happyClients: number;
  cities: number;
  support: string;
} 