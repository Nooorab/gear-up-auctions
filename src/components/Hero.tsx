
import React from 'react';
import { Search, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative bg-auction-primary text-white overflow-hidden">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&q=80&w=1536&ixlib=rb-4.0.3')",
          opacity: '0.2'
        }}
      />
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Find Your Perfect Car at the Right Price
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-100">
            Thousands of verified cars up for auction or immediate purchase. 
            Transparent process, professional inspections, and secure transactions.
          </p>
          
          {/* Search bar */}
          <div className="bg-white p-2 rounded-lg shadow-lg flex flex-col md:flex-row">
            <div className="flex-grow p-2">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search by make, model, or keywords..."
                  className="search-input"
                />
                <Search className="absolute right-4 top-3 h-5 w-5 text-gray-400" />
              </div>
            </div>
            <div className="p-2">
              <Button size="lg" className="w-full bg-auction-accent hover:bg-auction-accent/90">
                Search Cars
              </Button>
            </div>
          </div>
          
          {/* Quick links */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href="/auctions" className="inline-flex items-center text-auction-accent hover:underline">
              Browse Active Auctions
              <ChevronRight className="h-4 w-4 ml-1" />
            </a>
            <a href="/sell" className="inline-flex items-center text-auction-accent hover:underline">
              Sell Your Car
              <ChevronRight className="h-4 w-4 ml-1" />
            </a>
            <a href="/how-it-works" className="inline-flex items-center text-auction-accent hover:underline">
              How It Works
              <ChevronRight className="h-4 w-4 ml-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
