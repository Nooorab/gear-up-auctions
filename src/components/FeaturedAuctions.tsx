
import React from 'react';
import { Button } from '@/components/ui/button';
import CarCard from './CarCard';
import { ChevronRight } from 'lucide-react';

// Mock data for featured cars
const featuredCars = [
  {
    id: 1,
    title: 'Mercedes-Benz E-Class 2020',
    imageUrl: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&q=80&w=800&ixlib=rb-4.0.3',
    price: 45000,
    currentBid: 38500,
    year: 2020,
    mileage: 45000,
    location: 'Stockholm',
    timeLeft: '2d 5h',
    isAuction: true,
  },
  {
    id: 2,
    title: 'BMW 3 Series 2019',
    imageUrl: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=800&ixlib=rb-4.0.3',
    price: 38000,
    currentBid: 32000,
    year: 2019,
    mileage: 60000,
    location: 'Gothenburg',
    timeLeft: '1d 12h',
    isAuction: true,
  },
  {
    id: 3,
    title: 'Audi Q5 2021',
    imageUrl: 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?auto=format&fit=crop&q=80&w=800&ixlib=rb-4.0.3',
    price: 52000,
    currentBid: 48000,
    year: 2021,
    mileage: 30000,
    location: 'Malmö',
    timeLeft: '3d 8h',
    isAuction: true,
  },
  {
    id: 4,
    title: 'Volvo XC60 2018',
    imageUrl: 'https://images.unsplash.com/photo-1551737823-dfc8495904b4?auto=format&fit=crop&q=80&w=800&ixlib=rb-4.0.3',
    price: 35000,
    currentBid: 29500,
    year: 2018,
    mileage: 75000,
    location: 'Uppsala',
    timeLeft: '6h 45m',
    isAuction: true,
  },
];

const FeaturedAuctions = () => {
  return (
    <section className="bg-auction-light py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-auction-primary">Featured Auctions</h2>
            <p className="text-auction-muted mt-2">
              Bid on our handpicked selection of quality vehicles
            </p>
          </div>
          <Button 
            variant="outline" 
            className="hidden md:flex items-center"
            asChild
          >
            <a href="/auctions">
              View All Auctions
              <ChevronRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredCars.map(car => (
            <CarCard key={car.id} {...car} />
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Button 
            variant="outline"
            className="flex items-center mx-auto"
            asChild
          >
            <a href="/auctions">
              View All Auctions
              <ChevronRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedAuctions;
