import Image from 'next/image';
import Link from 'next/link';

interface PropertyProps {
  property: {
    id: number;
    title: string;
    description: string;
    price: number;
    type: string;
    area: number;
    bedrooms: number;
    bathrooms: number;
    address: string;
    images: string[];
    status: string;
  };
}

const PropertyCard = ({ property }: PropertyProps) => {
  // Function to format price with commas for thousands
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(price);
  };

  // Get default image or placeholder
  const imageUrl = property.images && property.images.length > 0
    ? property.images[0]
    : 'https://via.placeholder.com/400x300?text=No+Image';

  // Truncate description to a reasonable length
  const truncateDescription = (text: string, maxLength = 120) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="relative h-52 w-full">
        <img
          src={imageUrl}
          alt={property.title}
          className="object-cover w-full h-full"
        />
        <div className="absolute top-2 right-2 px-2 py-1 bg-blue-500 text-white text-xs font-semibold rounded">
          {property.status}
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2 truncate">{property.title}</h3>
        <p className="text-gray-600 text-sm mb-3">{property.address}</p>
        <p className="text-gray-700 mb-4 text-sm h-12 overflow-hidden">
          {truncateDescription(property.description)}
        </p>
        
        <div className="flex justify-between mb-4">
          <div className="flex items-center">
            <svg className="w-4 h-4 text-gray-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
            <span className="text-sm">{property.type}</span>
          </div>
          
          <div className="flex items-center">
            <svg className="w-4 h-4 text-gray-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm0 2h12v8H4V6z" />
            </svg>
            <span className="text-sm">{property.area} m²</span>
          </div>
        </div>
        
        <div className="flex justify-between mb-4">
          <div className="flex items-center">
            <svg className="w-4 h-4 text-gray-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path d="M7 4a3 3 0 016 0v3H7V4zm6 3a1 1 0 011 1v6a1 1 0 01-1 1H7a1 1 0 01-1-1V8a1 1 0 011-1h6z" />
            </svg>
            <span className="text-sm">{property.bedrooms} beds</span>
          </div>
          
          <div className="flex items-center">
            <svg className="w-4 h-4 text-gray-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path d="M13 7H7v6h6V7z" />
            </svg>
            <span className="text-sm">{property.bathrooms} baths</span>
          </div>
        </div>
        
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold text-blue-600">
            {formatPrice(property.price)}
          </div>
          
          <Link href={`/properties/${property.id}`} className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard; 