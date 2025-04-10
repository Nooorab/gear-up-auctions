
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CarCard from '@/components/CarCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import { Search, SlidersHorizontal, ChevronDown } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from "sonner";

const BuyNow = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCars, setFilteredCars] = useState([]);
  const [sortOrder, setSortOrder] = useState('price-low');
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const fetchBuyNowCars = async () => {
      setIsLoading(true);
      try {
        const { data: listings, error: listingsError } = await supabase
          .from('car_listings')
          .select(`
            *,
            car:car_id(*)
          `)
          .eq('listing_type', 'fixed-price')
          .eq('is_sold', false);
        
        if (listingsError) {
          throw listingsError;
        }
        
        const transformedListings = listings.map(listing => ({
          id: listing.id,
          title: `${listing.car.make} ${listing.car.model} ${listing.car.year}`,
          imageUrl: 'https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&q=80&w=800&ixlib=rb-4.0.3',
          price: listing.start_price,
          year: listing.car.year,
          mileage: listing.car.mileage,
          location: 'Stockholm',
          isAuction: false,
        }));
        
        setFilteredCars(transformedListings);
      } catch (error) {
        console.error('Error fetching buy now listings:', error);
        toast.error('Failed to load buy now listings');
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchBuyNowCars();
  }, []);

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
      case 'price-low':
        sortedCars.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        sortedCars.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        sortedCars.sort((a, b) => b.year - a.year);
        break;
      case 'oldest':
        sortedCars.sort((a, b) => a.year - b.year);
        break;
    }
    
    setFilteredCars(sortedCars);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-grow">
        <div className="bg-auction-accent text-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Buy Now Cars</h1>
            <p className="text-lg max-w-2xl">
              Browse our selection of quality used cars available for immediate purchase. 
              No bidding required - find your perfect car and drive it home today.
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
                      <SelectItem value="ford">Ford</SelectItem>
                      <SelectItem value="honda">Honda</SelectItem>
                      <SelectItem value="hyundai">Hyundai</SelectItem>
                      <SelectItem value="kia">Kia</SelectItem>
                      <SelectItem value="mazda">Mazda</SelectItem>
                      <SelectItem value="nissan">Nissan</SelectItem>
                      <SelectItem value="toyota">Toyota</SelectItem>
                      <SelectItem value="volkswagen">Volkswagen</SelectItem>
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
                      </SelectContent>
                    </Select>
                    <Select>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="To" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="2020">2020</SelectItem>
                        <SelectItem value="2021">2021</SelectItem>
                        <SelectItem value="2022">2022</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium mb-2">Price Range</h3>
                  <div className="px-2">
                    <Slider defaultValue={[15000, 30000]} min={0} max={50000} step={1000} />
                    <div className="flex justify-between mt-2 text-sm text-gray-500">
                      <span>$0</span>
                      <span>$50,000</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium mb-2">Features</h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="bluetooth" />
                      <label htmlFor="bluetooth" className="text-sm">Bluetooth</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="camera" />
                      <label htmlFor="camera" className="text-sm">Backup Camera</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="cruise" />
                      <label htmlFor="cruise" className="text-sm">Cruise Control</label>
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
                <h2 className="text-2xl font-bold">Available Cars</h2>
                <p className="text-auction-muted mt-1">
                  {isLoading ? (
                    "Loading cars..."
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
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="newest">Newest First</SelectItem>
                    <SelectItem value="oldest">Oldest First</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            {isLoading ? (
              <div className="flex justify-center items-center h-64">
                <p>Loading cars...</p>
              </div>
            ) : filteredCars.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredCars.map(car => (
                  <CarCard key={car.id} {...car} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-lg text-auction-muted">No cars found.</p>
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

export default BuyNow;
