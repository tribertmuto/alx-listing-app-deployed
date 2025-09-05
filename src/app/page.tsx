'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';

interface Property {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
}

export default function Home() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        // Using environment variable for API base URL
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_BASE_URL || '/api'}/properties`
        );
        setProperties(response.data);
      } catch (err) {
        setError('Failed to fetch properties');
        console.error('Error fetching properties:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Available Properties</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((property) => (
          <div key={property.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img 
              src={property.image || 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6'} 
              alt={property.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{property.title}</h2>
              <p className="text-gray-600 mb-4">{property.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold">${property.price.toLocaleString()}</span>
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
