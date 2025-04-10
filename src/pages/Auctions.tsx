import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CarCard from '@/components/CarCard';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Search, ChevronDown, SlidersHorizontal } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from "sonner";

const Auctions = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCars, setFilteredCars] = useState([]);
  const [sortOrder, setSortOrder] = useState('ending-soon');
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const fetchAuctions = async () => {
      setIsLoading(true);
      try {
        const { data: listings, error: listingsError } = await supabase
          .from('car_listings')
          .select(`
            *,
            car:car_id(*)
          `)
          .eq('listing_type', 'auction')
          .eq('is_sold', false);
        
        if (listingsError) {
          throw listingsError;
        }
        
        const transformedListings = listings.map(listing => ({
          id: listing.id,
          title: `${listing.car.make} ${listing.car.model} ${listing.car.year}`,
          imageUrl: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&q=80&w=800&ixlib=rb-4.0.3',
          price: listing.reserve_price || listing.start_price,
          currentBid: listing.current_bid || listing.start_price,
          year: listing.car.year,
          mileage: listing.car.mileage,
          location: 'Stockholm',
          timeLeft: calculateTimeLeft(listing.auction_end_time),
          isAuction: true,
        }));
        
        setFilteredCars(transformedListings);
      } catch (error) {
        console.error('Error fetching auctions:', error);
        toast.error('Failed to load auction listings');
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchAuctions();
    
    const interval = setInterval(() => {
      setFilteredCars(cars => 
        cars.map(car => ({
          ...car,
          timeLeft: car.timeLeft ? calculateTimeLeft(car.timeLeft) : '0h 0m'
        }))
      );
    }, 60000);
    
    return () => clearInterval(interval);
  }, []);
  
  const calculateTimeLeft = (endTime) => {
    if (!endTime) return 'Unknown';
    
    const end = new Date(endTime);
    const now = new Date();
    const diffMs = end - now;
    
    if (diffMs <= 0) return 'Ended';
    
    const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
    
    if (days > 0) {
      return `${days}d ${hours}h`;
    } else if (hours > 0) {
      return `${hours}h ${minutes}m`;
    } else {
      return `${minutes}m`;
    }
  };

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const filtered = filteredCars.filter(car => 
      car.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      car.location?.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCars(filtered);
  };

  const handleSortChange = (value) => {
    setSortOrder(value);
    
    let sortedCars = [...filteredCars];
    
    switch(value) {
      case 'ending-soon':
        sortedCars.sort((a, b) => {
          if (!a.timeLeft) return 1;
          if (!b.timeLeft) return -1;
          return a.timeLeft.localeCompare(b.timeLeft);
        });
        break;
      case 'price-low':
        sortedCars.sort((a, b) => (a.currentBid || 0) - (b.currentBid || 0));
        break;
      case 'price-high':
        sortedCars.sort((a, b) => (b.currentBid || 0) - (a.currentBid || 0));
        break;
      case 'newest':
        sortedCars.sort((a, b) => b.year - a.year);
        break;
    }
    
    setFilteredCars(sortedCars);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-grow">
        <div className="bg-auction-primary text-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Live Auctions</h1>
            <p className="text-lg max-w-2xl">
              Browse our current live car auctions. Place your bids and get the chance to win your dream car at a great price.
            </p>
          </div>
        </div>
        
        <div className="bg-white border-b py-4">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <form onSubmit={handleSearch} className="flex-grow">
                <div className="relative">
                  <Input
                    type="text"
                    placeholder="Search by make, model, or location..."
                    className="pl-10 pr-4 py-2 w-full"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
              </form>
              
              <Button 
                onClick={toggleFilter}
                variant="outline" 
                className="flex items-center gap-2"
              >
                <SlidersHorizontal size={16} />
                Filters
                <ChevronDown size={16} className={`transform transition-transform ${isFilterOpen ? 'rotate-180' : ''}`} />
              </Button>
            </div>
            
            {isFilterOpen && (
              <div className="mt-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 py-4 border-t">
                <div>
                  <h3 className="font-medium mb-2">Make</h3>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="All Makes" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="audi">Audi</SelectItem>
                      <SelectItem value="bmw">BMW</SelectItem>
                      <SelectItem value="mercedes">Mercedes-Benz</SelectItem>
                      <SelectItem value="volvo">Volvo</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <h3 className="font-medium mb-2">Year</h3>
                  <div className="flex space-x-4">
                    <Select>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="From" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="2015">2015</SelectItem>
                        <SelectItem value="2016">2016</SelectItem>
                        <SelectItem value="2017">2017</SelectItem>
                        <SelectItem value="2018">2018</SelectItem>
                        <SelectItem value="2019">2019</SelectItem>
                        <SelectItem value="2020">2020</SelectItem>
                        <SelectItem value="2021">2021</SelectItem>
                      </SelectContent>
                    </Select>
                    <Select>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="To" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="2021">2021</SelectItem>
                        <SelectItem value="2022">2022</SelectItem>
                        <SelectItem value="2023">2023</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium mb-2">Price Range</h3>
                  <div className="px-2">
                    <Slider defaultValue={[20000, 50000]} min={0} max={100000} step={1000} />
                    <div className="flex justify-between mt-2 text-sm text-gray-500">
                      <span>$0</span>
                      <span>$100,000</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium mb-2">Features</h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="leather" />
                      <label htmlFor="leather" className="text-sm">Leather Seats</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="navigation" />
                      <label htmlFor="navigation" className="text-sm">Navigation System</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="sunroof" />
                      <label htmlFor="sunroof" className="text-sm">Sunroof</label>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        
        <div className="bg-auction-light py-12">
          <div className="container mx-auto px-4">
            <div className="mb-6 flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold">Current Auctions</h2>
                <p className="text-auction-muted mt-1">
                  {isLoading ? (
                    "Loading auctions..."
                  ) : (
                    `Showing ${filteredCars.length} vehicles`
                  )}
                </p>
              </div>
              <div className="w-48">
                <Select onValueChange={handleSortChange} defaultValue={sortOrder}>
                  <SelectTrigger>
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ending-soon">Ending Soon</SelectItem>
                    <SelectItem value="newest">Newest</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            {isLoading ? (
              <div className="flex justify-center items-center h-64">
                <p>Loading auctions...</p>
              </div>
            ) : filteredCars.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredCars.map(car => (
                  <CarCard key={car.id} {...car} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-lg text-auction-muted">No auctions found.</p>
                <Button 
                  variant="outline" 
                  className="mt-4"
                  onClick={() => {
                    setSearchTerm('');
                  }}
                >
                  Reset Filters
                </Button>
              </div>
            )}
            
            {filteredCars.length > 0 && (
              <div className="mt-12 flex justify-center">
                <nav className="flex items-center space-x-2">
                  <Button variant="outline" size="sm" disabled>Previous</Button>
                  <Button variant="default" size="sm">1</Button>
                  <Button variant="outline" size="sm">2</Button>
                  <Button variant="outline" size="sm">3</Button>
                  <Button variant="outline" size="sm">Next</Button>
                </nav>
              </div>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Auctions;
