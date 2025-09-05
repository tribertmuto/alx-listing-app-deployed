import { NextResponse } from 'next/server';

// Mock data for demonstration
const mockProperties = [
  {
    id: 1,
    title: 'Modern Downtown Apartment',
    description: 'Beautiful apartment in the heart of the city with great views.',
    price: 250000,
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6',
  },
  {
    id: 2,
    title: 'Cozy Suburban House',
    description: 'Lovely family home with a backyard and garage.',
    price: 350000,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
  },
  {
    id: 3,
    title: 'Luxury Beachfront Villa',
    description: 'Stunning villa with direct beach access and private pool.',
    price: 1200000,
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c',
  },
];

export async function GET() {
  // In a real app, you would fetch this from your database
  return NextResponse.json(mockProperties);
}
