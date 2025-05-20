const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api';

export interface Property {
  id: number;
  title: string;
  description: string;
  price: number;
  type: string;
  area: number;
  bedrooms: number;
  bathrooms: number;
  address: string;
  latitude: number;
  longitude: number;
  features: string[];
  images: string[];
  status: string;
  owner_id: number;
  created_at: string;
  updated_at: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  meta: {
    current_page: number;
    from: number;
    last_page: number;
    per_page: number;
    to: number;
    total: number;
  };
}

export interface PropertyFilters {
  type?: string;
  min_price?: string;
  max_price?: string;
  bedrooms?: string;
  status?: string;
  page?: number;
  per_page?: number;
}

export async function getProperties(filters: PropertyFilters = {}): Promise<PaginatedResponse<Property>> {
  const queryParams = new URLSearchParams();
  
  Object.entries(filters).forEach(([key, value]) => {
    if (value !== undefined && value !== '') {
      queryParams.append(key, value.toString());
    }
  });
  
  const response = await fetch(`${API_URL}/properties?${queryParams.toString()}`);
  
  if (!response.ok) {
    throw new Error('Failed to fetch properties');
  }
  
  return response.json();
}

export async function getPropertyById(id: string): Promise<Property> {
  const response = await fetch(`${API_URL}/properties/${id}`);
  
  if (!response.ok) {
    if (response.status === 404) {
      throw new Error('Property not found');
    }
    throw new Error('Failed to fetch property details');
  }
  
  const data = await response.json();
  return data.data;
}

// Additional API functions can be added here as needed 